import { motion } from 'framer-motion';
import aboutImg from '@/assets/images/about/About_photo.jpeg';

const current = [
  'UI Lead @ Dignition',
  'Mentoring UI/UX Students',
  'Exploring Product Design',
];

export default function About() {
  return (
    <section id="about" className="bg-[#FF5BBC] py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="font-anton text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
            ABOUT ME
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: image with offset decorative blue frame */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-[320px] h-[440px] sm:w-[400px] sm:h-[520px]">
              {/* Decorative blue frame (offset back-left) */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-[#7153FF] -rotate-3 -translate-x-4 translate-y-4" />
              {/* Photo */}
              <img
                src={aboutImg}
                alt="About Zaskia Apricia Putri Siregar"
                loading="lazy"
                className="relative w-full h-full object-cover rounded-[1.5rem] shadow-2xl"
              />
            </div>
          </motion.div>

          {/* RIGHT: text + current list */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="space-y-5 text-white text-base sm:text-lg leading-relaxed max-w-xl">
              <p>
                I&apos;m a fifth-semester Information Systems student at UPN Veteran Jakarta with
                experience in UI/UX design, frontend development, and product collaboration.
              </p>
              <p>
                I enjoy transforming complex ideas into intuitive digital experiences through user
                research, thoughtful design, and close collaboration with cross-functional teams.
              </p>
            </div>

            {/* Current */}
            <div className="mt-8">
              <p className="text-white font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Current
              </p>
              <ul className="space-y-3">
                {current.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 bg-[#DEFA70] text-black rounded-full px-5 py-3 max-w-md"
                  >
                    <span className="w-2 h-2 rounded-full bg-black" />
                    <span className="font-semibold text-sm sm:text-base">{c}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          </div>
      </div>
    </section>
  );
}
