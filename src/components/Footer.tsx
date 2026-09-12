import React from 'react';
import Logo from '../assets/logo-text.png'

const Footer = () => {
   return (
     <footer className="container mx-auto px-6 lg:px-8 py-4 border border-[#F3F4F6]">
       <div className="grid grid-cols-5 gap-10 mb-8">
         <div className="col-span-5 lg:col-span-2 text-center lg:text-left">
           <img src={Logo} alt="Footer Logo" className="mb-3 mx-auto lg:mx-0" />
           <p className="mb-3 font-jakarta text-[16px] text-[#64748B]">
             Curated tools, technologies, and resources for developers building
             modern software.
           </p>
           <div className="flex items-center gap-5 font-jakarta justify-center lg:justify-start">
             <a href="/" className="text-[#475569] font-semibold text-[14px]">
               GitHub
             </a>
             <div className="h-1.5 w-1.5 rounded-full bg-[#475569]  lg:hidden"></div>
             <a href="/" className="text-[#475569] font-semibold text-[14px]">
               Twitter
             </a>
             <div className="h-1.5 w-1.5 rounded-full bg-[#475569]  lg:hidden"></div>
             <a href="/" className="text-[#475569] font-semibold text-[14px]">
               Linkedln
             </a>
           </div>
         </div>

         <div className="font-jakarta hidden lg:block">
           <h1 className="mb-4 text-[#0F172A] font-semibold text-sm cursor-not-allowed">
             PRODUCT
           </h1>
           <ul>
             <li>
               <a href="/" className="text-[#64748B] text-sm">
                 Home
               </a>
             </li>
             <li>
               <a href="/" className="text-[#64748B] text-sm">
                 Technologies
               </a>
             </li>
             <li>
               <a href="/" className="text-[#64748B] text-sm">
                 Projects
               </a>
             </li>
           </ul>
         </div>
         <div className="font-jakarta hidden lg:block">
           <h1 className="mb-4 text-[#0F172A] font-semibold text-sm cursor-not-allowed">
             COMPANY
           </h1>
           <ul>
             <li>
               <a href="/" className="text-[#64748B] text-sm">
                 About
               </a>
             </li>
             <li>
               <a href="/" className="text-[#64748B] text-sm">
                 Contact
               </a>
             </li>
             <li>
               <a href="/" className="text-[#64748B] text-sm">
                 Careers
               </a>
             </li>
           </ul>
         </div>
         <div className="font-jakarta hidden lg:block">
           <h1 className="mb-4 text-[#0F172A] font-semibold text-sm cursor-not-allowed">
             LEGAL
           </h1>
           <ul>
             <li>
               <a href="/" className="text-[#64748B] text-sm">
                 Privecy Policy
               </a>
             </li>
             <li>
               <a href="/" className="text-[#64748B] text-sm">
                 Terms of Services
               </a>
             </li>
           </ul>
         </div>
       </div>

       <div className="flex justify-between items-center font-jakarta">
         <h1 className="text-sm text-[#94A3B8]">
           © 2026 Dev Stack. All rights reserved.
         </h1>
         <div className=" flex items-center gap-5">
           <a href="/" className="text-[12px] text-[#94A3B8]">
             Privacy
           </a>
           <a href="/" className="text-[12px] text-[#94A3B8]">
             Terms
           </a>
         </div>
       </div>
     </footer>
   );
};

export default Footer;