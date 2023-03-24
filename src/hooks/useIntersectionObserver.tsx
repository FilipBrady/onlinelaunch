import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(options: any) {
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersectionRatio(entry.intersectionRatio);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, intersectionRatio];
}
export default useIntersectionObserver;
