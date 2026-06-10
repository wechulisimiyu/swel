import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { BookOpen, Radio, Monitor, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SWEL — Learning Platform',
  description: 'Learn, lead, and transform surgical equity through our specialized courses, live webinars, and research training.',
}

const stats = [
  { value: '12k+', label: 'Learners' },
  { value: '45', label: 'Modules' },
  { value: '18', label: 'Countries' },
]

const pathways = [
  {
    title: 'Self-Paced Courses',
    description: 'Comprehensive modules covering Surgical Policy, Equity metrics, and Resource-stratified management.',
    icon: <BookOpen className="w-10 h-10 text-swel-navy" />,
    featured: true,
  },
  {
    title: 'Live Webinars',
    description: 'Interactive sessions with world-renowned surgical equity experts twice a month.',
    icon: <Radio className="w-10 h-10 text-swel-accent" />,
    featured: false,
  },
  {
    title: 'Research Training',
    description: 'Mentored research programs for early-career investigators in global surgical health.',
    icon: <Monitor className="w-10 h-10 text-swel-accent" />,
    featured: false,
  },
]

export default function LearningPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 bg-swel-bg">
        <section className="py-20 bg-white border-b border-swel-divider">
          <div className="mx-auto max-w-300 px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swel-accent text-swel-navy text-label uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" /> Global Training Hub
              </span>
              <h1 className="text-h1 text-swel-navy">Learn. Lead. Transform Surgical Equity</h1>
              <p className="text-body-lg text-swel-muted max-w-lg">
                Empowering healthcare professionals through rigorous courses, live webinars, and specialized research training focused on global health equity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-swel-navy text-white px-8 py-4 rounded-lg text-body-lg font-semibold hover:brightness-110 transition-all hover:scale-105 active:scale-95">
                  Access Learning Platform
                </button>
                <button className="border-2 border-swel-navy text-swel-navy px-8 py-4 rounded-lg text-body-lg font-semibold hover:bg-swel-navy/5 transition-all hover:scale-105 active:scale-95">
                  Browse Courses
                </button>
              </div>
              <div className="flex items-center gap-6 pt-8 border-t border-swel-divider">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    {i > 0 && <div className="w-px h-10 bg-swel-divider" />}
                    <div>
                      <p className="text-h3 text-swel-navy">{stat.value}</p>
                      <p className="text-label text-swel-muted uppercase">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-swel-navy/5 rounded-[2rem] -rotate-3 scale-105" />
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-swel-bg-card">
                <div className="w-full h-full opacity-40 bg-linear-to-br from-swel-bg-card via-swel-accent2 to-swel-bg-card" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-xl border border-swel-border shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-swel-navy flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-body font-bold text-swel-navy">Evidence-Based Learning</p>
                      <p className="text-label text-swel-muted">Curated by global surgical leaders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-300 px-8">
            <div className="flex justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-h2 text-swel-navy">Diverse Pathways to Mastery</h2>
                <p className="text-body text-swel-muted mt-4">
                  We offer structured learning environments tailored to practicing surgeons, health researchers, and policymakers.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pathways.map((pathway, i) => (
                <div
                  key={pathway.title}
                  className={`rounded-xl p-8 flex flex-col justify-between group transition-all hover:shadow-md ${
                    i === 0
                      ? 'md:col-span-2 bg-swel-bg-grey border border-swel-border'
                      : 'bg-swel-navy-mid text-white'
                  }`}
                >
                  <div className="space-y-4">
                    <div className={i === 0 ? 'text-swel-navy' : 'text-swel-accent'}>{pathway.icon}</div>
                    <h3 className={`text-h3 ${i === 0 ? 'text-swel-navy' : 'text-white'}`}>{pathway.title}</h3>
                    <p className={`text-body ${i === 0 ? 'text-swel-muted' : 'text-white/70'} max-w-md`}>
                      {pathway.description}
                    </p>
                  </div>
                  <div className="pt-8">
                    <button className="bg-swel-navy text-white px-6 py-2 rounded-lg text-label hover:scale-105 active:scale-95 transition-all">
                      Explore Courses
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
