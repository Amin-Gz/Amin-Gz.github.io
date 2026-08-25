export type ThemeMode = 'light' | 'dark' | 'system';

export type TabId = 'about' | 'experience' | 'projects' | 'videos' | 'research' | 'stack' | 'cv';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend' | 'Web Application';
  featured?: boolean;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  highlights: string[];
  metricsOrScope?: string;
}

export interface VideoWorkflowChapter {
  timestamp: string;
  title: string;
  description: string;
}

export interface PrivateProjectVideo {
  id: string;
  title: string;
  company: string;
  role: string;
  period: string;
  ndaDisclaimer: string;
  category: 'Enterprise SaaS' | 'Internal ERP' | 'FinTech & Trading' | 'Logistics & Dispatch' | 'Educational Systems';
  tagline: string;
  overview: string;
  uxHighlights: string[];
  technologies: string[];
  metrics?: string;
  duration?: string;
  keyWorkflows: VideoWorkflowChapter[];
  mockupType: 'trading' | 'dispatch' | 'canvas' | 'erp' | 'analytics';
  videoPreviewBadge?: string;
}

export type PublicationTopic = 'All' | 'AI' | 'Optimization' | 'Information Systems' | 'E-Learning';

export interface PublicationItem {
  id: string;
  indexNumber: string;
  title: string;
  persianTitle?: string;
  conference: string;
  year: number;
  pages: number;
  civilicaId: string;
  civilicaUrl: string;
  topics: string[];
  category: 'AI' | 'Optimization' | 'Information Systems' | 'E-Learning';
  abstractSummary: string;
  keyContributions: string[];
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Mobile' | 'Backend' | 'Data' | 'Tools';
  description?: string;
  brandColor?: string;
  experienceLevel?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  note?: string;
}
