import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-6">
      <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
        Page not found
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="underline underline-offset-4 font-medium"
      >
        Back home
      </Link>
    </div>
  );
}
