"use client";
import { experiences } from "@/lib/variables";
import { ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";

export default function ExperienceSection() {
  return (
    <div className="w-full">
      <h2 className="mb-8 text-xl font-bold uppercase tracking-widest text-slate-800 dark:text-slate-100 lg:sr-only">
        Experience
      </h2>
      
      <ol className="relative border-l border-slate-200 dark:border-slate-800 ml-3 lg:ml-0 lg:border-none lg:space-y-4 group/list">
        {experiences.map((exp, index) => (
          <li key={index} className="group relative ml-6 lg:ml-0 mb-12 lg:mb-0 transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            
            {/* Timeline dot for mobile (refined) */}
            <span className="absolute -left-[2.1rem] top-2 h-3 w-3 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-900 lg:hidden" />

            <div className="relative overflow-hidden rounded-md border border-transparent transition-all duration-300 lg:p-6 lg:hover:bg-transparent lg:hover:shadow-md lg:hover:border-slate-300 lg:dark:hover:bg-slate-800/40 lg:dark:hover:border-slate-700/50">
              
              <div className="grid gap-2 sm:grid-cols-8 sm:gap-6 md:gap-8">
                {/* Date / Period */}
                <header className="z-10 mb-1 mt-1 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:col-span-2 whitespace-nowrap">
                  {exp.period}
                </header>

                {/* Content */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-semibold leading-snug text-slate-900 dark:text-slate-100 text-base">
                    <div>
                      {/* Company & Link */}
                      <a 
                        href={exp.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-baseline text-lg font-bold leading-tight text-slate-800 dark:text-slate-100 hover:text-teal-700 dark:hover:text-teal-300 focus-visible:text-teal-700 focus-visible:dark:text-teal-300 transition-colors"
                        aria-label={`${exp.title} at ${exp.company}`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {exp.title} • <span className="inline-block text-slate-700 dark:text-slate-300 group-hover/link:text-teal-700 dark:group-hover/link:text-teal-300 transition-colors">{exp.company}
                          <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                          </span>
                        </span>
                      </a>
                       {exp?.title2 && (
                          <div className="text-slate-600 dark:text-slate-400 font-medium text-sm mt-1">{exp.title2}</div>
                      )}
                    </div>
                  </h3>
                  
                  {/* Description */}
                  <div className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl font-medium">
                    <ul className="list-disc list-outside ml-4 space-y-2">
                       {exp.description.map((point, i) => (
                         <li key={i}>{point}</li>
                       ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {exp.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>
                        <Badge
                          variant="secondary"
                          className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200 dark:bg-teal-400/10 dark:text-teal-300 dark:hover:bg-teal-400/20 text-xs px-2.5 py-1 rounded-full border dark:border-teal-500/10 transition-colors font-mono font-medium"
                        >
                          {tech}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
