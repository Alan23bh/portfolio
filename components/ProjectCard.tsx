import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} className="project-image-link">
        <div className="project-image-frame">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="project-image"
          />
        </div>
      </Link>

      <div className="project-body">
        <div className="project-heading">
          <h3 className="project-title">{project.name}</h3>
          <p className="project-description">{project.description}</p>
        </div>

        <div className="project-tags">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <Link href={`/projects/${project.slug}`} className="text-link">
            Read case study
          </Link>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-link-muted"
          >
            Live site
          </a>
        </div>
      </div>
    </article>
  );
}
