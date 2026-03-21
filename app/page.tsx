// import ProjectCard from "@/components/ProjectCard";
// import projects from "@/data/projects.json";
// export default function Home() {
//   return (
//     <main className="min-h-screen bg-black text-white p-10">
//       <section id="projects">
//         <h1 className="text-4xl font-bold mb-10">My Projects</h1>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <ProjectCard key={project.slug} project={project} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
import ProjectCard from "@/components/ProjectCard";
import Hero from "@/components/Hero";
import projects from "@/data/projects.json";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import TestimonialCard from "@/components/TestimonialCard";
import testimonials from "@/data/testimonials.json";
import Contact from "@/components/Contact";

async function getAboutMdx() {
  const filePath = path.join(process.cwd(), "content", "site", "about.mdx");

  const file = await fs.readFile(filePath, "utf8");
  const { content } = matter(file);

  return content;
}

export default async function Home() {
  const aboutContent = await getAboutMdx();

  return (
    <main className="min-h-screen bg-black text-white">
      <Hero>
        <MDXRemote source={aboutContent} />
      </Hero>

      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 pb-16 scroll-mt-24 text-center"
      >
        <h2 className="mb-10 text-4xl font-bold ">Projects</h2>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section
        id="testimonials"
        className="mx-auto max-w-6xl px-6 pb-16 scroll-mt-24 text-center"
      >
        <h2 className="mb-10 text-4xl font-bold">Testimonials</h2>

        <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.company}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </section>
      <Contact />
    </main>
  );
}
