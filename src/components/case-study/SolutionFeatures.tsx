import { BookOpen, FolderOpen, ClipboardList, HelpCircle, TrendingUp, Database } from 'lucide-react';
import { CaseStudySection, SectionHeading, FadeItem } from './Primitives';

const features = [
  {
    icon: BookOpen,
    title: 'Study Club Management',
    description: 'Managing classes, mentors, and mentees in one system.',
  },
  {
    icon: FolderOpen,
    title: 'Learning Material Management',
    description: 'Centralized learning resources and documentation.',
  },
  {
    icon: ClipboardList,
    title: 'Assignment Management',
    description: 'Submission and tracking of assignments.',
  },
  {
    icon: HelpCircle,
    title: 'Quiz & Evaluation',
    description: 'Supporting learning evaluation inside the platform.',
  },
  {
    icon: TrendingUp,
    title: 'Progress Monitoring',
    description: 'Tracking learning activity and academic progress.',
  },
  {
    icon: Database,
    title: 'Academic Data Management',
    description: 'Organizing academic information efficiently.',
  },
];

export default function SolutionFeatures() {
  return (
    <CaseStudySection className="bg-[#DEFA70]">
      <SectionHeading eyebrow="What We Built" title="Solution & Key Features" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <FadeItem key={f.title} i={i}>
            <div className="bg-white rounded-2xl p-7 h-full">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-5">
                <f.icon size={22} className="text-[#DEFA70]" />
              </div>
              <h3 className="font-bold text-black text-lg mb-2">{f.title}</h3>
              <p className="text-black/60 text-sm leading-relaxed">{f.description}</p>
            </div>
          </FadeItem>
        ))}
      </div>
    </CaseStudySection>
  );
}
