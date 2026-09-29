export type SkillCategory =
  | "AI & Machine Learning"
  | "Full Stack"
  | "Mobile"
  | "Databases"
  | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 1-5 proficiency
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  status: "Flagship" | "Shipped" | "Research";
  cover: string;
  images: ProjectImage[];
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  apkUrl?: string;
  paperUrl?: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  overview: string;
  features: string[];
  architecture: string[];
  architectureNote?: string;
  challenges: { problem: string; solution: string }[];
  lessons: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  duration: string;
  status: string;
  coursework: string[];
}

export interface ExperienceEntry {
  title: string;
  organization: string;
  duration: string;
  location: string;
  type: string;
  points: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  rating?: number;
  hasCertificate?: boolean;
}

export interface ResearchResult {
  label: string;
  baseline?: string;
  value: string;
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "steps"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "callout"; title: string; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  cover: string;
  content: BlogBlock[];
}

export interface ResearchPaper {
  slug: string;
  title: string;
  venue: string;
  year: string;
  featured?: boolean;
  status?: "Published" | "In Progress";
  tagline: string;
  abstract: string;
  contributions: string[];
  tech: string[];
  datasets?: string[];
  methodology: string[];
  keyResults: ResearchResult[];
  findings: string[];
  limitations?: string[];
  githubUrl?: string;
  paperUrl?: string;
}
