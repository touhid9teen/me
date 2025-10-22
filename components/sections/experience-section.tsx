"use client";
import { useTheme } from "next-themes";
import { experiences } from "@/lib/variables";
import { ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";
import { useEffect, useState } from "react";

export default function ExperienceSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const textColor = theme === "dark" ? "text-slate-200" : "text-slate-900";
  const textDesc = theme === "dark" ? "text-slate-400" : "text-slate-800/90";
  const hoverText =
    theme === "dark"
      ? "group-hover:text-teal-300"
      : "group-hover:text-teal-600";

  const hoverBgClass =
    theme === "dark"
      ? "dark:lg:group-hover:bg-slate-800/50"
      : "lg:group-hover:bg-teal-500/10";

  return (
    <div className="w-full max-w-none">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>

      <ol className="group/list">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="group mb-12 p-6 relative rounded-md overflow-hidden"
          >
            {/* Hover Background */}
            <div
              className={`absolute inset-0 z-0 hidden lg:block rounded-md transition-colors duration-300 ${hoverBgClass} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]`}
            />

            <div className="grid pb-1 sm:grid-cols-10 sm:gap-8 md:gap-4 relative z-10">
              <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-3">
                {exp.period}
              </header>

              <div className="sm:col-span-7">
                <h3 className={`font-medium leading-snug ${textColor}`}>
                  <div>
                    <span
                      className={`inline-flex flex-col font-medium leading-tight text-base transition-colors ${hoverText}`}
                    >
                      <p>{exp.title}</p>
                      {exp?.title2 && <p>{exp.title2}</p>}
                      <p className="inline-flex items-center">
                        {exp.company}
                        <ExternalLink className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                      </p>
                    </span>
                  </div>
                </h3>

                <ul
                  className={`mt-2 list-disc list-inside text-sm leading-relaxed space-y-1 ${textDesc}`}
                >
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <ul className="mt-3 flex flex-wrap">
                  {exp.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="mr-1.5 mt-2">
                      <Badge
                        variant="secondary"
                        className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20"
                      >
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
