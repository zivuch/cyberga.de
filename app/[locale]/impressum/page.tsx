import Link from "next/link";
import { type Locale, getMessages, defaultLocale } from "@/lib/i18n";

export default async function Impressum({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === "de" || localeParam === "en" ? localeParam : defaultLocale) as Locale;
  const messages = getMessages(locale);
  const m = messages.impressum;

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

        <h1 className="text-display font-serif font-semibold text-dark mb-12">
          {m.title}
        </h1>

        <div className="max-w-2xl">
          <div className="space-y-2 text-lg text-dark/80">
            <p className="font-semibold text-dark">{m.company}</p>
            <p>{m.address}</p>
            <p>{m.city}</p>
          </div>

          <div className="mt-8 pt-8 border-t border-dark/10">
            <p className="text-dark/60 mb-2">{m.responsible}:</p>
            <p className="text-lg text-dark">{m.responsibleName}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
