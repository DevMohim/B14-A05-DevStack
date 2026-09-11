import { RxCross2 } from "react-icons/rx";
import type { ITechnologyType } from "../types/TechnologyType";
import type { Dispatch, SetStateAction } from "react";

export interface TechnologyCartProps {
  technology: ITechnologyType;
  technologyCart: ITechnologyType[];
  setTechnologyCart: Dispatch<SetStateAction<ITechnologyType[]>>;
}

export default function StackCart({
  technology,
  technologyCart,
  setTechnologyCart,
}: TechnologyCartProps) {
  const handleDeleteClick = (id: string) => {
    const remainingStack = technologyCart.filter(
      (technology) => technology.id !== id,
    );
    setTechnologyCart(remainingStack);
  };

  return (
    <div className="flex justify-between items-center border border-[#E2E8F0] rounded-lg px-4 py-2">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7">
          <img src={technology.icon} alt={technology.name} />
        </div>
        <div className="font-jakarta">
          <h1 className="font-bold text-[12px] text-[#0F172A]">
            {technology.name}
          </h1>
          <p className="text-[#94A3B8] font-bold  text-[8px]">
            {technology.category}
          </p>
        </div>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => handleDeleteClick(technology.id)}
      >
        <RxCross2 className="font-bold text-lg" />
      </div>
    </div>
  );
}
