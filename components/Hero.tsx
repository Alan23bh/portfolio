import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

export default function Hero({ children }: Props) {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center"
    >
      <div className="order-2 md:order-1">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-400">
          Web Developer
        </p>

        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white">
          Alan Hernandez
        </h1>
        {/* about.mdx */}
        <div className="mdx mb-8">{children}</div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg border border-white px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Projects
          </a>

          <a
            href="https://github.com/Alan23bh"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-white hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/alan-hernandez-aa8458326/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-white hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="order-1 flex justify-center md:order-2 md:justify-end">
        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-white/5">
          <Image
            src="/profile/alan-headshot.png"
            alt="Alan Hernandez headshot"
            width={420}
            height={420}
            className="h-auto w-[280px] object-cover sm:w-[340px] md:w-[420px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
