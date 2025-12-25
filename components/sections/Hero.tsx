'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import GridPattern from '@/components/ui/GridPattern';
import FadeIn from '@/components/animations/FadeIn';

export default function Hero() {
  const t = useTranslations('hero');

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A0E27] to-[#1A1F3A]">
      {/* Background Grid Pattern */}
      <GridPattern />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#E5E7EB] mb-6 font-[family-name:var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-[#9CA3AF] max-w-3xl mx-auto mb-12">
            {t('subtitle')}
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              {t('cta_primary')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('#services')}
            >
              {t('cta_secondary')}
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#00D9FF]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
