import { siteConfig } from "@/content/site-config";
import { projects } from "@/content/projects";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <Nav />
      <div
        id="main-content"
        className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black"
      >
      {/* Hero */}
      <section className="flex flex-col items-start justify-center max-w-3xl mx-auto w-full px-6 py-32 gap-6">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {siteConfig.name}
        </h1>
        <p className="text-xl text-zinc-700 dark:text-zinc-300">
          {siteConfig.positioning}
        </p>
        <div className="flex gap-4 text-sm font-medium">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="underline underline-offset-4"
          >
            Email
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-3xl mx-auto w-full px-6 py-16 border-t border-zinc-200 dark:border-zinc-800"
      >
        <h2 className="text-2xl font-semibold mb-6 text-black dark:text-zinc-50">
          About
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8">
          {siteConfig.about.bio}
        </p>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          <p className="mb-2">
            {siteConfig.about.education.program},{" "}
            {siteConfig.about.education.institution} (
            {siteConfig.about.education.started}–
            {siteConfig.about.education.expectedGraduation})
          </p>
        </div>
        <ul className="mt-4 flex flex-col gap-1 text-sm text-zinc-600 dark:text-zinc-400 list-disc list-inside">
          {siteConfig.about.currentFocus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        className="max-w-3xl mx-auto w-full px-6 py-16 border-t border-zinc-200 dark:border-zinc-800"
      >
        <h2 className="text-2xl font-semibold mb-6 text-black dark:text-zinc-50">
          Featured Projects
        </h2>
        <div className="space-y-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
