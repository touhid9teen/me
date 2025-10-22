"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
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
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Django Rest", icon: SiDjango, color: "#092E20" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Java", icon: DiJava, color: "#007396" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "VSCode", icon: FaMicrosoft, color: "#007ACC" },
  { name: "Yarn", icon: SiYarn, color: "#2C8EBB" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
];

const pyramidCounts = [1, 2, 3, 4, 5, 4, 3, 2, 1];

export default function TechStackSection() {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Split techStack into pyramid rows
  const rows = [];
  let index = 0;
  for (let count of pyramidCounts) {
    rows.push(techStack.slice(index, index + count));
    index += count;
  }
  if (index < techStack.length) rows.push(techStack.slice(index));

  return (
    <div className="w-full flex flex-col items-center py-12 px-3 ">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 font-recoleta">
        Tech Stack
      </h2>

      <div className="flex flex-col gap-3 md:gap-4">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
          >
            {row.map((tech, techIndex) => {
              const Icon = tech.icon;
              const isHovered = hoveredIndex === techStack.indexOf(tech);

              return (
                <button
                  key={techIndex}
                  className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 
                    ${
                      isHovered
                        ? "bg-none dark:bg-slate-700 scale-110"
                        : "bg-none dark:bg-slate-800/50 hover:bg-[#E2D5C5] dark:hover:bg-slate-700"
                    }
                    shadow-sm hover:shadow-md`}
                  onMouseEnter={() => setHoveredIndex(techStack.indexOf(tech))}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Icon
                    size={6} // smaller icon
                    className="sm:w-3 sm:h-3 md:w-4 md:h-4"
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200">
                    {tech.name}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
