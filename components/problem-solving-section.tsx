import { problemSolvingData } from "@/lib/variables";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

export default function ProblemSolvingSection() {
  return (
    <div className="w-full max-w-none">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Problem Solving
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {problemSolvingData.map((achievement, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {achievement.rating}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        href={achievement.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        {achievement.platform}
                        <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                      </a>
                    </div>
                    <div className="text-slate-400 text-sm mt-1">
                      Max Rating: {achievement.maxRating || achievement.solved}{" "}
                      • {achievement.contests} Contests
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {achievement.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap">
                    <li className="mr-1.5 mt-2">
                      <Badge
                        variant="secondary"
                        className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20"
                      >
                        Algorithms
                      </Badge>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <Badge
                        variant="secondary"
                        className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20"
                      >
                        Data Structures
                      </Badge>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <Badge
                        variant="secondary"
                        className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20"
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
    </div>
  );
}
