"use client";
import SocialIcons from "../common/social-icons";
import { Button } from "../ui/button";

export default function ContactSection() {
  return (
    <section className="w-full">
      {/* Section Heading (mobile only) */}
      <h2
        className="text-sm font-bold uppercase tracking-[0.15em] 
        lg:sr-only p-4"
      >
        Contact
      </h2>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-0 py-20">
        <p
          className="mb-10 text-xl md:text-2xl font-medium leading-relaxed 
          text-slate-400 text-center 
           w-full max-w-lg"
        >
          Want to start a new project? <br />
          Or just say hello.
        </p>

        <div className="w-full flex justify-center">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
