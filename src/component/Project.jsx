import { useNavigate } from 'react-router-dom'
import completeRoof from '../assets/completeRoof.jpeg'
import screenshot1 from '../assets/Screenshot 2026-04-28 130941.png'
export default function Project() {
  const navigate = useNavigate()
  const projects = [
    {
      id: 1,
      title: "Modern Residential Roof",
      description: "Complete roof  using gerald stone coated roofing sheets detailing for a contemporary home.",
      image: completeRoof,
      category: "Residential"
    },
    {
      id: 2,
      title: "Commercial Building Aluminum Siding",
      description: "Full aluminum siding installation for a commercial property, providing durability and modern aesthetics.",
      image: screenshot1,
      category: "Commercial"
    },
    {
      id: 3,
      title: "Historic Home Restoration",
      description: "Careful restoration of a historic home's roof, preserving architectural integrity while ensuring modern protection.",
      image:"https://www.vecteezy.com/photo/58079303-rusted-corrugated-metal-roofing-shows-significant-decay" ,
      category: "Restoration"
    },
    {
      id: 4,
      title: "Aluminum Window Installation",
      description: "Custom aluminum window frames and installation for improved energy efficiency and contemporary design.",
      image: screenshot1,
      category: "Windows"
    },
    {
      id: 5,
      title: "Flat Roof System",
      description: "Professional installation of a flat roof system with proper drainage and waterproofing for commercial buildings.",
      image: screenshot1,
      category: "Commercial"
    },
    {
      id: 6,
      title: "Aluminum Patio Cover",
      description: "Custom aluminum patio cover installation providing shade and protection for outdoor living spaces.",
      image: screenshot1,
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
          <button onClick={() => navigate('/project')} className="rounded-full bg-amber-200 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 transition-colors cursor-pointer">
            View All Projects
          </button>
        </div>
      </div>
    </section> 
        )
      }
      
   