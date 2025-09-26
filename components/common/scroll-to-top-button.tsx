"use client";
import { useTheme } from "next-themes";

type Props = { visible: boolean; scrollToTop: () => void };

export default function ScrollToTopButton({ visible, scrollToTop }: Props) {
  const { theme } = useTheme();

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-14 h-14 
        ${
          theme === "dark"
            ? "bg-slate-800/90 hover:bg-slate-700 border border-slate-600"
            : "bg-white/90 hover:bg-gray-100 border border-gray-300"
        }
        text-slate-800 dark:text-slate-200 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 group`}
      aria-label="Scroll to top"
    >
      <div className="flex items-center justify-center">
        <svg
          className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div>
      <div className="absolute inset-0 rounded-full">
        <div className="absolute inset-2 rounded-full bg-teal-400/20 animate-ping opacity-75"></div>
        <div className="absolute inset-1 rounded-full bg-teal-400/10 animate-pulse"></div>
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
}
