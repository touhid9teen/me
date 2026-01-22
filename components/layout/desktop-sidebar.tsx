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
import SocialIcons from "../common/social-icons";

type Props = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const sectionIcons = {
  about: User,
  projects: FolderGit2,
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
    sectionId: string,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    setMouseY(y);
    setHoveredSection(sectionId);
  };

  return (
    <div className="sticky top-0 flex flex-col justify-between py-24 max-h-screen">
      {/* Profile Section */}
      <div>
        <div className="flex flex-col gap-6">
          {/* Profile Image */}
          {/* <div className="relative group">
            <div className="absolute -inset-0.5 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-slate-900 dark:border-slate-100 shadow-lg">
              <Image
                src={me}
                alt="Touhidul Islam"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </div> */}

          {/* Profile Info */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-teal-600 dark:text-teal-400 font-mono text-xs tracking-wider">
                HI, I'M
              </span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Touhidul Islam
            </h1>
            <h2 className="mt-1 text-sm font-medium tracking-wide text-slate-600 dark:text-slate-400">
              Software Engineer
            </h2>

            {/* Location and Social */}
            <div className="mt-3 flex flex-col gap-3">
              <p className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-xs font-medium">
                <MapPin className="h-3.5 w-3.5 text-teal-600 dark:text-teal-500 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </p>
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="In-page jump links" className="mt-12">
          <ul className="w-max space-y-1">
            {sections.map((s) => {
              const Icon = sectionIcons[s.id as keyof typeof sectionIcons];
              const isActive = activeSection === s.id;
              const isHovered = hoveredSection === s.id;

              return (
                <li key={s.id}>
                  <button
                    className="group relative flex items-center py-2 px-2 w-full transition-all duration-300 ease-out overflow-hidden rounded-md"
                    onClick={() => scrollToSection(s.id)}
                    onMouseMove={(e) => handleMouseMove(e, s.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    {/* Active Background */}
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-teal-400/10 to-transparent" />
                    )}

                    {/* Hover Background */}
                    {isHovered && !isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-teal-400/5 to-transparent" />
                    )}

                    {/* Content */}
                    <span className="relative flex items-center gap-2 z-10">
                      <span
                        className={`h-px transition-all duration-300 ${
                          isActive || isHovered
                            ? "w-12 bg-teal-400"
                            : "w-6 bg-slate-400"
                        }`}
                      />
                      {Icon && (
                        <Icon
                          className={`h-4 w-4 transition-all duration-300 flex-shrink-0 ${
                            isActive || isHovered
                              ? "text-teal-400"
                              : "text-slate-500"
                          }`}
                        />
                      )}
                      <span
                        className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 whitespace-nowrap ${
                          isActive || isHovered
                            ? "text-teal-400"
                            : "text-slate-600 dark:text-slate-400"
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
    </div>
  );
}
