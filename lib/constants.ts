import type {
  Project,
  SkillCategory,
  Experience,
  Education,
  SocialLink,
  NavItem,
} from "@/types";

/* ─────────────────────────────────────────────
   Personal Info
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
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

/* ── Social Links ── */

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/MantajToor" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mantaj-toor-677092278/" },
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
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "C/C++", level: 75 },
      { name: "SQL", level: 70 },
      { name: "Java", level: 70 },
      { name: "PHP", level: 65 },
      { name: "Haskell", level: 55 },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express", level: 75 },
      { name: "Flask", level: 75 },
      { name: "FastAPI", level: 65 },
      { name: "Playwright", level: 65 },
    ],
  },
  {
    name: "Developer Tools",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "MySQL", level: 70 },
      { name: "OpenAI API", level: 70 },
      { name: "GitHub Actions", level: 70 },
      { name: "Apache HTTP Server", level: 60 },
    ],
  },
  {
    name: "Concepts",
    skills: [
      { name: "REST APIs", level: 85 },
      { name: "CI / CD", level: 75 },
      { name: "Unit & E2E Testing", level: 80 },
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Software Architecture", level: 70 },
    ],
  },
];

/* ── Projects ── */

export const projects: Project[] = [
  {
    id: "1",
    title: "Library Management System",
    description:
      "REST API with full business logic for catalog management, patron operations, and late fee processing. Includes complete unit and E2E test suites with 80%+ code coverage and automated CI/CD via GitHub Actions.",
    technologies: ["Python", "Flask", "Pytest", "Playwright", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/MantajToor",
    featured: true,
  },
  {
    id: "2",
    title: "The Living Journal — QHacks 2025",
    description:
      "Hackathon project combining a journal-saving feature with AI-powered sentiment analysis. Built with a Node/Express backend, OpenAI API integration, and a responsive React UI with animations.",
    technologies: ["Flask", "React", "JavaScript", "Node.js", "Express", "OpenAI API"],
    githubUrl: "https://github.com/MantajToor",
    featured: true,
  },
  {
    id: "3",
    title: "Solar Energy Forecasting Software",
    description:
      "C++ forecasting tool delivering 7-day solar energy estimates for Canadian cities. Features a custom Linear Regression model with batch gradient descent, a live data pipeline, and a Chart.js dashboard.",
    technologies: ["C++", "Chart.js", "HTTP APIs", "Linear Regression"],
    githubUrl: "https://github.com/MantajToor",
    featured: true,
  },
  {
    id: "4",
    title: "Conference Management Web App",
    description:
      "PHP/MySQL CRUD application for managing conference attendees, sponsors, and sessions. Designed from an ER diagram with foreign keys, indexes, PDO, server-side validation, and a full navbar UI.",
    technologies: ["PHP", "MySQL", "Apache", "HTML", "CSS"],
    githubUrl: "https://github.com/MantajToor",
  },
];

/* ── Experience ── */

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Full Stack Developer",
    company: "Queen's Solar Design Team",
    location: "Kingston, ON",
    startDate: "Sep 2025",
    endDate: undefined,
    description: [
      "Built a C++ solar energy generation forecasting software serving 7-day forecasts for Canadian cities",
      "Integrated data pipeline that fetches 720 historical hours + 168 forecast hours across 2 HTTP calls per request",
      "Implemented a from-scratch Linear Regression model using batch gradient descent with cyclic hour features, returning model R² and solar energy estimates in the API response",
      "Delivered a Chart.js dashboard with client-side controls (panel area/efficiency) that recompute 7-day kWh totals with zero additional API calls",
    ],
    technologies: ["C++", "Chart.js", "HTTP APIs", "Linear Regression"],
  },
  {
    id: "2",
    title: "Operations Intern",
    company: "Mondelez International",
    location: "Brampton, ON",
    startDate: "May 2024",
    endDate: "Aug 2024",
    description: [
      "Managed orders for Amazon and national retailers; verified SKUs and met daily productivity targets",
      "Coordinated tasks for new hires during peak shifts; provided training to maintain 100% shipment accuracy",
    ],
    technologies: ["Microsoft Office Suite"],
  },
  {
    id: "3",
    title: "Member",
    company: "Queen's Cryptography Club",
    location: "Kingston, ON",
    startDate: "Sep 2025",
    endDate: undefined,
    description: [
      "Participated in Capture The Flag competitions to find and exploit security vulnerabilities",
      "Attended weekly meetings to discuss CTF write-ups with peers",
      "Collaborated with an 8-member team to analyze vulnerabilities, exchange tactics, and mentor new members on reverse engineering tools",
    ],
    technologies: ["CTF", "Reverse Engineering", "Security"],
  },
];

/* ── Education ── */

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Computing Honours",
    school: "Queen's University",
    location: "Kingston, ON",
    startDate: "Sep 2023",
    endDate: "Apr 2027",
    gpa: "3.45 / 4.0",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Software Architecture",
      "Software Quality Assurance",
      "Artificial Intelligence",
      "Programming Paradigms",
      "Software Specifications",
    ],
    honors: [],
  },
];
