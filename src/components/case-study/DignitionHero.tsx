import { motion } from 'framer-motion';
import dignitionImg from '@/assets/images/projects/Dignition.png';

const metadata = [
  { label: 'Role', value: 'UI Lead & UI/UX Designer' },
  { label: 'Platform', value: 'Web & Mobile Application' },
  { label: 'Project Type', value: 'Learning Management System' },
  { label: 'Timeline', value: 'February 2026 - August 2026' },
  { label: 'Duration', value: '7 Months' },
];

export default function DignitionHero() {
  return (
    <section className="bg-[#FF5BBC] pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="inline-block bg-[#DEFA70] text-black px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Case Study
          </span>

          <h1 className="font-anton text-white text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-wide">
            DIGNITION
          </h1>

          <p className="mt-5 text-white/90 text-lg sm:text-xl lg:text-2xl font-light max-w-2xl">
            Digital Learning Solution for Veterantech Study Club
          </p>
        </motion.div>


        {/* Metadata grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {metadata.map((m) => (
            <div
              key={m.label}
              className="bg-black/20 backdrop-blur-sm rounded-xl px-5 py-4"
            >
              <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                {m.label}
              </p>

              <p className="text-white font-semibold text-sm">
                {m.value}
              </p>
            </div>
          ))}
        </motion.div>


        {/* Mockup area */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mt-14 relative"
        >

          <div className="absolute inset-0 rounded-[1.5rem] bg-black/15 -rotate-2" />

          <div className="relative rounded-[1.5rem] overflow-hidden bg-black/30 aspect-[16/9]">

            <img
              src={dignitionImg}
              alt="Dignition — Learning Management System"
              className="w-full h-full object-cover"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}