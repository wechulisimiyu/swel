import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SWEL — Research & Initiatives',
  description: 'Our active portfolio of research projects in surgical equity, global health, and workforce diversification.',
}

const projects = [
  {
    tags: [
      { label: 'Research', color: 'bg-swel-accent text-swel-navy' },
      { label: 'Global Health', color: 'bg-swel-accent3 text-swel-tag' },
    ],
    title: 'Equity in Perioperative Outcomes',
    description: 'A multi-center longitudinal study examining racial and socioeconomic disparities in post-operative recovery across North America.',
    href: '/research/perioperative-outcomes',
  },
  {
    tags: [
      { label: 'Policy', color: 'bg-swel-accent3 text-swel-tag' },
      { label: 'Advocacy', color: 'bg-swel-accent text-swel-navy' },
    ],
    title: 'Surgical Workforce Diversification',
    description: 'Legislative framework development to increase representation in surgical residency programs through institutional policy reform.',
    href: '/research/workforce-diversification',
  },
  {
    tags: [
      { label: 'Education', color: 'bg-swel-accent3 text-swel-tag' },
      { label: 'Training', color: 'bg-swel-accent text-swel-navy' },
    ],
    title: 'Mentorship Reimagined',
    description: 'Developing a standardized framework for surgical mentorship across high-income and LMIC contexts.',
    href: '/research/mentorship',
  },
  {
    tags: [
      { label: 'Research', color: 'bg-swel-accent text-swel-navy' },
      { label: 'Data Science', color: 'bg-swel-accent3 text-swel-tag' },
    ],
    title: 'The Global Atlas of Surgical Equity',
    description: 'A comprehensive 5-year study mapping surgical access for women in rural Sub-Saharan Africa.',
    href: '/research/global-atlas',
  },
  {
    tags: [
      { label: 'Policy', color: 'bg-swel-accent3 text-swel-tag' },
      { label: 'Systems', color: 'bg-swel-accent text-swel-navy' },
    ],
    title: 'Institutional Equity Audits',
    description: 'Developing audit tools to assess and improve gender equity in surgical departments worldwide.',
    href: '/research/equity-audits',
  },
  {
    tags: [
      { label: 'Clinical', color: 'bg-swel-accent text-swel-navy' },
      { label: 'Outcomes', color: 'bg-swel-accent3 text-swel-tag' },
    ],
    title: 'Safe Surgery Access in LMICs',
    description: 'Evaluating barriers to timely surgical care in low and middle-income countries through mixed-methods research.',
    href: '/research/safe-surgery-lmic',
  },
]

export default function ResearchPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 bg-swel-bg">
        <div className="mx-auto max-w-300 px-8">
          <header className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-8 h-0.5 bg-swel-navy" />
              <span className="text-label uppercase tracking-widest text-swel-label">Active Portfolio</span>
            </div>
            <h1 className="text-h1 text-swel-navy mb-6">Our Research &amp; Initiatives</h1>
            <p className="text-body-lg text-swel-muted max-w-2xl">
              The Surgical Work and Equity Lab (SWEL) drives innovation at the nexus of clinical excellence and systemic social reform through peer-reviewed methodology.
            </p>
          </header>

          <div className="flex flex-wrap items-center gap-4 mb-12 border-b border-swel-divider pb-8">
            <button className="px-6 py-2 rounded-full text-label bg-swel-navy text-white transition-all hover:scale-105 active:scale-95">
              All Projects
            </button>
            <button className="px-6 py-2 rounded-full text-label border border-swel-border text-swel-muted hover:bg-swel-bg-grey transition-all active:scale-95">
              Research
            </button>
            <button className="px-6 py-2 rounded-full text-label border border-swel-border text-swel-muted hover:bg-swel-bg-grey transition-all active:scale-95">
              Policy
            </button>
            <button className="px-6 py-2 rounded-full text-label border border-swel-border text-swel-muted hover:bg-swel-bg-grey transition-all active:scale-95">
              Education
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project) => (
              <article
                key={project.title}
                className="bg-white border border-swel-border rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-md transition-all flex flex-col group"
              >
                <div className="h-48 overflow-hidden bg-swel-bg-card">
                  <div className="w-full h-full opacity-40 bg-linear-to-br from-swel-bg-card via-swel-accent2 to-swel-bg-card group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag.label} className={`px-2 py-0.5 rounded text-caption uppercase ${tag.color}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-h3 text-swel-heading mb-3">{project.title}</h3>
                  <p className="text-body text-swel-muted mb-6">{project.description}</p>
                </div>
                <div className="px-8 pb-8 mt-auto">
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 text-label text-swel-navy group-hover:underline active:scale-95 transition-all"
                  >
                    READ MORE
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="px-10 py-3 border border-swel-navy text-swel-navy text-label hover:bg-swel-navy hover:text-white transition-all duration-300 active:scale-95">
              LOAD MORE RESEARCH
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
