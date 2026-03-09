import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function MdxImage({ src, alt }: Props) {
  return (
    <figure className="my-0 w-full">
      <div className="overflow-hidden rounded-2xl border border-gray-800 bg-black/20 shadow-lg">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-auto w-full rounded-2xl transition duration-300 hover:scale-[1.01]"
        />
      </div>
      <figcaption className="mt-3 text-sm text-gray-400">{alt}</figcaption>
    </figure>
  );
}
