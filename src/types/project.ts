export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  status: "In Development" | "Live" | "Archived";
  featured: boolean;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    context: string;
    solution: string;
    keyFeatures: string[];
    architecture?: string;
    engineeringChallenges?: string[];
    technicalDecisions?: { decision: string; reasoning: string }[];
    results: string;
  };
}
