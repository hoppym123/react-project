import completeRoof from '../assets/completeRoof.jpeg';
import screenshot1 from '../assets/Screenshot 2026-04-28 130941.png'; 
import wallCotton from '../assets/wallCotton.jpeg';  
import steprailings from '../assets/steprailings.jpeg';
import transom2 from '../assets/transom2.jpeg';
import officepartition from '../assets/officepartition.jpeg';

/**
 * Projects portfolio data configuration
 */
export const PROJECTS = [
  {
    id: 1,
    title: 'Modern Residential Roof',
    description: 'Complete roof installation using gerald stone coated roofing sheets detailing for a contemporary home.',
    image: completeRoof,
    category: 'Residential', 
  },
  {
    id: 2,
    title: 'Commercial Building Aluminum Siding',
    description: 'Full aluminum siding installation for a commercial property, providing durability and modern aesthetics.',
    image: wallCotton,
    category: 'Commercial',
  },
  {
    id: 3,
    title: 'step railing',
    description: 'Custom aluminum step railing installation for enhanced safety and aesthetics.',
    image: steprailings,
    category: 'railings',
  },
  {
    id: 4,
    title: 'office partition',
    description: 'Custom aluminum office partitions for improved privacy and space utilization.',
    image: officepartition,
    category: 'Partitions',
  },
  {
    id: 5,
    title: 'transome window',
    description: 'Custome transome windows for improved natural lighting and ventilation.',
    image: transom2,
    category: 'Windows',
  },
  {
    id: 6,
    title: 'hand railing',
    description: 'Custom aluminum hand railing installation for enhanced safety and aesthetics.',
    image: screenshot1,
    category: 'Hand Railings',
  },
];
