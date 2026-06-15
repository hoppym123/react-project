import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/footer'
import Project from './component/Project'
import About from './component/About'
import Services from './component/Services'
import Contact from './component/Contact'
import Warranty from './component/Waranty'
import FullScreenGallery from './component/FullScreenGallery'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out-quad',
    })
  }, [])
  return (
    <Router>
      <div className="min-h-screen bg-[#05070f] text-slate-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<FullScreenGallery />} />
          <Route path="/warranty" element={<Warranty />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
