import { useNavigate } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HERO_SLIDES } from '../constants/home';
import { ANIMATION_DELAY } from '../utils/constants';
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
 * Displays hero carousel, services preview, stats, and CTA sections
 */
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Carousel Section */}
      <section className="relative overflow-hidden bg-slate-950 text-slate-100">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
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

      {/* Services Preview */}
      <section className="bg-slate-900 px-6 py-20 text-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Our services</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Complete Roofing & Aluminum Solutions
            </h2>
          </div>

          <ServicesPreview />

          <div className="mt-12 text-center">
            <Button onClick={() => navigate('/services')}>View All Services</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection navigate={navigate} />

      {/* CTA Section */}
      <CallToActionSection navigate={navigate} />

      {/* Full Page Components */}
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
          Trusted Roofing & Aluminum
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

/**
 * Services Preview Component (Featured Services)
 */
function ServicesPreview() {
  const featuredServices = [
    {
      icon: '🏠',
      title: 'Roof Installation',
      description: 'Complete roof installation using premium materials with expert craftsmanship.',
    },
    {
      icon: '🔧',
      title: 'Roof Repair',
      description: 'Professional roof repair services to fix leaks and restore integrity.',
    },
    {
      icon: '🏢',
      title: 'Aluminum Siding',
      description: 'Custom aluminum siding installation for modern aesthetics and durability.',
    },
  ];

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {featuredServices.map((service, index) => (
        <div
          key={index}
          className="group rounded-2xl bg-slate-950/50 p-8 ring-1 ring-white/10 transition-all hover:ring-amber-200/50"
          data-aos="zoom-in"
          data-aos-delay={index * ANIMATION_DELAY.sm}
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold text-white group-hover:text-amber-200 transition-colors mb-3">
            {service.title}
          </h3>
          <p className="text-slate-400 leading-6">{service.description}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * Stats Section Component
 */
function StatsSection({ navigate }) {
  const stats = [
    { label: 'Experience', value: '09+', description: 'years in roofing and aluminum' },
    { label: 'Projects', value: '500+', description: 'completed installations' },
    { label: 'Warranty', value: '10yr', description: 'coverage guarantee' },
  ];

  return (
    <section className="bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200">About us</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Built to protect your property with premium materials.
            </h2>
            <p className="mt-6 max-w-xl text-slate-400 leading-8">
              Our team specializes in high-quality roofing and aluminum solutions that balance
              durability, style, and long-term value.
            </p>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <Button onClick={() => navigate('/about')}>
                Learn More About Us
              </Button>
              <Button variant="outline" onClick={() => navigate('/contact')}>
                Contact Us
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Call-to-Action Section Component
 */
function CallToActionSection({ navigate }) {
  return (
    <section className="bg-gradient-to-r from-amber-200/10 to-amber-200/5 px-6 py-20 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Transform Your Property?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
          Get a free consultation and quote for your roofing or aluminum project. Quality craftsmanship
          guaranteed.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={() => navigate('/contact')}>Get Free Quote</Button>
          <Button variant="outline" onClick={() => navigate('/services')}>
            Explore Services
          </Button>
          <Button onClick={() => navigate('/gallery')}>Open Gallery</Button>
        </div>
      </div>
    </section>
  );
}