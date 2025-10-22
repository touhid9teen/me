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
    period: "Aug 2024 — Present",
    title: "Software Engineer",
    title2: "Software Engineer Intern",
    company: "উপায় (UCB Fintech Company Limited)",
    location: "Gulshan, Dhaka",
    description: [
      "Worked on UCB Super App projects including financial solutions like UClick and UNET, fixing issues and implementing new features for high-performance fintech applications.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django REST Framework",
      "PostgreSQL",
    ],
  },
  {
    period: "Sep 2023 — Feb 2024",
    title: "Software Engineer Intern",
    title2: "Geeky Solution (Learnathon 2.0)",
    company: "Vivasoft Limited",
    location: "Remote",
    description: [
      "Learned industry-standard coding practices while developing components, layouts, and functionalities for Vivasoft's contact management application.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git/GitHub",
    ],
  },
];

export const projects = [
  {
    title: "Amart - A Grocery E-commerce Site",
    description:
      "Full-stack grocery e-commerce app with product management, authentication, and checkout flow.",
    image: "./amart.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
      "Git",
    ],
    live: "https://amart.com.bd",
  },
  {
    title: "UClick Portal - UCB’s Digital Banking App",
    description:
      "Enhanced frontend UI, resolved bugs, and improved performance for UCB’s digital banking portal.",
    image: "./ucb.png",
    technologies: ["Next.js", "Tailwind CSS"],
    live: "https://digital.ucb.com.bd/",
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
