import { IoMdStar } from "react-icons/io";
import type { ITechnologyType } from "../types/TechnologyType";
import { useState, type Dispatch, type SetStateAction } from "react";

export interface TechnologyProps {
  technology: ITechnologyType;
  setTechnologyCart: Dispatch<SetStateAction<ITechnologyType[]>>;
}

export default function Technology({
  technology,
  setTechnologyCart,
}: TechnologyProps) {
  const [isSelect, setIsSelect] = useState<boolean>(false);

  const handleSelect = () => {
    setIsSelect(true);

    setTechnologyCart((prevTech) => [...prevTech, technology]);
  };
  return (
    <div
      className={`p-5 rounded-2xl border  ${isSelect ? "border-[#D91B7E]" : "border-[#F1F5F9]"}`}
    >
      <div className="space-y-1.5">
        <div className="flex justify-between items-start">
          <div className="h-8 w-8">
            <img src={technology.icon} alt={technology.name} />
          </div>
          <p
            className={`px-2.5 py-0.5 rounded-full font-jakarta font-semibold text-[11.5px] ${technology.textColor} ${technology.bgColor} ${isSelect ? "text-[#D91B7E] bg-gray-200" : ""}`}
          >
            {technology.badge}
          </p>
        </div>
        <h1 className="mt-1.5 font-bold text-lg text-[#0F172A] font-jakarta">
          {technology.name}
        </h1>
        <p className="text-[#64748B] font-jakarta text-[12px] leading-[19.5px] mb-4">
          {technology.description}
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center mt-2 mb-4">
          <h1 className="bg-[#F1F5F9] rounded-sm px-2 py-1.5 font-jakarta font-medium text-[11px]">
            {technology.category}
          </h1>
          <p className="text-[#64748B] font-jakarta font-medium text-[11px]">
            {technology.difficulty}
          </p>
          <p className="font-semibold font-jakarta text-[11px] text-[#334155] flex items-center">
            <span className="mr-1">
              <IoMdStar className="text-[#FBBF24]" />
            </span>
            {technology.rating}
          </p>
        </div>
        <div>
          <button
            className={`py-2.5 w-full  rounded-lg font-jakarta font-medium text-[12px]  cursor-pointer ${isSelect ? "text-[#D91B7E] bg-gray-200 font-semibold" : "text-white bg-[#0A0F1D]"} disabled:cursor-not-allowed`}
            onClick={handleSelect}
            disabled={isSelect}
          >
            {isSelect ? "✓ Added to cart" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
}
