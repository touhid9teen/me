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

  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Django Rest", icon: SiDjango, color: "#092E20" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Split techStack into pyramid rows
  const rows: (typeof techStack)[][] = [];
  let index = 0;
  for (let count of pyramidCounts) {
    rows.push(techStack.slice(index, index + count));
    index += count;
  }
  if (index < techStack.length) rows.push(techStack.slice(index));

  const isDark = theme === "dark";

  return (
    <div
      className={`w-full flex flex-col items-center py-16 px-4 ${
        isDark ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-8 ${
          isDark ? "text-slate-100" : "text-slate-900"
        }`}
      >
        Tech Stack
      </h2>

      <div className="flex flex-col gap-3">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-2 flex-wrap">
            {row.map((tech, techIndex) => {
              const Icon = tech.icon;
              const bgColor = isDark ? `${tech.color}50` : `${tech.color}20`;
              const textColor = isDark ? "#fff" : "#1e293b";

              return (
                <div
                  key={techIndex}
                  className="flex items-center gap-1 px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: bgColor,
                    color: textColor,
                    boxShadow: `0 4px 12px ${bgColor}, inset 0 0 6px ${bgColor}`,
                  }}
                >
                  <Icon
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5`}
                    style={{ color: textColor }}
                  />
                  <span className="text-[9px] sm:text-xs md:text-sm font-semibold">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
