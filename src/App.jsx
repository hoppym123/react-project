import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/footer'
import Project from './component/Project'
import About from './component/About'
import Services from './component/Services'
import Contact from './component/Contact'

function App() {
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
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
