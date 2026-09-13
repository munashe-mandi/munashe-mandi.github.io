export function Nav() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black rounded"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="sticky top-0 z-40 bg-zinc-50/90 dark:bg-black/90 backdrop-blur border-b border-zinc-200 dark:border-zinc-800"
      >
        <div className="max-w-3xl mx-auto px-6 py-4 flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:underline underline-offset-4">
            About
          </a>
          <a href="#projects" className="hover:underline underline-offset-4">
            Projects
          </a>
        </div>
      </nav>
    </>
  );
}
