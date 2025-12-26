"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { type Locale } from "@/lib/i18n";

interface CookieConsentMessages {
  title: string;
  description: string;
  acceptAll: string;
  acceptNecessary: string;
  learnMore: string;
}

interface CookieConsentProps {
  messages: CookieConsentMessages;
  locale: Locale;
}

const CONSENT_KEY = "cookie-consent";

export default function CookieConsent({ messages, locale }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(CONSENT_KEY, "all");
    setShowBanner(false);
    // Here you would initialize analytics
  };

  const acceptNecessary = () => {
    localStorage.setItem(CONSENT_KEY, "necessary");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-dark/95 backdrop-blur-sm border-t border-white/10">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-1">{messages.title}</h3>
            <p className="text-white/70 text-sm">
              {messages.description}{" "}
              <Link
                href={`/${locale}/datenschutz`}
                className="text-primary hover:text-primary/80 underline"
              >
                {messages.learnMore}
              </Link>
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-colors"
            >
              {messages.acceptNecessary}
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
            >
              {messages.acceptAll}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
