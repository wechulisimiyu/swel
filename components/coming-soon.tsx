export default function ComingSoon({ title }: { title: string }) {
  return (
    <section className="flex items-center justify-center min-h-[60vh] pt-16">
      <div className="flex flex-col items-center gap-4 text-center px-8">
        <h1 className="text-h1 text-swel-navy">{title}</h1>
        <p className="text-body-lg text-swel-muted max-w-md">
          This page is under development. Check back soon.
        </p>
      </div>
    </section>
  )
}
