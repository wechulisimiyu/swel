import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mt-16 h-[819px] overflow-hidden">
      {/* Background placeholder (would be replaced with an image) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #eceef0 0%, #dae2fd 50%, #eceef0 100%)",
          opacity: 0.2,
        }}
      />

      {/* Left-to-right gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, #F7F9FB 0%, rgba(247,249,251,0.95) 50%, rgba(247,249,251,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto max-w-[1200px] w-full px-8">
          <div className="flex flex-col gap-[23px] max-w-[768px]">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-swel-accent w-fit">
              <span className="text-[12px] font-semibold tracking-[0.6px] text-swel-navy">
                SWEL LAB
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[48px] font-bold leading-[58px] tracking-[-0.96px] text-swel-navy max-w-[768px]">
              Advancing Gender Equity in Global Surgery
            </h1>

            {/* Subtitle */}
            <p className="text-[18px] font-normal leading-[32px] text-swel-body max-w-[768px]">
              Research. Advocacy. Systems Change. We are building the evidentiary
              foundation for a more equitable surgical workforce worldwide.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 pt-1">
              <Link
                href="/research"
                className="relative flex items-center justify-center px-8 py-[17.5px] rounded-lg bg-swel-navy shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-swel-navy/90 transition-colors"
              >
                <span className="text-[12px] font-semibold tracking-[0.6px] text-white">
                  EXPLORE OUR RESEARCH
                </span>
              </Link>

              <Link
                href="/publications"
                className="flex items-center justify-center px-8 py-[16px] rounded-lg border-2 border-swel-navy hover:bg-swel-navy/5 transition-colors"
              >
                <span className="text-[12px] font-semibold tracking-[0.6px] text-swel-navy">
                  VIEW PUBLICATIONS
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
