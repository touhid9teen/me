"use client";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-screen-xl px-6 py-8 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          {/* Made with love */}
          <div className="text-sm text-slate-600 dark:text-slate-400 text-center md:text-left">
            Designed & Built by Touhid
            <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              (c) Copyright 2025. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
