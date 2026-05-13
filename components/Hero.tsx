// import Image from "next/image";

// type Props = {
//   children: React.ReactNode;
// };

// export default function Hero({ children }: Props) {
//   return (
//     <section
//       id="about"
//       className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center"
//     >
//       <div className="order-2 md:order-1">
//         <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-400">
//           Web Developer
//         </p>

//         <h1 className="mb-4 text-5xl font-bold tracking-tight text-white">
//           Alan Hernandez
//         </h1>
//         {/* about.mdx */}
//         <div className="mdx mb-8">{children}</div>

//         <div className="flex flex-wrap gap-4">
//           <a
//             href="#projects"
//             className="rounded-lg border border-white px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
//           >
//             Projects
//           </a>

//           <a
//             href="https://github.com/Alan23bh"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-white hover:text-white"
//           >
//             GitHub
//           </a>

//           <a
//             href="https://www.linkedin.com/in/alan-hernandez-aa8458326/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-white hover:text-white"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </div>

//       <div className="order-1 flex justify-center md:order-2 md:justify-end">
//         <div className="overflow-hidden rounded-2xl border border-gray-800 bg-white/5">
//           <Image
//             src="/profile/alan-headshot.png"
//             alt="Alan Hernandez headshot"
//             width={420}
//             height={420}
//             className="h-auto w-[280px] object-cover sm:w-[340px] md:w-[420px]"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";

type Props = {
  featuredProject: Project;
};

export default function Hero({ featuredProject }: Props) {
  return (
    <section id="about" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy-wrap">
          <p className="eyebrow">Front-end developer · Open to work</p>

          <h1 className="hero-title">
            I build polished React interfaces that feel production-ready.
          </h1>

          <p className="hero-copy">
            I specialize in Next.js, React, TypeScript, and modern UI
            development — with a focus on responsive design, clean component
            architecture, and product-minded front-end work that helps teams
            ship better web experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <Link
              href={`/projects/${featuredProject.slug}`}
              className="btn btn-secondary"
            >
              Featured Case Study
            </Link>
          </div>

          <div className="hero-meta">
            <span className="pill">Next.js</span>
            <span className="pill">React</span>
            <span className="pill">TypeScript</span>
            <span className="pill">UI systems</span>
          </div>
        </div>

        <div className="featured-shell">
          <div className="featured-topbar">
            <span />
            <span />
            <span />
          </div>

          <div className="featured-header">
            <p className="featured-label">Featured Project</p>
            <h2 className="featured-title">{featuredProject.name}</h2>
          </div>

          <div className="featured-image-wrap">
            <Image
              src={featuredProject.image}
              alt={featuredProject.name}
              width={1400}
              height={900}
              priority
              className="featured-image"
            />
          </div>

          <p className="featured-copy">{featuredProject.description}</p>

          <div className="featured-tags">
            {featuredProject.tech.slice(0, 4).map((tech) => (
              <span key={tech} className="pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
