import { Testimonial } from "@/types/testimonial";

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <article className="testimonial-card">
      <p className="testimonial-quote">“{testimonial.quote}”</p>

      <div className="testimonial-meta">
        <p className="testimonial-name">{testimonial.name}</p>
        <p className="testimonial-role">
          {testimonial.role} · {testimonial.company}
        </p>
      </div>
    </article>
  );
}
