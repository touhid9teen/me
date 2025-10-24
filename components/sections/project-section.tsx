// components/sections/project-section.tsx
"use client";

import { useState, useEffect } from "react";
import { projects } from "@/lib/variables";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function ProjectSection() {
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
      <h2
        className={`text-sm font-bold uppercase tracking-widest ${textColor} lg:sr-only p-4`}
      >
        Projects
      </h2>

      <ul className="group/list">
        {projects.map((project, index) => (
          <li
            key={index}
            className="group mb-8 sm:mb-12 p-4 sm:p-6 relative rounded-md overflow-hidden"
          >
            {/* Hover Background */}
            <div
              className={`absolute inset-0 z-0 hidden lg:block rounded-md transition-colors duration-300 ${hoverBgClass} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]`}
            />

            <div className="relative z-10 grid gap-4 pb-1 sm:grid-cols-12 sm:gap-6 md:gap-8">
              {/* Project Text */}
              <div className="sm:order-2 sm:col-span-8 min-w-0">
                <h3>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-baseline font-medium leading-tight text-sm sm:text-base transition-colors ${textColor} ${hoverText} break-words`}
                  >
                    <span className="break-words">{project.title}</span>
                    <ExternalLink className="inline-block h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                  </Link>
                </h3>

                <p
                  className={`mt-2 text-xs sm:text-sm leading-normal ${textDesc} break-words`}
                >
                  {project.description}
                </p>

                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>
                      <Badge
                        variant="secondary"
                        className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Image */}
              <div className="sm:order-1 sm:col-span-4">
                <Image
                  alt={project.title}
                  loading="lazy"
                  width={500}
                  height={300}
                  src={project.image || "/placeholder.svg"}
                  unoptimized={true}
                  className="w-full h-auto rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:translate-y-1"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* View All Projects */}
      <div className="mt-8 p-4 sm:mt-12">
        <Link
          className={`inline-flex items-center font-medium leading-tight text-sm sm:text-base ${textColor} group break-words`}
          href="https://github.com/touhid9teen"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <span
              className={`border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none`}
            >
              View Full Project Archive
            </span>
            <ExternalLink className="ml-1 inline-block h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
          </span>
        </Link>
      </div>
    </div>
  );
}
