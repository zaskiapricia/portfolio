import { CaseStudySection, SectionHeading, FadeItem } from './Primitives';

const roles = [
  {
    name: 'Admin',
    color: '#FF5BBC',
    description: 'System management and monitoring',
    features: [
      'User Management',
      'Study Club Management',
      'Monitoring',
      'Reports',
    ],
  },
  {
    name: 'Mentor',
    color: '#7153FF',
    description: 'Learning content and evaluation',
    features: [
      'Manage Classes',
      'Upload Materials',
      'Assignment Management',
      'Evaluation',
    ],
  },
  {
    name: 'Mentee',
    color: '#DEFA70',
    description: 'Learning access and progress tracking',
    features: [
      'Access Classes',
      'Learning Materials',
      'Submit Assignment',
      'View Progress',
    ],
  },
];

export default function InformationArchitecture() {
  return (
    <CaseStudySection className="bg-black">
      <SectionHeading
        eyebrow="Structure"
        title="Information Architecture"
      />

      <FadeItem i={0} className="flex flex-col items-center">

        {/* Root */}
        <div className="bg-[#DEFA70] text-black font-anton text-xl sm:text-2xl px-10 py-5 rounded-2xl tracking-wide">
          DIGNITION SYSTEM
        </div>


        {/* Connector */}
        <div className="w-px h-12 bg-white/30" />

        <div className="relative w-full max-w-5xl">

          {/* Horizontal line */}
          <div className="hidden md:block absolute top-0 left-[16.5%] right-[16.5%] h-px bg-white/30" />


          {/* Role cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">

            {roles.map((role, i) => (
              <FadeItem key={role.name} i={i + 1}>

                <div className="relative">

                  {/* Vertical connector */}
                  <div className="hidden md:block absolute -top-12 left-1/2 w-px h-12 bg-white/30" />


                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">

                    {/* Role Header */}
                    <div
                      className="px-6 py-5 text-center"
                      style={{
                        backgroundColor: role.color,
                      }}
                    >
                      <h3
                        className={`font-anton text-2xl ${
                          role.name === 'Mentee'
                            ? 'text-black'
                            : 'text-white'
                        }`}
                      >
                        {role.name}
                      </h3>

                    </div>


                    {/* Content */}
                    <div className="p-6">

                      <p className="text-white/50 text-sm mb-5">
                        {role.description}
                      </p>


                      <ul className="space-y-3">

                        {role.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-white/80 text-sm"
                          >

                            <span
                              className="w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: role.color,
                              }}
                            />

                            {feature}

                          </li>
                        ))}

                      </ul>

                    </div>

                  </div>

                </div>

              </FadeItem>
            ))}

          </div>

        </div>

      </FadeItem>

    </CaseStudySection>
  );
}