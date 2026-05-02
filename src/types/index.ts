export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
}
