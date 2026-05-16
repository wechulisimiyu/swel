const stats = [
  { value: '15+', label: 'PUBLICATIONS' },
  { value: '8', label: 'COUNTRIES' },
  { value: '40+', label: 'EXPERTS' },
]

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-300 px-8">
        <div className="flex gap-12 items-start">
          {/* Left column — text content */}
          <div className="flex flex-col gap-8 flex-1">
            <h2 className="text-[32px] font-bold leading-10.5 tracking-[-0.32px] text-swel-navy">
              About the Lab
            </h2>

            <div className="flex flex-col gap-6">
              <p className="text-[16px] leading-6.5 text-swel-body">
                The Surgical Work and Equity Lab (SWEL) operates at the critical intersection of
                clinical excellence and social justice. Our mission is to dismantle structural
                barriers that prevent equitable participation in surgical careers.
              </p>
              <p className="text-[16px] leading-6.5 text-swel-body">
                Through rigorous, peer-reviewed methodology and collaborative global partnerships, we
                produce actionable data that informs policy and transforms institutional cultures.
              </p>
            </div>

            {/* Stat boxes */}
            <div className="flex gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 flex flex-col items-center justify-center gap-1 p-4 border border-swel-border rounded-xl h-20"
                >
                  <span className="text-[24px] font-semibold leading-8.5 text-swel-navy">
                    {stat.value}
                  </span>
                  <span className="text-[12px] font-semibold tracking-[0.6px] text-swel-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — image placeholder */}
          <div className="flex-1 h-134 bg-swel-bg-card rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="w-full h-full opacity-40 bg-linear-to-br from-swel-bg-card via-swel-accent2 to-swel-bg-card" />
          </div>
        </div>
      </div>
    </section>
  )
}
