import completeRoof from '../assets/completeRoof.jpeg';
import casementWindow from '../assets/casement window.jpeg';
import handRailings from '../assets/hand railings.jpeg';
import duplex1 from '../assets/duplex1.jpg';

/**
 * Hero carousel slides configuration
 */
export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Premium Roofing & Aluminum Services',
    subtitle: 'Built for durability, finished for style.',
    description: 'Transform your property with expert roofing and aluminum solutions designed for lasting protection.',
    image: completeRoof,
    buttonText: 'Get Free Quote',
    buttonPath: '/contact',
  },
  {
    id: 2,
    title: 'Quality Roof Repairs & Replacements',
    subtitle: 'Fast response, precise results.',
    description: 'From leak repair to full replacement, we deliver premium workmanship and long-term peace of mind.',
    image: casementWindow,
    buttonText: 'View Services',
    buttonPath: '/services',
  },
  {
    id: 3,
    title: 'Modern Aluminum Finishes',
    subtitle: 'Stylish exteriors that perform.',
    description: 'Upgrade your home with custom aluminum work that enhances beauty and reliability.',
    image: handRailings,
    buttonText: 'Open Gallery',
    buttonPath: '/gallery',
  },
  {
    id: 4,
    title: 'Premium Window Upgrades',
    subtitle: 'Improve performance and curb appeal.',
    description: 'Custom aluminum windows that blend durability with modern design.',
    image: handRailings,
    buttonText: 'Browse Windows',
    buttonPath: '/services',
  },
  {
    id: 5,
    title: 'Complete Duplex Solutions',
    subtitle: 'Roofing and aluminum for every property.',
    description: 'Tailored solutions for duplex properties, ensuring both style and functionality.',
    image: duplex1,
    buttonText: 'Explore Duplex Services',
    buttonPath: '/services',
  },
];

/**
 * AOS (Animate On Scroll) configuration
 */
export const AOS_CONFIG = {
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-in-out-quad',
};