/**
 * Custom hook for navigation state management
 */
import { useState } from 'react';

/**
 * Manage mobile menu toggle state
 * @returns {Object} { isOpen, toggle, close }
 */
export const useNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return { isOpen, toggle, close };
};
