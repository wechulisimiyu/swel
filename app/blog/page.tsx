import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { ArrowUpRight, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SWEL — Blog & Think Pieces',
  description: 'Insights, analysis, and think pieces from the Surgical Work and Equity Lab on gender equity, surgical systems, and global health policy.',
}

const featured = {
  category: 'Policy Analysis',
  date: 'OCT 28, 2024',
  readTime: '8 MIN READ',
  title: 'Why Gender Data Gaps in Surgery Cost Lives',
  description: 'A critical look at how missing demographic data in surgical research leads to systemic healthcare inequities.',
  author: 'Dr. A. Mensah',
  initials: 'AM',
  href: '/blog/gender-data-gaps',
}

const filters = ['All Posts', 'Gender Equity', 'Global Surgery Systems', 'Workforce & Leadership', 'Policy & Reform']

const articles = [
  {
    date: 'SEP 18, 2024',
    readTime: '6 MIN READ',
    category: 'Workforce & Leadership',
    title: 'Redefining Resilience in Medical Training',
    description: 'Moving beyond individual grit to institutional support systems that prevent surgeon burnout.',
    author: 'Dr. K. Osei',
    href: '/blog/redefining-resilience',
  },
  {
    date: 'AUG 05, 2024',
    readTime: '5 MIN READ',
    category: 'Policy & Reform',
    title: 'Policy Brief: Equitable On-Call Structures',
    description: 'Our latest recommendations for hospital administrators on creating family-inclusive staffing models.',
    author: 'Dr. L. Njoku',
    href: '/blog/equitable-on-call',
  },
  {
    date: 'JUL 12, 2024',
    readTime: '7 MIN READ',
    category: 'Gender Equity',
    title: 'The Mentorship Gap in Surgical Training',
    description: 'How informal sponsorship networks exclude women and underrepresented minorities from surgical career advancement.',
    author: 'Dr. S. Chen',
    href: '/blog/mentorship-gap',
  },
  {
    date: 'JUN 22, 2024',
    readTime: '10 MIN READ',
    category: 'Global Surgery Systems',
    title: 'Building Research Capacity in LMICs',
    description: 'Lessons from a decade of collaborative surgical research across Sub-Saharan Africa.',
    author: 'J. Okoro, PhD',
    href: '/blog/building-lmic-capacity',
  },
  {
    date: 'MAY 15, 2024',
    readTime: '9 MIN READ',
    category: 'Policy & Reform',
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
      <main className="bg-swel-bg">
        {/* Featured hero */}
        <section className="relative mt-16 h-150 min-h-100 w-full flex items-end overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-swel-bg-card via-swel-accent2 to-swel-bg-card" />
          <div className="absolute inset-0 bg-gradient-to-t from-swel-navy/95 via-swel-navy/50 to-swel-navy/10" />
          <div className="relative z-10 mx-auto max-w-300 w-full px-8 pb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-sm bg-swel-accent text-swel-navy text-caption font-bold uppercase tracking-widest">
                  Featured Article
                </span>
                <span className="text-white/70 text-caption font-bold uppercase tracking-widest">{featured.category}</span>
              </div>
              <h1 className="text-h1 text-white mb-6 leading-tight">{featured.title}</h1>
              <p className="text-body-lg text-white/80 mb-10 max-w-2xl">{featured.description}</p>
              <div className="flex items-center gap-12 text-white/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center font-bold text-xs text-white">
                    {featured.initials}
                  </div>
                  <span className="text-label text-white">{featured.author}</span>
                </div>
                <div className="flex items-center gap-6 text-caption uppercase tracking-wider opacity-80">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-20 pb-24">
          <div className="mx-auto max-w-300 px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-12 border-b border-swel-divider">
              <div>
                <h2 className="text-h2 text-swel-navy mb-2">Our Perspectives</h2>
                <p className="text-body text-swel-muted max-w-xl">
                  Analysis, commentary, and policy briefs from the SWEL team at the intersection of surgical equity, health systems, and gender justice.
                </p>
              </div>
              <nav className="flex flex-wrap gap-x-8 gap-y-4">
                {filters.map((filter, i) => (
                  <button
                    key={filter}
                    className={
                      i === 0
                        ? 'text-label text-swel-navy border-b-2 border-swel-navy pb-2 transition-transform hover:scale-105 active:scale-95'
                        : 'text-label text-swel-muted hover:text-swel-navy transition-colors pb-2 transition-transform hover:scale-105 active:scale-95'
                    }
                  >
                    {filter.toUpperCase()}
                  </button>
                ))}
              </nav>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="bg-white border border-swel-border rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-md transition-all group flex flex-col"
                >
                  <div className="h-48 overflow-hidden bg-swel-bg-card">
                    <div className="w-full h-full opacity-40 bg-linear-to-br from-swel-bg-card via-swel-accent2 to-swel-bg-card group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-caption uppercase bg-swel-accent3 text-swel-tag">{article.category}</span>
                      <time className="text-label text-swel-faint">{article.date}</time>
                    </div>
                    <h3 className="text-h4 text-swel-navy">{article.title}</h3>
                    <p className="text-body-sm text-swel-body flex-1">{article.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-swel-divider">
                      <span className="text-label text-swel-author">{article.author}</span>
                      <span className="flex items-center gap-2 text-caption uppercase tracking-wider text-swel-faint">
                        <span className="w-1 h-1 rounded-full bg-swel-faint" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="px-8 pb-8">
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

            <div className="flex justify-center mb-32">
              <button className="px-10 py-3 border border-swel-navy text-swel-navy text-label hover:bg-swel-bg-grey rounded-lg transition-all duration-200 active:scale-95">
                LOAD MORE ARTICLES
              </button>
            </div>

            {/* Newsletter CTA */}
            <section className="bg-swel-navy rounded-2xl py-20 px-8 text-center">
              <div className="max-w-2xl mx-auto">
                <span className="text-swel-accent text-label uppercase tracking-widest mb-4 block">The Weekly Dispatch</span>
                <h2 className="text-h2 text-white mb-6">Stay informed on the latest surgical equity research.</h2>
                <p className="text-body text-white/80 mb-8">
                  Receive a curated digest of peer-reviewed articles, lab updates, and policy analyses directly in your inbox.
                </p>
                <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
                  <input
                    className="w-full md:w-80 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-swel-accent focus:border-transparent transition-all outline-none"
                    placeholder="Institutional email address"
                    type="email"
                  />
                  <button className="w-full md:w-auto bg-swel-accent text-swel-navy px-10 py-4 rounded-lg text-label font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2">
                    Subscribe
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                <p className="mt-6 text-white/50 text-caption">We respect academic privacy. Unsubscribe at any time.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
