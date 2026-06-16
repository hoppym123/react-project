/**
 * Custom hook for initializing AOS (Animate On Scroll)
 */
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Initialize AOS with provided configuration
 * @param {Object} config - AOS configuration options
 */
export const useAOS = (config = {}) => {
  useEffect(() => {
    AOS.init(config);
  }, [config]);
};
