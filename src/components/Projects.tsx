import { motion } from 'framer-motion';

import dignitionImg from '@/assets/images/projects/Dignition.png';
import pungutYukImg from '@/assets/images/projects/PungutYuk.png';
import linkAjaImg from '@/assets/images/projects/LinkAja.png';
import splitBillImg from '@/assets/images/projects/GroupFoodOrdering.png';
import sunityImg from '@/assets/images/projects/Sunity.png';

import { ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  badges: string[];
  image: string;
};

const projects: Project[] = [
  {
    title: 'Dignition',
    subtitle: 'Veterantech Study Club Learning Platform',
    description:
      "Led the UI design of Project Dignition's web and mobile learning platform, established a consistent design system, and designed the project's visual identity, including its logo, while collaborating closely with developers and stakeholders.",
    badges: ['UI Lead', 'Web & Mobile', 'Real Product'],
    image: dignitionImg,
  },
  {
    title: 'PungutYuk',
    subtitle: 'Waste Management Mobile Application',
    description:
      'Led the end-to-end UI/UX design of a community-driven waste management mobile application, guiding the team through user research, design thinking, prototyping, and usability testing to create an engaging and user-centered experience.',
    badges: ['Team Lead', 'UI/UX Design', 'Mobile App'],
    image: pungutYukImg,
  },
  {
    title: 'LinkAja Redesign',
    subtitle: 'Mobile App Redesign Case Study',
    description:
      'Redesigned the LinkAja mobile application by identifying usability issues and improving key user flows, creating a more intuitive and user-centered payment experience.',
    badges: ['Case Study', 'UI/UX Design', 'Mobile App'],
    image: linkAjaImg,
  },
  {
    title: 'Group Food Ordering',
    subtitle: 'Expense Sharing Mobile Application',
    description:
      'Designed a mobile application that streamlines group food ordering with automatic bill splitting, QR-based session sharing, and individual payment flows, creating a more efficient and user-friendly dining experience.',
    badges: ['UI/UX Design', 'Journal Publication', 'Mobile App'],
    image: splitBillImg,
  },
  {
    title: 'Sunity',
    subtitle: 'Donation & Crowdfunding Web Platform',
    description:
      'Implemented responsive user interfaces for a donation and crowdfunding platform, integrating APIs and collaborating with designers and backend developers to ensure a seamless user experience across the application.',
    badges: ['Frontend Development', 'React', 'API Integration'],
    image: sunityImg,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="bg-[#DEFA70] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-anton text-black text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
              FEATURED <br /> PROJECTS
            </h2>
            <p className="text-black/70 text-base sm:text-lg leading-relaxed max-w-md">
              A selection of projects where I transformed ideas into user-centered digital
              experiences through research, strategy, and interface design.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden cursor-pointer flex flex-col"
              style={{ boxShadow: '0 10px 40px -15px rgba(0,0,0,0.25)' }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.subtitle}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={18} className="text-black" />
                </div>
                <h3 className="absolute bottom-4 left-5 font-anton text-2xl text-white tracking-wide">
                  {p.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-black/60 text-sm font-semibold mb-3">{p.subtitle}</p>
                <p className="text-black/70 text-sm leading-relaxed flex-1">{p.description}</p>

                {/* Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-black text-[#DEFA70]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
