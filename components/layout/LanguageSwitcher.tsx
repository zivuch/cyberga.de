'use client';

import { motion } from 'framer-motion';
import { usePathname, useRouter } from '@/lib/i18n';
import { useParams } from 'next/navigation';

const languages = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' }
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const switchLanguage = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            currentLocale === lang.code
              ? 'bg-[#00D9FF] text-[#0A0E27]'
              : 'bg-[#1A1F3A] text-[#9CA3AF] hover:text-[#E5E7EB]'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
}
