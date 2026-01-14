"use client";

import { projects } from "@/lib/variables";
import { ExternalLink, Github, FolderGit2, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-16"
      >
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Explore my recent work and technical expertise
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mt-4" />
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6 sm:space-y-8 max-w-7xl"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all duration-300 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-lg"
          >
            {/* Grid Layout - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 min-h-56 sm:min-h-64 lg:min-h-72">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/30 overflow-hidden"
              >
                <div className="relative w-full h-full">
                  {Array.isArray(project.image) ? (
                    project.image.slice(0, 2).map((img, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 + imgIndex * 0.1 }}
                        className="absolute inset-0 w-full h-full transition-all duration-500"
                        style={{
                          zIndex: 20 - imgIndex,
                          opacity:
                            hoveredIndex === index && imgIndex > 0
                              ? 0.5
                              : 1,
                          transform:
                            hoveredIndex === index && imgIndex === 0
                              ? "scale(1.05)"
                              : "scale(1)",
                        }}
                      >
                        <Image
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          src={img}
                          fill
                          className="object-cover"
                          priority={imgIndex === 0}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </motion.div>
                    ))
                  ) : (
                    <Image
                      alt={project.title}
                      src={project.image || "/placeholder.svg"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 flex flex-col justify-between p-4 sm:p-5 lg:p-6"
              >
                {/* Top Section */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-teal-50 dark:bg-teal-900/20 rounded-lg text-teal-600 dark:text-teal-400 transition-transform duration-300 group-hover:scale-110">
                        <FolderGit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wide">
                        Project
                      </span>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-1">
                      {(project.frontend || project.source) && (
                        <Link
                          href={project.frontend || project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300"
                          aria-label="View source code"
                        >
                          <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </Link>
                      )}
                      {project.live && (
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300"
                          aria-label="Visit live project"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-4">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-medium tracking-wide hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                  {project.technologies.length > 5 && (
                    <Badge
                      variant="secondary"
                      className="bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-medium"
                    >
                      +{project.technologies.length - 5}
                    </Badge>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 sm:mt-16"
      >
        <Link
          className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg bg-white dark:bg-slate-100 text-black dark:text-slate-900 font-semibold text-sm border border-slate-200 dark:border-slate-300 hover:bg-slate-100 dark:hover:bg-teal-500 dark:hover:text-white dark:hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl whitespace-nowrap"
          href="https://github.com/touhid9teen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Full Archive</span>
          <Github className="h-3.5 w-3.5" />
        </Link>
      </motion.div>
    </div>
  );
}