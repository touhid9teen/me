import { sections } from "@/lib/variables";
import SocialIcons from "@/components/common/social-icons";
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
  isOpen: boolean;
  onClose: () => void;
};

const sectionIcons = {
  about: User,
  experience: Briefcase,
  education: GraduationCap,
  projects: FolderGit2,
  "problem-solving": Code2,
  contact: Mail,
};

export default function MobileSidebarMenu({
  activeSection,
  scrollToSection,
  isOpen,
  onClose,
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

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar Drawer - Centered */}
      <div
        className={`lg:hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[90vh] max-h-[700px] w-80 max-w-[85vw] bg-slate-900 shadow-2xl z-50 rounded-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="p-6 flex flex-col h-full overflow-y-auto">
          {/* Header */}
          <div className="mb-8">
            <h4 className="py-2">
              <span className="underline p-1 text-teal-300">
                Assalamu-alikum
              </span>{" "}
              , i am
            </h4>
            <h1 className="text-3xl font-bold tracking-tight text-slate-200">
              Touhidul Islam
            </h1>
            <h2 className="mt-1 text-base font-medium tracking-tight text-slate-200">
              Software Engineer
            </h2>
            <p className="mt-1 flex items-center gap-1 text-slate-400">
              <MapPin className="h-4 w-4" /> Dhaka, Bangladesh
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="In-page jump links" className="nav flex-1">
            <ul className="w-full">
              {sections.map((s) => {
                const Icon = sectionIcons[s.id as keyof typeof sectionIcons];
                const isActive = activeSection === s.id;
                const isHovered = hoveredSection === s.id;

                return (
                  <li key={s.id} className="relative">
                    <button
                      className="group relative flex items-center py-3 w-full transition-all duration-300 ease-out overflow-hidden"
                      onClick={() => handleNavClick(s.id)}
                      onMouseMove={(e) => handleMouseMove(e, s.id)}
                      onMouseLeave={() => setHoveredSection(null)}
                    >
                      {/* Active Background - Static */}
                      {isActive && (
                        <span className="absolute inset-0 -left-4 right-0 bg-gradient-to-r from-teal-500/20 via-teal-400/10 to-transparent rounded-md" />
                      )}

                      {/* Sliding Background for hover */}
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
                              ? "w-12 bg-teal-300"
                              : "w-6 bg-slate-600"
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

          {/* Social Icons */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  );
}
