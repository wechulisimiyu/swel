import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'SWEL — Terms of Service',
  description: 'Terms of service for the Surgical Work and Equity Lab.',
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <ComingSoon title="Terms of Service" />
      </main>
      <Footer />
    </>
  )
}
