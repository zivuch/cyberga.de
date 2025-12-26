import Link from "next/link";
import { type Locale, getMessages, defaultLocale } from "@/lib/i18n";

export default async function Datenschutz({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === "de" || localeParam === "en" ? localeParam : defaultLocale) as Locale;
  const messages = getMessages(locale);
  const m = messages.datenschutz;

  return (
    <main className="min-h-screen bg-cream">
      <div className="container-main py-16">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {m.backToHome}
        </Link>

        <h1 className="text-display font-serif font-semibold text-dark mb-8">
          {m.title}
        </h1>

        <div className="max-w-3xl space-y-10 text-dark/80">
          <p className="text-lg">{m.intro}</p>

          {/* 1. Controller */}
          <section>
            <h2 className="text-heading font-serif font-semibold text-dark mb-4">
              {m.controller.title}
            </h2>
            <p className="mb-4">{m.controller.content}</p>
            <div className="space-y-1">
              <p className="font-semibold text-dark">{m.controller.company}</p>
              <p>{m.controller.address}</p>
              <p>{m.controller.responsible}</p>
            </div>
          </section>

          {/* 2. Data Collection */}
          <section>
            <h2 className="text-heading font-serif font-semibold text-dark mb-4">
              {m.dataCollection.title}
            </h2>

            {/* Contact Form */}
            <div className="mb-6">
              <h3 className="font-semibold text-dark mb-2">
                {m.dataCollection.contactForm.title}
              </h3>
              <p className="mb-2">{m.dataCollection.contactForm.content}</p>
              <ul className="list-disc list-inside mb-2 space-y-1">
                {m.dataCollection.contactForm.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>{m.dataCollection.contactForm.purpose}</p>
            </div>

            {/* Analytics */}
            <div>
              <h3 className="font-semibold text-dark mb-2">
                {m.dataCollection.analytics.title}
              </h3>
              <p className="mb-2">{m.dataCollection.analytics.content}</p>
              <ul className="list-disc list-inside mb-2 space-y-1">
                {m.dataCollection.analytics.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>{m.dataCollection.analytics.purpose}</p>
            </div>
          </section>

          {/* 3. Legal Basis */}
          <section>
            <h2 className="text-heading font-serif font-semibold text-dark mb-4">
              {m.legalBasis.title}
            </h2>
            <p className="mb-2">{m.legalBasis.content}</p>
            <ul className="list-disc list-inside space-y-1">
              {m.legalBasis.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 4. Retention */}
          <section>
            <h2 className="text-heading font-serif font-semibold text-dark mb-4">
              {m.retention.title}
            </h2>
            <p>{m.retention.content}</p>
          </section>

          {/* 5. Rights */}
          <section>
            <h2 className="text-heading font-serif font-semibold text-dark mb-4">
              {m.rights.title}
            </h2>
            <p className="mb-2">{m.rights.content}</p>
            <ul className="list-disc list-inside space-y-1">
              {m.rights.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 6. Cookies */}
          <section>
            <h2 className="text-heading font-serif font-semibold text-dark mb-4">
              {m.cookies.title}
            </h2>
            <p className="mb-2">{m.cookies.content}</p>
            <ul className="list-disc list-inside space-y-1">
              {m.cookies.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 7. Contact */}
          <section>
            <h2 className="text-heading font-serif font-semibold text-dark mb-4">
              {m.contact.title}
            </h2>
            <p className="mb-2">{m.contact.content}</p>
            <p className="text-dark">{m.contact.email}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
