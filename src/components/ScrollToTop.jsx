import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Jaise hi path change hoga, screen top pe chali jayegi
  }, [pathname]);

  return null;
};

export default ScrollToTop;