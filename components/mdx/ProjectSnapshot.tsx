import MdxImage from "@/components/mdx/MdxImage";

type Props = {
  title?: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
};

export default function ProjectSnapshot({
  title = "Project snapshot",
  imageSrc,
  imageAlt,
  children,
}: Props) {
  return (
    <section className="my-16 rounded-3xl border border-green-800 bg-white/[0.02] p-8 md:p-10">
      <div className="grid gap-10 md:grid-cols-[1.05fr_1.35fr] md:items-start">
        {/* Text side */}
        <div className="rounded-2xl border border-gray-800 bg-white/5 p-8">
          <h3 className="mb-5 text-2xl font-semibold text-white">{title}</h3>
          <div className="text-lg leading-8 text-gray-300">{children}</div>
        </div>

        {/* Image side */}
        <div className="max-w-2xl">
          <MdxImage src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}
