import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type CaseStudySectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function CaseStudySection({ id, children, className = '' }: CaseStudySectionProps) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={align === 'center' ? 'text-center mb-12' : 'mb-12'}
    >
      <span className="inline-block bg-black text-[#DEFA70] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
        {eyebrow}
      </span>
      <h2 className="font-anton text-black text-4xl sm:text-5xl lg:text-6xl leading-[0.9]">
        {title}
      </h2>
    </motion.div>
  );
}

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type FadeItemProps = {
  children: ReactNode;
  i?: number;
  className?: string;
};

export function FadeItem({ children, i = 0, className = '' }: FadeItemProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ImagePlaceholderProps = {
  label: string;
  aspect?: string;
};

export function ImagePlaceholder({ label, aspect = 'aspect-[16/9]' }: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspect} w-full rounded-2xl bg-[#E9E4FF] border-2 border-dashed border-[#7153FF]/30 flex items-center justify-center group hover:border-[#7153FF]/60 transition-colors`}
    >
      <div className="text-center">
        <p className="font-anton text-[#7153FF]/40 text-2xl sm:text-3xl">{label}</p>
        <p className="text-[#7153FF]/30 text-xs mt-2">Screenshot placeholder</p>
      </div>
    </div>
  );
}
