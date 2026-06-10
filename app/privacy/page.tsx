import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'SWEL — Privacy Policy',
  description: 'Privacy policy for the Surgical Work and Equity Lab.',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <ComingSoon title="Privacy Policy" />
      </main>
      <Footer />
    </>
  )
}
