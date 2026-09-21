import { motion } from 'framer-motion';
import { CaseStudySection, SectionHeading } from './Primitives';

const steps = [
  'Project Planning',
  'Requirement Analysis',
  'User Persona',
  'Information Architecture',
  'Wireframe',
  'UI Design',
  'Prototype',
];

export default function DesignProcess() {
  return (
    <CaseStudySection className="bg-[#E9E4FF]">
      <SectionHeading eyebrow="How It Unfolded" title="Design Process" />

      <div className="flex flex-col items-center">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center"
            >
              {/* Step pill */}
              <div className="bg-black text-white rounded-full px-7 py-3.5 font-semibold text-sm sm:text-base flex items-center gap-3">
                <span className="font-anton text-[#DEFA70] text-lg">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {step}
              </div>

              {/* Connector */}
              {!isLast && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
                  className="w-px h-10 sm:h-14 bg-black/20 origin-top"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </CaseStudySection>
  );
}
