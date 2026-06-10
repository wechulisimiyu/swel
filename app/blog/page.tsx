import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SWEL — Blog & Think Pieces',
  description: 'Insights, analysis, and think pieces from the Surgical Work and Equity Lab on gender equity, surgical systems, and global health policy.',
}

const articles = [
  {
    date: 'OCT 28, 2024',
    title: 'Why Gender Data Gaps in Surgery Cost Lives',
    description: 'A critical look at how missing demographic data in surgical research leads to systemic healthcare inequities.',
    author: 'Dr. A. Mensah',
    href: '/blog/gender-data-gaps',
  },
  {
    date: 'SEP 18, 2024',
    title: 'Redefining Resilience in Medical Training',
    description: 'Moving beyond individual grit to institutional support systems that prevent surgeon burnout.',
    author: 'Dr. K. Osei',
    href: '/blog/redefining-resilience',
  },
  {
    date: 'AUG 05, 2024',
    title: 'Policy Brief: Equitable On-Call Structures',
    description: 'Our latest recommendations for hospital administrators on creating family-inclusive staffing models.',
    author: 'Dr. L. Njoku',
    href: '/blog/equitable-on-call',
  },
  {
    date: 'JUL 12, 2024',
    title: 'The Mentorship Gap in Surgical Training',
    description: 'How informal sponsorship networks exclude women and underrepresented minorities from surgical career advancement.',
    author: 'Dr. S. Chen',
    href: '/blog/mentorship-gap',
  },
  {
    date: 'JUN 22, 2024',
    title: 'Building Research Capacity in LMICs',
    description: 'Lessons from a decade of collaborative surgical research across Sub-Saharan Africa.',
    author: 'J. Okoro, PhD',
    href: '/blog/building-lmic-capacity',
  },
  {
    date: 'MAY 15, 2024',
    title: 'Data-Driven Equity: The SWEL Framework',
    description: 'Introducing our standardized framework for measuring and monitoring surgical equity indicators.',
    author: 'Dr. E. Rodriguez',
    href: '/blog/swel-framework',
  },
]

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 bg-swel-bg">
        <div className="mx-auto max-w-300 px-8">
          <header className="mb-16 max-w-3xl">
            <h1 className="text-h1 text-swel-navy mb-6">Our Perspectives</h1>
            <p className="text-body-lg text-swel-muted">
              Analysis, commentary, and policy briefs from the SWEL team at the intersection of surgical equity, health systems, and gender justice.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.title}
                className="bg-white border border-swel-border rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-md transition-all group flex flex-col"
              >
                <div className="h-48 overflow-hidden bg-swel-bg-card">
                  <div className="w-full h-full opacity-40 bg-linear-to-br from-swel-bg-card via-swel-accent2 to-swel-bg-card group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-grow flex flex-col gap-4">
                  <time className="text-label text-swel-faint">{article.date}</time>
                  <h3 className="text-h4 text-swel-navy">{article.title}</h3>
                  <p className="text-body-sm text-swel-body flex-1">{article.description}</p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-8 rounded-full bg-swel-divider flex-shrink-0" />
                    <span className="text-label text-swel-author">{article.author}</span>
                  </div>
                </div>
                <div className="px-8 pb-8 mt-auto">
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 text-label text-swel-navy group-hover:underline transition-all"
                  >
                    READ MORE
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
