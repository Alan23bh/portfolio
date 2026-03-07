// import projects from "@/data/projects.json";

// type Props = {
//   params: Promise<{ slug: string }>;
// };

// export default async function ProjectPage({ params }: Props) {
//   const { slug } = await params;

//   const project = projects.find((p) => p.slug === slug);

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <main className="min-h-screen bg-black text-white p-10">
//       <h1 className="text-4xl font-bold mb-6">{project.name}</h1>

//       <p className="text-gray-400 mb-6">{project.description}</p>

//       <div className="flex flex-wrap gap-2 mb-10">
//         {project.tech.map((tech) => (
//           <span
//             key={tech}
//             className="border border-green-500 px-3 py-1 rounded text-sm"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>

//       <a
//         href={project.live}
//         target="_blank"
//         className="border px-4 py-2 rounded hover:bg-green-500 hover:text-black"
//       >
//         View Project
//       </a>
//     </main>
//   );
// }
import projects from "@/data/projects.json";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Callout from "@/components/mdx/Callout";
import MdxImage from "@/components/mdx/MdxImage";

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
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
      <p className="text-gray-400 mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-10">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="border border-green-500 px-3 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mb-10">
        <a
          href={project.live}
          target="_blank"
          className="border px-4 py-2 rounded hover:bg-green-500 hover:text-black"
        >
          View Project
        </a>

        <a
          href={project.github}
          target="_blank"
          className="border px-4 py-2 rounded hover:bg-green-500 hover:text-black"
        >
          GitHub
        </a>
      </div>

      <hr className="border-gray-800 my-10" />

      {mdx ? (
        // <article className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-code:before:content-[''] prose-code:after:content-['']">
        //   <MDXRemote source={mdx.content} />
        // </article>
        <article className="mdx">
          <MDXRemote
            source={mdx.content}
            components={{
              Callout,
              MdxImage,
            }}
          />
        </article>
      ) : (
        <div className="text-gray-400">
          No case study yet. Add: <code>content/projects/{slug}.mdx</code>
        </div>
      )}
    </main>
  );
}
