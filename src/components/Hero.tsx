import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import heroImg from '@/assets/images/hero/Hero_photo.png';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const scrollToProjects = () =>
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative bg-[#FF5BBC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-14 lg:pt-32 lg:pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
        >
          {/* LEFT: text */}
          <div className="order-2 lg:order-1">
            <motion.div variants={item} className="mb-6">
              <span className="inline-block bg-[#DEFA70] text-black px-4 py-1.5 rounded-full text-sm font-semibold">
                Hi, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-anton text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-wide normal-case"
            >
              ZASKIA APRICIA PUTRI SIREGAR
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-white text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Experienced in leading UI design, mentoring future designers, and delivering
              user-centered solutions across academic and organizational projects. I enjoy turning
              research and ideas into intuitive interfaces that create meaningful experiences and
              support product goals.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2 bg-[#DEFA70] text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-white transition-colors duration-300"
              >
                View My Work
                <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 bg-[#DEFA70] text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-white transition-colors duration-300"
              >
                Download Resume
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              </motion.div>
          </div>

          {/* RIGHT: profile image with photo-frame */}
          <motion.div
            variants={imageVariant}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[400px] sm:w-[360px] sm:h-[480px] lg:w-[460px] lg:h-[580px]">
              {/* Decorative back frame (offset) */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-black/15 -rotate-3" />
              {/* Main photo */}
              <img
                src={heroImg}
                alt="Zaskia Apricia Putri Siregar — UI/UX Designer"
                loading="eager"
                className="relative w-full h-full object-cover rounded-[1.5rem] shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
