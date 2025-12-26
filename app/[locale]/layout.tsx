import type { Metadata } from "next";
import "../globals.css";
import { locales } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === "de";

  return {
    title: isGerman
      ? "Cyberga | Testautomatisierung & Sicherheitsberatung"
      : "Cyberga | Test Automation & Security Consultancy",
    description: isGerman
      ? "Cyberga gewährleistet die Zuverlässigkeit und Sicherheit kritischer Anwendungen durch professionelle Testautomatisierung und Qualitätssicherung."
      : "Cyberga ensures the reliability and security of critical applications through professional test automation and quality engineering.",
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
      <body className="font-sans">{children}</body>
    </html>
  );
}
