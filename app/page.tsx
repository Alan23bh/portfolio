import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import projects from "@/data/projects.json";
import TestimonialCard from "@/components/TestimonialCard";
import testimonials from "@/data/testimonials.json";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section id="projects" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2 className="section-title">Work shaped by product thinking.</h2>
            <p className="section-copy">
              Front-end work across e-commerce, dashboards, data-heavy UI, and
              responsive product experiences.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section section-testimonials">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Testimonials</p>
            <h2 className="section-title">
              What people said about working with me.
            </h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.slice(0, 2).map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.name}-${testimonial.company}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
