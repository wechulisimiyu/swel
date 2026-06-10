export default function AboutMissionVision() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-300 px-8">
        <div className="flex gap-6 h-125">
          {/* Mission card — left side */}
          <div className="flex-1 bg-swel-navy-mid rounded-xl p-12 flex flex-col justify-end relative overflow-hidden">
            <div className="flex flex-col gap-2 pb-2">
              <span className="text-label uppercase text-swel-accent2">
                MISSION
              </span>
            </div>
            <h2 className="text-h2 text-white">
              To produce rigorous, actionable research that drives policy reform and transforms
              institutional cultures in surgical care.
            </h2>

            {/* Decorative icon placeholder */}
            <div className="absolute right-0 top-0 w-34.75 h-41 p-8 opacity-10">
              <div className="w-18.75 h-25 bg-swel-heading rounded-sm" />
            </div>
          </div>

          {/* Vision card — right side */}
          <div className="flex-1 bg-swel-navy rounded-xl p-12 flex flex-col justify-end">
            <div className="flex flex-col gap-2 pb-2">
              <span className="text-label uppercase text-swel-accent">
                VISION
              </span>
            </div>
            <h2 className="text-h2 text-white">
              A surgical ecosystem where every patient and practitioner thrives regardless of geography
              or identity.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
