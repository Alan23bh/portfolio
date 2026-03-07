import Link from "next/link";
import { Project } from "@/types/project";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="flex flex-col border border-gray-700 rounded-xl p-5 bg-neutral-900 hover:border-green-400 transition h-full hover:-translate-y-1 hover:shadow-lg">
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>
      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs border border-green-500 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mt-auto">
        <a
          href={project.live}
          target="_blank"
          className="text-sm border px-3 py-1 rounded hover:bg-green-500 hover:text-black"
        >
          View
        </a>

        <Link
          href={`/projects/${project.slug}`}
          className="text-sm border px-3 py-1 rounded hover:bg-green-500 hover:text-black"
        >
          Case Study
        </Link>
      </div>
    </div>
  );
}
