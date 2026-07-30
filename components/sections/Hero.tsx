"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "@/components/ui/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [preferStatic, setPreferStatic] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPreferStatic(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (preferStatic || !videoRef.current) return;
    const video = videoRef.current;
    video.muted = true;
    const play = video.play();
    if (play && typeof play.catch === "function") {
      play.catch(() => {
        /* Autoplay blocked — poster image still shows via first frame / overlay */
      });
    }
  }, [preferStatic]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (mediaRef.current) {
        gsap.fromTo(
          mediaRef.current,
          { scale: 1.4 },
          { scale: 1, duration: 1.85, ease: "power2.out" }
        );

        gsap.to(mediaRef.current, {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      /* Arbitrary pb/pt: theme.spacing maps pb-20→20px. About overlaps −45px.
         Large screens: smaller bottom pad so headline+CTA sit lower (near cream curve), not mid-viewport. */
      className="relative w-full min-h-[100svh] sm:min-h-[105vh] lg:min-h-[105vh] flex flex-col justify-end overflow-hidden pt-[120px] sm:pt-[140px] pb-[88px] sm:pb-[96px] lg:pb-[64px] xl:pb-[72px]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={mediaRef} className="absolute inset-0 w-full h-full will-change-transform origin-center">
          {preferStatic ? (
            <Image
              src="/images/floating-solar.jpg"
              alt="DYU Solar utility and rooftop EPC installations"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          ) : (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/floating-solar.jpg"
              aria-label="DYU Solar utility and rooftop EPC installations"
            >
              <source src="/videos/hero-solar.mp4" type="video/mp4" />
            </video>
          )}
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-black/25 to-black/30" />
      </div>

      {/* Same shell as Header (px + max-w 1200 + pill inset) so headline/CTA share the logo left edge. */}
      <div className="relative z-10 w-full px-2 sm:px-3 lg:px-2 flex flex-col justify-end">
        <div className="mx-auto w-full max-w-[1312px] pl-0 pr-3 sm:pr-5">
          <div className="flex flex-col items-start gap-[24px] sm:gap-[28px] lg:gap-[32px] xl:gap-[36px] w-full max-w-[640px] lg:max-w-[680px] xl:max-w-[720px]">
            <div ref={headlineRef} className="section-title-block text-white w-full">
              <div className="overflow-hidden pr-1">
                <h1 className="masked-line-inner font-heading text-white font-medium text-[2.35rem] leading-[1.12] sm:text-[3.5rem] sm:leading-[1.08] lg:text-[4.75rem] xl:text-[5.25rem] lg:leading-[1.05] tracking-[-0.04em] sm:tracking-[-0.055em] m-0">
                  Power the future
                </h1>
              </div>
              <div className="overflow-hidden pr-1 mt-[4px] sm:mt-[6px] lg:mt-[8px]">
                <h1 className="masked-line-inner font-heading text-white font-medium text-[2.35rem] leading-[1.12] sm:text-[3.5rem] sm:leading-[1.08] lg:text-[4.75rem] xl:text-[5.25rem] lg:leading-[1.05] tracking-[-0.04em] sm:tracking-[-0.055em] m-0">
                  with DYU SOLAR
                </h1>
              </div>
            </div>

            <div ref={ctaRef} className="relative z-[2]">
              <PrimaryButton href="/contact" variant="navy" size="home">
                Get Started
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
