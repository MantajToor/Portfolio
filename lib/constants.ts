import type {
  Project,
  SkillCategory,
  Experience,
  Education,
  SocialLink,
  NavItem,
} from "@/types";

/* ─────────────────────────────────────────────
   Personal Info  — replace with your own!
   ───────────────────────────────────────────── */

export const personalInfo = {
  name: "Mantaj Toor",
  title: "Full-Stack Developer",
  tagline: "From localhost to production - shipping products that work",
  email: "mantaj2121@gmail.com",
  location: "Toronto, ON",
  resumeUrl: "/resume.pdf",
  about: `I'm a Computer Science student at Queen's University with a specialization in Fundamental Computation. My experience spans full-stack development, artificial intelligence and software quality assurance`,
};

/* ── Navigation ── */

export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Profile", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Quests", href: "#projects" },
  { name: "Log", href: "#experience" },
  { name: "Training", href: "#education" },
  { name: "Message", href: "#contact" },
];

/* ── Social Links ── */

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/yourusername" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  { name: "Twitter", url: "https://x.com/yourusername" },
];

/* ── Stats (shown in About) ── */

export const stats = [
  { label: "Quests", value: "10+", icon: "⚔" },
  { label: "Languages", value: "6+", icon: "📜" },
  { label: "Commits", value: "500+", icon: "⚡" },
  { label: "Potions", value: "∞", icon: "☕" },
];

/* ── Skills ── */

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 70 },
      { name: "SQL", level: 75 },
      { name: "Rust", level: 50 },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Spring Boot", level: 60 },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 60 },
      { name: "Linux", level: 75 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    name: "Concepts",
    skills: [
      { name: "DSA", level: 85 },
      { name: "System Design", level: 65 },
      { name: "REST APIs", level: 85 },
      { name: "CI / CD", level: 70 },
      { name: "Agile / Scrum", level: 75 },
    ],
  },
];

/* ── Projects ── */

export const projects: Project[] = [
  {
    id: "1",
    title: "Cloud Task Manager",
    description:
      "Full-stack task management app with real-time collaboration, drag-and-drop boards, auth, and team workspaces.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket", "Tailwind"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://taskmanager.example.com",
    featured: true,
  },
  {
    id: "2",
    title: "ML Image Classifier",
    description:
      "Deep learning image classification model trained on custom datasets with a web UI for uploading and classifying images (94% accuracy).",
    technologies: ["Python", "PyTorch", "Flask", "React", "Docker"],
    githubUrl: "https://github.com/yourusername/ml-classifier",
    featured: true,
  },
  {
    id: "3",
    title: "Algorithm Visualizer",
    description:
      "Interactive visualizations for sorting, pathfinding, and graph algorithms — built to help students learn through animation.",
    technologies: ["React", "TypeScript", "D3.js", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/algo-visualizer",
    liveUrl: "https://algoviz.example.com",
    featured: true,
  },
  {
    id: "4",
    title: "Distributed Chat System",
    description:
      "Peer-to-peer encrypted chat application with group chats, file sharing, and end-to-end encryption over a distributed architecture.",
    technologies: ["Go", "gRPC", "React", "WebRTC", "Redis"],
    githubUrl: "https://github.com/yourusername/distributed-chat",
  },
  {
    id: "5",
    title: "Portfolio Website",
    description:
      "This website! A retro RPG-themed portfolio with pixel art styling, quest-board projects, and character-sheet about page.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "#",
  },
  {
    id: "6",
    title: "Budget Tracker API",
    description:
      "RESTful API for personal finance tracking with expense categorization, budget alerts, spending analytics, and full test coverage.",
    technologies: ["Node.js", "Express", "MongoDB", "Jest", "Swagger"],
    githubUrl: "https://github.com/yourusername/budget-api",
  },
];

/* ── Experience ── */

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Software Engineering Intern",
    company: "Tech Company",
    location: "San Francisco, CA",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    description: [
      "Shipped 3 new customer-facing dashboard features, increasing user engagement by 15%",
      "Optimized database queries, reducing API response times by 40%",
      "Collaborated with a cross-functional team of 8 engineers in an Agile environment",
      "Wrote comprehensive unit and integration tests achieving 90% code coverage",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "2",
    title: "Undergraduate Research Assistant",
    company: "University CS Department",
    location: "City, State",
    startDate: "Jan 2025",
    endDate: "May 2025",
    description: [
      "Researched novel approaches to graph neural networks for social network analysis",
      "Implemented and benchmarked 5 GNN architectures using PyTorch Geometric",
      "Co-authored a paper submitted to a top-tier ML conference",
    ],
    technologies: ["Python", "PyTorch", "LaTeX", "Jupyter"],
  },
  {
    id: "3",
    title: "Teaching Assistant — Data Structures",
    company: "University CS Department",
    location: "City, State",
    startDate: "Aug 2024",
    endDate: "Dec 2024",
    description: [
      "Led weekly lab sessions for 30+ students covering trees, graphs, and hash tables",
      "Held office hours and graded assignments with detailed feedback",
      "Created supplementary study materials that improved average exam scores by 12%",
    ],
    technologies: ["Java", "Python"],
  },
];

/* ── Education ── */

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science",
    school: "Your University",
    location: "City, State",
    startDate: "Aug 2022",
    endDate: "May 2026 (Expected)",
    gpa: "3.8 / 4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Systems",
      "Machine Learning",
      "Software Engineering",
      "Computer Architecture",
      "Discrete Mathematics",
    ],
    honors: ["Dean's List (All Semesters)", "CS Department Scholarship"],
  },
];
