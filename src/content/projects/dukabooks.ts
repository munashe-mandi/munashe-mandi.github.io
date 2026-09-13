import { Project } from "@/types/project";

export const dukabooks: Project = {
  slug: "dukabooks",
  title: "DukaBooks",
  shortDescription:
    "Offline-first business management app for small businesses - inventory, sales, credit tracking, and reporting.",
  status: "In Development",
  featured: true,
  technologies: ["React Native", "Expo", "TypeScript", "Expo Router", "SQLite"],
  caseStudy: {
    problem:
      "Small business owners in emerging markets often track inventory, sales, and customer credit by hand - notebooks or memory. It's slow and error-prone, and most existing solutions assume reliable internet or aren't built for how these businesses actually operate.",
    context:
      "I was running a small perfume business and tracking inventory and credit sales in a notebook myself. DukaBooks started from that specific, personal frustration rather than a hypothetical market gap.",
    solution:
      "An offline-first React Native app with a layered architecture (Screen -> Hook -> Service -> Repository -> SQLite) so the app works fully without a network connection - every read and write goes to local SQLite first. I moved off an originally planned Firebase/Firestore backend specifically because offline-first correctness mattered more than real-time sync for this use case.",
    keyFeatures: [
      "Inventory, Sales, Customers, and Credit Ledger tracking",
      "Expense tracking with full CRUD",
      "Dashboard and reports, including custom date-range reporting",
      "Authentication with session persistence and route protection",
      "Adaptive light/dark theming (two custom color systems)",
    ],
    architecture:
      "Screen -> Hook -> Service -> Repository -> SQLite, with expo-sqlite for local storage and idempotent CREATE TABLE IF NOT EXISTS migrations rather than a full versioned migration system - a deliberate scope decision for V1.",
    engineeringChallenges: [
      "Multi-tenant data isolation: an internal audit found that while Auth and Inventory correctly scoped data by business, Sales, Customers, Payments, Dashboard, and Reports did not - a critical bug that would have silently mixed data across businesses on the same device. Caught before release via a dedicated isolation audit, not by a user report.",
      "React effect ordering bug where session-restore ran before the database migration effect on first launch, because child effects commit before parent effects - fixed by sequencing migrations synchronously before auth restore.",
    ],
    technicalDecisions: [
      {
        decision: "SQLite over Firebase",
        reasoning:
          "Offline reliability was a core requirement, not a nice-to-have - local-first storage removed an entire class of connectivity-dependent failure modes.",
      },
      {
        decision: "Static-salt SHA-256 password hashing (no per-user salt, no key-stretching)",
        reasoning:
          "Accepted as an appropriate V1 tradeoff for a local, offline-only threat model where the app has no server attack surface - explicitly flagged as production-hardening debt (per-user salt + bcrypt/PBKDF2/argon2) before any wider release.",
      },
    ],
    results:
      "Core modules (Inventory, Sales, Customers, Credit Ledger, Expenses, Dashboard, Reports, theming, Authentication) are functionally complete. The cross-business data isolation fix is in progress and is the current gating item before this is safe to run with more than one business on a device.",
  },
};
