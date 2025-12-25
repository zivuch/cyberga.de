'use client';

import { useTranslations } from 'next-intl';
import { Cog, Shield, CheckCircle } from 'lucide-react';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';
import StaggerChildren from '@/components/animations/StaggerChildren';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      key: 'automation',
      icon: <Cog size={28} />
    },
    {
      key: 'quality',
      icon: <Shield size={28} />
    },
    {
      key: 'security',
      icon: <CheckCircle size={28} />
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-[#0A0E27]">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#E5E7EB] mb-4 font-[family-name:var(--font-space-grotesk)]">
              {t('title')}
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <FadeIn key={service.key}>
              <Card icon={service.icon}>
                <h3 className="text-2xl font-bold text-[#E5E7EB] mb-4">
                  {t(`${service.key}.title`)}
                </h3>
                <p className="text-[#9CA3AF] leading-relaxed">
                  {t(`${service.key}.description`)}
                </p>
              </Card>
            </FadeIn>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
