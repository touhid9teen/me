import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialIcons() {
  return (
    <ul
      className="flex justify-center lg:justify-start ml-0 mt-8 items-center"
      aria-label="Social media"
    >
      <li className="mr-5 text-xs">
        <a
          className="block hover:text-slate-200"
          href="https://github.com/touhid9teen"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-6 w-6" />
        </a>
      </li>
      <li className="mr-5 text-xs">
        <a
          className="block hover:text-slate-200"
          href="https://www.linkedin.com/in/touhid19/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="h-6 w-6" />
        </a>
      </li>
      <li className="mr-5 text-xs">
        <a
          className="block hover:text-slate-200"
          href="mailto:touhid.ru66@gmail.com"
        >
          <Mail className="h-6 w-6" />
        </a>
      </li>
    </ul>
  );
}
