import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-800 bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left side */}
        <Link
          href="/"
          className="text-lg font-semibold hover:text-green-400 transition"
        >
          Alan Hernandez
        </Link>

        {/* Right side */}
        <nav className="flex gap-6 text-sm text-gray-300">
          <Link href="/#projects" className="hover:text-white transition">
            Projects
          </Link>

          <Link href="/#testimonials" className="hover:text-white transition">
            Testimonials
          </Link>

          <Link href="/#contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
