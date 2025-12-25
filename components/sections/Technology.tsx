import { useTranslations } from 'next-intl';
import { Code, TestTube, GitBranch, Workflow } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerChildren from '@/components/animations/StaggerChildren';

export default function Technology() {
  const t = useTranslations('technology');

  const frameworks = [
    { name: 'Robot Framework', icon: <Code size={24} /> },
    { name: 'Selenium', icon: <TestTube size={24} /> },
    { name: 'Playwright', icon: <TestTube size={24} /> },
    { name: 'Jenkins', icon: <GitBranch size={24} /> },
    { name: 'GitLab CI', icon: <GitBranch size={24} /> },
    { name: 'GitHub Actions', icon: <Workflow size={24} /> }
  ];

  const industries = [
    t('industryList.financial'),
    t('industryList.insurance'),
    t('industryList.healthcare'),
    t('industryList.enterprise')
  ];

  return (
    <section id="technology" className="py-20 md:py-32 bg-[#1A1F3A]">
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

        {/* Frameworks & Tools */}
        <div className="mb-16">
          <FadeIn delay={0.2}>
            <h3 className="text-xl font-semibold text-[#00D9FF] mb-8 text-center">
              {t('frameworks')}
            </h3>
          </FadeIn>

          <StaggerChildren staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {frameworks.map((framework) => (
              <FadeIn key={framework.name}>
                <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#0A0E27] border border-[#00D9FF]/10 hover:border-[#00D9FF]/30 hover:scale-105 transition-all duration-300">
                  <div className="text-[#00D9FF] mb-3">
                    {framework.icon}
                  </div>
                  <span className="text-[#E5E7EB] text-sm font-medium text-center">
                    {framework.name}
                  </span>
                </div>
              </FadeIn>
            ))}
          </StaggerChildren>
        </div>

        {/* Industries */}
        <FadeIn delay={0.4}>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[#00D9FF] mb-8">
              {t('industries')}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="px-6 py-3 rounded-full bg-[#0A0E27] border border-[#00D9FF]/20 text-[#E5E7EB] text-sm font-medium"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
