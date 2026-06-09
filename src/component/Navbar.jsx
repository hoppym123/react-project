import { Link } from 'react-router-dom'
import { useState } from 'react'

function navBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
   <nav className="flex items-center justify-between bg-[#541b1b] p-4 sm:p-6 text-white sticky top-0 z-50">
  <div className="flex items-center gap-3 sm:gap-4">
    <div className="relative flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-white/10 shadow-inner flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200 sm:w-8 sm:h-8">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    </div>

    <div className="flex flex-col min-w-0">
      <h1 className="relative text-lg sm:text-3xl font-black italic uppercase tracking-tighter">
        <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent animate-pulse">
          Hoppy Roof
        </span>
        <span className="text-white text-sm sm:text-base"> & Aluminum</span>
      </h1>
      
      <div className="flex items-center gap-2 hidden sm:flex">
        <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
          Quality Strength Durability
        </p>
      </div>
    </div>
  </div>

  {/* Desktop Menu */}
  <div className="hidden md:flex items-center gap-2 lg:gap-4">
    <Link to="/" className="hover:bg-amber-700 text-white font-bold py-2 px-3 lg:px-4 rounded transition-colors text-sm lg:text-base">
      Home
    </Link>
    <Link to="/services" className="hover:bg-amber-700 text-white font-bold py-2 px-3 lg:px-4 italic rounded transition-colors text-sm lg:text-base">
      Service
    </Link>
    <Link to="/projects" className="hover:bg-amber-700 text-white font-bold py-2 px-3 lg:px-4 italic rounded transition-colors text-sm lg:text-base">
      Project
    </Link>
    <Link to="/gallery" className="hover:bg-amber-700 text-white font-bold py-2 px-3 lg:px-4 italic rounded transition-colors text-sm lg:text-base">
      Gallery
    </Link>
    <Link to="/about" className="hover:bg-amber-700 text-white font-bold py-2 px-3 lg:px-4 italic rounded transition-colors text-sm lg:text-base">
      About
    </Link>
    <Link to="/contact" className="hover:bg-amber-700 text-white font-bold py-2 px-3 lg:px-4 italic rounded transition-colors text-sm lg:text-base">
      Contact
    </Link>
  </div>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="md:hidden p-2 hover:bg-amber-700 rounded transition-colors"
    aria-label="Toggle menu"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
    </svg>
  </button>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="absolute top-full left-0 right-0 bg-[#541b1b] md:hidden flex flex-col gap-2 p-4 border-t border-white/10">
      <Link to="/" onClick={() => setIsOpen(false)} className="hover:bg-amber-700 text-white font-bold py-2 px-4 rounded transition-colors">
        Home
      </Link>
      <Link to="/services" onClick={() => setIsOpen(false)} className="hover:bg-amber-700 text-white font-bold py-2 px-4 italic rounded transition-colors">
        Service
      </Link>
      <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:bg-amber-700 text-white font-bold py-2 px-4 italic rounded transition-colors">
        Project
      </Link>
      <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:bg-amber-700 text-white font-bold py-2 px-4 italic rounded transition-colors">
        Gallery
      </Link>
      <Link to="/about" onClick={() => setIsOpen(false)} className="hover:bg-amber-700 text-white font-bold py-2 px-4 italic rounded transition-colors">
        About
      </Link>
      <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:bg-amber-700 text-white font-bold py-2 px-4 italic rounded transition-colors">
        Contact
      </Link>
    </div>
  )}
</nav>
    )
}

export default navBar