export default function AboutHero() {
  return (
    <section className="pt-32 pb-0">
      <div className="mx-auto max-w-300 px-8">
        <div className="flex items-center gap-12">
          {/* Left column — text content */}
          <div className="flex flex-col gap-4 flex-1">
            <span className="text-[12px] font-semibold leading-3 tracking-[1.2px] uppercase text-[#3C475A]">
              OUR IDENTITY
            </span>

            <h1 className="text-[48px] font-bold leading-14.5 tracking-[-0.96px] text-swel-navy-mid">
              Advancing and Designing
            </h1>

            <p className="text-[18px] leading-8 text-swel-body max-w-xl">
              The Surgical Work and Equity Lab (SWEL) is an interdisciplinary research collective
              dedicated to dismantling systemic barriers in global surgery and healthcare leadership.
            </p>
          </div>

          {/* Right column — image placeholder */}
          <div className="flex-1 h-100 rounded-xl border border-swel-border shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden bg-swel-bg-card">
            <div className="w-full h-full opacity-40 bg-linear-to-br from-swel-bg-card via-swel-accent2 to-swel-bg-card" />
          </div>
        </div>
      </div>
    </section>
  )
}
