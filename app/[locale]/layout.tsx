import type { Metadata } from "next";
import "../globals.css";
import { locales } from "@/lib/i18n";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const baseUrl = "https://cyberga.de";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === "de";

  const title = isGerman
    ? "Cyberga | Testautomatisierung & Sicherheitsberatung"
    : "Cyberga | Test Automation & Security Consultancy";

  const description = isGerman
    ? "Cyberga gewährleistet die Zuverlässigkeit und Sicherheit kritischer Anwendungen durch professionelle Testautomatisierung und Qualitätssicherung."
    : "Cyberga ensures the reliability and security of critical applications through professional test automation and quality engineering.";

  const keywords = isGerman
    ? [
        "Testautomatisierung",
        "Sicherheitsberatung",
        "QA",
        "Qualitätssicherung",
        "End-to-End Tests",
        "API Tests",
        "CI/CD",
        "Frankfurt",
      ]
    : [
        "test automation",
        "security consultancy",
        "QA",
        "quality assurance",
        "end-to-end testing",
        "API testing",
        "CI/CD",
        "Frankfurt",
        "Germany",
      ];

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    authors: [{ name: "Cyberga" }],
    creator: "Cyberga",
    publisher: "Cyberga",
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "Cyberga",
      locale: isGerman ? "de_DE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        de: `${baseUrl}/de`,
        en: `${baseUrl}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className="font-sans">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
