import { CaseStudySection, SectionHeading, FadeItem } from './Primitives';

const painPoints = [
  {
    number: '01',
    title: 'Scattered Learning Materials',
    description:
      'Learning materials and class information are distributed across multiple platforms.',
  },
  {
    number: '02',
    title: 'Manual Academic Management',
    description: 'Mentor and academic management processes require manual tracking.',
  },
  {
    number: '03',
    title: 'Difficult Progress Monitoring',
    description:
      'Tracking mentee activity, assignments, and evaluations is not centralized.',
  },
  {
    number: '04',
    title: 'Unintegrated Evaluation Process',
    description:
      'Assessment and learning evaluation are separated from the learning workflow.',
  },
];

export default function ProblemStatement() {
  return (
    <CaseStudySection className="bg-[#DEFA70]">
      <SectionHeading eyebrow="The Challenge" title="Problem Statement" />

      <FadeItem i={0} className="max-w-3xl mb-12">
        <p className="text-black/70 text-base sm:text-lg leading-relaxed">
          Academic activities were previously managed using multiple external tools and manual
          processes, causing fragmented workflows and difficulties in managing learning activities.
        </p>
      </FadeItem>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {painPoints.map((p, i) => (
          <FadeItem key={p.number} i={i + 1}>
            <div className="bg-black rounded-2xl p-7 h-full">
              <span className="font-anton text-[#DEFA70] text-3xl">{p.number}</span>
              <h3 className="mt-3 text-white font-bold text-lg">{p.title}</h3>
              <p className="mt-2 text-white/60 text-sm leading-relaxed">{p.description}</p>
            </div>
          </FadeItem>
        ))}
      </div>
    </CaseStudySection>
  );
}
