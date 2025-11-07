"use client";

import { MapPin } from "lucide-react";
import TechStackSection from "../common/tech-stack";

export default function AboutSection() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {/* About Content */}
        <div className="w-full lg:grid lg:grid-cols-5">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only p-4">
              About
            </h2>
            {/* Header */}
            <div className="mb-8  lg:sr-only">
              <h4 className="py-2">
                <span className=" p-1 text-slate-200">Hey there,</span> I am
              </h4>
              <h1 className="text-3xl font-bold tracking-tight text-slate-200">
                Touhidul Islam
              </h1>
              <h2 className="mt-1 text-base font-medium tracking-tight text-slate-200">
                Software Engineer
              </h2>
              <p className="mt-1 flex items-center gap-1 text-slate-400">
                <MapPin className="h-4 w-4" /> Dhaka, Bangladesh
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-base sm:text-lg leading-relaxed">
                I turn coffee ☕ and code 💻 into slick, bug-free web magic.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Currently leveling up at{" "}
                <span className="underline text-teal-300">Upay</span> UCB
                Fintech Company Limited, making interfaces fast, shiny, and just
                a bit magical. Outside work exploring new ideas and building
                funky creations.
              </p>
            </div>
            {/* Tech Stack */}

            <TechStackSection />
          </div>
        </div>
      </div>
    </div>
  );
}
