import React, { useState, useLayoutEffect } from 'react';

export const dummy = 1;
export const getScrollY = () => {
  const [scrollY, setScrollY] = useState(0);
  useLayoutEffect(() => {
    function updateTop() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', updateTop);
    updateTop();
    return () => window.removeEventListener('onscroll', updateTop);
  }, []);
  return scrollY;
};
