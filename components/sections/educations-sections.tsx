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

  const itemBg = theme === "dark" ? "bg-slate-900/75" : "bg-[#F0E7DB]";
  const hoverBgClass =
    theme === "dark"
      ? "group-hover:bg-slate-800/50"
      : "group-hover:bg-[#E0D8C8]";

  return (
    <div className="w-full max-w-none">
      <div
        className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${itemBg}`}
      >
        <h2
          className={`text-sm font-bold uppercase tracking-widest ${textColor} lg:sr-only`}
        >
          Education
        </h2>
      </div>

      <ol className="group/list">
        {education.map((edu, index) => (
          <li key={index} className="mb-12">
            {/* Add "group" here */}
            <div className="group relative grid pb-1 transition-all sm:grid-cols-10 sm:gap-8 md:gap-4 rounded-md overflow-hidden">
              {/* Hover Background */}
              <div
                className={`absolute -inset-x-4 -inset-y-4 z-0 hidden lg:block rounded-md transition-colors duration-300 ${hoverBgClass} lg:group-hover:drop-shadow-lg`}
              />

              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-3">
                {edu.period}
              </header>

              <div className="z-10 sm:col-span-7">
                <h3 className={`font-medium leading-snug ${textColor}`}>
                  <div>
                    <span
                      className={`inline-flex items-baseline font-medium leading-tight group text-base transition-colors ${hoverText}`}
                    >
                      <span>{edu.degree}</span>
                    </span>
                  </div>
                  <div className={`text-sm mt-1 ${textDesc} ${hoverText}`}>
                    {edu.institution}
                    {edu.gpa && (
                      <span className="ml-2">{`GPA: ${edu.gpa}`}</span>
                    )}
                  </div>
                </h3>

                <p
                  className={`mt-2 text-sm leading-normal `}
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
