import { useNavigate } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { HERO_SLIDES } from '../constants/home';
import Services from './Services';
import Project from './Project';
import About from './About';
import Contact from './Contact';
import Warranty from './Warranty';
import FullScreenGallery from './FullScreenGallery';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import { Button } from '../components/shared';

/**
 * Home Page Component
 * Renders the sliding hero carousel, followed by full-page feature sections.
 * (Previews and mid-page Call-To-Action sections have been removed).
 */
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Carousel Section */}
      <section className="relative overflow-hidden bg-slate-950 text-slate-100">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="min-h-[70vh]"
        >
          {HERO_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <HeroSlide slide={slide} navigate={navigate} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Full Page Layout Components */}
      <Services />
      <Project />
      <About />
      <FullScreenGallery />
      <Warranty />
      <Contact />
      <FrequentlyAskedQuestions />
    </div>
  );
}

/**
 * Hero Slide Component
 */
function HeroSlide({ slide, navigate }) {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center bg-slate-950">
      <img
        src={slide.image}
        alt={slide.title}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/20" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center sm:px-16 lg:px-24">
        <p className="rounded-full bg-amber-200/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-100 ring-1 ring-white/10">
          Trusted Roofing &amp; Aluminum
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {slide.title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
          {slide.subtitle}
        </p>
        <p className="max-w-3xl text-base leading-7 text-slate-300">
          {slide.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={() => navigate(slide.buttonPath || '/contact')}>
            {slide.buttonText || 'Learn More'}
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/projects')}
          >
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
}