// import { Testimonial } from "@/types/testimonial";

// type Props = {
//   testimonial: Testimonial;
// };

// export default function TestimonialCard({ testimonial }: Props) {
//   return (
//     <article className="rounded-2xl border border-gray-800 bg-white/5 p-6">
//       <p className="mb-6 text-base leading-7 text-gray-300">
//         “{testimonial.quote}”
//       </p>

//       <div>
//         <p className="font-semibold text-white">{testimonial.name}</p>
//         <p className="text-sm text-gray-400">
//           {testimonial.role} · {testimonial.company}
//         </p>
//       </div>
//     </article>
//   );
// // }
// "use client";

// import { useState } from "react";
// import { Testimonial } from "@/types/testimonial";

// type Props = {
//   testimonial: Testimonial;
// };

// export default function TestimonialCard({ testimonial }: Props) {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <article className="self-start rounded-2xl border border-gray-800 bg-white/5 p-6 text-left transition-all duration-300">
//       <div className="relative">
//         <p
//           className={`text-base leading-7 text-gray-300 transition-all duration-300 ${
//             expanded ? "" : "line-clamp-5"
//           }`}
//         >
//           “{testimonial.quote}”
//         </p>

//         {!expanded && (
//           <div className="pointer-events-none absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-zinc-950/90 to-transparent" />
//         )}
//       </div>

//       {/* Read More / Less */}
//       <button
//         onClick={() => setExpanded(!expanded)}
//         className="mt-3 text-sm text-green-400 hover:underline"
//       >
//         {expanded ? "Read less" : "Read more"}
//       </button>

//       <div className="mt-4">
//         <p className="font-semibold text-white">{testimonial.name}</p>
//         <p className="text-sm text-gray-400">
//           {testimonial.role} · {testimonial.company}
//         </p>
//       </div>
//     </article>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import { Testimonial } from "@/types/testimonial";

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("11.5rem");
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (expanded) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("11.5rem");
    }
  }, [expanded]);

  return (
    <article className="self-start rounded-2xl border border-gray-800 bg-white/5 p-6 text-left transition-all duration-300 hover:border-gray-700">
      <div className="relative">
        <div
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{ maxHeight }}
        >
          <p ref={contentRef} className="text-base leading-7 text-gray-300">
            “{testimonial.quote}”
          </p>
        </div>

        {!expanded && (
          <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-zinc-950/90 to-transparent" />
        )}
      </div>

      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-3 text-sm text-green-400 transition-colors duration-200 hover:underline"
      >
        {expanded ? "Read less" : "Read more"}
      </button>

      <div className="mt-4">
        <p className="font-semibold text-white">{testimonial.name}</p>
        <p className="text-sm text-gray-400">
          {testimonial.role} · {testimonial.company}
        </p>
      </div>
    </article>
  );
}
