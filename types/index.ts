export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
  coursework: string[];
  honors?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface NavItem {
  name: string;
  href: string;
}
