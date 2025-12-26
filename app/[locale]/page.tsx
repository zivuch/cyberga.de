import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import StructuredData from "@/components/StructuredData";
import { type Locale, getMessages, defaultLocale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === "de" || localeParam === "en" ? localeParam : defaultLocale) as Locale;
  const messages = getMessages(locale);

  return (
    <>
      <StructuredData locale={locale} />
      <Header locale={locale} messages={messages.nav} />
      <main>
        <Hero messages={messages.hero} />
        <Services messages={messages.services} />
        <About messages={messages.about} />
        <Contact messages={messages.contact} />
      </main>
      <Footer messages={messages.footer} locale={locale} />
      <CookieConsent messages={messages.cookieConsent} locale={locale} />
    </>
  );
}
