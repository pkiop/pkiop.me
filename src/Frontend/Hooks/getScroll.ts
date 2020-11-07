import React, { useState, useLayoutEffect} from 'react';

export const getScrollTop = () => {
  const [top, setTop] = useState(0);
  useLayoutEffect(() => {
    function updateTop() {
      setTop(window.scrollY);
    }
    window.addEventListener('scroll', updateTop);
    updateTop();
    return () => window.removeEventListener('onscroll', updateTop);
  }, []);
  return top;
}