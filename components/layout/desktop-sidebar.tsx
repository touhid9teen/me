import { sections } from "@/lib/variables";
import SocialIcons from "@/components/common/social-icons";
import ThemeToggleCorner from "@/components/common/theme-toggle-corner";
import {
  User,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Code2,
  Mail,
  MapPin,
} from "lucide-react";
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
    <header className="hidden lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Touhidul Islam
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Software Engineer
        </h2>
        {/* Location with icon */}
        <p className="mt-4 flex items-center gap-1 text-slate-400">
          <MapPin className="h-4 w-4" /> Dhaka, Bangladesh
        </p>
        <ThemeToggleCorner />

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
      <SocialIcons />
    </header>
  );
}
