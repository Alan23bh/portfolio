import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-shell">
        <Link href="/" className="site-logo">
          Alan Hernandez
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/#projects" className="site-nav-link">
            Projects
          </Link>
          <Link href="/#contact" className="site-nav-link">
            Contact
          </Link>

          <a href="#contact" className="site-header-cta">
            Let’s Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
