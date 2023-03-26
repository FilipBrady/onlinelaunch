import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(options: any) {
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersectionRatio(entry.intersectionRatio);
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  useEffect(() => {
    const hasBeenVisible = localStorage.getItem(
      (ref.current as HTMLDivElement | null)?.id || ''
    );
    if (hasBeenVisible === 'true') {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (intersectionRatio > 0) {
      setIsVisible(true);
      localStorage.setItem(
        (ref.current as HTMLDivElement | null)?.id || '',
        'true'
      );
    }
  }, [intersectionRatio]);

  return [ref, isVisible];
}

export default useIntersectionObserver;
