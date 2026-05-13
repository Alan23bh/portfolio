import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Callout from "@/components/mdx/Callout";
import MdxImage from "@/components/mdx/MdxImage";
import ProjectSnapshot from "@/components/mdx/ProjectSnapshot";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getMdxForSlug(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "projects",
    `${slug}.mdx`,
  );

  try {
    const file = await fs.readFile(filePath, "utf8");
    const { content } = matter(file);
    return { content };
  } catch {
    return null;
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="project-page">
        <div className="container project-empty-state">
          <h1 className="section-title">Project not found</h1>
          <p className="section-copy">
            The project you’re looking for doesn’t exist.
          </p>
          <Link href="/#projects" className="btn btn-secondary">
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const mdx = await getMdxForSlug(slug);

  return (
    <main className="project-page">
      <section className="project-hero">
        <div className="container project-hero-grid">
          <div className="project-hero-copy">
            <p className="eyebrow">Case Study</p>

            <h1 className="project-page-title">{project.name}</h1>

            <p className="project-page-summary">{project.description}</p>

            <div className="project-page-tags">
              {project.tech.map((tech) => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-page-actions">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Project
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View GitHub
              </a>
            </div>

            <Link href="/#projects" className="project-back-link">
              Back to selected work
            </Link>
          </div>

          <div className="featured-shell project-hero-shell">
            <div className="featured-topbar">
              <span />
              <span />
              <span />
            </div>

            <div className="featured-image-wrap">
              <Image
                src={project.image}
                alt={project.name}
                width={1600}
                height={1000}
                priority
                className="featured-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {mdx ? (
            <article className="mdx reading">
              <MDXRemote
                source={mdx.content}
                components={{
                  Callout,
                  MdxImage,
                  ProjectSnapshot,
                }}
              />
            </article>
          ) : (
            <div className="reading">
              <p className="section-copy">
                No case study yet. Add <code>content/projects/{slug}.mdx</code>
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
