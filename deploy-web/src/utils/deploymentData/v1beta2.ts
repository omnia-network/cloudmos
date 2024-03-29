import { CustomValidationError, ManifestVersion, getCurrentHeight, Manifest, DeploymentGroups, getSdl, parseSizeStr } from "./helpers";
import { defaultInitialDeposit } from "../constants";
import { stringToBoolean } from "../stringUtils";
import path from "path";
import yaml from "js-yaml";
import { SDL } from "@akashnetwork/akashjs/build/sdl";

const endpointNameValidationRegex = /^[a-z]+[-_\da-z]+$/;
const endpointKindIP = "ip";

function validate(yamlStr: string, yamlJson) {
  try {
    SDL.validate(yamlStr, "beta2");
  } catch (e) {
    throw new CustomValidationError(e.message);
  }

  const sdl = getSdl(yamlJson, "beta2");

  // ENDPOINT VALIDATION
  if (yamlJson.endpoints) {
    Object.keys(yamlJson.endpoints).forEach(endpoint => {
      const _endpoint = yamlJson.endpoints[endpoint];
      if (!endpointNameValidationRegex.test(endpoint)) {
        throw new CustomValidationError(`Endpoint named "${endpoint}" is not a valid name.`);
      }

      if (!_endpoint.kind) {
        throw new CustomValidationError(`Endpoint named "${endpoint}" has no kind.`);
      }

      if (_endpoint.kind !== endpointKindIP) {
        throw new CustomValidationError(`Endpoint named "${endpoint}" has an unknown kind "${_endpoint.kind}".`);
      }
    });
  }

  const endpointsUsed = {};
  const portsUsed = {};
  Object.keys(yamlJson.services).forEach(svcName => {
    const svc = yamlJson.services[svcName];
    const depl = yamlJson.deployment[svcName];

    if (!depl) {
      throw new CustomValidationError(`Service "${svcName}" is not defined in the "deployment" section.`);
    }

    Object.keys(depl).forEach(placementName => {
      const svcdepl = depl[placementName];
      const compute = yamlJson.profiles.compute[svcdepl.profile];
      const infra = yamlJson.profiles.placement[placementName];

      if (!infra) {
        throw new CustomValidationError(`The placement "${placementName}" is not defined in the "placement" section.`);
      }

      const price = infra.pricing[svcdepl.profile];

      if (!price) {
        throw new CustomValidationError(`The pricing for the "${svcdepl.profile}" profile is not defined in the "${placementName}" "placement" definition.`);
      }

      if (!compute) {
        throw new CustomValidationError(`The compute requirements for the "${svcdepl.profile}" profile are not defined in the "compute" section.`);
      }

      // LEASE IP VALIDATION
      svc.expose?.forEach(expose => {
        const proto = sdl.parseServiceProto(expose.proto);

        expose.to?.forEach(to => {
          if (to.ip?.length > 0) {
            if (!to.global) {
              throw new CustomValidationError(`Error on "${svcName}", if an IP is declared, the directive must be declared as global.`);
            }

            const endpointExists = yamlJson.endpoints && yamlJson.endpoints[to.ip];
            if (!endpointExists) {
              throw new CustomValidationError(`Unknown endpoint "${to.ip}" in service "${svcName}". Add to the list of endpoints in the "endpoints" section.`);
            }

            endpointsUsed[to.ip] = {};

            // Endpoint exists. Now check for port collisions across a single endpoint, port, & protocol
            const portKey = `${to.ip}-${expose.as}-${proto}`;
            const otherServiceName = portsUsed[portKey];
            if (otherServiceName) {
              throw new CustomValidationError(
                `IP endpoint ${to.ip} port: ${expose.port} protocol: ${proto} specified by service ${svcName} already in use by ${otherServiceName}`
              );
            }
          }
        });
      });

      // STORAGE VALIDATION
      const storages = compute.resources.storage.map ? compute.resources.storage : [compute.resources.storage];
      const volumes = {};
      const attr = {};
      const mounts = {};

      storages?.forEach(storage => {
        const name = storage.name || "default";
        volumes[name] = {
          name,
          quantity: { val: parseSizeStr(storage.size) },
          attributes:
            storage.attributes &&
            Object.keys(storage.attributes)
              .sort()
              .map(key => {
                const value = storage.attributes[key].toString();
                // add the storage attributes
                attr[key] = value;

                return {
                  key,
                  value
                };
              })
        };
      });

      if (svc.params) {
        (Object.keys(svc.params?.storage || {}) || []).forEach(name => {
          const params = svc.params.storage[name];
          if (!volumes[name]) {
            throw new CustomValidationError(`Service "${svcName}" references to no-existing compute volume names "${name}".`);
          }

          if (!path.isAbsolute(params.mount)) {
            throw new CustomValidationError(`Invalid value for "service.${svcName}.params.${name}.mount" parameter. expected absolute path.`);
          }

          // merge the service params attributes
          attr["mount"] = params.mount;
          attr["readOnly"] = params.readOnly || false;
          const mount = attr["mount"];
          const vlname = mounts[mount];

          if (vlname) {
            if (!mount) {
              throw new CustomValidationError("Multiple root ephemeral storages are not allowed");
            }

            throw new CustomValidationError(`Mount ${mount} already in use by volume ${vlname}.`);
          }

          mounts[mount] = name;
        });
      }

      (Object.keys(volumes) || []).forEach(volume => {
        volumes[volume].attributes?.forEach(nd => {
          attr[nd.key] = nd.value;
        });

        const persistent = stringToBoolean(attr["persistent"]);

        if (persistent && !attr["mount"]) {
          throw new CustomValidationError(
            `compute.storage.${volume} has persistent=true which requires service.${svcName}.params.storage.${volume} to have mount.`
          );
        }
      });
    });
  });

  // ENDPOINT DUPLICATE VALIDATION
  if (yamlJson.endpoints) {
    Object.keys(yamlJson.endpoints).forEach(endpoint => {
      const isInUse = endpointsUsed[endpoint];
      if (!isInUse) {
        throw new CustomValidationError(`Endpoint ${endpoint} declared but never used.`);
      }
    });
  }
}

export function getManifest(yamlJson, asString = false) {
  const manifest = Manifest(yamlJson, "beta2", asString);

  return manifest;
}

export async function getManifestVersion(yamlJson, asString = false) {
  const version = await ManifestVersion(yamlJson, "beta2");

  if (asString) {
    return Buffer.from(version).toString("base64");
  } else {
    return version;
  }
}

export async function NewDeploymentData(
  apiEndpoint: string,
  yamlStr: string,
  dseq: string,
  fromAddress: string,
  deposit = defaultInitialDeposit,
  depositorAddress = null
) {
  const yamlJson = yaml.load(yamlStr) as any;

  // Validate the integrity of the yaml
  validate(yamlStr, yamlJson);

  const groups = DeploymentGroups(yamlJson, "beta2");
  const mani = Manifest(yamlJson, "beta2");
  const ver = await ManifestVersion(yamlJson, "beta2");
  const id = {
    owner: fromAddress,
    dseq: dseq
  };
  const _deposit = {
    denom: "uakt",
    amount: deposit.toString()
  };

  if (!id.dseq) {
    id.dseq = (await getCurrentHeight(apiEndpoint)).toString();
  }

  return {
    sdl: yamlJson,
    manifest: mani,
    groups: groups,
    deploymentId: id,
    orderId: [],
    leaseId: [],
    version: ver,
    deposit: _deposit,
    depositor: depositorAddress || fromAddress
  };
}
