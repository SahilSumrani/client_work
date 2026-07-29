"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "@/components/ui/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { scale: 1.4 },
          { scale: 1, duration: 1.85, ease: "power2.out" }
        );

        gsap.to(imgRef.current, {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll(".masked-line-inner");
        gsap.fromTo(
          lines,
          { y: "110%" },
          { y: "0%", duration: 1.05, stagger: 0.12, ease: "power3.out", delay: 0.12 }
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, delay: 0.5, ease: "power3.out" }
        );
      }

      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power3.out" }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100svh] sm:min-h-[105vh] flex flex-col justify-end overflow-hidden pb-20 sm:pb-24 lg:pb-[100px] pt-32 sm:pt-36"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={imgRef} className="absolute inset-0 w-full h-full will-change-transform origin-center">
          <Image
            src="/images/hero-drone-solar.jpg"
            alt="DYU Solar utility and rooftop EPC installations"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-black/25 to-black/30" />
      </div>

      <div className="w-layout-blockcontainer container w-container relative z-10 w-full flex flex-col justify-end">
        {/* Hulax mobile stack: headline → CTA → card; desktop row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7 sm:gap-8 lg:gap-12 w-full">
          <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-3xl order-1">
            <div ref={headlineRef} className="section-title-block text-white w-full">
              <div className="overflow-hidden pr-1">
                <h1 className="masked-line-inner font-heading text-white font-medium text-[2.35rem] leading-[1.12] sm:text-6xl sm:leading-[1.08] lg:text-[5rem] xl:text-[5.25rem] lg:leading-[1.06] tracking-[-0.04em] sm:tracking-[-0.055em] m-0">
                  Power the future
                </h1>
              </div>
              <div className="overflow-hidden pr-1 mt-1 sm:mt-1.5">
                <h1 className="masked-line-inner font-heading text-white font-medium text-[2.35rem] leading-[1.12] sm:text-6xl sm:leading-[1.08] lg:text-[5rem] xl:text-[5.25rem] lg:leading-[1.06] tracking-[-0.04em] sm:tracking-[-0.055em] m-0">
                  with DYU
                </h1>
              </div>
            </div>

            <div ref={ctaRef} className="order-2">
              <PrimaryButton href="/contact" variant="navy" size="home">
                Get Started
              </PrimaryButton>
            </div>
          </div>

          <div ref={cardRef} className="w-full max-w-md lg:w-auto shrink-0 order-3">
            <div className="flex flex-row items-stretch gap-4 sm:gap-6 p-4 sm:p-5 rounded-[20px] bg-white/15 backdrop-blur-[15px] text-white">
              <div className="relative w-[110px] sm:w-[160px] lg:w-[200px] min-h-[120px] sm:min-h-[168px] rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/images/open-access-solar.jpg"
                  alt="DYU Solar rooftop EPC installation at golden hour"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 sm:gap-6 min-w-0 flex-1">
                <div className="flex items-center">
                  <div className="flex shrink-0">
                    <span className="relative w-11 h-11 sm:w-[54px] sm:h-[54px] rounded-full overflow-hidden border border-white -mr-5 sm:-mr-[27px]">
                      <Image src="/images/team-leader-1.jpg" alt="" fill sizes="54px" className="object-cover" />
                    </span>
                    <span className="relative w-11 h-11 sm:w-[54px] sm:h-[54px] rounded-full overflow-hidden border border-white -mr-5 sm:-mr-[27px]">
                      <Image src="/images/team-leader-2.jpg" alt="" fill sizes="54px" className="object-cover" />
                    </span>
                    <span className="w-11 h-11 sm:w-[54px] sm:h-[54px] rounded-full bg-solar-gold flex items-center justify-center text-base sm:text-lg font-bold text-navy border border-white">
                      +
                    </span>
                  </div>
                  <p className="ml-6 sm:ml-9 text-xl sm:text-[1.75rem] font-medium leading-none tracking-tight m-0">
                    3+ MW
                  </p>
                </div>
                <p className="text-[13px] sm:text-[15px] leading-snug text-white/90 m-0">
                  Eco-friendly
                  <br />
                  solar EPC for a cleaner, greener tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
