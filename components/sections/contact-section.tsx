"use client";
import { Button } from "../ui/button";

export default function ContactSection() {
  return (
    <div className="w-full">
      {/* Sticky Header (small screens only) */}

      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only p-4">
        Contact
      </h2>

      {/* Main Content */}
      <div className=" px-4 sm:px-0 flex items-center justify-center py-16">
        <p className="mb-8 sm:mb-10 text-xl sm:text-xl md:text-2xl font-medium leading-relaxed text-slate-500 break-words">
          Want to start a new project? <br className="hidden sm:inline" />
          Or just say hello.
        </p>
      </div>
    </div>
  );
}
