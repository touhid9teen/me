"use client";

import { useState, useEffect } from "react";
import {

  Menu,
  X,

} from "lucide-react";


import { WhatsAppChat } from "@/components/whatsapp-chat";
import { Footer } from "@/components/footer";
import { sections } from "@/lib/variables";
import SocialIcons from "@/components/social-icons";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectSection from "@/components/project-section";
import EducationsSections from "@/components/educations-sections";
import ProblemSolvingSection from "@/components/problem-solving-section";
import ContactSection from "@/components/contact-section";
import ThemeToggleCorner from "@/components/theme-toggle-corner";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Intersection Observer for automatic section highlighting
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -80% 0px", // More sensitive detection
      threshold: [0, 0.1, 0.5, 1], // Multiple thresholds for better detection
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the section that's most visible
      let mostVisibleSection = null;
      let maxIntersectionRatio = 0;

      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio > maxIntersectionRatio
        ) {
          maxIntersectionRatio = entry.intersectionRatio;
          mostVisibleSection = entry.target.id;
        }
      });

      // If we found a visible section, update the active section
      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }

      // Fallback: if no section is intersecting, find the one closest to the top
      if (!mostVisibleSection) {
        const sectionIds = sections.map((s) => s.id);
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const element = document.getElementById(sectionIds[i]);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sectionElements: Element[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
        sectionElements.push(element);
      }
    });

    // Additional scroll listener as backup for edge cases
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better detection
      const sectionIds = sections.map((s) => s.id);

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    // Throttle scroll events for performance
    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      sectionElements.forEach((element) => {
        observer.unobserve(element);
      });
      observer.disconnect();
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as Element;
        if (
          !target.closest(".mobile-menu") &&
          !target.closest(".mobile-menu-button")
        ) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset for better positioning
      const offset = 100;
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900 dark:bg-slate-900 text-slate-100 transition-colors duration-300 pb-16 sm:pb-20 md:pb-24 lg:pb-36 xl:pb-40">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md ">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-button p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-slate-200" />
            ) : (
              <Menu className="h-5 w-5 text-slate-200" />
            )}
          </button>

          <ThemeToggleCorner />
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md border-b border-slate-700 shadow-xl">
            <div className="px-4 py-4">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? "bg-teal-400/20 text-teal-300 border border-teal-400/30"
                        : "text-slate-300 hover:text-slate-100 hover:bg-slate-800/50"
                    }`}
                  >
                    <span className="font-medium">{section.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Background Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Mobile Layout - Centered John Doe info */}
              <div className="lg:hidden pt-20 pb-8">
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-slate-200 mb-2">
                    Touhidul Islam
                  </h1>
                  <h2 className="text-lg text-slate-400 mb-4">
                    Fontend Developer
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                    I build fast, accessible, and pixel-perfect web experiences
                    with a focus on UX, scalability, and clean code.
                  </p>
                </div>
              </div>

              {/* Desktop Layout - Original design */}
              <div className="hidden lg:block">
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  Touhidul Islam
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                  Fontend Developer
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-slate-400">
                  I build fast, accessible, and pixel-perfect web experiences
                  with a focus on UX, scalability, and clean code.
                </p>

                <ThemeToggleCorner />
                {/* Navigation - Desktop */}
                <nav className="nav" aria-label="In-page jump links">
                  <ul className="mt-16 w-max">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          className={`group flex items-center py-3 ${
                            activeSection === section.id ? "active" : ""
                          }`}
                          onClick={() => scrollToSection(section.id)}
                        >
                          <span
                            className={`nav-indicator mr-4 h-px transition-all ${
                              activeSection === section.id
                                ? "w-16 bg-slate-200"
                                : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-300"
                            }`}
                          ></span>
                          <span
                            className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                              activeSection === section.id
                                ? "text-slate-200"
                                : "text-slate-500 group-hover:text-slate-200"
                            }`}
                          >
                            {section.label}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Social Links - Desktop */}
            <SocialIcons />
          </header>

          {/* Main Content */}
          <main className="pt-8 lg:w-1/2 lg:py-2">
            {/* About Section */}
            <section
              id="about"
              className="min-h-screen flex items-center justify-center mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <AboutSection />
            </section>

            {/* Experience Section */}
            <section
              id="experience"
              className="min-h-screen flex items-center justify-center mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <ExperienceSection />
            </section>

            {/* Education Section */}
            <section
              id="education"
              className="min-h-screen flex items-center justify-center mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <EducationsSections />
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="min-h-screen flex items-center justify-center mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <ProjectSection />
            </section>

            {/* Problem Solving Section */}
            <section
              id="problem-solving"
              className="min-h-screen flex items-center justify-center mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <ProblemSolvingSection />
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              className="min-h-screen flex items-center justify-center mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <ContactSection />
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Live Chat */}
      <WhatsAppChat />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-14 h-14 bg-slate-800/90 hover:bg-slate-700 border border-slate-600 text-slate-200 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <div className="flex items-center justify-center">
            {/* Upward Arrow Icon */}
            <svg
              className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>

          {/* Animated background effects */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-2 rounded-full bg-teal-400/20 animate-ping opacity-75"></div>
            <div className="absolute inset-1 rounded-full bg-teal-400/10 animate-pulse"></div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      )}
    </div>
  );
}
