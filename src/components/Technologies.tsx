import { use, useState } from "react";
import type { ITechnologyType } from "../types/TechnologyType";
import Technology from "./Technology";
import TechnologyCart from "./TechnologyCart";

export interface TechnologiesProps {
  technologiesPromise: Promise<ITechnologyType[]>;
}

export default function Technologies({
  technologiesPromise,
}: TechnologiesProps) {
  const [technologyCart, setTechnologyCart] = useState<ITechnologyType[]>([]);

  const handleAllDelete = () => {
    setTechnologyCart([]);
  };

  const technologies = use(technologiesPromise);

  return (
    <section className="container mx-auto px-6 lg:px-8 py-2 mb-25">
      <div className="mb-10">
        <h1 className="text-[#0F172A] font-black text-4xl font-inter mb-2">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[#64748B] font-jakarta tracking-[0.9px] text-lg">
          Pick one technology per category to build your ideal stack.
        </p>

        <div></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Stack show side */}
        {/* 75% / col span 9 */}
        <div className=" col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
          {technologies.map((technology) => (
            <Technology
              key={technology.id}
              technology={technology}
              setTechnologyCart={setTechnologyCart}
              technologyCart={technologyCart}
            />
          ))}
        </div>

        {/* Selected stack side */}
        {/* 25% / col span 3 */}
        <div
          className={`col-span-12 md:col-span-6 lg:col-span-3 p-5 rounded-2xl border border-[#F1F5F9] flex flex-col justify-start`}
        >
          <div className={`flex flex-col`}>
            <div className="mb-4">
              <h1 className="font-bold text-[16px] font-inter text-[#0F172A]">
                Your Stack
              </h1>
              <p className="font-jakarta text-[#94A3B8] text-[12px] ">
                {technologyCart.length} Technology Selected
              </p>
            </div>

            {technologyCart.length === 0 ? (
              <div>
                <div className="flex justify-center items-center p-6 border-2 rounded-2xl border-dashed border-[#E2E8F0]">
                  <h1 className="font-jakarta text-[12px] text-[#94A3B8] font-medium">
                    Your stack is empty
                  </h1>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  {technologyCart.map((technology) => (
                    <TechnologyCart
                      key={technology.id}
                      technology={technology}
                      technologyCart={technologyCart}
                      setTechnologyCart={setTechnologyCart}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {technologyCart.length > 0 ? (
            <>
              <div className="w-full mt-10">
                <button
                  className="w-full border border-[#ED8C85] text-[14px] font-inter font-semibold rounded-lg cursor-pointer py-1"
                  onClick={handleAllDelete}
                >
                  Remove All
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
