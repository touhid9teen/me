"use client";
import { useState, useEffect } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiJavascript,
  SiGithub,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
  SiPython,
  SiDocker,
  SiCplusplus,
  SiLinux,
  SiRedis,
  SiMysql,
  SiPostman,
  SiYarn,
  SiVite,
  SiGnubash,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaMicrosoft } from "react-icons/fa";

const techStack = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Django Rest", icon: SiDjango },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "GitHub", icon: SiGithub },
  { name: "Python", icon: SiPython },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "C++", icon: SiCplusplus },
  { name: "Java", icon: DiJava },
  { name: "Linux", icon: SiLinux },
  { name: "Redis", icon: SiRedis },
  { name: "Postman", icon: SiPostman },
  { name: "VSCode", icon: FaMicrosoft },
  { name: "Yarn", icon: SiYarn },
  { name: "Vite", icon: SiVite },
  { name: "Bash", icon: SiGnubash },
  { name: "Figma", icon: SiFigma },
  { name: "Git", icon: SiGit },
  { name: "MySQL", icon: SiMysql },
  { name: "Docker", icon: SiDocker },
];

export default function TechStackSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col items-start py-6">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
        Technologies
      </h3>

      <ul className="flex flex-wrap gap-2">
        {techStack.map((tech) => {
          const Icon = tech.icon;
          const isHovered = hoveredTech === tech.name;

          return (
            <li
              key={tech.name}
              className="relative group"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Tech Badge */}
              <div
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 border
                  ${
                    isHovered 
                      ? "bg-teal-50 border-teal-200 dark:bg-teal-400/20 dark:border-teal-400/30 scale-105 shadow-sm" 
                      : "bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700/50"
                  }
                `}
              >
                <Icon
                  className={`w-3.5 h-3.5 transition-all duration-300 ${isHovered ? "text-teal-600 dark:text-teal-300" : "text-slate-600 dark:text-slate-400"}`}
                />
                <span
                  className={`text-xs font-medium transition-colors duration-300 ${isHovered ? "text-teal-700 dark:text-teal-200" : "text-slate-700 dark:text-slate-300"}`}
                >
                  {tech.name}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
