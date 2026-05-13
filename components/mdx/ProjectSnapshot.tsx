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
    <section className="project-snapshot">
      <div className="project-snapshot-copy">
        <p className="project-snapshot-eyebrow">Project Snapshot</p>
        <h2 className="project-snapshot-title">{title}</h2>
        <div className="project-snapshot-text">{children}</div>
      </div>

      <div className="project-snapshot-media">
        <MdxImage src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  );
}
