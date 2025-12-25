import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050713] border-t border-[#1A1F3A]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-[#E5E7EB] font-[family-name:var(--font-space-grotesk)] mb-4">
              Cyberga
            </h3>
            <p className="text-[#9CA3AF] text-sm">
              {t('copyright', { year: currentYear })}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#E5E7EB] uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#9CA3AF] hover:text-[#00D9FF] transition-colors text-sm">
                  {t('impressum')}
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9CA3AF] hover:text-[#00D9FF] transition-colors text-sm">
                  {t('privacy')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-[#E5E7EB] uppercase tracking-wider mb-4">
              Contact
            </h4>
            <p className="text-[#9CA3AF] text-sm">
              contact@cyberga.de
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
