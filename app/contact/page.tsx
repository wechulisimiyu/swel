import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { ArrowRight, Users, GraduationCap, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SWEL — Contact Us',
  description: 'Contact the Surgical Work and Equity Lab for research partnerships, clinical collaboration, or media inquiries.',
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 bg-swel-bg">
        <div className="mx-auto max-w-300 px-8">
          <section className="mb-20 max-w-3xl">
            <h1 className="text-h1 text-swel-navy mb-6">Advancing Equity Through Collaboration</h1>
            <p className="text-body-lg text-swel-muted">
              The Surgical Work and Equity Lab is dedicated to fostering global partnerships that bridge the gap between clinical precision and social justice. We welcome researchers, healthcare institutions, and partners who share our vision.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 bg-white p-10 rounded-xl border border-swel-border shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <h2 className="text-h2 text-swel-navy mb-8">Send an Inquiry</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-label text-swel-muted" htmlFor="first-name">FIRST NAME</label>
                    <input
                      className="w-full bg-swel-bg-grey border border-swel-border rounded-lg p-3 text-body focus:border-swel-navy focus:ring-0 transition-all"
                      id="first-name"
                      placeholder="Jane"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-label text-swel-muted" htmlFor="last-name">LAST NAME</label>
                    <input
                      className="w-full bg-swel-bg-grey border border-swel-border rounded-lg p-3 text-body focus:border-swel-navy focus:ring-0 transition-all"
                      id="last-name"
                      placeholder="Smith"
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-label text-swel-muted" htmlFor="email">INSTITUTIONAL EMAIL</label>
                  <input
                    className="w-full bg-swel-bg-grey border border-swel-border rounded-lg p-3 text-body focus:border-swel-navy focus:ring-0 transition-all"
                    id="email"
                    placeholder="jsmith@university.edu"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-label text-swel-muted" htmlFor="topic">INQUIRY TOPIC</label>
                  <select
                    className="w-full bg-swel-bg-grey border border-swel-border rounded-lg p-3 text-body focus:border-swel-navy focus:ring-0 transition-all"
                    id="topic"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a topic</option>
                    <option>Research Partnership</option>
                    <option>Clinical Collaboration</option>
                    <option>Learning Platform Access</option>
                    <option>Media Inquiry</option>
                    <option>General Information</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-label text-swel-muted" htmlFor="message">MESSAGE</label>
                  <textarea
                    className="w-full bg-swel-bg-grey border border-swel-border rounded-lg p-3 text-body focus:border-swel-navy focus:ring-0 transition-all"
                    id="message"
                    placeholder="How can we collaborate?"
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-swel-navy text-white text-label px-8 py-4 rounded-lg hover:brightness-110 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  SEND MESSAGE
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-xl border border-swel-border shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-swel-navy rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-h3 text-swel-navy">Collaborate With Us</h3>
                </div>
                <p className="text-body text-swel-muted mb-6">
                  We actively seek partnerships with global health institutions to implement surgical equity frameworks. Join our network of over 40 active research sites.
                </p>
                <Link
                  href="/get-involved"
                  className="inline-flex items-center gap-2 text-label text-swel-navy hover:underline"
                >
                  View Partnership Models
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-swel-bg-grey p-8 rounded-xl border border-swel-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-swel-navy-mid rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-swel-accent" />
                  </div>
                  <h3 className="text-h3 text-swel-navy">Join as Researcher</h3>
                </div>
                <p className="text-body text-swel-muted mb-6">
                  Looking for PhD or Postdoctoral positions? Our lab offers a rigorous environment for researchers focusing on surgical outcomes and social determinants.
                </p>
                <Link
                  href="/get-involved"
                  className="inline-flex items-center gap-2 text-label text-swel-navy hover:underline"
                >
                  Application Guidelines
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
