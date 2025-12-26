"use client";

import { useState } from "react";
import Link from "next/link";
import { type Locale } from "@/lib/i18n";

interface NavMessages {
  services: string;
  about: string;
  contact: string;
  getInTouch: string;
}

interface HeaderProps {
  locale: Locale;
  messages: NavMessages;
}

export default function Header({ locale, messages }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const otherLocale = locale === "de" ? "en" : "de";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm">
      <div className="container-main">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Language Toggle */}
          <div className="flex items-center gap-4">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <span className="text-2xl font-serif font-semibold text-dark">
                Cyberga
              </span>
            </Link>

            {/* Language Toggle */}
            <Link
              href={`/${otherLocale}`}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-medium text-dark hover:text-primary transition-colors border border-dark/20 rounded-full"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              {otherLocale.toUpperCase()}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-dark hover:text-primary transition-colors"
            >
              {messages.services}
            </a>
            <a
              href="#about"
              className="text-dark hover:text-primary transition-colors"
            >
              {messages.about}
            </a>
            <a
              href="#contact"
              className="text-dark hover:text-primary transition-colors"
            >
              {messages.contact}
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="btn-primary">
              {messages.getInTouch}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark/10">
            <nav className="flex flex-col gap-4">
              <a
                href="#services"
                className="text-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {messages.services}
              </a>
              <a
                href="#about"
                className="text-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {messages.about}
              </a>
              <a
                href="#contact"
                className="text-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {messages.contact}
              </a>

              <a href="#contact" className="btn-primary w-fit mt-2">
                {messages.getInTouch}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
