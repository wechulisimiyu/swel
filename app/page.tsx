import Nav from "@/components/nav";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import ResearchFocus from "@/components/research-focus";
import FeaturedProjects from "@/components/featured-projects";
import ThinkPieces from "@/components/think-pieces";
import CTABlock from "@/components/cta-block";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutSection />
        <ResearchFocus />
        <FeaturedProjects />
        <ThinkPieces />
        <CTABlock />
      </main>
      <Footer />
    </>
  );
}
