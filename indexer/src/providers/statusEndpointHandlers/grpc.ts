import { ResourcesMetric, Status } from "@akashnetwork/akash-api/akash/provider/v1";
import { ProviderRPCClient } from "@akashnetwork/akash-api/akash/provider/v1/grpc-js";
import { NodeResources } from "@akashnetwork/akash-api/akash/inventory/v1";
import { Empty } from "@akashnetwork/akash-api/google/protobuf";
import { promisify } from "util";
import memoize from "lodash/memoize";

import { Provider } from "@shared/dbSchemas/akash";
import { parseDecimalKubernetesString, parseSizeStr } from "@src/shared/utils/files";
import { FakeInsecureCredentials } from "./fake-insecure-credentials";
import { ProviderStatusInfo } from "./types";

export async function fetchProviderStatusFromGRPC(provider: Provider, timeout: number): Promise<ProviderStatusInfo> {
  const data = await queryStatus(provider.hostUri, timeout);

  const activeResources = parseResources(data.cluster.inventory.reservations.active.resources);
  const pendingResources = parseResources(data.cluster.inventory.reservations.pending.resources);
  const availableResources = data.cluster.inventory.cluster.nodes
    .map((x) => getAvailableResources(x.resources))
    .reduce(
      (prev, next) => ({
        cpu: prev.cpu + next.cpu,
        gpu: prev.gpu + next.gpu,
        memory: prev.memory + next.memory,
        storage: prev.storage + next.storage
      }),
      {
        cpu: 0,
        gpu: 0,
        memory: 0,
        storage: 0
      }
    );

  return {
    resources: {
      deploymentCount: data.manifest.deployments,
      leaseCount: data.cluster.leases.active ?? 0,
      activeCPU: activeResources.cpu,
      activeGPU: activeResources.gpu,
      activeMemory: activeResources.memory,
      activeStorage: activeResources.storage,
      pendingCPU: pendingResources.cpu,
      pendingGPU: pendingResources.gpu,
      pendingMemory: pendingResources.memory,
      pendingStorage: pendingResources.storage,
      availableCPU: availableResources.cpu,
      availableGPU: availableResources.gpu,
      availableMemory: availableResources.memory,
      availableStorage: availableResources.storage
    },
    nodes: data.cluster.inventory.cluster.nodes.map((node) => {
      const parsedResources = parseNodeResources(node.resources);

      return {
        name: node.name,
        cpuAllocatable: parsedResources.allocatableCPU,
        cpuAllocated: parsedResources.allocatedCPU,
        memoryAllocatable: parsedResources.allocatableMemory,
        memoryAllocated: parsedResources.allocatedMemory,
        ephemeralStorageAllocatable: parsedResources.allocatableStorage,
        ephemeralStorageAllocated: parsedResources.allocatedStorage,
        capabilitiesStorageHDD: node.capabilities.storageClasses.includes("beta1"),
        capabilitiesStorageSSD: node.capabilities.storageClasses.includes("beta2"),
        capabilitiesStorageNVME: node.capabilities.storageClasses.includes("beta3"),
        gpuAllocatable: parsedResources.allocatableGPU,
        gpuAllocated: parsedResources.allocatedGPU,
        cpus: node.resources.cpu.info.map((cpuInfo) => ({
          vendor: cpuInfo.vendor,
          model: cpuInfo.model,
          vcores: cpuInfo.vcores
        })),
        gpus: node.resources.gpu.info.map((gpuInfo) => ({
          vendor: gpuInfo.vendor,
          name: gpuInfo.name,
          modelId: gpuInfo.modelid,
          interface: gpuInfo.interface,
          memorySize: gpuInfo.memorySize // TODO: Change type to bytes?
        }))
      };
    })
  };
}

async function queryStatus(hostUri: string, timeout: number): Promise<Status> {
  return await createProviderClient(hostUri).getStatus(timeout);
}

const createProviderClient = memoize((hostUri: string) => {
  // TODO: fetch port from chain
  const url = hostUri.replace(":8443", ":8444").replace("https://", "dns:///");

  // TODO: refactor to use on-change cert validation
  //  Issue: https://github.com/akash-network/cloudmos/issues/170
  const client = new ProviderRPCClient(url, FakeInsecureCredentials.createInsecure());
  const getStatus = promisify(client.getStatus.bind(client));

  return {
    getStatus: (timeout: number) => getStatus(Empty, { deadline: Date.now() + timeout })
  };
});

function parseResources(resources: ResourcesMetric) {
  return {
    cpu: Math.round(parseDecimalKubernetesString(resources.cpu.string) * 1_000),
    memory: parseSizeStr(resources.memory.string),
    storage: parseSizeStr(resources.ephemeralStorage.string),
    gpu: parseDecimalKubernetesString(resources.gpu.string)
  };
}

function parseNodeResources(resources: NodeResources) {
  return {
    allocatableCPU: Math.round(parseDecimalKubernetesString(resources.cpu.quantity.allocatable.string) * 1_000),
    allocatedCPU: Math.round(parseDecimalKubernetesString(resources.cpu.quantity.allocated.string) * 1_000),
    allocatableMemory: parseSizeStr(resources.memory.quantity.allocatable.string),
    allocatedMemory: parseSizeStr(resources.memory.quantity.allocated.string),
    allocatableStorage: parseSizeStr(resources.ephemeralStorage.allocatable.string),
    allocatedStorage: parseSizeStr(resources.ephemeralStorage.allocated.string),
    allocatableGPU: parseDecimalKubernetesString(resources.gpu.quantity.allocatable.string),
    allocatedGPU: parseDecimalKubernetesString(resources.gpu.quantity.allocated.string)
  };
}

function getAvailableResources(resources: NodeResources) {
  const parsedResources = parseNodeResources(resources);

  // Setting minimum to 0 to prevent negative values due to overcommit
  // https://github.com/akash-network/docs/blob/master/operator/provider/README.md#cluster-resources-overcommit

  return {
    cpu: Math.max(0, parsedResources.allocatableCPU - parsedResources.allocatedCPU),
    memory: Math.max(0, parsedResources.allocatableMemory - parsedResources.allocatedMemory),
    storage: Math.max(0, parsedResources.allocatableStorage - parsedResources.allocatedStorage),
    gpu: Math.max(0, parsedResources.allocatableGPU - parsedResources.allocatedGPU)
  };
}
