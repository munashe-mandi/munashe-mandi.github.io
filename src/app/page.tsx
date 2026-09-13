import { siteConfig } from "@/content/site-config";
import { projects } from "@/content/projects";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black">
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
            className="underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
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
      <section className="max-w-3xl mx-auto w-full px-6 py-16 border-t border-zinc-200 dark:border-zinc-800">
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
      </section>

      {/* Featured Projects */}
      <section className="max-w-3xl mx-auto w-full px-6 py-16 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl font-semibold mb-6 text-black dark:text-zinc-50">
          Featured Projects
        </h2>
        <div className="space-y-12">
          {featuredProjects.map((project) => (
            <div key={project.id}>
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2">
                {project.headline}
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="text-sm underline underline-offset-4"
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
