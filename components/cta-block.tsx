import Link from 'next/link'
import { Hexagon, ArrowRight } from 'lucide-react'

export default function CTABlock() {
  return (
    <section className="px-10 py-6">
      <div className="relative rounded-[32px] overflow-hidden bg-swel-navy-mid">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-swel-navy-mid opacity-10" />

        <div className="relative flex flex-col items-center text-center px-20 py-20 gap-6 max-w-4xl mx-auto">
          {/* Icon placeholder */}
          <div className="flex items-center justify-center w-9 h-11">
            <Hexagon className="w-9 h-11 text-white" fill="white" />
          </div>

          <h2 className="text-h1 text-white pt-2">
            Join Us
          </h2>

          <p className="text-body-lg text-swel-cta-light pb-4">
            Partner with SWEL to shape the future of an equitable surgical workforce. Whether you
            are a researcher, clinician, or institution, your collaboration matters.
          </p>

          <Link
            href="/get-involved"
            className="relative flex items-center gap-3 px-10 py-5 rounded-xl bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] hover:bg-swel-bg transition-all hover:scale-105 active:scale-95"
          >
            <span className="text-body font-bold text-swel-navy">
              Become a Research Partner
            </span>
            <ArrowRight className="w-4 h-4 text-swel-navy" />
          </Link>
        </div>
      </div>
    </section>
  )
}
