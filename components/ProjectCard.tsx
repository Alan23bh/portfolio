import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { FiEye, FiCode, FiFileText } from "react-icons/fi";
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
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-primary"
          >
            <FiEye size={16} />
            Live Demo
          </a>

          <Link
            href={`/projects/${project.slug}`}
            className="project-link-secondary"
          >
            <FiFileText size={15} />
            Case Study
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-icon"
              aria-label={`${project.name} GitHub repository`}
            >
              <FiCode size={17} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
