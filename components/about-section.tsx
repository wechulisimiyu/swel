const stats = [
  { value: "15+", label: "PUBLICATIONS" },
  { value: "8", label: "COUNTRIES" },
  { value: "40+", label: "EXPERTS" },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-[72px]">
      <div className="relative mx-auto max-w-[1136px] h-[536px]">
        {/* Left column — text content */}
        <div className="absolute left-0 right-[600px] top-[72px] flex flex-col gap-8">
          <h2 className="text-[32px] font-bold leading-[42px] tracking-[-0.32px] text-swel-navy">
            About the Lab
          </h2>

          <div className="flex flex-col gap-6">
            <p className="text-[16px] leading-[26px] text-swel-body">
              The Surgical Work and Equity Lab (SWEL) operates at the critical
              intersection of clinical excellence and social justice. Our mission
              is to dismantle structural barriers that prevent equitable
              participation in surgical careers.
            </p>
            <p className="text-[16px] leading-[26px] text-swel-body">
              Through rigorous, peer-reviewed methodology and collaborative
              global partnerships, we produce actionable data that informs
              policy and transforms institutional cultures.
            </p>
          </div>

          {/* Stat boxes */}
          <div className="relative h-20">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="absolute top-0 flex flex-col items-center justify-center gap-1 p-4 border border-swel-border rounded-xl"
                style={{
                  left: i * 184,
                  right: (stats.length - 1 - i) * 184,
                  height: 80,
                }}
              >
                <span className="text-[24px] font-semibold leading-[34px] text-swel-navy">
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
        <div className="absolute top-0 right-0 left-[600px] h-[536px] bg-swel-bg-card rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden flex items-center justify-center">
          <span className="text-swel-muted text-sm">Image placeholder</span>
        </div>
      </div>
    </section>
  );
}
