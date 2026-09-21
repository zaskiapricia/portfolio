import { CaseStudySection, SectionHeading, FadeItem } from './Primitives';

export default function ProjectOverview() {
  return (
    <CaseStudySection className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <SectionHeading eyebrow="Overview" title="Project Overview" />
        </div>
        <FadeItem i={1} className="lg:pt-8">
          <div className="space-y-5 text-black/70 text-base sm:text-lg leading-relaxed">
            <p>
              Dignition is an internal Learning Management System designed to support academic
              activities within Veterantech Study Club.
            </p>
            <p>
              The platform helps mentors and mentees manage learning activities, materials,
              assignments, evaluations, and academic information in one integrated system.
            </p>
          </div>
        </FadeItem>
      </div>
    </CaseStudySection>
  );
}
