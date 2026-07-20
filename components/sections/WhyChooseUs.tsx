"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useFadeIn } from "@/components/useFadeIn";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

// Honest, defensible figures for a newly-launched EPC startup — these reflect
// real service promises (already stated on the site), not fabricated counts.
const GUARANTEE_YEARS = 20; // rendered as "20 yr"
const ESG_COMPLIANCE = 100; // rendered as "100%"

/* ------------------------------------------------------------------ */
/*  Count-up number                                                   */
/* ------------------------------------------------------------------ */

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      el.textContent = target + suffix;
      return;
    }

    const obj = { val: 0 };
    let tween: gsap.core.Tween | null = null;
    let done = false;

    const run = () => {
      if (done) return;
      done = true;
      tween = gsap.to(obj, {
        val: target,
        duration: 1.4,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = Math.round(obj.val) + suffix;
        },
      });
    };

    // Reveal when the number scrolls into view. IntersectionObserver is far
    // more reliable than ScrollTrigger across environments (including
    // headless/preview), so the counter can never get stuck at "0".
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          window.clearTimeout(fallback);
          run();
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);

    // Safety net: if the observer never fires (e.g. element already fully in
    // view at mount), still show the real value shortly after load.
    const fallback = window.setTimeout(run, 1200);

    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
      tween?.kill();
    };
  }, [target, suffix]);

  return (
    <div ref={ref} className="counter-number">
      0{suffix}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function WhyChooseUs() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className="choose-area">
      <div className="w-layout-blockcontainer container w-container">
        <div className="choose-top">
          <div data-fade className="breadcrumbs">
            Why choose us
          </div>
          <h2 data-fade className="heading-five">
            Creating a sustainable world is at the heart of DYU Solar&rsquo;s mission
          </h2>
        </div>

        <div className="choose-wrap">
          {/* ---------------- Left card ---------------- */}
          <div data-fade className="choose-left">
            <div className="choose-inner">
              <Image
                src="/images/choose-1.avif"
                alt="Solar installation"
                width={400}
                height={300}
                className="choose-img"
              />
              <a href="/contact" className="btn-secondary">
                <div>Get in touch</div>
              </a>
            </div>

            <div className="choose-border" />

            <div className="choose-inner-right">
              <div className="counter">
                <CountUp target={GUARANTEE_YEARS} suffix=" yr" />
              </div>
              <div className="choose-content-wrap">
                <div className="choose-content">
                  <h3 className="heading-md">Maintenance guarantee</h3>
                  <p className="section-content pt-10">
                    Every rooftop and industrial install is backed by a 20-year
                    O&amp;M and performance guarantee — your yield, protected for
                    the life of the plant.
                  </p>
                </div>

                {/* Company logo on the white card. */}
                <div className="choose-logo-wrap">
                  <Image
                    src="/images/company-logo.png"
                    alt="DYU Solar LLP"
                    width={140}
                    height={76}
                    className="choose-logo"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- Right (dark) card ---------------- */}
          <div data-fade className="choose-right">
            <video
              className="choose-video"
              autoPlay
              loop
              muted
              playsInline
              poster="/videos/solar-tem-poster.jpg"
            >
              <source src="/videos/solar-tem-transcode.mp4" type="video/mp4" />
            </video>
            <div className="choose-detail">
              <div className="counter counter-white">
                <CountUp target={ESG_COMPLIANCE} suffix="%" />
              </div>
              <p className="section-content text-white">ESG-compliant engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
