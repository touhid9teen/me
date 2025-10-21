// hooks/use-active-section.ts
"use client";
import { useEffect, useState } from "react";
import { sections } from "@/lib/variables";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + window.innerHeight / 3;

          // Loop through sections from bottom to top
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i].id);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionBottom = sectionTop + section.offsetHeight;

              // Check if scroll position is within this section
              if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
              ) {
                setActiveSection(sections[i].id);
                break;
              }
              // If we're past all sections, set the last one
              if (i === sections.length - 1 && scrollPosition >= sectionTop) {
                setActiveSection(sections[i].id);
                break;
              }
            }
          }

          isScrolling = false;
        });
        isScrolling = true;
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { activeSection, setActiveSection };
}
