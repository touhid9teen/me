"use client";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectSection from "@/components/sections/project-section";
import EducationsSections from "@/components/sections/educations-sections";
import ProblemSolvingSection from "@/components/sections/problem-solving-section";
import ContactSection from "@/components/sections/contact-section";

export default function MainContent() {
  return (
    <main className="pt-8 lg:w-1/2 lg:py-2">
      <section
        id="about"
        className="min-h-screen flex items-center justify-center mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <AboutSection />
      </section>
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <ExperienceSection />
      </section>
      <section
        id="education"
        className="min-h-screen flex items-center justify-center mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <EducationsSections />
      </section>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <ProjectSection />
      </section>
      <section
        id="problem-solving"
        className="min-h-screen flex items-center justify-center mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <ProblemSolvingSection />
      </section>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <ContactSection />
      </section>
    </main>
  );
}
