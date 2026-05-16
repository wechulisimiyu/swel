import Link from "next/link";

const projects = [
  {
    tags: [
      { label: "GLOBAL HEALTH", color: "bg-swel-accent3 text-[#57657A]" },
      { label: "RESEARCH", color: "bg-swel-accent text-swel-navy" },
    ],
    title: "The Global Atlas of Surgical Equity",
    description:
      "A comprehensive 5-year study mapping surgical access for women in rural Sub-Saharan Africa.",
    href: "/research/global-atlas",
  },
  {
    tags: [
      { label: "POLICY", color: "bg-swel-accent3 text-[#57657A]" },
      { label: "MENTORSHIP", color: "bg-swel-accent text-swel-navy" },
    ],
    title: "Mentorship Reimagined",
    description:
      "Developing a standardized framework for surgical mentorship across high-income and LMIC contexts.",
    href: "/research/mentorship",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-8 flex flex-col gap-12">
        {/* Header row */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[7px]">
            <h2 className="text-[32px] font-bold leading-[42px] tracking-[-0.32px] text-swel-navy">
              Featured Projects
            </h2>
            <p className="text-[16px] leading-[26px] text-swel-body">
              Landmark studies shaping the field.
            </p>
          </div>
          <Link
            href="/research"
            className="border-b-2 border-swel-navy pb-1 text-[12px] font-semibold tracking-[0.6px] text-swel-navy hover:opacity-70 transition-opacity"
          >
            VIEW ALL RESEARCH
          </Link>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col border border-swel-border rounded-2xl overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="w-full aspect-video bg-swel-bg-card flex items-center justify-center">
                <span className="text-swel-muted text-sm">Image placeholder</span>
              </div>

              {/* Card content */}
              <div className="flex flex-col gap-[11px] p-8">
                {/* Tags */}
                <div className="flex items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-2 py-1 rounded text-[10px] font-bold leading-[16px] ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                <h3 className="text-[24px] font-semibold leading-[34px] text-[#1B1C1C] pt-1">
                  {project.title}
                </h3>

                <p className="text-[16px] leading-[26px] text-swel-body">
                  {project.description}
                </p>

                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 text-[16px] font-semibold leading-[26px] text-swel-navy hover:opacity-70 transition-opacity"
                >
                  Read More
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                    <path
                      d="M1 8L8 1M8 1H2M8 1V7"
                      stroke="#111C2D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
