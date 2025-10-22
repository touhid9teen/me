"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu } from "lucide-react";

type Props = {
  onClick: () => void;
};

export default function MobileMenuButton({ onClick }: Props) {
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
      className={`lg:hidden fixed top-6 left-6 z-[1000] p-3 w-12 h-12
    ${outerBgClass}
    backdrop-blur-sm rounded-full shadow-lg
    hover:scale-110 transition-all duration-300
    relative overflow-hidden group`}
      aria-label="Open menu"
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

      {/* Icon */}
      <Menu
        className={`relative h-6 w-6 z-10 ${iconColorClass} transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
      />
    </button>
  );
}
