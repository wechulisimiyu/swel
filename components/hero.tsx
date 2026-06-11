import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative mt-16 h-204.75 overflow-hidden">
      {/* Background placeholder (would be replaced with an image) */}
      <div className="absolute inset-0 bg-linear-to-br from-swel-bg-card via-swel-accent2 to-swel-bg-card opacity-20" />

      {/* Left-to-right gradient overlay */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-swel-bg-light via-swel-bg-light/95 to-transparent" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto max-w-300 w-full px-8">
          <div className="flex flex-col gap-[23px] max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-swel-accent w-fit">
              <span className="text-label text-swel-navy">
                SWEL LAB
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-h1 text-swel-navy max-w-3xl">
              Advancing Gender Equity in Global Surgery
            </h1>

            {/* Subtitle */}
            <p className="text-body-lg font-normal text-swel-body max-w-3xl">
              Research. Advocacy. Systems Change. We are building the evidentiary foundation for a
              more equitable surgical workforce worldwide.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 pt-1">
              <Link
                href="/research"
                className="relative flex items-center justify-center px-8 py-[17.5px] rounded-lg bg-swel-navy shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-swel-navy/90 transition-all hover:scale-105 active:scale-95"
              >
                <span className="text-label text-white">
                  EXPLORE OUR RESEARCH
                </span>
              </Link>

              <Link
                href="/publications"
                className="flex items-center justify-center px-8 py-[16px] rounded-lg border-2 border-swel-navy hover:bg-swel-navy/5 transition-all hover:scale-105 active:scale-95"
              >
                <span className="text-label text-swel-navy">
                  VIEW PUBLICATIONS
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
