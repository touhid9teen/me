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
      "Designed UI and implemented frontend/backend functionality, developed secure APIs, integrated database operations, and handled JWT-based authentication.",
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
