"use client";

import TechStackSection from "./tech-stack";

export default function AboutSection() {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {/* About Content */}
        <div className="w-full">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only p-4">
            About
          </h2>
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed">
              I turn coffee ☕ and code 💻 into slick, bug-free web magic.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Currently leveling up at <span className="underline">Upay</span>{" "}
              UCB Fintech Company Limited, making interfaces fast, shiny, and
              just a bit magical. Outside work exploring new ideas and building
              funky creations.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
       
        <TechStackSection />
      </div>
    </div>
  );
}
