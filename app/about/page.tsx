import Nav from '@/components/nav'
import AboutHero from '@/components/about-hero'
import AboutProblem from '@/components/about-problem'
import AboutMissionVision from '@/components/about-mission-vision'
import AboutApproach from '@/components/about-approach'
import AboutTeam from '@/components/about-team'
import CTABlock from '@/components/cta-block'
import Footer from '@/components/footer'

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-swel-bg min-h-screen">
        <AboutHero />
        <AboutProblem />
        <AboutMissionVision />
        <AboutApproach />
        <AboutTeam />
        <CTABlock />
      </main>
      <Footer />
    </>
  )
}
