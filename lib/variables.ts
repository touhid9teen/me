export const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "blogs", label: "Blogs" },
  { id: "contact", label: "Contact" },
];

export const dummyBlogs = [
  {
    id: 1,
    title: "Understanding React Server Components",
    summary:
      "A deep dive into how React Server Components work and how they differ from Client Components...",
    date: "Oct 2025",
    readTime: "5 min read",
    link: "#",
    tags: ["React", "Next.js"],
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS for Scalable Design",
    summary:
      "Best practices for using Tailwind CSS in large-scale applications to maintain consistency...",
    date: "Sep 2025",
    readTime: "4 min read",
    link: "#",
    tags: ["CSS", "Tailwind"],
  },
  {
    id: 3,
    title: "Optimizing Web Performance with Next.js",
    summary:
      "Techniques and strategies to improve your Next.js application's performance and Core Web Vitals...",
    date: "Aug 2025",
    readTime: "6 min read",
    link: "#",
    tags: ["Performance", "Next.js"],
  },
];

export const experiences = [
  {
    period: "Aug 2024 — Present",
    title: "Software Engineer",
    title2: "Software Engineer Intern",
    company: "উপায় (UCB Fintech Company Limited)",
    location: "Gulshan, Dhaka",
    link: "https://www.upaybd.com/",
    description: [
      "Developed and optimized core platform features, enhanced performance, and ensured reliability through timely issue resolution.",
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
    link: "https://vivasoftltd.com/",
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
    title: "Amart | Grocery E-commerce Site",
    description:
      "Full-stack e-commerce platform with secure authentication, product management, and order processing.",
    image: ["/me/assets/amart1.png", "/me/assets/amart2.png", "/me/assets/amart3.png"],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
      "React Query",
    ],
    live: "https://amart-dusky.vercel.app/",
    frontend: "https://github.com/touhid9teen/amart",
    backend: "https://github.com/touhid9teen/amart-backend",
  },
  {
    title: "ChronoTask",
    description:
      "Task management application with time tracking, note taking, and Google Drive sync.",
    image: [
      "/me/assets/chronoTask1.png",
      "/me/assets/chronoTask2.png",
      "/me/assets/chronoTask3.png",
      "/me/assets/chronoTask4.png",
      "/me/assets/chronoTask5.png",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    live: "https://chrono-task-kappa.vercel.app/",
    source: "https://github.com/touhid9teen/ChronoTask",
  },
  {
    title: "Alumni Management System ICE-RU",
    description:
      "Web application for managing alumni records, events, and communications for a university department.",
    image: [
      "/me/assets/alumni1.png",
      "/me/assets/alumni2.png",
      "/me/assets/alumni3.png",
      "/me/assets/alumni4.png",
      "/me/assets/alumni5.png",
      "/me/assets/alumni6.png",
    ],
    technologies: ["React", "Tailwind CSS"],
    live: "https://alumni-management-system-ice-ru.vercel.app/",
    source: "https://github.com/touhid9teen/Alumni-Management-System-ICE-RU",
  },
  {
    title: "JSON Tree Explorer",
    description:
      "Tree visualizer that enables users to explore hierarchical data structures.",
    image: ["/me/assets/tree-explorar.png"],
    technologies: ["React", "Tailwind CSS"],
    live: "https://collapsible-tree-explorer.vercel.app/",
    source: "https://github.com/touhid9teen/collapsible-tree-explorer",
  },
  // {
  //   title: "PayMicroservice",
  //   description:
  //     "Microservice-based payment processing system with secure transactions and API integration.",
  //   image: "/images/projects/pay-microservice.png",
  //   technologies: ["Django REST Framework", "PostgreSQL"],
  //   source: "https://github.com/touhid9teen/PayMicroservice",
  // },
  // {
  //   title: "JobPortal",
  //   description:
  //     "Backend API for a job portal connecting candidates and employers, providing secure authentication, job management, application tracking, caching, and task scheduling.",
  //   image: "/images/projects/job-portal.png",
  //   technologies: [
  //     "Django REST Framework",
  //     "PostgreSQL",
  //     "Caching",
  //     "Task Scheduling",
  //   ],
  //   source: "https://github.com/touhid9teen/JobPortal",
  // },
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

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export const welcomeMessages: Message[] = [
  {
    id: "1",
    text: "Hi there! 👋 Welcome to my portfolio!",
    sender: "bot",
    timestamp: new Date(),
  },
  {
    id: "2",
    text: "I'm Touhid's AI assistant. I can help you with:\n• Project inquiries 💼\n• Technical questions 🤔\n• Collaboration opportunities 🤝\n• General information ℹ️",
    sender: "bot",
    timestamp: new Date(),
  },
];

export const quickActions = [
  {
    text: "💼 Discuss a Project",
    message:
      "Hi Touhid! I have a project idea and would like to discuss it with you.",
  },
  {
    text: "🤝 Collaboration",
    message:
      "Hello! I'm interested in collaborating with you on some projects.",
  },
  {
    text: "❓ Ask Questions",
    message:
      "Hi! I have some technical questions about your work and experience.",
  },
  {
    text: "👋 Just Say Hi",
    message: "Hello Touhid! I visited your portfolio and wanted to connect.",
  },
];

export const generateBotResponse = (userText: string): string => {
  const lowerText = userText.toLowerCase();

  if (
    lowerText.includes("project") ||
    lowerText.includes("work") ||
    lowerText.includes("hire")
  ) {
    return "Great! I'd love to discuss your project. Let me connect you directly with Touhid via WhatsApp for detailed discussion. Click the WhatsApp button below! 🚀";
  }

  if (
    lowerText.includes("price") ||
    lowerText.includes("cost") ||
    lowerText.includes("budget")
  ) {
    return "Project costs vary based on complexity and requirements. Let's discuss your specific needs via WhatsApp to provide accurate pricing! 💰";
  }

  if (lowerText.includes("experience") || lowerText.includes("skill")) {
    return "Touhid has 4+ years of experience in full-stack development with React, Node.js, and modern web technologies. Check out the Experience section above! 💪";
  }

  if (lowerText.includes("contact") || lowerText.includes("reach")) {
    return "You can reach Touhid directly via:\n📧 touhid.ru66@gmail.com\n📱 WhatsApp (click button below)\n💼 LinkedIn (check social links)";
  }

  if (
    lowerText.includes("hello") ||
    lowerText.includes("hi") ||
    lowerText.includes("hey")
  ) {
    return "Hello! Nice to meet you! 😊 How can I help you today? Feel free to ask about Touhid's work, projects, or anything else!";
  }

  if (lowerText.includes("thanks") || lowerText.includes("thank you")) {
    return "You're welcome! 😊 Is there anything else I can help you with? Don't hesitate to reach out via WhatsApp for direct communication!";
  }

  // Default response
  return "That's interesting! For detailed discussions about this topic, I'd recommend connecting directly with Touhid via WhatsApp. He'll be able to provide you with comprehensive information! 💬";
};
