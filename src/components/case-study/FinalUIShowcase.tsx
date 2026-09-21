import { motion } from 'framer-motion';
import { CaseStudySection, SectionHeading } from './Primitives';

import landingImg from '@/assets/images/dignition/landing.png';
import loginImg from '@/assets/images/dignition/login.png';
import mentorImg from '@/assets/images/dignition/mentor-dashboard.png';
import menteeImg from '@/assets/images/dignition/mentee-dashboard.png';
import adminImg from '@/assets/images/dignition/admin-dashboard.png';


const screens = [
  {
    label: 'Landing Page',
    image: landingImg,
    aspect: 'aspect-[16/9]',
  },
  {
    label: 'Login Page',
    image: loginImg,
    aspect: 'aspect-[16/9]',
  },
  {
    label: 'Mentor Dashboard',
    image: mentorImg,
    aspect: 'aspect-[16/9]',
  },
  {
    label: 'Mentee Dashboard',
    image: menteeImg,
    aspect: 'aspect-[16/9]',
  },
  {
    label: 'Admin Dashboard',
    image: adminImg,
    aspect: 'aspect-[16/9]',
  },
];


export default function FinalUIShowcase() {
  return (
    <CaseStudySection className="bg-white">
      <SectionHeading eyebrow="The Result" title="Final UI Showcase" />

      <div className="space-y-6 lg:space-y-8">

        {/* Top row: Landing & Login */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {screens.slice(0, 2).map((s, i) => (

            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >

              <div className="overflow-hidden rounded-2xl bg-black/5">

                <img
                  src={s.image}
                  alt={s.label}
                  className={`w-full ${s.aspect} object-contain`}
                />

              </div>

              <p className="mt-3 text-sm font-semibold text-black/70">
                {s.label}
              </p>

            </motion.div>

          ))}

        </div>


        {/* Dashboard Showcase */}

        {screens.slice(2).map((s, i) => (

          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >

            <div className="overflow-hidden rounded-2xl bg-black/5">

              <img
                src={s.image}
                alt={s.label}
                className={`w-full ${s.aspect} object-contain`}
              />

            </div>

            <p className="mt-3 text-sm font-semibold text-black/70">
              {s.label}
            </p>

          </motion.div>

        ))}

      </div>

    </CaseStudySection>
  );
}