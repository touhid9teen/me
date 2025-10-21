"use client";
import { useState, useEffect } from "react";
import { Footer } from "@/components/layout/footer";
import { useActiveSection } from "@/hooks/use-active-section";
import DesktopSidebar from "./desktop-sidebar";
import MainContent from "./main-content";
import ScrollToTopButton from "../common/scroll-to-top-button";
import { WhatsAppChat } from "../common/whatsapp-chat";
import MobileHeader from "../common/mobile-header";

export default function Portfolio() {
  const { activeSection, setActiveSection } = useActiveSection();
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-16 sm:pb-20 md:pb-24 lg:pb-36 xl:pb-40">
      <MobileHeader
        isOpen={isMobileMenuOpen}
        toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <DesktopSidebar
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
          <MainContent />
        </div>
      </div>

      <Footer />
      <WhatsAppChat />
      <ScrollToTopButton visible={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  );
}
