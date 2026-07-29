"use client";

import { useEffect, useRef } from "react";

/**
 * Adds `is-visible` when [data-fade] enters the viewport so CSS can run a
 * one-shot fade-up. Content stays visible by default — never opacity:0 holes.
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
    const reveal = (el: HTMLElement) => {
      if (revealed.has(el)) return;
      revealed.add(el);
      el.classList.add("is-visible");
    };

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
              observer?.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.12 }
      );
      targets.forEach((el) => observer!.observe(el));
    } else {
      targets.forEach((el) => reveal(el));
    }

    return () => observer?.disconnect();
  }, []);

  return ref;
}
