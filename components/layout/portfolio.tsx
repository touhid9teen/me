"use client";
import { useState, useEffect } from "react";
import { Footer } from "@/components/layout/footer";
import { useActiveSection } from "@/hooks/use-active-section";
import DesktopSidebar from "./desktop-sidebar";

import MainContent from "./main-content";
import ScrollToTopButton from "../common/scroll-to-top-button";
import { WhatsAppChat } from "../common/whatsapp-chat";
import ThemeToggleCorner from "@/components/common/theme-toggle-corner";
import MobileMenuButton from "../sections/mobileMenuButton";
import MobileSidebarMenu from "./mobileSidebarMenu";

export default function Portfolio() {
  const { activeSection, setActiveSection } = useActiveSection();
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setActiveSection(id);
      const offset = 100;
      window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 pb-16 sm:pb-20 md:pb-24 lg:pb-36 xl:pb-40 transition-colors duration-300">
      {/* <header className="fixed top-0 left-0 w-full z-[999] pointer-events-none"> */}
      <header
        className={`fixed top-0 left-0 w-full z-[999] pointer-events-none transition-all duration-300 ${
          hideHeader
            ? "opacity-0 translate-y-[-100%]"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex justify-between items-center p-5">
          {/* Mobile Menu Button */}
          <div className="pointer-events-auto">
            <MobileMenuButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isOpen={isMobileMenuOpen}
            />
          </div>

          {/* Theme Toggle */}
          <div className="pointer-events-auto">
            <ThemeToggleCorner />
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <MobileSidebarMenu
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 ">
        <div
          className="lg:grid lg:grid-cols-5 gap-8
        "
        >
          <DesktopSidebar
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />

          <div className="lg:col-span-3 items-center flex justify-center ">
            <MainContent />
          </div>
        </div>
      </div>
      <Footer />

      <WhatsAppChat onToggle={(open) => setHideHeader(open)} />
      <ScrollToTopButton visible={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  );
}
