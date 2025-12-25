import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';
import CountUp from '@/components/animations/CountUp';

export default function CaseStudy() {
  const t = useTranslations('caseStudy');

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#0A0E27] to-[#1A1F3A]">
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

        <FadeIn delay={0.2}>
          <Card className="max-w-4xl mx-auto">
            {/* Client */}
            <div className="mb-8">
              <p className="text-sm uppercase tracking-wider text-[#00D9FF] font-semibold mb-2">
                {t('client')}
              </p>
              <h3 className="text-2xl font-bold text-[#E5E7EB]">
                {t('client')}
              </h3>
            </div>

            {/* Challenge */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-[#00D9FF] mb-3">
                {t('challenge')}
              </h4>
              <p className="text-[#9CA3AF] leading-relaxed">
                {t('challengeText')}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-[#00D9FF] mb-3">
                {t('solution')}
              </h4>
              <p className="text-[#9CA3AF] leading-relaxed">
                {t('solutionText')}
              </p>
            </div>

            {/* Results - Stats */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-[#00D9FF] mb-6">
                {t('results')}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stat 1: 85% reduction */}
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#00D9FF] mb-2 font-[family-name:var(--font-space-grotesk)]">
                    <CountUp end={85} suffix="%" duration={2.5} />
                  </div>
                  <p className="text-[#9CA3AF] text-sm">
                    {t('stat1')}
                  </p>
                </div>

                {/* Stat 2: 100% coverage */}
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#10B981] mb-2 font-[family-name:var(--font-space-grotesk)]">
                    <CountUp end={100} suffix="%" duration={2.5} />
                  </div>
                  <p className="text-[#9CA3AF] text-sm">
                    {t('stat2')}
                  </p>
                </div>

                {/* Stat 3: 0 incidents */}
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#10B981] mb-2 font-[family-name:var(--font-space-grotesk)]">
                    <CountUp end={0} duration={2.5} />
                  </div>
                  <p className="text-[#9CA3AF] text-sm">
                    {t('stat3')}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
