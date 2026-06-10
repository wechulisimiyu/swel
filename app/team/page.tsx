import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SWEL — Our Team',
  description: 'Meet the scholars, surgeons, and advocates behind the Surgical Work and Equity Lab.',
}

const team = [
  { name: 'Dr. Sarah Chen', role: 'Director & Founder', color: 'bg-swel-accent' },
  { name: 'James Okoro, PhD', role: 'Lead Epidemiologist', color: 'bg-swel-accent2' },
  { name: 'Dr. Elena Rodriguez', role: 'Senior Fellow', color: 'bg-swel-accent3' },
  { name: 'Mark Thompson', role: 'Policy Coordinator', color: 'bg-swel-border' },
  { name: 'Dr. Amara Diallo', role: 'Research Fellow', color: 'bg-swel-accent' },
  { name: 'Robert Kim, PhD', role: 'Biostatistician', color: 'bg-swel-accent2' },
  { name: 'Dr. Priya Sharma', role: 'Clinical Advisor', color: 'bg-swel-accent3' },
  { name: 'Lisa Okonkwo', role: 'Program Manager', color: 'bg-swel-border' },
]

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 bg-swel-bg">
        <div className="mx-auto max-w-300 px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-h1 text-swel-navy mb-2">The Collective</h1>
              <p className="text-body-lg text-swel-muted">Scholars, surgeons, and advocates.</p>
            </div>
            <Link
              href="/contact"
              className="text-body font-medium text-swel-navy hover:underline flex items-center gap-2"
            >
              Join the team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className={`aspect-[4/5] rounded-lg overflow-hidden mb-4 ${member.color}`}>
                  <div className="w-full h-full opacity-40 bg-linear-to-br from-swel-bg-card via-swel-accent2 to-swel-bg-card" />
                </div>
                <h4 className="text-body-lg font-bold text-swel-navy">{member.name}</h4>
                <p className="text-label text-swel-muted uppercase">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
