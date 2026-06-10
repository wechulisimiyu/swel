import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    tags: [
      { label: 'GLOBAL HEALTH', color: 'bg-swel-accent3 text-swel-tag' },
      { label: 'RESEARCH', color: 'bg-swel-accent text-swel-navy' },
    ],
    title: 'The Global Atlas of Surgical Equity',
    description:
      'A comprehensive 5-year study mapping surgical access for women in rural Sub-Saharan Africa.',
    href: '/research/global-atlas',
  },
  {
    tags: [
      { label: 'POLICY', color: 'bg-swel-accent3 text-swel-tag' },
      { label: 'MENTORSHIP', color: 'bg-swel-accent text-swel-navy' },
    ],
    title: 'Mentorship Reimagined',
    description:
      'Developing a standardized framework for surgical mentorship across high-income and LMIC contexts.',
    href: '/research/mentorship',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-300 px-8 flex flex-col gap-12">
        {/* Header row */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1.75">
            <h2 className="text-h2 font-bold leading-10.5 tracking-[-0.32px] text-swel-navy">
              Featured Projects
            </h2>
            <p className="text-body leading-6.5 text-swel-body">
              Landmark studies shaping the field.
            </p>
          </div>
          <Link
            href="/research"
            className="border-b-2 border-swel-navy pb-1 text-label font-semibold tracking-[0.6px] text-swel-navy hover:opacity-70 transition-opacity"
          >
            VIEW ALL RESEARCH
          </Link>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col border border-swel-border rounded-2xl overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="w-full aspect-video bg-swel-bg-card flex items-center justify-center overflow-hidden">
                <div className="w-full h-full opacity-40 bg-linear-to-br from-swel-bg-card via-swel-accent2 to-swel-bg-card" />
              </div>

              {/* Card content */}
              <div className="flex flex-col gap-2.75 p-8">
                {/* Tags */}
                <div className="flex items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-2 py-1 rounded text-caption font-bold leading-4 ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                <h3 className="text-h3 font-semibold leading-8.5 text-swel-heading pt-1">
                  {project.title}
                </h3>

                <p className="text-body leading-6.5 text-swel-body">{project.description}</p>

                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 text-body font-semibold leading-6.5 text-swel-navy hover:opacity-70 transition-opacity"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
