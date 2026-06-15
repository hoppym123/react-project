export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-24 text-center text-slate-100 sm:px-16 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Premium Roofing & Aluminum
          <span className="block bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Transform your property with our expert roofing and aluminum services. We deliver quality craftsmanship,
          durable materials, and exceptional results that stand the test of time.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="rounded-full bg-amber-200 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 transition-colors">
            Get Free Quote
          </button>
          <button className="text-sm font-semibold leading-6 text-slate-100 hover:text-amber-200 transition-colors">
            View Our Work <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-amber-200">200+</div>
            <div className="text-sm text-slate-400">Projects Completed</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-amber-200">12+</div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-amber-200">100%</div>
            <div className="text-sm text-slate-400">Satisfaction Rate</div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10"></div>
      </div>
    </section>
  )
}