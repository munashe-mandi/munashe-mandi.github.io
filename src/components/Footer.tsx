import { siteConfig } from "@/content/site-config";

export function Footer() {
  return (
    <footer className="max-w-3xl mx-auto w-full px-6 py-10 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 flex flex-col sm:flex-row justify-between gap-2">
      <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
      <div className="flex gap-4">
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4"
        >
          GitHub
        </a>
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${siteConfig.links.email}`}
          className="hover:underline underline-offset-4"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
