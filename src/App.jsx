import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAOS } from './hooks/useAOS';
import { AOS_CONFIG } from './constants/home';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import Project from './component/Project';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Warranty from './component/Warranty';
import FullScreenGallery from './component/FullScreenGallery';
import Faq from './component/Faq';

/**
 * Main App Component
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