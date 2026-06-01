import Image from "next/image";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  icon: "mail" | "github" | "linkedin";
};

const contacts: ContactItem[] = [
  {
    label: "Email",
    value: "",
    href: "mailto:alan23bh@gmail.com",
    icon: "mail",
  },
  {
    label: "GitHub",
    value: "",
    href: "https://github.com/Alan23bh",
    external: true,
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "",
    href: "https://www.linkedin.com/in/alan-hernandez-aa8458326/",
    external: true,
    icon: "linkedin",
  },
];

function ContactIcon({ type }: { type: ContactItem["icon"] }) {
  if (type === "mail") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="contact-icon"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="contact-icon"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.1 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.07A9.3 9.3 0 0112 6.84c.85 0 1.71.12 2.51.35 1.91-1.35 2.75-1.07 2.75-1.07.55 1.42.2 2.47.1 2.73.64.73 1.03 1.66 1.03 2.79 0 3.97-2.34 4.83-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0022 12.23C22 6.58 17.52 2 12 2z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="contact-icon"
      fill="currentColor"
    >
      <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9.53 6.74H6.56V18h2.91V9.74zm-1.45-4A1.69 1.69 0 006.33 7.4v.03c0 .92.67 1.66 1.6 1.66h.02a1.66 1.66 0 001.67-1.66c-.02-.93-.67-1.69-1.64-1.69zm10.12 4c-1.56 0-2.61.86-3.04 1.67v-1.43h-2.91c.04.95 0 8.02 0 8.02h2.91v-4.48c0-.24.02-.48.09-.65.19-.48.61-.98 1.33-.98.94 0 1.31.74 1.31 1.82V18H20v-4.62c0-2.48-1.32-3.64-3.09-3.64z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="contact-arrow"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2 className="section-title">Let’s build something strong.</h2>
              <p className="section-copy">
                I’m currently looking for front-end opportunities where I can
                contribute to polished product UI, thoughtful user experience,
                and modern development.
              </p>
            </div>

            <div className="contact-side">
              <div className="contact-photo-wrap">
                <div className="contact-photo-ring">
                  <Image
                    src="/profile/alan.jpg"
                    alt="Portrait of Alan Hernandez"
                    width={200}
                    height={200}
                    className="contact-photo"
                  />
                </div>
              </div>

              <div className="contact-grid">
                {contacts.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="contact-card"
                  >
                    <span className="contact-icon-wrap">
                      <ContactIcon type={item.icon} />
                    </span>

                    <span className="contact-label">{item.label}</span>

                    <ArrowIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
