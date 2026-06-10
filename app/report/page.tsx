import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'SWEL — Annual Report',
  description: 'Annual report for the Surgical Work and Equity Lab.',
}

export default function ReportPage() {
  return (
    <>
      <Nav />
      <main>
        <ComingSoon title="Annual Report" />
      </main>
      <Footer />
    </>
  )
}
