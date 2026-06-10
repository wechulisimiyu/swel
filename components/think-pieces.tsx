const articles = [
  {
    date: 'OCT 24, 2024',
    title: 'Why Gender Data Gaps in Surgery Cost Lives',
    description:
      'A critical look at how missing demographic data in surgical research leads to systemic healthcare inequities.',
    author: 'Dr. A. Mensah',
  },
  {
    date: 'SEP 18, 2024',
    title: 'Redefining Resilience in Medical Training',
    description:
      'Moving beyond individual grit to institutional support systems that prevent surgeon burnout.',
    author: 'Dr. K. Osei',
  },
  {
    date: 'AUG 05, 2024',
    title: 'Policy Brief: Equitable On-Call Structures',
    description:
      'Our latest recommendations for hospital administrators on creating family-inclusive staffing models.',
    author: 'Dr. L. Njoku',
  },
]

export default function ThinkPieces() {
  return (
    <section className="bg-swel-bg-grey py-20">
      <div className="mx-auto max-w-300 px-8 flex flex-col gap-12">
        <h2 className="text-h2 font-bold leading-10.5 tracking-[-0.32px] text-swel-navy">
          Latest Think Pieces
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col gap-4 p-6 bg-white border border-swel-subtle rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
            >
              <time className="text-label font-semibold tracking-[0.6px] text-swel-faint">
                {article.date}
              </time>

              <h3 className="text-h4 font-normal leading-6 text-swel-navy">
                {article.title}
              </h3>

              <p className="text-body-sm leading-5 text-swel-body flex-1">
                {article.description}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-swel-divider flex-shrink-0" />
                <span className="text-label font-semibold leading-4 text-swel-author">
                  {article.author}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
