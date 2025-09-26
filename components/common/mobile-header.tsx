"use client";
import { Menu, X } from "lucide-react";
import { sections } from "@/lib/variables";
import ThemeToggleCorner from "@/components/common/theme-toggle-corner";

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
  scrollToSection: (id: string) => void;
  activeSection: string;
};

export default function MobileHeader({
  isOpen,
  toggleMenu,
  scrollToSection,
  activeSection,
}: Props) {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={toggleMenu}
          className="mobile-menu-button p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <ThemeToggleCorner />
      </div>

      {isOpen && (
        <div className="mobile-menu absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md border-b border-slate-700 shadow-xl">
          <div className="px-4 py-4">
            <nav className="space-y-2">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === s.id
                      ? "bg-teal-400/20 text-teal-300 border border-teal-400/30"
                      : "text-slate-300 hover:text-slate-100 hover:bg-slate-800/50"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
