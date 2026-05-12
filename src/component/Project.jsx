export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Modern Residential Roof Replacement",
      description: "Complete roof replacement using premium asphalt shingles with architectural detailing for a contemporary home.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      category: "Residential"
    },
    {
      id: 2,
      title: "Commercial Building Aluminum Siding",
      description: "Full aluminum siding installation for a commercial property, providing durability and modern aesthetics.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      category: "Commercial"
    },
    {
      id: 3,
      title: "Historic Home Restoration",
      description: "Careful restoration of a historic home's roof, preserving architectural integrity while ensuring modern protection.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      category: "Restoration"
    },
    {
      id: 4,
      title: "Aluminum Window Installation",
      description: "Custom aluminum window frames and installation for improved energy efficiency and contemporary design.",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
      category: "Windows"
    },
    {
      id: 5,
      title: "Flat Roof System",
      description: "Professional installation of a flat roof system with proper drainage and waterproofing for commercial buildings.",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&h=300&fit=crop",
      category: "Commercial"
    },
    {
      id: 6,
      title: "Aluminum Patio Cover",
      description: "Custom aluminum patio cover installation providing shade and protection for outdoor living spaces.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      category: "Outdoor"
    }
  ]

  return (
    <section id="projects" className="bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Our work</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Featured Projects</h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400 leading-8">
            Explore our portfolio of completed roofing and aluminum projects, showcasing our commitment to quality craftsmanship and customer satisfaction.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-slate-900/50 ring-1 ring-white/10 transition-all hover:ring-amber-200/50">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-amber-200/10 px-3 py-1 text-xs font-medium text-amber-200 ring-1 ring-inset ring-amber-200/20">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-amber-200 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-6">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="rounded-full bg-amber-200 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}