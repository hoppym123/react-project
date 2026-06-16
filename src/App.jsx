import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAOS } from './hooks/useAOS';
import { AOS_CONFIG } from './constants/home';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Project from './Component/Project';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Warranty from './Component/Warranty';
import FullScreenGallery from './Component/FullScreenGallery';
import Faq from './Component/Faq';

/**
 * Main App Component
 * Handles routing and layout structures smoothly
 */
function App() {
  useAOS(AOS_CONFIG);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Home />
                  <Services />
                  <Project />
                  <About />
                  <FullScreenGallery />
                  <Warranty />
                  <Contact />
                  <Faq />
                </>
              } 
            />
            {/* Standalone subpages for navbar links */}
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<FullScreenGallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;