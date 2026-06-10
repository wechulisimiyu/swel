import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'SWEL — Accessibility',
  description: 'Accessibility statement for the Surgical Work and Equity Lab.',
}

export default function AccessPage() {
  return (
    <>
      <Nav />
      <main>
        <ComingSoon title="Accessibility" />
      </main>
      <Footer />
    </>
  )
}
