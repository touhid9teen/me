"use client";
import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      {/* Sticky Header (small screens only) */}
      <div className="sticky top-0 z-20 -mx-4 mb-6 w-screen bg-slate-900/75 px-4 py-5 backdrop-blur md:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Contact
        </h2>
      </div>

      {/* Main Content */}
      <div className="text-center lg:text-left">
        <p className="mb-10 text-3xl sm:text-4xl font-medium leading-relaxed text-slate-500">
          Want to start a new project? <br className="hidden sm:inline" />
          Or just say hello.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8">
          {/* Location */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-lg sm:text-xl text-slate-200 mb-2">
              Location
            </h4>
            <p className="text-base text-slate-400">Dhaka, Bangladesh.</p>
          </div>

          {/* Resume Button */}
          <a
            href="./July_22_2025_Leatest_Resume_Md_Touhidul_Islam.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="button"
              className="bg-slate-800 text-slate-200 hover:bg-slate-700 transition px-6 py-3"
              variant="outline"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
