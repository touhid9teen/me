"use client";
import { problemSolvingData } from "@/lib/variables";
import { ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function ProblemSolvingSection() {
  return (
    <div className="w-full">
      <h2 className="mb-8 text-xl font-bold uppercase tracking-widest text-slate-800 dark:text-slate-100 lg:sr-only">
        Problem Solving
      </h2>

      <ol className="group/list">
        {problemSolvingData.map((achievement, index) => (
          <li key={index} className="group relative transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
           <div className="relative mb-8 sm:mb-12 grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-6 md:gap-8 lg:p-6 lg:rounded-xl lg:hover:bg-transparent lg:hover:shadow-md lg:hover:border-slate-300 lg:dark:hover:bg-slate-800/40 lg:dark:hover:border-slate-700/50 overflow-hidden border border-transparent">
              
              <header className="z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:col-span-2">
                {achievement.rating}
              </header>

              <div className="z-10 sm:col-span-6 min-w-0">
                <h3 className="font-semibold leading-snug text-slate-800 dark:text-slate-100">
                  <div>
                    <Link
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline font-bold leading-tight hover:text-teal-700 dark:hover:text-teal-300 focus-visible:text-teal-700 focus-visible:dark:text-teal-300 group/link text-base transition-colors"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>{achievement.platform}</span>
                      <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                    </Link>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm mt-1 font-medium">
                    Max Rating: {achievement.maxRating || achievement.solved} •{" "}
                    {achievement.contests} Contests
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                  {achievement.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li>
                    <Badge
                      variant="secondary"
                      className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200 dark:bg-teal-400/10 dark:text-teal-300 dark:hover:bg-teal-400/20 text-xs px-2.5 py-1 rounded-full border dark:border-teal-500/10 transition-colors font-mono font-medium"
                    >
                      Algorithms
                    </Badge>
                  </li>
                  <li>
                    <Badge
                      variant="secondary"
                       className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200 dark:bg-teal-400/10 dark:text-teal-300 dark:hover:bg-teal-400/20 text-xs px-2.5 py-1 rounded-full border dark:border-teal-500/10 transition-colors font-mono font-medium"
                    >
                      Data Structures
                    </Badge>
                  </li>
                  <li>
                    <Badge
                      variant="secondary"
                       className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200 dark:bg-teal-400/10 dark:text-teal-300 dark:hover:bg-teal-400/20 text-xs px-2.5 py-1 rounded-full border dark:border-teal-500/10 transition-colors font-mono font-medium"
                    >
                      Problem Solving
                    </Badge>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
