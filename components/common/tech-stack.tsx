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
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div
      className={`w-full flex flex-col items-center py-4 px-4 ${
        isDark ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 px-4 py-2 pb-6">
        Tech Stack
      </h2>

      <ul className="flex flex-wrap justify-center gap-1.5 max-w-5xl">
        {techStack.map((tech) => {
          const Icon = tech.icon;
          const isHovered = hoveredTech === tech.name;

          return (
            <li
              key={tech.name}
              className="relative"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Active/Hover Background Glow */}
              {isHovered && (
                <>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-teal-400/30 to-teal-500/20 rounded-md blur-md animate-pulse" />
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent rounded-md" />
                </>
              )}

              {/* Tech Badge */}
              <div
                className={`relative flex items-center gap-1.5 px-2.5  rounded-md transition-all duration-300 ${
                  isHovered ? "bg-teal-400/20" : "bg-teal-400/10"
                } ${!isDark ? "border border-teal-300 py-1" : "py-1.5"}`}
              >
                <Icon
                  className="w-3.5 h-3.5 transition-all duration-300 text-teal-300"
                  style={{
                    filter: isHovered
                      ? "drop-shadow(0 2px 4px rgba(45, 212, 191, 0.4)) drop-shadow(0 0 8px rgba(45, 212, 191, 0.3))"
                      : "none",
                  }}
                />
                <span
                  className={`text-xs font-medium transition-colors duration-300 text-teal-300`}
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
