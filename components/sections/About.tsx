"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "@/components/ui/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_LINES = [
  "With a mission to build a fossil-free future,",
  "DYU Solar designs and constructs C&I and",
  "utility-scale solar plants across Delhi/NCR —",
  "an institutional partner for sustainable",
  "energy landmarks, built on trust.",
];

const MOBILE_COPY =
  "With a mission to build a fossil-free future, DYU Solar designs and constructs C&I and utility-scale solar plants across Delhi/NCR — an institutional partner for sustainable energy landmarks, built on trust.";

/**
 * Hulax home About: cream panel overlaps hero (−45px / 52px radius),
 * dual-layer width-clip line reveal (scrub 15→65%), floating side images.
 */
export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      ref.current
        .querySelectorAll<HTMLElement>(".about-summary-line")
        .forEach((el) => {
          el.style.width = "100%";
        });
      return;
    }

    const ctx = gsap.context(() => {
      const isDesktopReveal = window.matchMedia("(min-width: 992px)").matches;
      const hideImages = window.matchMedia("(max-width: 767px)").matches;

      /* Badge + summary + CTA: Hulax slideInBottom on enter */
      gsap.fromTo(
        ".about-badge-el",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: ".about-badge-el", start: "top 92%", once: true },
        }
      );

      if (isDesktopReveal) {
        const lines = gsap.utils.toArray<HTMLElement>(".about-summary-line");
        gsap.set(lines, { width: "0%" });

        /* Wrapper fades in like Hulax slideInBottom (delay 100) */
        gsap.fromTo(
          ".about-summary-wrapper.desktop",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".about-summary-wrapper.desktop",
              start: "top 95%",
              once: true,
            },
          }
        );

        /*
         * Hulax a-6 "About Summary On Block": SCROLLING_IN_VIEW, startsEntering,
         * smoothing 80, width 0→100% per line at keyframes 15/25/35/45/55 → 65.
         */
        if (lines.length) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".about-summary-wrapper.desktop",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          });
          const starts = [0.15, 0.25, 0.35, 0.45, 0.55];
          lines.forEach((line, i) => {
            const start = starts[i] ?? 0.15 + i * 0.1;
            tl.fromTo(
              line,
              { width: "0%" },
              { width: "100%", duration: 0.1, ease: "none" },
              start
            );
          });
        }
      } else {
        gsap.fromTo(
          ".about-summary-wrapper.is-mobile",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".about-summary-wrapper.is-mobile",
              start: "top 92%",
              once: true,
            },
          }
        );
      }

      /* CTA appears as it enters — independent of reveal completion (Hulax slideInBottom) */
      gsap.fromTo(
        ".about-cta-el",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: ".about-cta-el", start: "top 95%", once: true },
        }
      );

      /* Hulax a-8: images scrub across full about section (hidden ≤767) */
      if (!hideImages) {
        const imgOne = ".about-image.one";
        const imgTwo = ".about-image.two";
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".about-section",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          })
          .fromTo(
            imgOne,
            { xPercent: 35, yPercent: -40, rotate: 30 },
            { xPercent: -20, yPercent: 0, rotate: -30, ease: "none" },
            0
          )
          .fromTo(
            imgTwo,
            { xPercent: -35, yPercent: -40, rotate: -30 },
            { xPercent: 20, yPercent: 0, rotate: 30, ease: "none" },
            0
          );
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="about-section">
      <div className="w-layout-blockcontainer container w-container relative">
        <div className="about-contents-wrapper">
          <div className="about-heading-block relative flex flex-col items-center text-center">
            <div className="about-badge-el section-badge-hulax">
              <p className="tag-hulax m-0">About DYU Solar</p>
            </div>

            {/* Desktop line reveal — Hulax ≥992px */}
            <div className="about-summary-wrapper desktop">
              {DESKTOP_LINES.map((line) => (
                <div key={line} className="about-summary-block relative">
                  <div className="about-summary-title about-summary-ghost" aria-hidden>
                    {line}
                  </div>
                  <div className="about-summary-title about-summary-line">{line}</div>
                </div>
              ))}
            </div>

            {/* Tablet/mobile paragraph — Hulax ≤991px */}
            <div className="about-summary-wrapper is-mobile">
              <div className="about-summary-block">
                <p className="about-summary-title about-summary-mobile m-0">{MOBILE_COPY}</p>
              </div>
            </div>

            <div className="about-cta-el section-button-block relative z-[2]">
              <PrimaryButton href="/about" variant="navy" size="thinner">
                Learn More About Us
              </PrimaryButton>
            </div>

            <div className="about-images-block pointer-events-none" aria-hidden>
              <div className="about-image one">
                <Image
                  src="/images/floating-solar.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1920px) 236px, (min-width: 1440px) 200px, 150px"
                  className="object-cover"
                />
              </div>
              <div className="about-image two">
                <Image
                  src="/images/about-journey-5.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1920px) 236px, (min-width: 1440px) 200px, 150px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
