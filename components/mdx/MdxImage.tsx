import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function MdxImage({ src, alt }: Props) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-black/20">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={800}
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-2 text-sm text-gray-400">{alt}</figcaption>
    </figure>
  );
}
