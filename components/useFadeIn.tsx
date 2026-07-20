"use client";

import { useEffect, useRef } from "react";

/**
 * Reveals every [data-fade] element inside the returned ref by adding the
 * `is-visible` class. The actual fade (opacity / translateY) is done in
 * CSS via a transition, so it works in every browser without relying on
 * GSAP's animation ticker (which can stall in headless/preview envs).
 *
 * A scroll/resize listener reveals elements as they enter the viewport,
 * and a fallback timeout guarantees everything becomes visible even if no
 * scroll event ever fires.
 */
export function useFadeIn<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-fade], [data-line]")
    );

    if (mq.matches) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const revealed = new Set<HTMLElement>();
    let raf = 0;

    const reveal = (el: HTMLElement) => {
      if (revealed.has(el)) return;
      revealed.add(el);
      // Force the browser to commit the initial (hidden) state before flipping
      // the class, so the CSS transition actually runs. Using a synchronous
      // reflow (instead of requestAnimationFrame) keeps this reliable even in
      // headless / background-tab environments where rAF is throttled.
      void el.offsetWidth;
      el.classList.add("is-visible");
    };

    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      targets.forEach((el) => {
        if (revealed.has(el)) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) reveal(el);
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const fallback = window.setTimeout(() => {
      targets.forEach((el) => reveal(el));
    }, 2000);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return ref;
}
