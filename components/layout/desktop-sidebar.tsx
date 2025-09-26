"use client";
import { sections } from "@/lib/variables";
import SocialIcons from "@/components/common/social-icons";
import ThemeToggleCorner from "@/components/common/theme-toggle-corner";

type Props = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

export default function DesktopSidebar({
  activeSection,
  scrollToSection,
}: Props) {
  return (
    <header className="hidden lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Touhidul Islam
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Fontend Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          I build fast, accessible, and pixel-perfect web experiences with a
          focus on UX, scalability, and clean code.
        </p>
        <ThemeToggleCorner />

        <nav aria-label="In-page jump links" className="nav">
          <ul className="mt-16 w-max">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  className={`group flex items-center py-3 ${
                    activeSection === s.id ? "active" : ""
                  }`}
                  onClick={() => scrollToSection(s.id)}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all ${
                      activeSection === s.id
                        ? "w-16 bg-slate-200"
                        : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-300"
                    }`}
                  />
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                      activeSection === s.id
                        ? "text-slate-200"
                        : "text-slate-500 group-hover:text-slate-200"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <SocialIcons />
    </header>
  );
}
