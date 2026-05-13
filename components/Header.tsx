import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="site-logo">
          Alan Hernandez
        </Link>

        <div className="site-header-right">
          <nav className="site-nav" aria-label="Primary navigation">
            <Link href="/#projects" className="site-nav-link">
              Projects
            </Link>
            <Link href="/#contact" className="site-nav-link">
              Contact
            </Link>
          </nav>

          <a href="mailto:alan23bh@gmail.com" className="site-header-cta">
            Email Me
          </a>
        </div>
      </div>
    </header>
  );
}
