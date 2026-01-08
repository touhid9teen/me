"use client";

import { projects } from "@/lib/variables";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <div className="w-full">
      <h2 className="mb-8 text-xl font-bold uppercase tracking-widest text-slate-800 dark:text-slate-100 lg:sr-only">
        Projects
      </h2>

      <ul className="group/list space-y-12">
        {projects.map((project, index) => (
            <li key={index} className="group relative transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="relative grid gap-4 pb-1 transition-all sm:grid-cols-12 sm:gap-8 lg:p-6 lg:rounded-xl lg:hover:bg-transparent lg:hover:shadow-md lg:hover:border-slate-300 lg:dark:hover:bg-slate-800/40 lg:dark:hover:border-slate-700/50 overflow-hidden border border-transparent">
                
                {/* Image */}
                <div className="order-2 sm:order-1 sm:col-span-4 relative mt-2 sm:mt-0">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-200/60 bg-slate-50 dark:bg-slate-800 dark:border-slate-700/50 transition-all group-hover:scale-[1.02] group-hover:shadow-md">
                    <Image
                      alt={project.title}
                      src={project.image || "/placeholder.svg"}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="order-1 sm:order-2 sm:col-span-8 z-10 flex flex-col justify-between">
                  <div>
                    <h3 className="group/link text-base font-bold leading-tight text-slate-800 dark:text-slate-100 mb-2">
                       <Link
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center hover:text-teal-700 dark:hover:text-teal-300 gap-1 transition-colors"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>{project.title}</span>
                          <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                        </Link>
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                      {project.description}
                    </p>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.technologies.map((tech, techIndex) => (
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
            </li>
        ))}
      </ul>
      <div className="mt-12">
        <Link
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-teal-700 dark:hover:text-teal-300 transition-colors group"
          href="https://github.com/touhid9teen"
          target="_blank"
          rel="noreferrer"
        >
          <span className="border-b border-transparent group-hover:border-teal-700 dark:group-hover:border-teal-300 transition-colors">
            View Full Project Archive
          </span>
          <Github className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
