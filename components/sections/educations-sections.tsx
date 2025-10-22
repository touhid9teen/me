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
    <div className="w-full max-w-none">
      <ol className="group/list">
        {education.map((edu, index) => (
          <li
            key={index}
            className="group mb-12 p-6 relative rounded-md overflow-hidden"
          >
            {/* Hover Background covering full parent */}
            <div
              className={`absolute inset-0 z-0 hidden lg:block rounded-md transition-colors duration-300 ${hoverBgClass} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]`}
            />

            <div className="grid pb-1 sm:grid-cols-10 sm:gap-8 md:gap-4 relative z-10">
              <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-3">
                {edu.period}
              </header>

              <div className="sm:col-span-7">
                <h3 className={`font-medium leading-snug ${textColor}`}>
                  <div>
                    <span
                      className={`inline-flex items-baseline font-medium leading-tight text-base transition-colors ${hoverText}`}
                    >
                      {edu.degree}
                    </span>
                  </div>
                  <div className={`mt-1 font-semibold ${textColor}`}>
                    {edu.institution}
                  </div>
                </h3>
                <p className={`mt-2 text-sm leading-normal ${textDesc}`}>
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
