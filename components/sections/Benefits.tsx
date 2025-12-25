import { useTranslations } from 'next-intl';
import { ShieldCheck, FileCheck, TrendingDown, Activity, Users } from 'lucide-react';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';
import StaggerChildren from '@/components/animations/StaggerChildren';

export default function Benefits() {
  const t = useTranslations('benefits');

  const benefits = [
    {
      key: 'risk',
      icon: <ShieldCheck size={28} />
    },
    {
      key: 'compliance',
      icon: <FileCheck size={28} />
    },
    {
      key: 'efficiency',
      icon: <TrendingDown size={28} />
    },
    {
      key: 'stability',
      icon: <Activity size={28} />
    },
    {
      key: 'expertise',
      icon: <Users size={28} />
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 bg-[#0A0E27]">
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

        <StaggerChildren staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <FadeIn key={benefit.key}>
              <Card icon={benefit.icon}>
                <h3 className="text-xl font-bold text-[#E5E7EB] mb-3">
                  {t(`${benefit.key}.title`)}
                </h3>
                <p className="text-[#9CA3AF] leading-relaxed">
                  {t(`${benefit.key}.description`)}
                </p>
              </Card>
            </FadeIn>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
