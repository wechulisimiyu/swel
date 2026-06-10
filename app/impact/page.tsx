import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { ArrowRight, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SWEL — Impact',
  description: 'Our reach, outcomes, and annual data on surgical equity worldwide.',
}

const impactStats = [
  { value: '15+', label: 'Countries of Operation' },
  { value: '40+', label: 'Research Partnerships' },
  { value: '12,000+', label: 'Learners Trained' },
  { value: '50+', label: 'Peer-Reviewed Publications' },
]

export default function ImpactPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 bg-swel-bg">
        <div className="mx-auto max-w-300 px-8">
          <header className="mb-20 max-w-3xl">
            <h1 className="text-h1 text-swel-navy mb-6">Our Impact</h1>
            <p className="text-body-lg text-swel-muted">
              From surgical outcomes research to institutional policy reform, SWEL drives measurable change in global surgical equity.
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-swel-border rounded-xl p-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
              >
                <p className="text-h1 text-swel-navy mb-2">{stat.value}</p>
                <p className="text-label text-swel-muted uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-swel-border rounded-xl p-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <h2 className="text-h2 text-swel-navy mb-4">Where We Work</h2>
              <p className="text-body text-swel-muted mb-8">
                Our research spans Sub-Saharan Africa, South Asia, and Latin America, with partnerships at over 40 institutions worldwide.
              </p>
              <div className="aspect-[16/10] rounded-lg bg-swel-bg-card flex items-center justify-center">
                <Globe className="w-16 h-16 text-swel-muted" />
              </div>
            </div>

            <div className="bg-white border border-swel-border rounded-xl p-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex flex-col justify-between">
              <div>
                <h2 className="text-h2 text-swel-navy mb-4">Annual Report</h2>
                <p className="text-body text-swel-muted">
                  Download our latest annual report for a comprehensive overview of our research outputs, partnerships, and financial transparency.
                </p>
              </div>
              <Link
                href="/report"
                className="inline-flex items-center gap-2 text-label text-swel-navy hover:underline mt-8"
              >
                View Annual Report
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
