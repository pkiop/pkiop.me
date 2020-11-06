import React, { useState, useLayoutEffect} from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export const useComponentSize = (component: React.RefObject<HTMLDivElement | HTMLInputElement>) => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => setSize([component.current!.offsetWidth, component.current!.offsetHeight]);
    window.addEventListener('resize', updateSize);
    return () => { 
      return window.removeEventListener('resize', updateSize)
    };
  }, []);
  return size;
}