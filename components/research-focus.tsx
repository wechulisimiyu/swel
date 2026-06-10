import { GraduationCap, Users, Scale } from 'lucide-react'

const focusAreas = [
  {
    title: 'Surgical Training',
    description:
      'Investigating gendered experiences in residency and the impact of mentorship on trainee retention.',
    icon: <GraduationCap className="w-5 h-5 text-swel-navy" />,
  },
  {
    title: 'Workforce Disparities',
    description:
      'Mapping the global distribution of the surgical workforce with a lens on intersectional equity.',
    icon: <Users className="w-5 h-5 text-swel-navy" />,
  },
  {
    title: 'Policy & Systems',
    description:
      'Advocating for institutional changes that support work-life integration and pay equity.',
    icon: <Scale className="w-5 h-5 text-swel-navy" />,
  },
]

export default function ResearchFocus() {
  return (
    <section className="bg-swel-bg-light py-20">
      <div className="mx-auto max-w-300 px-8 flex flex-col items-center gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
          <h2 className="text-h2 font-bold leading-10.5 tracking-[-0.32px] text-swel-navy">
            Our Focus
          </h2>
          <p className="text-body leading-6.5 text-swel-body">
            Our interdisciplinary research spans three core areas, each designed to produce evidence
            that drives systemic change in surgical institutions worldwide.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6 w-full">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="flex flex-col gap-4 p-8 bg-white border border-swel-border rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-swel-accent2">
                {area.icon}
              </div>
              <h3 className="text-h3 font-semibold leading-8.5 text-swel-heading pt-2">
                {area.title}
              </h3>
              <p className="text-body leading-6.5 text-swel-body">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
