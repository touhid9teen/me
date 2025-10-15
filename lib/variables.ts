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
    period: "Aug 2024 — PRESENT",
    title: "Software Engineer",
    company: "উপায় (UCB Fintech Company Limited)",
    location: "Gulshan, Dhaka",
    description: [
      "Collaborated with UCB’s Digital Innovation Team to develop and maintain UClick, UClick Backoffice, and the UCB Super App — high-volume, security-focused web applications.",
      "Designed and implemented new feature components based on business requirements while resolving numerous bugs to enhance product stability.",
      "Optimized UI performance, accessibility, and API efficiency, reducing code complexity by 30% and improving readability and maintainability.",
      "Improved overall system performance by 20% by preventing redundant component re-executions and streamlining rendering logic.",
      "Worked on scalable and secure back-end microservices with Django REST Framework, implementing authentication, caching, task scheduling, and optimized API communication to enhance performance and reliability.",
      "Collaborated with designers, frontend/backend engineers, and QA teams to ensure smooth integration and a consistent user experience across platforms.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Django REST Framework",
      "PostgreSQL",
    ],
  },
  {
    period: "Sep 2023 — Feb 2024",
    title: "Frontend Trainee (Learnathon 2.0)",
    company: "Vivasoft Limited",
    location: "Remote",
    description: [
      "Learned industry-standard frontend coding practices in JavaScript, React, and Next.js during the learning phase, with guidance from assigned Vivasoft frontend engineers.",
      "Worked on assigned projects within set timelines, applying best practices in clean code, version control, and agile workflows.",
      "Contributed individually to the development of the Contact Management Application, implementing new features, fixing bugs, and ensuring high-quality deliverables.",
      "Collaborated with team members to integrate components, review code, and follow agile development processes.",
    ],
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
    image: "./amart.png",
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
    image: "./ucb.png",
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
