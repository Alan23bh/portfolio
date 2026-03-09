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
    const { content, data } = matter(file);
    return { content, data };
  } catch {
    return null;
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return <div>Project not found</div>;

  const mdx = await getMdxForSlug(slug);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-center text-4xl font-bold">{project.name}</h1>
        <p className="mb-6 text-center text-gray-400">{project.description}</p>

        {/* TECH STACKS */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded border border-green-500 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* 2 Buttons */}
        <div className="mb-10 flex justify-center gap-3">
          <a
            href={project.live}
            target="_blank"
            className="rounded border px-4 py-2 hover:bg-green-500 hover:text-black"
          >
            View Project
          </a>

          <a
            href={project.github}
            target="_blank"
            className="rounded border px-4 py-2 hover:bg-green-500 hover:text-black"
          >
            GitHub
          </a>
        </div>

        <hr className="my-10 border-gray-800" />

        {mdx ? (
          <article className="mdx mx-auto max-w-6xl">
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
          <div className="text-gray-400">
            No case study yet. Add: <code>content/projects/{slug}.mdx</code>
          </div>
        )}
      </div>
    </main>
  );
}
