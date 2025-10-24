"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialIcons() {
  return (
    <ul
      className="flex justify-center lg:justify-start items-center gap-4"
      aria-label="Social media"
    >
      <li>
        <a
          href="https://github.com/touhid9teen"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-teal-400/10 hover:bg-teal-400/20 
                     transition-colors duration-200 flex items-center justify-center"
        >
          <Github className="h-6 w-6 text-teal-300" />
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/touhid19/"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-teal-400/10 hover:bg-teal-400/20 
                     transition-colors duration-200 flex items-center justify-center"
        >
          <Linkedin className="h-6 w-6 text-teal-300" />
        </a>
      </li>

      <li>
        <a
          href="mailto:touhid.ru66@gmail.com"
          className="p-3 rounded-full bg-teal-400/10 hover:bg-teal-400/20 
                     transition-colors duration-200 flex items-center justify-center"
        >
          <Mail className="h-6 w-6 text-teal-300" />
        </a>
      </li>
    </ul>
  );
}
