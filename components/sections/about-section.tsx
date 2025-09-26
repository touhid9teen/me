"use client";

export default function AboutSection() {
  return (
    <div className="w-full max-w-none">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-slate-400">
          I'm a Frontend Developer with strong knowledge of backend technologies
          and a passion for building clean, scalable, and user-focused web
          applications.
        </p>
        <p className="mb-4 text-slate-400">
          Currently, I’m working as a Software Engineer at{" "}
          <a
            href="#"
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          >
            Upay, UCB Fintech Company
          </a>
          , where I contribute to developing modern, high-performance interfaces
          using cutting-edge tools and frameworks.
        </p>
        <p className="text-slate-400">
          Outside of work, I enjoy exploring new technologies, solving problems
          through code, contributing to open-source projects, and continuously
          sharpening my frontend and backend development skills.
        </p>
      </div>
    </div>
  );
}
