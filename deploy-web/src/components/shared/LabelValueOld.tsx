"use client";
import { cn } from "@src/utils/styleUtils";
import { ReactNode } from "react";

type Props = {
  label: string;
  value?: string | ReactNode;
  className?: string;
  children?: ReactNode;
};

export const LabelValueOld: React.FunctionComponent<Props> = ({ label, value, className = "" }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <label className="font-bold dark:text-neutral-500">{label}</label>
      {value && <div className="ml-2 flex items-center text-sm">{value}</div>}
    </div>
  );
};
