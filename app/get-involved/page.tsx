import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { ArrowRight, Users, GraduationCap, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SWEL — Get Involved',
  description: 'Partner with SWEL as a researcher, clinician, or institution to advance surgical equity worldwide.',
}

const paths = [
  {
    title: 'Research Partnerships',
    description: 'Collaborate on multi-center studies, contribute data to our global surgical equity atlas, or co-author publications with our research network.',
    icon: <Users className="w-6 h-6 text-swel-navy" />,
    cta: 'Become a Research Partner',
    href: '/contact',
  },
  {
    title: 'Researcher Opportunities',
    description: 'Join our team as a PhD candidate, postdoctoral fellow, or visiting researcher. Access mentorship, funding support, and a collaborative research environment.',
    icon: <GraduationCap className="w-6 h-6 text-swel-navy" />,
    cta: 'Explore Open Positions',
    href: '/contact',
  },
  {
    title: 'Institutional Collaboration',
    description: 'Partner with SWEL to implement equity frameworks in your hospital system, surgical department, or academic institution.',
    icon: <Building2 className="w-6 h-6 text-swel-navy" />,
    cta: 'Start a Partnership',
    href: '/contact',
  },
]

export default function GetInvolvedPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 bg-swel-bg">
        <div className="mx-auto max-w-300 px-8">
          <section className="mb-20 max-w-3xl">
            <h1 className="text-h1 text-swel-navy mb-6">Why Partner With SWEL</h1>
            <p className="text-body-lg text-swel-muted">
              Whether you are a researcher seeking collaboration, a clinician looking to implement equity frameworks, or an institution ready to transform surgical culture — there is a path for you.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {paths.map((path) => (
              <div
                key={path.title}
                className="bg-white border border-swel-border rounded-xl p-8 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-md transition-all flex flex-col gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-swel-accent2 flex items-center justify-center">
                  {path.icon}
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-h3 text-swel-heading">{path.title}</h3>
                  <p className="text-body text-swel-muted">{path.description}</p>
                </div>
                <Link
                  href={path.href}
                  className="inline-flex items-center gap-2 text-label text-swel-navy hover:underline"
                >
                  {path.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="relative rounded-[32px] overflow-hidden bg-swel-navy-mid">
            <div className="relative flex flex-col items-center text-center px-20 py-20 gap-6 max-w-4xl mx-auto">
              <h2 className="text-h1 text-white">Join Us</h2>
              <p className="text-body-lg text-swel-cta-light pb-4">
                Partner with SWEL to shape the future of an equitable surgical workforce. Your collaboration matters.
              </p>
              <Link
                href="/contact"
                className="flex items-center gap-3 px-10 py-5 rounded-xl bg-white shadow-lg hover:bg-swel-bg transition-all hover:scale-105 active:scale-95"
              >
                <span className="text-body font-bold text-swel-navy">Start a Conversation</span>
                <ArrowRight className="w-4 h-4 text-swel-navy" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
