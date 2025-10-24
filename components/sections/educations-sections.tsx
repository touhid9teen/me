"use client";

import { useState, useEffect } from "react";
import { education } from "@/lib/variables";
import { useTheme } from "next-themes";

export default function EducationsSections() {
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
    <div className="w-full">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only p-4">
        Education
      </h2>

      <ol className="group/list">
        {education.map((edu, index) => (
          <li
            key={index}
            className="group mb-8 sm:mb-12 p-4 sm:p-6 relative rounded-md overflow-hidden"
          >
            {/* Hover Background */}
            <div
              className={`absolute inset-0 z-0 hidden lg:block rounded-md transition-colors duration-300 ${hoverBgClass} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]`}
            />

            <div className="grid gap-4 pb-1 sm:grid-cols-10 sm:gap-6 md:gap-8 relative z-10">
              <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-3">
                {edu.period}
              </header>

              <div className="sm:col-span-7 min-w-0">
                <h3 className={`font-medium leading-snug ${textColor}`}>
                  <div>
                    <span
                      className={`inline-flex items-baseline font-medium leading-tight text-sm sm:text-base transition-colors ${hoverText} break-words`}
                    >
                      {edu.degree}
                    </span>
                  </div>
                  <div
                    className={`mt-1 font-semibold text-sm sm:text-base ${textColor} break-words`}
                  >
                    {edu.institution}
                  </div>
                </h3>
                <p
                  className={`mt-2 text-xs sm:text-sm leading-normal ${textDesc} break-words`}
                >
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
