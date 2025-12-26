import en from "@/messages/en.json";
import de from "@/messages/de.json";

export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

const messages = { en, de };

export function getMessages(locale: Locale) {
  return messages[locale] || messages[defaultLocale];
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  if (locales.includes(segment as Locale)) {
    return segment as Locale;
  }
  return defaultLocale;
}
