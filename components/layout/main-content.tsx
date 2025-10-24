"use client";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectSection from "@/components/sections/project-section";
import EducationsSections from "@/components/sections/educations-sections";
import ProblemSolvingSection from "@/components/sections/problem-solving-section";
import ContactSection from "@/components/sections/contact-section";
import { SectionWrapper } from "../sections/section-wrapper";

export default function MainContent() {
  return (
    <main className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-6 sm:pt-8 md:pt-10 lg:w-1/2 lg:py-2 lg:px-0">
      <SectionWrapper id="about">
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper id="experience">
        <ExperienceSection />
      </SectionWrapper>

      <SectionWrapper id="education">
        <EducationsSections />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <ProjectSection />
      </SectionWrapper>

      <SectionWrapper id="problem-solving">
        <ProblemSolvingSection />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <ContactSection />
      </SectionWrapper>
    </main>
  );
}
