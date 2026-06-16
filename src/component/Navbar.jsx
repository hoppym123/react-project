import { Link } from 'react-router-dom';
import { useNavigation } from '../hooks/useNavigation';
import { NAVIGATION_LINKS, BRAND_NAME, BRAND_SUBTITLE, BRAND_TAGLINE } from '../constants/navigation';

/**
 * Navigation Bar Component
 * Displays branding and navigation links with mobile menu support
 */
function Navbar() {
  const { isOpen, toggle, close } = useNavigation();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-slate-900 p-4 sm:p-6 text-white shadow-lg">
      {/* Logo and Branding */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-white/10 shadow-inner flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-200 sm:w-8 sm:h-8"
            aria-hidden="true"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>

        <div className="flex flex-col min-w-0">
          <h1 className="text-lg sm:text-3xl font-black italic uppercase tracking-tighter">
            <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent animate-pulse">
              {BRAND_NAME}
            </span>
            <span className="text-white text-sm sm:text-base"> {BRAND_SUBTITLE}</span>
          </h1>

          <div className="flex items-center gap-2 hidden sm:flex">
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
              {BRAND_TAGLINE}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-2 lg:gap-4">
        {NAVIGATION_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="hover:bg-amber-700 text-white font-bold py-2 px-3 lg:px-4 rounded transition-colors text-sm lg:text-base"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggle}
        className="md:hidden p-2 hover:bg-amber-700 rounded transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 md:hidden flex flex-col gap-2 p-4 border-t border-white/10 shadow-lg">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={close}
              className="hover:bg-amber-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;