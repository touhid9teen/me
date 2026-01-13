"use client";
import SocialIcons from "../common/social-icons";
import { Button } from "../ui/button";

export default function ContactSection() {
  return (
    <div className="w-full space-y-12">
       <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-0 py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-teal-500/30 transition-all duration-300">
        <p
          className="mb-8 text-xl md:text-3xl font-bold leading-tight 
          text-slate-900 dark:text-slate-100 text-center 
           w-full max-w-lg"
        >
          Want to start a new project? <br />
          <span className="text-slate-500 dark:text-slate-400 font-medium text-lg md:text-xl mt-2 block">Or just say hello.</span>
        </p>

        <div className="w-full flex justify-center scale-110">
          <SocialIcons />
        </div>
        
        
      </div>
    </div>
  );
}
