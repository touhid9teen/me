"use client";

import { useState, useEffect } from "react";
import { Users } from "lucide-react";

interface VisitorData {
  ip: string;
  timestamp: number;
}

export function Footer() {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Get visitor's IP and track unique visitors
    const trackVisitor = async () => {
      try {
        // Get IP address
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();

        const visitorData: VisitorData = {
          ip: ipData.ip,
          timestamp: Date.now(),
        };

        // Store visitor data in localStorage
        const existingVisitors = JSON.parse(
          localStorage.getItem("portfolioVisitors") || "[]"
        );

        // Check if this IP has visited before (within last 24 hours)
        const existingVisitor = existingVisitors.find(
          (visitor: VisitorData) =>
            visitor.ip === visitorData.ip &&
            Date.now() - visitor.timestamp < 24 * 60 * 60 * 1000
        );

        if (!existingVisitor) {
          // New unique visitor
          const updatedVisitors = [...existingVisitors, visitorData];
          localStorage.setItem(
            "portfolioVisitors",
            JSON.stringify(updatedVisitors)
          );
          setVisitorCount(updatedVisitors.length);
        } else {
          // Existing visitor
          setVisitorCount(existingVisitors.length);
        }
      } catch (error) {
        console.error("Error fetching visitor info:", error);
        // Fallback: use a simple counter
        const fallbackCount =
          Number.parseInt(localStorage.getItem("fallbackVisitorCount") || "0") +
          1;
        localStorage.setItem("fallbackVisitorCount", fallbackCount.toString());
        setVisitorCount(fallbackCount);
      }
    };

    trackVisitor();
  }, []);

  return (
    <footer className="mt-24 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-screen-xl px-6 py-8 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Made with love */}
          <div className="text-sm text-slate-600 dark:text-slate-400 text-center md:text-left">
            Made with ❤️ using React, Next.js, TypeScript & Tailwind CSS
            <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              (c) Copyright 2025 Touhidul Islam. All rights reserved.
            </div>
          </div>

          {/* Unique Visitors Counter */}
          <div className="flex items-center space-x-2 bg-white dark:bg-slate-800 rounded-lg px-4 py-2 border border-slate-200 dark:border-slate-700">
            <Users className="h-4 w-4 text-teal-500" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Unique Visitors
            </span>
            <span className="text-lg font-bold text-teal-600 dark:text-teal-400 font-mono">
              {visitorCount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
