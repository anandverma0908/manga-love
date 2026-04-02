import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  className = 'sr-visible',
  threshold = 0.1
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) el.classList.add(className); }); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [className, threshold]);

  return ref;
}
