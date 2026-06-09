import { useNavigate } from 'react-router-dom'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const heroSlides = [
  {
    title: 'Premium Roofing & Aluminum Services',
    subtitle: 'Built for durability, finished for style.',
    description: 'Transform your property with expert roofing and aluminum solutions designed for lasting protection.',
    image: 'src/assets/completeRoof.jpeg',
    buttonText: 'Get Free Quote',
    buttonPath: '/contact',
  },
  {
    title: 'Quality Roof Repairs & Replacements',
    subtitle: 'Fast response, precise results.',
    description: 'From leak repair to full replacement, we deliver premium workmanship and long-term peace of mind.',
    image: 'src/assets/casement window.jpeg',
    buttonText: 'View Services',
    buttonPath: '/services',
  },
  {
    title: 'Modern Aluminum Finishes',
    subtitle: 'Stylish exteriors that perform.',
    description: 'Upgrade your home with custom aluminum work that enhances beauty and reliability.',
    image: 'src/assets/hand railings.jpeg',
    buttonText: 'Open Gallery',
    buttonPath: '/gallery',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-slate-100">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          className="min-h-[70vh]"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex min-h-[70vh] items-center justify-center bg-slate-950">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-slate-950/60" />
                <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center sm:px-16 lg:px-24">
                  <p className="rounded-full bg-amber-200/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-100 ring-1 ring-white/10">
                    Trusted Roofing & Aluminum
                  </p>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                    {slide.subtitle}
                  </p>
                  <p className="max-w-3xl text-base leading-7 text-slate-300">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => navigate(slide.buttonPath)}
                      className="rounded-full bg-amber-200 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 transition-colors"
                    >
                      {slide.buttonText}
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate('/projects')}
                      className="rounded-full border border-white/15 bg-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                    >
                      View Projects
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
              <div className="mt-8 flex flex-wrap justify-start gap-4">
                <button onClick={() => navigate('/about')} className="rounded-full bg-amber-200 px-8 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-amber-300 transition-colors">
                  Learn More About Us
                </button>
                <button onClick={() => navigate('/contact')} className="rounded-full border border-white/15 bg-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
                  Contact Us
                </button>
              </div>
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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => navigate('/contact')} className="rounded-full bg-amber-200 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 transition-colors cursor-pointer">
              Get Free Quote
            </button>
            <button onClick={() => navigate('/services')} className="rounded-full border border-white/15 bg-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors cursor-pointer">
              Explore Services
            </button>
            <button onClick={() => navigate('/gallery')} className="rounded-full bg-amber-200/90 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 transition-colors cursor-pointer">
              Open Gallery
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}