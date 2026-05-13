import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-top">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2 className="section-title">Let’s build something strong.</h2>
              <p className="section-copy">
                I’m currently looking for front-end opportunities where I can
                contribute to polished product UI, thoughtful user experience,
                and modern React development.
              </p>
            </div>

            <div className="contact-photo-wrap">
              <div className="contact-photo-ring">
                <Image
                  src="/profile/alan.jpg"
                  alt="Portrait of Alan Hernandez"
                  width={160}
                  height={160}
                  className="contact-photo"
                />
              </div>
            </div>
          </div>

          <div className="contact-grid">
            <a href="mailto:alan23bh@gmail.com" className="contact-card">
              <span className="contact-label">Email</span>
              <span className="contact-value">alan23bh@gmail.com</span>
            </a>

            <a
              href="https://github.com/Alan23bh"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-label">GitHub</span>
              <span className="contact-value">Alan23bh</span>
            </a>

            <a
              href="https://www.linkedin.com/in/alan-hernandez-aa8458326/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">Alan Hernandez</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
