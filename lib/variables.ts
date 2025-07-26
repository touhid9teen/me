export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "problem-solving", label: "Problem Solving" },
  { id: "contact", label: "Contact" },
];

export const experiences = [
  {
    period: "Feb 2025 — PRESENT",
    title: "Software Engineer",
    company: "উপায় (UCB Fintech Company Limited)",
    description:
      "Contributed to frontend development of UClick, collaborating with the Digital Innovation Team of UCB. Focused on building UI components, resolving bugs, and improving performance.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "Aug 2024 — Nov 2024",
    title: "Technology Intern",
    company: "উপায় (UCB Fintech Company Limited)",
    description:
      "Worked on scalable APIs using various authentication methods, applied symmetric/asymmetric encryption, and contributed to microservice-based systems with async task handling and caching strategies.",
    technologies: ["Django", "DRF", "Celery", "Redis", "JWT", "PostgreSQL"],
  },
  {
    period: "Sep 2023 — Feb 2024",
    title: "Frontend Intern (Learnathon 2.0)",
    company: "Vivasoft Limited",
    description:
      "Participated in Geeky Solutions Learnathon 2.0 program. Learned frontend fundamentals and contributed to the Contact Management application through collaborative and individual projects.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
];

export const projects = [
  {
    title: "Amart - A Grocery E-commerce Site",
    description:
      "Designed and developed a full-stack grocery e-commerce web application for the Mirpur DOHS area, featuring product management, authentication, and customer checkout flow.",
    image: "/amart.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
      "Git",
    ],
    // github: "https://github.com/touhid9teen/amart-backend",
    live: "https://amart.com.bd",
    // stars: 0,
  },
  {
    title: "UClick Portal - UCB’s Digital Banking App",
    description:
      "Worked on the frontend UI of UClick Portal to enhance responsiveness and user experience. Handled bug resolving and performance improvements in collaboration with cross-functional teams.",
    image: "/ucb.png",
    technologies: ["Next.js", "Tailwind CSS"],
    // github: "#",
    live: "https://digital.ucb.com.bd/",
    // stars: 0,
  },
];

export const education = [
  {
    period: "Jan 2019 — Sep 2024",
    degree: "Bachelor of Science in Information and Communication Engineering",
    institution: "University of Rajshahi",
    description:
      "Focused on software engineering, networking, and data systems. Participated in various coding contests and development projects during the program.",
    gpa: null,
  },
];

export const problemSolvingData = [
  {
    platform: "Codeforces",
    url: "https://codeforces.com/profile/touhid19",
    rating: "Pupil",
    maxRating: "1366",
    contests: null,
    description:
      "Solved 1400+ problems focusing on data structures and algorithms.",
  },
  {
    platform: "LeetCode",
    url: "https://leetcode.com/touhid19",
    rating: "Max Rating: 1463",
    maxRating: "1463",
    contests: null,
    description:
      "Solved 100+ problems, Focused on consistent problem-solving across data structures, arrays, and optimization techniques.",
  },
  {
    platform: "CodeChef",
    url: "https://www.codechef.com/users/touhid19",
    rating: "3 Star",
    maxRating: "1624",
    contests: null,
    description:
      "Solved 100+ problems with participation in long and short contests, emphasizing optimized algorithmic techniques.",
  },
];
