import { Globe, Users } from 'lucide-react'

export default function AboutProblem() {
  return (
    <section className="mt-24 bg-swel-bg-grey py-24">
      <div className="mx-auto max-w-300 px-8">
        <div className="flex gap-12">
          {/* Left heading */}
          <div className="flex flex-col gap-4 w-1/3">
            <h2 className="text-h2 text-swel-navy-mid">
              The Challenge we address.
            </h2>
            <div className="w-16 h-1 bg-swel-accent-line" />
          </div>

          {/* Right cards */}
          <div className="flex gap-6 w-2/3">
            {/* Card 1 */}
            <div className="flex-1 bg-white border border-swel-border shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-lg p-8 flex flex-col gap-3">
              <Globe className="w-10 h-10 text-swel-navy-mid" />
              <h3 className="text-h3 leading-8 text-swel-heading pt-1">
                Global Surgical Inequity
              </h3>
              <p className="text-body-lg leading-6 text-swel-body">
                Over 5 billion people lack access to safe, affordable surgical care. We analyze the
                structural determinants that perpetuate this disparity in low-resource settings.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-white border border-swel-border shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-lg p-8 flex flex-col gap-3">
              <Users className="w-10 h-10 text-swel-navy-mid" />
              <h3 className="text-h3 leading-8 text-swel-heading pt-1">
                Leadership Disparities
              </h3>
              <p className="text-body-lg leading-6 text-swel-body">
                Gender and ethnic representation in surgical leadership remains stagnant. Our work
                targets the biases that exclude talented surgeons from decision-making roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
