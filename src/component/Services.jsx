import { useNavigate } from 'react-router-dom'

export default function Services() {
  const navigate = useNavigate()
  const services = [
    {
      id: 1,
      title: "Roof Installation",
      description: "Complete roof installation using premium materials with expert craftsmanship and attention to detail.",
      icon: "🏠",
      features: ["Premium Materials", "Expert Installation", "Warranty Coverage", "Weather Protection"]
    },
    {
      id: 2,
      title: "Roof Repair",
      description: "Professional roof repair services to fix leaks, damage, and restore your roof's integrity.",
      icon: "🔧",
      features: ["Leak Detection", "Damage Assessment", "Emergency Repairs", "Preventive Maintenance"]
    },
    {
      id: 3,
      title: "Aluminum Siding",
      description: "Custom aluminum siding installation for modern aesthetics and superior durability.",
      icon: "🏢",
      features: ["Custom Design", "Weather Resistant", "Low Maintenance", "Energy Efficient"]
    },
    {
      id: 4,
      title: "Aluminum Windows",
      description: "High-quality aluminum window frames and installation for improved energy efficiency.",
      icon: "🪟",
      features: ["Thermal Insulation", "Sound Reduction", "Modern Design", "Long-lasting"]
    },
    {
      id: 5,
      title: "Gutters & Downspouts",
      description: "Professional installation and repair of gutters and downspouts to protect your foundation.",
      icon: "🌧️",
      features: ["Proper Drainage", "Foundation Protection", "Custom Fitting", "Durable Materials"]
    },
    {
      id: 6,
      title: "Roof Inspection",
      description: "Comprehensive roof inspections to identify issues and recommend maintenance solutions.",
      icon: "🔍",
      features: ["Visual Assessment", "Detailed Report", "Maintenance Plan", "Insurance Claims"]
    }
  ]

  return (
    <section id="services" className="bg-slate-900 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Our services</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Complete Roofing & Aluminum Solutions</h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400 leading-8">
            From installation to repair, we provide comprehensive roofing and aluminum services with quality materials and expert craftsmanship.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-2xl bg-slate-950/50 p-8 ring-1 ring-white/10 transition-all hover:ring-amber-200/50 hover:bg-slate-950/80">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white group-hover:text-amber-200 transition-colors mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-6 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-slate-300">
                    <span className="mr-2 text-amber-200">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button onClick={() => navigate('/contact')} className="text-sm font-semibold text-amber-200 hover:text-amber-100 transition-colors">
                  Request Quote →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-amber-200/10 to-amber-200/5 p-8 ring-1 ring-amber-200/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Every project is unique. Contact us for a free consultation and personalized quote tailored to your specific needs.
            </p>
            <button onClick={() => navigate('/contact')} className="rounded-full bg-amber-200 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 transition-colors">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}