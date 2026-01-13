"use client";

import { dummyBlogs } from "@/lib/variables";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

export default function BlogSection() {
  return (
    <div className="w-full space-y-8">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
          Latest Writings
        </h2>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="grid gap-6">
        {dummyBlogs.map((blog) => (
          <a
            key={blog.id}
            href={blog.link}
            className="group relative block p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-teal-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {blog.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {blog.readTime}
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-teal-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              {blog.title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
              {blog.summary}
            </p>

            <div className="flex gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/20 rounded-full border border-teal-100 dark:border-teal-900/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
