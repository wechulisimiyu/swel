import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { BookOpen, Radio, Monitor, GraduationCap, ArrowRight, Building2, Clock, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react'

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

const courses = [
  {
    badge: 'CORE',
    category: 'Health Systems',
    title: 'Foundations of Surgical Health Policy',
    hours: '8 Hours',
    level: 'Beginner',
  },
  {
    badge: 'HOT',
    category: 'Metrics & Data',
    title: 'Quantifying Equity: Data Methods',
    hours: '12 Hours',
    level: 'Intermediate',
  },
  {
    badge: null,
    category: 'Ethics',
    title: 'Global Surgical Ethics & Advocacy',
    hours: '5 Hours',
    level: 'All Levels',
  },
  {
    badge: null,
    category: 'Economics',
    title: 'Financing Universal Surgical Care',
    hours: '10 Hours',
    level: 'Advanced',
  },
]

const credentials = [
  'AMA PRA Category 1 Credits™ Equivalent',
  'Blockchain-verified digital credentials',
  'Shareable on LinkedIn and CVs',
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
              <div className="absolute inset-0 bg-swel-navy/5 rounded-[32px] -rotate-3 scale-105" />
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-swel-bg-card">
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
              <a href="#" className="hidden md:flex items-center gap-1 text-label text-swel-navy hover:underline">
                VIEW ALL CURRICULUM <ArrowRight className="w-4 h-4" />
              </a>
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

              <div className="md:col-span-2 bg-swel-navy-mid text-white rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
                <div className="relative z-10 space-y-4 flex-1">
                  <h3 className="text-h3">Institutional Access</h3>
                  <p className="text-body text-white/70">
                    Partner with SWEL to provide your entire surgical residency program or department with unrestricted access to our platform.
                  </p>
                  <button className="bg-white text-swel-navy px-6 py-2 rounded-lg text-label mt-4 hover:scale-105 active:scale-95 transition-all">
                    Contact for Partnerships
                  </button>
                </div>
                <div className="relative z-10 w-full md:w-1/3 aspect-video bg-black/20 rounded-lg flex items-center justify-center">
                  <Building2 className="w-12 h-12 text-white/50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-300 px-8">
            <div className="mb-12">
              <h2 className="text-h2 text-swel-navy">Trending Research Modules</h2>
              <p className="text-body text-swel-muted mt-2">The most accessed courses by our global community this month.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {courses.map((course) => (
                <div key={course.title} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-swel-bg-card">
                    <div className="w-full h-full opacity-40 bg-linear-to-br from-swel-bg-card via-swel-accent2 to-swel-bg-card group-hover:scale-110 transition-transform duration-500" />
                    {course.badge && (
                      <div
                        className={`absolute top-2 right-2 px-2 py-1 rounded text-[10px] font-bold ${
                          course.badge === 'HOT' ? 'bg-swel-accent text-swel-navy' : 'bg-white/90 text-swel-navy backdrop-blur-sm'
                        }`}
                      >
                        {course.badge}
                      </div>
                    )}
                  </div>
                  <p className="text-label text-swel-navy uppercase mb-1">{course.category}</p>
                  <h4 className="text-body font-bold text-swel-navy group-hover:text-swel-navy-mid transition-colors">{course.title}</h4>
                  <div className="flex items-center gap-4 mt-3 text-swel-muted">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-caption">{course.hours}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-caption">{course.level}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-swel-navy text-white">
          <div className="mx-auto max-w-300 px-8 flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-h2 mb-6">Credentialed Excellence</h2>
              <p className="text-body-lg text-swel-accent mb-8">
                Each completed course earns you a verified certificate of mastery from the Surgical Work and Equity Lab, recognized by partner academic institutions worldwide.
              </p>
              <ul className="space-y-4">
                {credentials.map((credential) => (
                  <li key={credential} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-swel-accent" />
                    <span className="text-body">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="bg-white p-8 rounded-xl text-swel-heading shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-swel-accent" />
                <div className="flex justify-between items-start mb-12">
                  <div className="text-swel-navy font-bold text-xl">SWEL</div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase text-swel-faint">CERTIFICATE NO.</p>
                    <p className="text-[12px] font-mono">SWEL-2024-8902</p>
                  </div>
                </div>
                <div className="text-center mb-12">
                  <p className="text-label italic text-swel-muted mb-2 normal-case">This is to certify that</p>
                  <h3 className="text-h3 text-swel-navy border-b border-swel-divider pb-2 mb-4">Jordan A. Researcher</h3>
                  <p className="text-body text-swel-muted">has successfully completed the program in</p>
                  <p className="text-body font-bold text-swel-navy mt-2">GLOBAL SURGICAL SYSTEMS STRENGTHENING</p>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-swel-faint">DATE</p>
                    <p className="text-[12px] font-semibold">NOVEMBER 14, 2024</p>
                  </div>
                  <ShieldCheck className="w-12 h-12 text-swel-accent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-200 px-8 text-center space-y-8">
            <h2 className="text-h2 text-swel-navy">Start Your Journey Today</h2>
            <p className="text-body-lg text-swel-muted">
              Join thousands of surgeons and health researchers committed to transforming global surgical equity through knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-swel-navy text-white px-10 py-4 rounded-lg text-body-lg font-semibold hover:brightness-110 transition-all hover:scale-105 active:scale-95">
                Access Learning Platform
              </button>
              <button className="bg-white border border-swel-border text-swel-muted px-10 py-4 rounded-lg text-body-lg font-semibold hover:bg-swel-bg-grey transition-all hover:scale-105 active:scale-95">
                Speak to an Advisor
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
