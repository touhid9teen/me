"use client";

import { blogPost } from "@/lib/variables";
import { ArrowUpRight } from "lucide-react";

export default function BlogSection() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 font-mono">
      {/* Section Header */}
      <h2 className="text-xl font-bold text-slate-200">all posts</h2>

      <div className="flex flex-col space-y-3">
        {blogPost.map((blog) => (
          <a
            key={blog.id}
            href={blog.link}
            className="group flex items-baseline gap-4 md:gap-8 hover:opacity-100 transition-opacity"
          >
            <span className="shrink-0 w-24 text-sm text-slate-500 font-medium font-sans">
              {blog.date}
            </span>

            <div className="flex items-center gap-2 text-base text-teal-400 group-hover:underline decoration-teal-400/50 underline-offset-4  transition-all">
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="font-medium text-teal-400 dark:text-teal-400 opacity-90 group-hover:opacity-100">
                {blog.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
