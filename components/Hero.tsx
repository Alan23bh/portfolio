import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiFigma,
  SiGithub,
} from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";

const techIcons = [
  { icon: SiJavascript, color: "#F7DF1E" },
  { icon: SiTailwindcss, color: "#38BDF8" },
  { icon: SiReact, color: "#61DAFB" },
  { icon: SiNextdotjs, color: "#ffffff" },
  { icon: SiTypescript, color: "#3178C6" },
  { icon: SiFigma, color: "#F24E1E" },
];

const repeatedTechIcons = [
  ...techIcons,
  ...techIcons,
  ...techIcons,
  ...techIcons,
];

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy-wrap">
          <p className="eyebrow">Front-End Developer · Open to Work</p>

          <h1 className="hero-title">Alan Hernandez</h1>

          <p className="hero-subtitle">
            I build polished, responsive interfaces for modern web products.
          </p>

          <p className="hero-copy">
            Front-end developer focused on Next.js, React, TypeScript, and
            product-minded UI. I care about thoughtful layout, clean component
            architecture, and interfaces that feel clear, fast, and refined.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>

            <div className="hero-icon-actions" aria-label="Social links">
              <a
                href="https://github.com/Alan23bh"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon-button"
                aria-label="GitHub"
                title="GitHub"
              >
                <SiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/alan-hernandez-aa8458326/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon-button"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="/Alan_Hernandez_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon-button"
                aria-label="Resume"
                title="Resume"
              >
                <HiOutlineDocumentText />
              </a>
            </div>
          </div>

          <div className="hero-tech-marquee" aria-label="Technologies">
            <div className="hero-tech-track">
              {repeatedTechIcons.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div className="hero-tech-item" key={index}>
                    <Icon
                      className="hero-tech-icon"
                      style={{ color: tech.color }}
                      aria-hidden="true"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hero-photo-shell">
          <div className="hero-photo-card">
            <Image
              src="/profile/alan.jpg"
              alt="Portrait of Alan Hernandez"
              width={720}
              height={860}
              priority
              className="hero-photo"
            />
            <div className="hero-photo-badge">
              <span className="hero-badge-dot" />
              Front-End Developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
