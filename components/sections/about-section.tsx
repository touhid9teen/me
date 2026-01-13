"use client";

import { MapPin, Briefcase, GraduationCap, Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import TechStackSection from "../common/tech-stack";
import { experiences, education, problemSolvingData } from "@/lib/variables";

export default function AboutSection() {
  return (
    <div className="w-full space-y-12">
      {/* Mobile Header */}
      <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-[3px] border-slate-900/10 dark:border-slate-100/10 shadow-md">
            <Image
              src="/me/assets/me.jpg"
              alt="Touhidul Islam"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h4 className="py-2">
              <span className="p-1 text-teal-600 dark:text-teal-400 font-mono text-sm tracking-widest uppercase">
                Hi, I'm
              </span>
            </h4>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Touhidul Islam
            </h1>
            <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-700 dark:text-slate-200">
              Software Engineer
            </h2>
            <p className="mt-4 flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <MapPin className="h-4 w-4 text-teal-500" />
              <span>Dhaka, Bangladesh</span>
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
        {/* Section Title */}
        <h2 className="mb-6 text-xl font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100 lg:sr-only">
          About
        </h2>
        
        <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-400 selection:bg-teal-300/30 dark:selection:bg-teal-700/30">
          <p>
            I am a Software Engineer specializing in high-performance web applications using <span className="font-semibold text-slate-900 dark:text-slate-200">React</span>, <span className="font-semibold text-slate-900 dark:text-slate-200">Next.js</span>, and <span className="font-semibold text-slate-900 dark:text-slate-200">Node.js</span> alongside <span className="font-semibold text-slate-900 dark:text-slate-200">Django Rest Framework</span>. Currently driving frontend innovation at <span className="inline-block relative font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors after:content-[''] after:absolute after:w-full after:h-px after:bg-teal-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-left">Upay</span> (UCB Fintech Company Limited), I tackle complex design and performance challenges daily. A passionate problem solver at heart, I dedicate my free time to mastering algorithms, reading, and exploring new technologies.
          </p>
        </div>
      </div>

      {/* Compact Experience & Education Grid */}
      <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-700 slide-in-from-bottom-8 delay-75">
        
        {/* Experience Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="p-2 bg-teal-50 dark:bg-teal-900/20 rounded-lg text-teal-600 dark:text-teal-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">Experience</h3>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group relative pl-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {exp.title}
                  </h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-500">{exp.period}</span>
                </div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {exp.company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">Education</h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="group relative pl-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors">
                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {edu.institution}
                  </h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-500">{edu.period}</span>
                </div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {edu.degree}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compact Problem Solving */}
      <div className="animate-in fade-in duration-700 slide-in-from-bottom-8 delay-100">
        <div className="flex items-center gap-3 pb-2 mb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-400">
            <Code2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">Problem Solving</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {problemSolvingData.map((platform, idx) => (
            <a
              key={idx}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-all duration-300"
            >
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{platform.platform}</h4>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                  {platform.maxRating ? `Max: ${platform.maxRating}` : platform.rating}
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      <div className="animate-in fade-in duration-700 slide-in-from-bottom-8 delay-150">
        <TechStackSection />
      </div>
    </div>
  );
}
