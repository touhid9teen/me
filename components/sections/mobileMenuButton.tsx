"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

type Props = {
  onClick: () => void;
  isOpen: boolean;
};

export default function MobileMenuButton({ onClick, isOpen }: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering until theme is resolved to prevent SSR mismatch
  if (!mounted) return null;

  const isDark = theme === "dark";

  // Classes & colors tuned for good contrast in each theme
  const outerBgClass = isDark
    ? "bg-slate-800/90 border border-slate-700"
    : "bg-white/92 border border-gray-200 shadow-sm";

  const glowInnerA = isDark ? "bg-teal-400/20" : "bg-teal-600/12";
  const glowInnerB = isDark ? "bg-teal-400/10" : "bg-teal-600/08";
  const iconColorClass = isDark ? "text-teal-300" : "text-teal-600";

  return (
    <button
      onClick={onClick}
      className={`lg:hidden p-3 w-8 h-8
    ${outerBgClass}
    backdrop-blur-sm rounded-full shadow-lg
    hover:scale-110 transition-all duration-300
    relative overflow-hidden group flex items-center justify-center`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {/* Teal subtle glow layers */}
      <div className="absolute inset-0 rounded-full pointer-events-none">
        <div
          className={`absolute inset-2 rounded-full ${glowInnerA} blur-sm opacity-70 group-hover:opacity-90 transition-opacity duration-300`}
        />
        <div
          className={`absolute inset-1 rounded-full ${glowInnerB} animate-pulse opacity-60 pointer-events-none`}
        />
      </div>

      {/* Icon with transition */}
      <div className="relative z-10 w-4 h-4 flex items-center justify-center">
        <Menu
          className={`h-4 w-4 ${iconColorClass} transition-all duration-300 absolute ${
            isOpen
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <X
          className={`h-4 w-4 ${iconColorClass} transition-all duration-300 absolute ${
            isOpen
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
          }`}
        />
      </div>
    </button>
  );
}
