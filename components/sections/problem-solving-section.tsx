"use client";
import { problemSolvingData } from "@/lib/variables";
import { ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function ProblemSolvingSection() {
  return (
    <div className="w-full">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only p-4">
        Problem Solving
      </h2>

      <ol className="group/list">
        {problemSolvingData.map((achievement, index) => (
          <li key={index} className="mb-8 sm:mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-6 md:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 p-4 sm:p-6 rounded-md">
              <div
                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block 
  lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
  dark:lg:group-hover:bg-slate-800/50
  lg:group-hover:bg-teal-500/10"
              ></div>

              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {achievement.rating}
              </header>

              <div className="z-10 sm:col-span-6 min-w-0">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <Link
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm sm:text-base break-words"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span className="break-words">
                        {achievement.platform}
                      </span>
                      <ExternalLink className="inline-block h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                    </Link>
                  </div>
                  <div className="text-slate-400 text-xs sm:text-sm mt-1 break-words">
                    Max Rating: {achievement.maxRating || achievement.solved} •{" "}
                    {achievement.contests} Contests
                  </div>
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-normal text-slate-400 break-words">
                  {achievement.description}
                </p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  <li>
                    <Badge
                      variant="secondary"
                      className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 text-xs"
                    >
                      Algorithms
                    </Badge>
                  </li>
                  <li>
                    <Badge
                      variant="secondary"
                      className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 text-xs"
                    >
                      Data Structures
                    </Badge>
                  </li>
                  <li>
                    <Badge
                      variant="secondary"
                      className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 text-xs"
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
