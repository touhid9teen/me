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
    <div className="fixed top-0 right-0 w-[100px] h-[100px] bg-slate-300 dark:bg-slate-800 rounded-bl-full z-50 flex items-start justify-end p-3 shadow-md">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-white dark:bg-black text-black dark:text-white p-2 rounded-full hover:scale-110 transition-all"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
