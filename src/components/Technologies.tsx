import { use, useState } from "react";
import type { ITechnologyType } from "../types/TechnologyType";
import Technology from "./Technology";
import TechnologyCart from './TechnologyCart'

export interface TechnologiesProps { 
  technologiesPromise: Promise<ITechnologyType[]>;
}

export default function Technologies({ technologiesPromise }: TechnologiesProps) {

   const [technologyCart,setTechnologyCart] = useState<ITechnologyType[]>([])

   const technologies = use(technologiesPromise)

   console.log(technologyCart)
   
   return (
     <section className="container mx-auto px-6 lg:px-8 py-2">
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

       <div className="grid grid-cols-12 items-center gap-8">
         {/* Stack show side */}
         {/* 75% / col span 9 */}
         <div className="col-span-9 grid grid-cols-3 items-center gap-5">
           {technologies.map((technology) => (
             <Technology
               key={technology.id}
               technology={technology}
               setTechnologyCart={setTechnologyCart}
             />
           ))}
         </div>

         {/* Selected stack side */}
         {/* 25% / col span 3 */}
         <div className="col-span-3">
           {technologyCart.map((technology) => (
             <TechnologyCart key={technology.id} technology={technology} />
           ))}
         </div>
       </div>
     </section>
   );
}