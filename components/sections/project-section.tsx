"use client";

import { projects } from "@/lib/variables";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <div className="w-full space-y-12">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group sticky top-24 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-teal-500/30 dark:hover:border-teal-500/30"
            style={{
              // Minimal rotation for a "held card" feel on hover, alternating
              transformOrigin: "center top",
            }}
          >
            <div className="grid lg:grid-cols-2 h-full">
              {/* Image Section - Slides in from Left */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative h-72 lg:h-96 min-h-[300px] overflow-visible bg-slate-100 dark:bg-slate-800/50 group-hover:bg-transparent transition-colors p-6 flex items-center justify-center"
              >
                {/* Images Stack */}
                <div className="relative w-full h-full max-w-[350px] max-h-[220px]">
                  {Array.isArray(project.image) ? (
                    project.image.slice(0, 5).map((img, imgIndex) => {
                      // Calculate random-looking but deterministic rotation/position based on index
                      const rotation = imgIndex === 0 ? 0 : (imgIndex % 2 === 0 ? 3 : -3) * imgIndex;
                      const translate = imgIndex === 0 ? 0 : imgIndex * 4;
                      const zIndex = 10 - imgIndex;

                      return (
                        <div
                          key={imgIndex}
                          className="absolute inset-0 w-full h-full rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 overflow-hidden transition-all duration-500 ease-out origin-bottom-right"
                          style={{
                            zIndex: zIndex,
                            transform: `rotate(${rotation}deg) translate(${translate}px, ${translate}px)`,
                          }}
                        >
                          <Image
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            src={img}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {/* Hover reveal effect - lift the top card mainly */}
                          <div className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${imgIndex === 0 ? "opacity-0" : "group-hover:opacity-0"}`} />
                        </div>
                      );
                    })
                  ) : (
                    <div className="absolute inset-0 w-full h-full rounded-xl shadow-lg overflow-hidden">
                      <Image
                        alt={project.title}
                        src={project.image || "/placeholder.svg"}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Content Section - Slides in from Right */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col justify-between p-6 lg:p-8"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-teal-50 dark:bg-teal-900/20 rounded-lg text-teal-600 dark:text-teal-400">
                        <FolderGit2 className="w-6 h-6" />
                     </div>
                     <div className="flex gap-3">
                        {project.frontend && (
                           <Link href={project.frontend} target="_blank" className="text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                              <Github className="w-5 h-5" />
                           </Link>
                        )}
                        <Link href={project.live} target="_blank" className="text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                           <ExternalLink className="w-5 h-5" />
                        </Link>
                     </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-3 py-1 text-xs font-mono"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-teal-600 dark:hover:bg-teal-400 dark:hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          href="https://github.com/touhid9teen"
          target="_blank"
          rel="noreferrer"
        >
          <span>View Full Project Archive</span>
          <Github className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
