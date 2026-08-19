import { useEffect, useRef, useState } from "react";

export default function useCountUp(targets, duration = 1400) {
  const ref = useRef(null);
  const started = useRef(false);
  const [counts, setCounts] = useState(
    Object.fromEntries(Object.keys(targets).map((key) => [key, 0]))
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - start) / duration);
            const ease = 1 - Math.pow(1 - p, 3);
            setCounts(
              Object.fromEntries(
                Object.entries(targets).map(([key, value]) => [
                  key,
                  Math.round(value * ease),
                ])
              )
            );
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targets, duration]);

  return [ref, counts];
}
