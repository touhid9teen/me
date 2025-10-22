"use client";

import { useState, useEffect } from "react";
import { projects } from "@/lib/variables";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { useTheme } from "next-themes";

export default function ProjectSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const textColor = theme === "dark" ? "text-slate-200" : "text-slate-900";
  const textDesc = theme === "dark" ? "text-slate-400" : "text-slate-800/90";
  const hoverText = theme === "dark" ? "text-teal-300" : "text-teal-600";

  // Tailwind-compatible hover background classes
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
          Projects
        </h2>
      </div>

      <ul className="group/list">
        {projects.map((project, index) => (
          <li key={index} className="mb-12">
            <div
              className={`group relative grid gap-4 pb-1 transition-all sm:grid-cols-12 sm:gap-8 md:gap-4`}
            >
              {/* Hover Background */}
              <div
                className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${hoverBgClass} lg:group-hover:drop-shadow-lg`}
              />

              {/* Project Text */}
              <div className={`z-10 sm:order-2 sm:col-span-8`}>
                <h3>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-baseline font-medium leading-tight ${textColor} group/link text-base transition-colors hover:${hoverText} focus-visible:${hoverText}`}
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    {project.title}
                    <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                  </a>
                </h3>

                <p className={`mt-2 text-sm leading-normal ${textDesc}`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <ul className="mt-2 flex flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
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

              {/* Project Image */}
              <Image
                alt={project.title}
                loading="lazy"
                width={500}
                height={300}
                src={project.image || "/placeholder.svg"}
                unoptimized={true}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-4 sm:translate-y-1"
              />
            </div>
          </li>
        ))}
      </ul>

      {/* View All Projects */}
      <div className="mt-12">
        <a
          className={`inline-flex items-center font-medium leading-tight ${textColor} group`}
          href="https://github.com/touhid9teen"
        >
          <span>
            <span
              className={`border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none`}
            >
              View Full Project Archive
            </span>
            <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
          </span>
        </a>
      </div>
    </div>
  );
}
