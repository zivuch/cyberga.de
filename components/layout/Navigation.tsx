'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface NavigationProps {
  onItemClick?: () => void;
}

export default function Navigation({ onItemClick }: NavigationProps) {
  const t = useTranslations('nav');

  const navItems = [
    { key: 'services', href: '#services' },
    { key: 'technology', href: '#technology' },
    { key: 'benefits', href: '#benefits' },
    { key: 'contact', href: '#contact' }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (onItemClick) onItemClick();
    }
  };

  return (
    <nav className="flex flex-col gap-6">
      {navItems.map((item, index) => (
        <motion.a
          key={item.key}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="text-2xl font-medium text-[#E5E7EB] hover:text-[#00D9FF] transition-colors py-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {t(item.key)}
        </motion.a>
      ))}
    </nav>
  );
}
