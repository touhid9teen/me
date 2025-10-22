"use client";

import TechStackSection from "./tech-stack";

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="w-full max-w-none">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4 text-lg ">
            I turn coffee ☕ and code 💻 into slick, bug-free web magic.
          </p>
          <p className="text-lg ">
            Currently leveling up at <span className="underline">Upay</span> UCB
            Fintech Company Limited, <br /> making interfaces fast, shiny, and
            just a bit magical.
          </p>
          <p className="text-lg ">
            Outside work: exploring new ideas, playing chess, and building funky
            creations.
          </p>
        </div>
      </div>

      <TechStackSection />
    </div>
  );
}
