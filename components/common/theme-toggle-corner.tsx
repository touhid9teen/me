"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggleCorner() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`rounded-full p-2 md:p-3 border backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110
        ${
          isDark
            ? "bg-slate-900/90 border-slate-700 text-teal-300"
            : "bg-white/90 border-slate-200 text-teal-600"
        }`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4 " /> : <Moon className="h-4 w-4 " />}
    </button>
  );
}
