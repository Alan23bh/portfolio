import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" border-t border-gray-800 bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">Alan Hernandez</p>
          <p className="text-sm text-gray-400">Web Developer</p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-gray-400 mt-auto">
          <a
            href="mailto:alan23bh@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>

          <a
            href="https://github.com/Alan23bh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/alan-hernandez-aa8458326/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <Link href="/#projects" className="hover:text-white transition">
            Projects
          </Link>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-8">
        <p className="text-xs text-gray-500">
          © 2026 Alan Hernandez. Built with Next.js, React, TypeScript, and
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
