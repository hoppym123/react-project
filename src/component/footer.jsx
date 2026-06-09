import { Link } from 'react-router-dom'

export default function Footer() {
  return (
      
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-amber-200 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-white">Hoppy Roof & Aluminum</span>
            </div>
            <p className="text-slate-400 text-sm leading-6 mb-6">
              Premium roofing and aluminum solutions with over 12 years of experience.
              Quality craftsmanship and customer satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-amber-200 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-200 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-200 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://wa.me/2349014592261" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-200 transition-colors">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.478A11.902 11.902 0 0012.009 0C5.373 0 .125 5.248.125 11.884c0 2.09.545 4.138 1.582 5.94L0 24l6.34-1.655a11.846 11.846 0 005.67 1.444h.005c6.637 0 11.884-5.248 11.884-11.884 0-3.175-1.238-6.163-3.605-8.426zm-8.51 18.14a10.69 10.69 0 01-5.436-1.443l-.387-.231-3.766.982.999-3.666-.252-.387a10.597 10.597 0 01-1.605-5.76c0-5.84 4.75-10.59 10.588-10.59 2.828 0 5.48 1.103 7.48 3.107a10.52 10.52 0 013.115 7.484c0 5.84-4.753 10.59-10.586 10.59zm5.837-7.61c-.316-.158-1.873-.923-2.164-1.029-.29-.106-.5-.158-.71.158-.21.316-.812 1.03-.996 1.24-.183.21-.366.236-.682.079-.316-.158-1.333-.49-2.538-1.566-.938-.838-1.57-1.873-1.753-2.188-.183-.316-.02-.486.14-.644.144-.144.316-.378.473-.566.158-.188.21-.316.316-.526.106-.21.053-.395-.026-.553-.079-.158-.71-1.71-.973-2.34-.256-.616-.517-.533-.71-.544-.183-.01-.395-.01-.605-.01-.21 0-.553.079-.842.395-.29.316-1.11 1.084-1.11 2.637 0 1.553 1.137 3.056 1.295 3.264.158.21 2.24 3.412 5.43 4.785.76.328 1.35.523 1.813.668.762.24 1.456.206 2.005.125.612-.09 1.873-.765 2.138-1.503.265-.737.265-1.37.184-1.503-.079-.132-.29-.21-.605-.37z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-amber-200 transition-colors text-sm">Roof Installation</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-200 transition-colors text-sm">Roof Repair</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-200 transition-colors text-sm">Aluminum Siding</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-200 transition-colors text-sm">Aluminum Windows</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-200 transition-colors text-sm">Gutters & Downspouts</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-200 transition-colors text-sm">Roof Inspection</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-amber-200 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-amber-200 transition-colors text-sm">Our Projects</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-amber-200 transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-amber-200 transition-colors text-sm">Free Quote</Link></li>
              <li><Link to="/warranty" className="text-slate-400 hover:text-amber-200 transition-colors text-sm">Warranty</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-200 transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-amber-200 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>No 2 abule shopping complex<br />lanisa junction,off arapaja odo ona kekere ,ibadan ,oyo state, nigeria.</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-amber-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+234 9014592261</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-amber-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>yayaafeez197@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © 2026 Hoppy Roof & Aluminum. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-slate-400 hover:text-amber-200 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-400 hover:text-amber-200 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-slate-400 hover:text-amber-200 transition-colors">top</a>
  
            </div>       
            </div>
            </div>
          </div>
    </footer>
    
  )
}