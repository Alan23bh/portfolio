import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function MdxImage({ src, alt }: Props) {
  return (
    <figure className="mdx-image">
      <div className="mdx-image-frame">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          sizes="(max-width: 768px) 100vw, 60vw"
          className="mdx-image-element"
        />
      </div>
      <figcaption className="mdx-image-caption">{alt}</figcaption>
    </figure>
  );
}
