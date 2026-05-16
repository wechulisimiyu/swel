const focusAreas = [
  {
    title: "Surgical Training",
    description:
      "Investigating gendered experiences in residency and the impact of mentorship on trainee retention.",
    icon: (
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden="true">
        <path
          d="M11 0L22 6V12L11 18L0 12V6L11 0Z"
          fill="#111C2D"
          fillOpacity="0.8"
        />
      </svg>
    ),
  },
  {
    title: "Workforce Disparities",
    description:
      "Mapping the global distribution of the surgical workforce with a lens on intersectional equity.",
    icon: (
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" aria-hidden="true">
        <rect width="24" height="4" rx="2" fill="#111C2D" />
        <rect y="8" width="16" height="4" rx="2" fill="#111C2D" />
      </svg>
    ),
  },
  {
    title: "Policy & Systems",
    description:
      "Advocating for institutional changes that support work-life integration and pay equity.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="9" stroke="#111C2D" strokeWidth="2" />
        <path d="M10 5v5l3 3" stroke="#111C2D" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ResearchFocus() {
  return (
    <section className="bg-swel-bg-light py-20">
      <div className="mx-auto max-w-[1200px] px-8 flex flex-col items-center gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-[15px] max-w-[672px] text-center">
          <h2 className="text-[32px] font-bold leading-[42px] tracking-[-0.32px] text-swel-navy">
            Our Focus
          </h2>
          <p className="text-[16px] leading-[26px] text-swel-body">
            Our interdisciplinary research spans three core areas, each designed
            to produce evidence that drives systemic change in surgical
            institutions worldwide.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6 w-full">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="flex flex-col gap-[15px] p-8 bg-white border border-swel-border rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-swel-accent2">
                {area.icon}
              </div>
              <h3 className="text-[24px] font-semibold leading-[34px] text-[#1B1C1C] pt-2">
                {area.title}
              </h3>
              <p className="text-[16px] leading-[26px] text-swel-body">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
