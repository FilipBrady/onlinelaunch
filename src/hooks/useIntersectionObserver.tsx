// import { useEffect, useRef, useState } from 'react';

// function useIntersectionObserver(options: any) {
//   const [intersectionRatio, setIntersectionRatio] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setIntersectionRatio(entry.intersectionRatio);
//     }, options);

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [options]);

//   return [ref, intersectionRatio];
// }

// // useEffect(() => {
// //   const hasBeenVisible = localStorage.getItem(ref.current?.id);
// //   if (hasBeenVisible) {
// //     setIsVisible(true);
// //   }
// // }, []);

// // useEffect(() => {
// //   if (intersectionRatio > 0) {
// //     setIsVisible(true);
// //     localStorage.setItem(ref.current?.id, true);
// //   }
// // }, [intersectionRatio]);

// // return [ref, isVisible];
// // }
// export default useIntersectionObserver;
import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(options: any) {
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const hasBeenVisible = localStorage.getItem(
      (ref.current as HTMLDivElement | null)?.id || ''
    );
    if (hasBeenVisible === "true") {
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
