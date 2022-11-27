import { useRef, useEffect } from "react";

export default function useHorizontalScroll() {
  const elementRef = useRef(null);
  useEffect(() => {
    const element: any = elementRef.current;
    if (element) {
      const onWheel = (event: any) => {
        if (event.deltaY == 0) return;
        event.preventDefault();
        element.scrollBy(event.deltaY * 0.4, 0);
      };
      element.addEventListener('wheel', onWheel);
      return () => element.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elementRef;
}