import { CaseStudySection, SectionHeading, FadeItem } from './Primitives';

const reflections = [
  {
    title: 'Designing for Multiple User Roles',
    body: 'This project challenged me to design a learning management system that supports three different user roles — admin, mentor, and mentee — each with unique goals, responsibilities, and workflows while maintaining a consistent and intuitive experience across the platform.',
  },
  {
    title: 'Transforming Manual Learning Workflows',
    body: 'Through Dignition, I explored how fragmented academic processes can be transformed into a structured digital experience. The challenge was creating a centralized platform that simplifies material management, assignment tracking, evaluation, and learning progress monitoring.',
  },
  {
    title: 'Building a Scalable Design System',
    body: 'Designing experiences for different user roles strengthened my understanding of creating scalable interfaces. By maintaining consistent interaction patterns and visual systems, Dignition provides a cohesive experience while adapting to each user’s specific needs.',
  },
];

export default function Reflection() {
  return (
    <CaseStudySection className="bg-[#FF5BBC]">
      <SectionHeading eyebrow="Takeaways" title="Reflection" />

      <div className="space-y-6">
        {reflections.map((r, i) => (
          <FadeItem key={r.title} i={i}>
            <div className="bg-black/15 backdrop-blur-sm rounded-2xl p-7 lg:p-8">
              <h3 className="font-anton text-white text-2xl sm:text-3xl mb-3">
                {r.title}
              </h3>

              <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl">
                {r.body}
              </p>
            </div>
          </FadeItem>
        ))}
      </div>
    </CaseStudySection>
  );
}