const approaches = [
  {
    number: '01',
    title: 'Quantitative Research',
    description:
      'Utilizing large-scale data sets to map surgical outcomes and workforce demographics across international borders.',
  },
  {
    number: '02',
    title: 'Policy Advocacy',
    description:
      'Engaging with institutional leaders to implement evidence-based equity frameworks within hospital systems and academic centers.',
  },
  {
    number: '03',
    title: 'Capacity Building',
    description:
      'Empowering local investigators through mentorship and resource sharing to lead research in their own communities.',
  },
]

export default function AboutApproach() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-300 px-8">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold leading-10.5 tracking-tight text-swel-navy-mid">
              Strategic Approach
            </h2>
            <p className="text-body-lg text-swel-body">
              Translating data into structural change.
            </p>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-3 gap-6">
            {approaches.map((item) => (
              <div
                key={item.number}
                className="flex flex-col gap-3 pl-8 border-l-2 border-swel-border pt-4 pb-4 hover:border-swel-navy-mid transition-colors"
              >
                <span className="text-label text-swel-body">
                  {item.number}
                </span>
                <h3 className="text-h3 text-swel-navy-mid pt-1">
                  {item.title}
                </h3>
                <p className="text-body text-swel-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
