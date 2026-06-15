import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()
  return (
    <section id="about" className="bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200">About us</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Built to protect your property with premium materials.</h2>
            <p className="mt-6 max-w-xl text-slate-400 leading-8">
              Our team specializes in high-quality roofing and aluminum solutions that balance durability, style, and long-term value.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Experience</p>
                <p className="mt-3 text-3xl font-semibold text-white">12+</p>
                <p className="mt-2 text-sm text-slate-400">years in roofing and aluminum</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Projects</p>
                <p className="mt-3 text-3xl font-semibold text-white">500+</p>
                <p className="mt-2 text-sm text-slate-400">completed installations</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Warranty</p>
                <p className="mt-3 text-3xl font-semibold text-white">05yr</p>
                <p className="mt-2 text-sm text-slate-400">coverage on select systems</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#541b1b]/10 p-10 shadow-2xl shadow-black/30">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Our mission</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">Complete roof and aluminum service, from design to finish.</h3>
            <p className="mt-4 text-slate-300 leading-7">
              We work with every client to select the right materials, stay on schedule, and deliver a finish that improves both function and curb appeal.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => navigate('/projects')} className="rounded-full bg-amber-200 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition-colors">
                View Projects
              </button>
              <button onClick={() => navigate('/contact')} className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}