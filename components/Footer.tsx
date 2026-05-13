import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="site-footer-brand">
          <p className="site-footer-name">Alan Hernandez</p>
          <p className="site-footer-role">Front-end Developer</p>
        </div>

        <nav className="site-footer-nav" aria-label="Footer navigation">
          <a href="mailto:alan23bh@gmail.com" className="site-footer-link">
            Email
          </a>
          <a
            href="https://github.com/Alan23bh"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alan-hernandez-aa8458326/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-link"
          >
            LinkedIn
          </a>
          <Link href="/#projects" className="site-footer-link">
            Projects
          </Link>
        </nav>
      </div>

      <div className="container site-footer-bottom">
        <p>
          © 2026 Alan Hernandez. Built with Next.js, React, TypeScript, and
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
