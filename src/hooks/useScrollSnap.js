import { useState, useEffect } from 'react';

const useScrollSnap = (ref, snapHeight, callback) => {
  const [currentSnap, setCurrentSnap] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = ref.current.scrollTop;
      const newSnap = Math.floor(scrollTop / snapHeight);

      if (newSnap !== currentSnap && !isSnapping) {
        setCurrentSnap(newSnap);
        setIsSnapping(true);

        const snapTop = newSnap * snapHeight;
        ref.current.scrollTo({ top: snapTop, behavior: 'smooth' });

        setTimeout(() => {
          setIsSnapping(false);
          if (callback) {
            callback(newSnap);
          }
        }, 500);
      }
    };

    ref.current.addEventListener('scroll', onScroll);

    return () => {
      ref.current.removeEventListener('scroll', onScroll);
    };
  }, [ref, snapHeight, currentSnap, isSnapping, callback]);

  return currentSnap;
};

export default useScrollSnap;
