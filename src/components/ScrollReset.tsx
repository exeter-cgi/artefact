import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollReset = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Reset scroll before the page paints
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

export default ScrollReset;
