export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <h2 className="mb-6 text-4xl font-bold text-center">Contact</h2>

      <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
        If you'd like to collaborate, discuss a project, or just connect, feel
        free to reach out through any of the links below.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <a
          href="mailto:alan23bh@gmail.com"
          className="rounded-2xl border border-gray-800 bg-white/5 p-6 text-center transition hover:border-white"
        >
          <p className="mb-2 font-semibold text-white">Email</p>
          <p className="text-sm text-gray-400">alan23bh@gmail.com</p>
        </a>

        <a
          href="https://github.com/Alan23bh"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-gray-800 bg-white/5 p-6 text-center transition hover:border-white"
        >
          <p className="mb-2 font-semibold text-white">GitHub</p>
          <p className="text-sm text-gray-400">github.com/Alan23bh</p>
        </a>

        <a
          href="https://www.linkedin.com/in/alan-hernandez-aa8458326/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-gray-800 bg-white/5 p-6 text-center transition hover:border-white"
        >
          <p className="mb-2 font-semibold text-white">LinkedIn</p>
          <p className="text-sm text-gray-400">
            linkedin.com/in/alan-hernandez-aa8458326
          </p>
        </a>
      </div>
    </section>
  );
}
