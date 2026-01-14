"use client";
import AboutSection from "@/components/sections/about-section";
import ProjectSection from "@/components/sections/project-section";
import BlogSection from "@/components/sections/blog-section";
import ContactSection from "@/components/sections/contact-section";
import { SectionWrapper } from "./section-wrapper";

export default function MainContent() {
  return (
    <main className="w-full space-y-24 lg:space-y-32">
      <SectionWrapper id="about">
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <ProjectSection />
      </SectionWrapper>

      <SectionWrapper id="blogs">
        <BlogSection />
      </SectionWrapper>

    </main>
  );
}
