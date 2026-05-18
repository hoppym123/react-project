import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
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
            <button onClick={() => navigate('/contact')} className="rounded-full bg-amber-200 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 transition-colors cursor-pointer">
              Get Free Quote
            </button>
            <button onClick={() => navigate('/projects')} className="text-sm font-semibold leading-6 text-slate-100 hover:text-amber-200 transition-colors cursor-pointer">
              View Our Work <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10"></div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-slate-900 px-6 py-20 text-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Our services</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Complete Roofing & Aluminum Solutions</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl bg-slate-950/50 p-8 ring-1 ring-white/10 transition-all hover:ring-amber-200/50">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-white group-hover:text-amber-200 transition-colors mb-3">
                Roof Installation
              </h3>
              <p className="text-slate-400 leading-6">
                Complete roof installation using premium materials with expert craftsmanship.
              </p>
            </div>

            <div className="group rounded-2xl bg-slate-950/50 p-8 ring-1 ring-white/10 transition-all hover:ring-amber-200/50">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white group-hover:text-amber-200 transition-colors mb-3">
                Roof Repair
              </h3>
              <p className="text-slate-400 leading-6">
                Professional roof repair services to fix leaks and restore integrity.
              </p>
            </div>

            <div className="group rounded-2xl bg-slate-950/50 p-8 ring-1 ring-white/10 transition-all hover:ring-amber-200/50">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-white group-hover:text-amber-200 transition-colors mb-3">
                Aluminum Sliding
              </h3>
              <p className="text-slate-400 leading-6">
                Custom aluminum sliding door installation for modern aesthetics and durability.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button onClick={() => navigate('/services')} className="rounded-full bg-amber-200 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 transition-colors cursor-pointer">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-950 px-6 py-20 text-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200">About us</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Built to protect your property with premium materials.</h2>
              <p className="mt-6 max-w-xl text-slate-400 leading-8">
                Our team specializes in high-quality roofing and aluminum solutions that balance durability, style, and long-term value.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Experience</p>
                <p className="mt-3 text-3xl font-semibold text-white">09+</p>
                <p className="mt-2 text-sm text-slate-400">years in roofing and aluminum</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Projects</p>
                <p className="mt-3 text-3xl font-semibold text-white">500+</p>
                <p className="mt-2 text-sm text-slate-400">completed installations</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Warranty</p>
                <p className="mt-3 text-3xl font-semibold text-white">10yr</p>
                <p className="mt-2 text-sm text-slate-400">coverage guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-200/10 to-amber-200/5 px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Property?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Get a free consultation and quote for your roofing or aluminum project.
            Quality craftsmanship guaranteed.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button onClick={() => navigate('/contact')} className="rounded-full bg-amber-200 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 transition-colors cursor-pointer">
              Get Free Quote
            </button>
            <button className="text-sm font-semibold leading-6 text-slate-100 hover:text-amber-200 transition-colors cursor-pointer">
              Call :+2349014592261
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}