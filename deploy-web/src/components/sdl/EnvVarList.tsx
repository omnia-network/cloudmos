"use client";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { Service } from "@src/types";
import { CustomTooltip } from "../shared/CustomTooltip";
import { FormPaper } from "./FormPaper";
import { InfoCircle } from "iconoir-react";

type Props = {
  currentService: Service;
  serviceIndex?: number;
  children?: ReactNode;
  setIsEditingEnv: Dispatch<SetStateAction<boolean | number>>;
};

export const EnvVarList: React.FunctionComponent<Props> = ({ currentService, setIsEditingEnv, serviceIndex }) => {
  return (
    <FormPaper>
      <div className="mb-2 flex items-center">
        <strong className="text-sm">Environment Variables</strong>

        <CustomTooltip
          title={
            <>
              A list of environment variables to expose to the running container.
              <br />
              <br />
              <a href="https://akash.network/docs/getting-started/stack-definition-language/#services" target="_blank" rel="noopener">
                View official documentation.
              </a>
            </>
          }
        >
          <InfoCircle className="ml-2 text-xs text-muted-foreground" />
        </CustomTooltip>

        <span
          className="ml-4 cursor-pointer text-sm font-normal text-primary underline"
          onClick={() => setIsEditingEnv(serviceIndex !== undefined ? serviceIndex : true)}
        >
          Edit
        </span>
      </div>

      {(currentService.env?.length || 0) > 0 ? (
        currentService.env?.map((e, i) => (
          <div key={i} className="text-xs">
            {e.key}=<span className="text-muted-foreground">{e.value}</span>
          </div>
        ))
      ) : (
        <p className="text-xs text-muted-foreground">None</p>
      )}
    </FormPaper>
  );
};
