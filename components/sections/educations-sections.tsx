"use client";

import { education } from "@/lib/variables";

export default function EducationsSections() {
  return (
    <div className="w-full">
      <h2 className="mb-8 text-xl font-bold uppercase tracking-widest text-slate-800 dark:text-slate-100 lg:sr-only">
        Education
      </h2>

      <ol className="group/list">
        {education.map((edu, index) => (
          <li
            key={index}
            className="group relative transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
           <div className="relative mb-8 sm:mb-12 grid gap-4 pb-1 transition-all sm:grid-cols-10 sm:gap-6 md:gap-8 lg:p-6 lg:rounded-xl lg:hover:bg-transparent lg:hover:shadow-md lg:hover:border-slate-300 lg:dark:hover:bg-slate-800/40 lg:dark:hover:border-slate-700/50 overflow-hidden border border-transparent">
              
              <header className="z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:col-span-3">
                {edu.period}
              </header>

              <div className="z-10 sm:col-span-7">
                <h3 className="font-semibold leading-snug text-slate-800 dark:text-slate-100">
                  <div>
                    <span className="inline-flex items-baseline font-bold leading-tight text-base transition-colors text-slate-800 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300">
                      {edu.degree}
                    </span>
                  </div>
                  <div className="mt-1 font-semibold text-sm text-slate-700 dark:text-slate-300">
                    {edu.institution}
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                  {edu.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
