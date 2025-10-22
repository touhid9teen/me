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

  // Define dynamic colors
  const badgeHoverBg = theme === "dark" ? "bg-teal-400/20" : "bg-teal-400/10";
  const badgeText = theme === "dark" ? "text-teal-300" : "text-teal-600";

  return (
    <div className="w-full max-w-none">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-10 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* Period */}
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-3">
                  {exp.period}
                </header>

                {/* Main Content */}
                <div className="z-10 sm:col-span-7">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          <p>{exp.title}</p>
                          <p>{exp?.title2 && exp.title2}</p>
                          <p>
                            {exp.company}
                            <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                          </p>
                        </span>
                      </span>
                    </div>
                  </h3>

                  {/* Description points */}
                  <ul className="mt-2 list-disc list-inside text-sm leading-relaxed text-slate-400 space-y-1">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <ul className="mt-3 flex flex-wrap">
                    {exp.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <Badge
                          variant="secondary"
                          className={`${badgeHoverBg} ${badgeText} hover:${badgeHoverBg}`}
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
    </div>
  );
}
