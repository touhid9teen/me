"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ConsultationButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isVisible) return null;

  const handleBookConsultation = () => {
    const calendlyUrl = "https://calendly.com/touhid-ru66/30min";
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed bottom-28 right-4 sm:bottom-28 sm:right-4 md:bottom-28 md:right-4 z-40"
      onClick={handleBookConsultation}
    >
      <div
        className="relative bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-3xl w-[240px] sm:w-[280px] md:w-[300px]"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 z-10 w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 border-2 border-white dark:border-gray-800"
          aria-label="Close consultation button"
        >
          <X className="w-3 h-3" />
        </button>

        {/* Card Content */}
        <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 pr-3 sm:pr-4">
          {/* Profile Image with Online Indicator */}
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-green-400 ring-offset-2 ring-offset-white dark:ring-offset-gray-900">
              <Image
                src="/me.jpg"
                alt="Touhid"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            {/* Online Status Indicator */}
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-gray-900 dark:text-white font-semibold text-xs sm:text-sm leading-tight">
              Free Meetup
            </h3>

            {/* Expanded Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <button className="flex items-center gap-1 sm:gap-1.5 text-purple-600 dark:text-purple-400 font-semibold text-[10px] sm:text-xs hover:gap-2 transition-all duration-200 group">
                <span>Book a Slot</span>
                <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Calendly Logo */}
          <div className="flex-shrink-0 hidden sm:block">
            <svg
              width="60"
              height="16"
              viewBox="0 0 120 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-80"
            >
              <circle cx="15" cy="15" r="6" fill="#006BFF" />
              <text
                x="28"
                y="20"
                fontFamily="Arial, sans-serif"
                fontSize="16"
                fontWeight="600"
                fill="#006BFF"
                className="dark:fill-[#4A9EFF]"
              >
                Calendly
              </text>
            </svg>
          </div>
        </div>

        {/* Bottom Border Accent */}
        <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-b-2xl" />
      </div>
    </div>
  );
}
