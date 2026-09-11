import type { ITechnologyType } from "../types/TechnologyType"

export interface StackCartProps {
  technology: ITechnologyType;
}

export default function StackCart({ technology }: StackCartProps) {
  return (
    <div>
      <div>
        <div></div>
      </div>

      <div className="w-full">
        <button className="w-full border border-[#ED8C85] text-[14px] font-inter font-semibold rounded-lg">
          Remove All
        </button>
      </div>
    </div>
  );
}