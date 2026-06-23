import completeRoof from '../assets/completeRoof.jpeg';
import casementWindow from '../assets/casement window.jpeg';
import handRailings from '../assets/hand railings.jpeg';
import duplex1 from '../assets/duplex1.jpg';
import officepartition from '../assets/officepartition.jpeg';
import handrailing2 from '../assets/handrailing2.jpeg';
import hingeDoor2 from '../assets/hingeDoor2.jpeg';

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
    title: 'casement window',
    subtitle: 'Custom aluminum windows for modern homes.',
    description: 'Upgrade your home with custom aluminum windows that blend durability with modern design.',
    image: casementWindow,
    buttonText: 'view Gallery',
    buttonPath: '/services',
  },
  {
    id: 3,
    title: 'Modern Aluminum Finishes',
    subtitle: 'Stylish exteriors that perform.',
    description: 'Upgrade your home with custom aluminum work that enhances beauty and reliability.',
    image: handRailings,
    buttonText: 'view Gallery',
    buttonPath: '/gallery',
  },
  {
    id: 4,
    title: 'office partition',
    subtitle: 'Custom aluminum partitions for modern offices.',
    description: 'Upgrade your workspace with custom aluminum partitions that blend durability with modern design.',
    image: officepartition,
    buttonText: 'view Gallery',
    buttonPath: '/services',
  },
  {
    id: 5,
    title: 'Complete Duplex Solutions',
    subtitle: 'Roofing and aluminum for every property.',
    description: 'Tailored solutions for duplex properties, ensuring both style and functionality.',
    image: duplex1,
    buttonText: 'view Gallery',
    buttonPath: '/services',
  },
  {
    id: 6,
    title: 'Complete Duplex Solutions',
    subtitle: 'aluminum for every property.',
    description: 'Tailored solutions for duplex properties, ensuring both style and functionality.',
    image: handrailing2,
    buttonText: 'view Gallery',
    buttonPath: '/services',
  },
  {
    id: 7,
    title: 'openable hinge door',
    subtitle: 'Custom aluminum doors for modern homes.',
    description: 'Upgrade your home with custom aluminum doors that blend durability with modern design.',
    image: hingeDoor2,
    buttonText: 'view Gallery',
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