import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'DIRECTOR & FOUNDER',
    color: 'bg-swel-accent',
  },
  {
    name: 'James Okoro, PhD',
    role: 'LEAD EPIDEMIOLOGIST',
    color: 'bg-swel-accent2',
  },
  {
    name: 'Dr. Elena Rodriguez',
    role: 'SENIOR FELLOW',
    color: 'bg-swel-accent3',
  },
  {
    name: 'Mark Thompson',
    role: 'POLICY COORDINATOR',
    color: 'bg-swel-border',
  },
]

export default function AboutTeam() {
  return (
    <section className="mt-24 pb-24">
      <div className="mx-auto max-w-300 px-8">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-[0.01px]">
              <h2 className="text-h2 font-bold leading-10.5 tracking-[-0.32px] text-swel-navy-mid">
                Our Team
              </h2>
              <p className="text-body-lg leading-8 text-swel-body">
                Meet the people behind the research.
              </p>
            </div>

            <Link
              href="#"
              className="flex items-center gap-2 text-body font-medium leading-6 text-swel-navy-mid hover:opacity-80 transition-opacity"
            >
              <span>View all team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col gap-4">
                {/* Photo placeholder */}
                <div className={`w-65 h-81.25 rounded-lg overflow-hidden ${member.color}`}>
                  <div className="w-full h-full opacity-40 bg-linear-to-br from-swel-bg-card via-swel-accent2 to-swel-bg-card" />
                </div>

                {/* Name */}
                <div className="flex flex-col gap-0">
                  <h4 className="text-body-lg font-bold leading-8 text-swel-navy-mid">
                    {member.name}
                  </h4>
                  <span className="text-label font-semibold leading-3 tracking-[0.6px] uppercase text-swel-body">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
