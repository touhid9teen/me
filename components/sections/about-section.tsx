"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import meImg from "@/assets/me.jpg";
import TechStackSection from "../common/tech-stack";

export default function AboutSection() {
  return (
    <div className="w-full">
         {/* Mobile Header (similar to sidebar, visible only on small screens) */}
         {/* Mobile Header (similar to sidebar, visible only on small screens) */}
         <div className="mb-10 lg:hidden border-b border-slate-200 dark:border-slate-800 pb-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
               <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-[3px] border-slate-900/10 dark:border-slate-100/10 shadow-md">
                  <Image
                     src={meImg}
                     alt="Touhidul Islam"
                     fill
                     className="object-cover"
                     priority
                  />
               </div>
               <div>
                  <h4 className="py-2">
                     <span className="p-1 text-teal-600 dark:text-teal-400 font-mono text-sm tracking-widest uppercase">Hi, I'm</span>
                  </h4>
                  <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                     Touhidul Islam
                  </h1>
                  <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-700 dark:text-slate-200">
                     Software Engineer
                  </h2>
                  <p className="mt-4 flex items-center gap-2 text-slate-600 dark:text-slate-400">
                     <MapPin className="h-4 w-4 text-teal-500" /> 
                     <span>Dhaka, Bangladesh</span>
                  </p>
               </div>
            </div>
         </div>

      <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
        {/* Section Title */}
        <h2 className="mb-6 text-xl font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100 lg:sr-only">
          About
        </h2>
        
        {/* Content */}
        <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-400 selection:bg-teal-300/30 dark:selection:bg-teal-700/30">
          <p>
            I am a Software Engineer specializing in high-performance web applications using <span className="font-semibold text-slate-900 dark:text-slate-200">React</span>, <span className="font-semibold text-slate-900 dark:text-slate-200">Next.js</span>, and <span className="font-semibold text-slate-900 dark:text-slate-200">Node.js</span> alongside <span className="font-semibold text-slate-900 dark:text-slate-200">Django Rest Framework</span>. Currently driving frontend innovation at <span className="inline-block relative font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors after:content-[''] after:absolute after:w-full after:h-px after:bg-teal-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-left">Upay</span> (UCB Fintech Company Limited), I tackle complex design and performance challenges daily. A passionate problem solver at heart, I dedicate my free time to mastering algorithms, reading, and exploring new technologies to continuously grow my craft.
          </p>
        </div>
      </div>

      <div className="mt-12 animate-in fade-in duration-700 slide-in-from-bottom-8 delay-150">
        <TechStackSection />
      </div>
    </div>
  );
}
