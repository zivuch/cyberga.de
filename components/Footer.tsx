import Link from "next/link";
import { type Locale } from "@/lib/i18n";

interface FooterMessages {
  description: string;
  quickLinks: string;
  contactTitle: string;
  contactText: string;
  copyright: string;
  privacy: string;
  terms: string;
}

interface FooterProps {
  messages: FooterMessages;
  locale: Locale;
}

export default function Footer({ messages, locale }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const navMessages =
    locale === "de"
      ? { services: "Leistungen", about: "Über uns", contact: "Kontakt" }
      : { services: "Services", about: "About", contact: "Contact" };

  return (
    <footer className="bg-dark text-white py-16">
      <div className="container-main">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4">Cyberga</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {messages.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {messages.quickLinks}
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#services"
                className="text-white/70 hover:text-white transition-colors"
              >
                {navMessages.services}
              </a>
              <a
                href="#about"
                className="text-white/70 hover:text-white transition-colors"
              >
                {navMessages.about}
              </a>
              <a
                href="#contact"
                className="text-white/70 hover:text-white transition-colors"
              >
                {navMessages.contact}
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {messages.contactTitle}
            </h4>
            <p className="text-white/70 text-sm">{messages.contactText}</p>
            <a
              href="#contact"
              className="inline-block mt-4 text-primary hover:text-primary-light transition-colors"
            >
              {locale === "de" ? "Kontakt aufnehmen" : "Get in Touch"}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} {messages.copyright}
          </p>
          <div className="flex gap-6 text-white/50 text-sm">
            <Link
              href={`/${locale}/datenschutz`}
              className="hover:text-white transition-colors"
            >
              {messages.privacy}
            </Link>
            <Link
              href={`/${locale}/impressum`}
              className="hover:text-white transition-colors"
            >
              {messages.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
