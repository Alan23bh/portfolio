import { Testimonial } from "@/types/testimonial";

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <article className="rounded-2xl border border-gray-800 bg-white/5 p-6">
      <p className="mb-6 text-base leading-7 text-gray-300">
        “{testimonial.quote}”
      </p>

      <div>
        <p className="font-semibold text-white">{testimonial.name}</p>
        <p className="text-sm text-gray-400">
          {testimonial.role} · {testimonial.company}
        </p>
      </div>
    </article>
  );
}
