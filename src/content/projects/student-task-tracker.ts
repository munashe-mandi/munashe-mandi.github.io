import { Project } from "@/types/project";

export const studentTaskTracker: Project = {
  slug: "student-task-tracker",
  title: "Student Task Tracker",
  shortDescription:
    "A browser-based dashboard for tracking assignments, deadlines, and priorities.",
  status: "Archived",
  featured: true,
  technologies: ["JavaScript", "HTML", "CSS"],
  repoUrl: "https://github.com/munashe-mandi/student-task-tracker",
  liveUrl: undefined,
  caseStudy: {
    problem:
      "Students juggling multiple classes lose track of deadlines and priorities, especially without a quick way to see what's overdue at a glance.",
    context:
      "This was my first project pushed to GitHub - built in vanilla JavaScript before I'd worked with any framework, focused on learning DOM manipulation and client-side state by hand.",
    solution:
      "A single-page dashboard, built with plain JavaScript, HTML, and CSS, no framework or build tooling. It displays assignments with priority levels and due dates, calculates daily completion progress, and flags overdue items.",
    keyFeatures: [
      "Daily progress percentage and task counts (total / completed / pending / overdue)",
      "Priority levels (High / Medium / Low) with visual tagging",
      "Sorting by due date, priority, or title",
      "Filtering by status and priority",
      "Quick assignment creation with deadline and priority",
    ],
    architecture:
      "A single static page - no framework, no build step, state held directly in the DOM.",
    results:
      "A completed, functional first project that shows the fundamentals - DOM manipulation, event handling, UI state - without relying on a framework to do it for you. Tasks don't persist between sessions, which is the clearest marker of how early this was in my development: the next real skill to add would be storage, whether that's localStorage or a backend.",
  },
};
