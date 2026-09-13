export interface Project {
  id: string;
  title: string;
  headline: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  caseStudyPath?: string;
}

export const projects: Project[] = [
  {
    id: "dukabooks",
    title: "DukaBooks",
    headline: "Offline-first business management for small retailers",
    description:
      "DukaBooks started because I was tracking my own small perfume business's inventory and credit sales in a notebook and got tired of it. An offline-first business management app built for small retailers who can't afford to lose data when the power goes out. Supports inventory tracking, credit sales, expense management, and SMS-based reporting — all synced peer-to-peer without a server dependency.",
    shortDescription:
      "Offline-first inventory & credit sales app for small retailers",
    technologies: [
      "TypeScript",
      "React Native",
      "SQLite",
      "PouchDB",
      "Node.js",
    ],
    githubUrl: "https://github.com/munashe-mandi/dukabooks",
    featured: true,
    caseStudyPath: "/projects/dukabooks",
  },
];
