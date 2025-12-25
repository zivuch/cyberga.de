'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export interface CardProps {
  icon?: ReactNode;
  hover?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function Card({
  className,
  icon,
  hover = true,
  children
}: CardProps) {
  const baseStyles = 'relative rounded-xl bg-[#1A1F3A] p-8 shadow-lg transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:shadow-[#00D9FF]/10 hover:-translate-y-1' : '';
  const borderStyles = 'border border-[#00D9FF]/10 hover:border-[#00D9FF]/30';

  return (
    <motion.div
      className={cn(
        baseStyles,
        hoverStyles,
        borderStyles,
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon && (
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-[#00D9FF]/10 text-[#00D9FF]">
          {icon}
        </div>
      )}
      {children}
    </motion.div>
  );
}
