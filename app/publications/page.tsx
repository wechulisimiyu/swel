import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SWEL — Publications',
  description: 'Peer-reviewed publications and research outputs from the Surgical Work and Equity Lab.',
}

const publications = [
  {
    title: 'Gender Disparities in Surgical Residency Attrition: A 5-Year Multi-Center Analysis',
    authors: 'Chen S, Okoro J, Rodriguez E',
    journal: 'JAMA Surgery',
    year: 2024,
    doi: '10.1001/jamasurg.2024.0123',
  },
  {
    title: 'Mapping Surgical Access for Women in Rural Sub-Saharan Africa: The Global Atlas of Surgical Equity',
    authors: 'Okoro J, Mensah A, Chen S',
    journal: 'The Lancet Global Health',
    year: 2024,
    doi: '10.1016/S2214-109X(24)00123-4',
  },
  {
    title: 'Institutional Equity Audits: A Framework for Surgical Departments',
    authors: 'Thompson M, Sharma P, Diallo A',
    journal: 'BMJ Global Health',
    year: 2024,
    doi: '10.1136/bmjgh-2024-012345',
  },
  {
    title: 'Redefining Mentorship in Surgical Training: A Mixed-Methods Study',
    authors: 'Rodriguez E, Osei K, Chen S',
    journal: 'Academic Medicine',
    year: 2023,
    doi: '10.1097/ACM.0000000000004567',
  },
  {
    title: 'Safe Surgery in LMICs: Barriers, Facilitators, and Policy Pathways',
    authors: 'Njoku L, Kim R, Okoro J',
    journal: 'World Journal of Surgery',
    year: 2023,
    doi: '10.1007/s00268-023-06789-0',
  },
]

export default function PublicationsPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 bg-swel-bg">
        <div className="mx-auto max-w-300 px-8">
          <header className="mb-16 max-w-3xl">
            <h1 className="text-h1 text-swel-navy mb-6">Publications</h1>
            <p className="text-body-lg text-swel-muted">
              Peer-reviewed research from the SWEL team, spanning surgical equity, health systems, workforce disparities, and global health policy.
            </p>
          </header>

          <div className="flex flex-col gap-6">
            {publications.map((pub) => (
              <div
                key={pub.doi}
                className="bg-white border border-swel-border rounded-xl p-8 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-md transition-all flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-h3 text-swel-heading">{pub.title}</h3>
                    <Link href={`https://doi.org/${pub.doi}`} className="text-swel-muted hover:text-swel-navy flex-shrink-0 mt-1">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm text-swel-muted">
                    <span>{pub.authors}</span>
                    <span className="text-swel-faint">|</span>
                    <span className="text-swel-body font-medium">{pub.journal}</span>
                    <span className="text-swel-faint">|</span>
                    <span>{pub.year}</span>
                  </div>
                </div>
                <Link
                  href={`https://doi.org/${pub.doi}`}
                  className="inline-flex items-center gap-2 text-label text-swel-navy hover:underline w-fit"
                >
                  View Publication
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
