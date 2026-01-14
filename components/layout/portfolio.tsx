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
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-[999] pointer-events-none transition-all duration-300 ${
          hideHeader
            ? "opacity-0 translate-y-[-100%]"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex justify-between items-center p-5">
          <div className="pointer-events-auto">
            <MobileMenuButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isOpen={isMobileMenuOpen}
            />
          </div>
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

      {/* Main Content Wrapper */}
      <div className="w-full pt-12 md:pt-20 lg:pt-0">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid w-full grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-5">
            {/* Desktop Sidebar - Fixed width, takes 1 column */}
            <div className="hidden lg:flex lg:col-span-1 lg:flex-col">
              <DesktopSidebar
                activeSection={activeSection}
                scrollToSection={scrollToSection}
              />
            </div>

            {/* Main Content - Responsive, takes remaining columns */}
            <div className="w-full lg:col-span-4">
              <MainContent />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Utilities */}
      <WhatsAppChat onToggle={(open) => setHideHeader(open)} />
      <ScrollToTopButton visible={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  );
}