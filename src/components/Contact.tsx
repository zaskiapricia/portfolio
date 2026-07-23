import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="bg-[#E9E4FF] py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-black text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
            Let&apos;s Work Together
          </h2>
          <p className="mt-5 mx-auto max-w-[640px] text-black/70 text-base sm:text-lg leading-relaxed">
            Currently seeking UI/UX Design internship opportunities and excited to contribute to
            impactful digital products.
          </p>
        </motion.div>

        {/* Contact cards + socials — centered */}
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {/* Email card (clickable mailto) */}
        <motion.a
          href="mailto:zaskiaapricia7@gmail.com"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="group flex items-center gap-4 bg-black text-white rounded-2xl px-6 py-5 hover:bg-[#7153FF] transition-colors duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-[#FF5BBC] flex items-center justify-center shrink-0">
            <Mail size={22} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Email</p>
            <p className="text-white font-semibold text-base sm:text-lg truncate">
              zaskiaapricia7@gmail.com
            </p>
          </div>
          <ArrowUpRight
            size={22}
            className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
          />
        </motion.a>

        {/* Phone + Location row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.a
            href="tel:+6285720658152"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="group flex items-center gap-4 bg-black text-white rounded-2xl px-6 py-5 hover:bg-[#7153FF] transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FF5BBC] flex items-center justify-center shrink-0">
              <Phone size={22} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Phone</p>
              <p className="text-white font-semibold text-base sm:text-lg">(+62) 857-206-581-52</p>
            </div>
          </motion.a>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="group flex items-center gap-4 bg-black text-white rounded-2xl px-6 py-5"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FF5BBC] flex items-center justify-center shrink-0">
              <MapPin size={22} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Location</p>
              <p className="text-white font-semibold text-base sm:text-lg">Jakarta, Indonesia</p>
            </div>
          </motion.div>
        </div>

        {/* Social buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://www.linkedin.com/in/zaskiapriciaps/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#7153FF] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#FF5BBC] transition-colors duration-300"
          >
            LinkedIn
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://github.com/zaskiapricia"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#7153FF] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#FF5BBC] transition-colors duration-300"
          >
            GitHub
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
