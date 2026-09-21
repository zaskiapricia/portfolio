import { CaseStudySection, SectionHeading, FadeItem } from './Primitives';

import damarImg from '@/assets/images/persona/damar.png';
import nauraImg from '@/assets/images/persona/naura.png';
import torikhImg from '@/assets/images/persona/torikh.png';

type Persona = {
  name: string;
  role: string;
  image: string;
  background: string;
  goals: string[];
  painPoints: string[];
  needs: string[];
};

const personas: Persona[] = [
  {
    name: 'Damar',
    role: 'Mentor',
    image: damarImg,
    background:
      'A study club mentor responsible for delivering materials and guiding mentees through their learning journey.',
    goals: [
      'Deliver study club materials effectively',
      'Manage learning activities',
      'Monitor mentee progress',
    ],
    painPoints: [
      'Materials are scattered across platforms',
      'Difficult to track attendance and progress',
      'Evaluation process is still manual',
    ],
    needs: [
      'Centralized LMS',
      'Material management',
      'Evaluation features',
    ],
  },
  {
    name: 'Naura',
    role: 'Mentee',
    image: nauraImg,
    background:
      'An active mentee participating in study club activities, seeking structured learning and easy access to resources.',
    goals: [
      'Access learning materials easily',
      'Follow study club learning activities',
      'Complete assignments and evaluations',
    ],
    painPoints: [
      'Class materials are spread across chat platforms',
      'Difficult to find recordings and information',
      'Important updates can be missed',
    ],
    needs: [
      'Centralized learning platform',
      'Easy access to materials',
      'Structured learning flow',
    ],
  },
  {
    name: 'Torikh',
    role: 'Study Club Manager (SCM)',
    image: torikhImg,
    background:
      'Oversees the study club operations, coordinates activities, and monitors academic progress across all participants.',
    goals: [
      'Coordinate study club activities',
      'Monitor academic progress',
      'Manage learning evaluation',
    ],
    painPoints: [
      'Difficult monitoring through manual systems',
      'Data is scattered across platforms',
      'Coordination requires more time',
    ],
    needs: [
      'Centralized academic management',
      'Monitoring dashboard',
      'Organized documentation',
    ],
  },
];


function PersonaList({
  items,
  label,
}: {
  items: string[];
  label: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wider mb-2 text-black/60">
        {label}
      </p>

      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="text-black/70 text-sm leading-relaxed flex gap-2"
          >
            <span className="text-black/30 shrink-0">—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default function UserPersonas() {
  return (
    <CaseStudySection className="bg-white">
      <SectionHeading eyebrow="Who It's For" title="User Personas" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        {personas.map((p, i) => (

          <FadeItem key={p.name} i={i}>

            <div className="bg-[#E9E4FF] rounded-2xl overflow-hidden h-full flex flex-col">

              {/* Persona Image */}
              <div className="aspect-[4/3] overflow-hidden bg-[#7153FF]/15">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>


              {/* Content */}
              <div className="p-6 flex flex-col gap-5 flex-1">

                <div>
                  <h3 className="font-anton text-black text-2xl">
                    {p.name}
                  </h3>

                  <p className="text-[#7153FF] font-semibold text-sm mt-1">
                    {p.role}
                  </p>

                  <p className="text-black/60 text-sm leading-relaxed mt-3">
                    {p.background}
                  </p>
                </div>


                <PersonaList
                  items={p.goals}
                  label="Goals"
                />

                <PersonaList
                  items={p.painPoints}
                  label="Pain Points"
                />

                <PersonaList
                  items={p.needs}
                  label="Needs"
                />

              </div>

            </div>

          </FadeItem>

        ))}

      </div>

    </CaseStudySection>
  );
}