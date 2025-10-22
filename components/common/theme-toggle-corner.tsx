"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggleCorner() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-6 z-50">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-slate-300 dark:bg-slate-800 text-black dark:text-white p-2 md:p-3 rounded-full shadow-md border-2 border-slate-400 dark:border-slate-600 hover:scale-110 transition-all"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4 md:h-5 md:w-5" />
        ) : (
          <Moon className="h-4 w-4 md:h-5 md:w-5" />
        )}
      </button>
    </div>
  );
}
