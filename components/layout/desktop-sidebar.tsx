import { sections } from "@/lib/variables";
import {
  Briefcase,
  Code2,
  FolderGit2,
  GraduationCap,
  Mail,
  MapPin,
  User,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const sectionIcons = {
  about: User,
  experience: Briefcase,
  education: GraduationCap,
  projects: FolderGit2,
  "problem-solving": Code2,
  contact: Mail,
  blogs: BookOpen,
};

export default function DesktopSidebar({
  activeSection,
  scrollToSection,
}: Props) {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionId: string
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    setMouseY(y);
    setHoveredSection(sectionId);
  };

  return (
    <header className="hidden lg:col-span-2 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <div className="relative group">
            <div className="absolute -inset-0.5  rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-[3px] border-slate-900 shadow-xl">
              <Image
                 src="/me/assets/me.jpg"
                alt="Touhidul Islam"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-2">
                 <span className="text-teal-600 dark:text-teal-400 font-mono text-sm tracking-wider">Hi, I'm</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap sm:text-5xl">
              Touhidul Islam
            </h1>
            <h2 className="mt-2 text-lg font-medium tracking-wide text-slate-700 dark:text-slate-200 bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-200 dark:to-slate-400">
              Software Engineer
            </h2>
            <div className="mt-3 flex flex-col gap-4">
                 <p className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm font-medium">
                    <MapPin className="h-4 w-4 text-teal-600 dark:text-teal-500" /> 
                    <span>Dhaka, Bangladesh</span>
                 </p>
                 {/* <SocialIcons /> */}
            </div>
          </div>
        </div>
        {/* <ThemeToggleCorner /> */}

        <nav aria-label="In-page jump links" className="nav">
          <ul className="mt-16 w-max">
            {sections.map((s) => {
              const Icon = sectionIcons[s.id as keyof typeof sectionIcons];
              const isActive = activeSection === s.id;
              const isHovered = hoveredSection === s.id;

              return (
                <li key={s.id} className="relative">
                  <button
                    className="group relative flex items-center py-3 w-full transition-all duration-300 ease-out overflow-hidden"
                    onClick={() => scrollToSection(s.id)}
                    onMouseMove={(e) => handleMouseMove(e, s.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    {/* Active Background - Static */}
                    {isActive && (
                      <span className="absolute inset-0 -left-4 right-0 bg-gradient-to-r from-teal-500/20 via-teal-400/10 to-transparent rounded-md" />
                    )}

                    {/* Sliding Background for hover (works for both active and non-active) */}
                    {isHovered && (
                      <>
                        <span
                          className="absolute inset-0 -left-4 right-0 h-20 bg-gradient-to-r from-teal-500/15 via-teal-400/20 to-transparent rounded-md blur-sm transition-all duration-200 ease-out"
                          style={{
                            transform: `translateY(${mouseY - 40}px)`,
                          }}
                        />
                        <span
                          className="absolute inset-0 -left-4 right-0 h-12 bg-gradient-to-r from-teal-500/10 to-transparent rounded-md transition-all duration-150 ease-out"
                          style={{
                            transform: `translateY(${mouseY - 24}px)`,
                          }}
                        />
                      </>
                    )}

                    {/* Content */}
                    <span className="relative flex items-center z-10">
                      <span
                        className={`nav-indicator mr-4 h-px transition-all duration-300 ${
                          isActive || isHovered
                            ? "w-16 bg-teal-300"
                            : "w-8 bg-slate-600"
                        }`}
                      />
                      {Icon && (
                        <Icon
                          className={`mr-2 h-4 w-4 transition-all duration-300 ${
                            isActive || isHovered
                              ? "text-teal-300 scale-110"
                              : "text-slate-500"
                          }`}
                          style={{
                            filter:
                              isActive || isHovered
                                ? "drop-shadow(0 2px 4px rgba(45, 212, 191, 0.4)) drop-shadow(0 0 8px rgba(45, 212, 191, 0.3))"
                                : "none",
                            transform:
                              isActive || isHovered
                                ? "perspective(100px) rotateY(-15deg) translateZ(10px)"
                                : "none",
                          }}
                        />
                      )}
                      <span
                        className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                          isActive || isHovered
                            ? "text-teal-300"
                            : "text-slate-500"
                        }`}
                      >
                        {s.label}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
