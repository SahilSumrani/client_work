"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MISSION =
  "DYU Solar LLP is an upcoming Solar EPC provider delivering residential rooftop and industrial-scale solar installations — built on ESG-compliant, ethically governed engineering practices that accelerate India's fossil-free future.";

const VALUES = [
  {
    title: "Engineering Accuracy",
    desc: "Every system is site-assessed with load-bearing analysis, shadow studies, and structural checks before groundbreaking.",
  },
  {
    title: "Customer Transparency",
    desc: "Clear documentation and honest, defensible engineering practices — built for government-tender confidence.",
  },
  {
    title: "Sustainable Responsibility",
    desc: "ESG-compliant delivery to high ethical, safety, and governance standards across all installations.",
  },
  {
    title: "Performance Commitment",
    desc: "5-Year Operations & Maintenance with SCADA-based continuous monitoring across the plant lifecycle.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Site Assessment & Engineering",
    desc: "Structural load-bearing analysis, shadow simulations, and single-line diagrams to determine exact solar feasibility.",
  },
  {
    num: "02",
    title: "Tier-1 Procurement & Design",
    desc: "Optimized TOPCon N-type arrays and IP65 inverters sourced from MNRE ALMM-listed OEMs.",
  },
  {
    num: "03",
    title: "Installation & Grid Sync",
    desc: "Certified installation of mounting, electrical stringing, and complete discom net-metering approvals.",
  },
  {
    num: "04",
    title: "5-Year SCADA O&M",
    desc: "Real-time SCADA telemetry for automated fault alerts, performance-ratio protection, and ongoing maintenance.",
  },
];

export default function AboutPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ctx = gsap.context(() => {
      if (!mq.matches && headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll(".masked-line-inner");
        gsap.fromTo(
          lines,
          { y: "110%" },
          { y: "0%", duration: 1.05, stagger: 0.12, ease: "power3.out", delay: 0.1 }
        );
        // Safety: never leave headline clipped if ticker stalls
        window.setTimeout(() => {
          lines.forEach((line) => {
            gsap.set(line, { y: "0%" });
          });
        }, 1600);
      } else if (headlineRef.current) {
        headlineRef.current.querySelectorAll(".masked-line-inner").forEach((line) => {
          (line as HTMLElement).style.transform = "none";
        });
      }

      if (!mq.matches) {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.95,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }
          );
        });
      } else {
        rootRef.current
          ?.querySelectorAll<HTMLElement>("[data-reveal]")
          .forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "none";
          });
      }

      // Hulax-style word color reveal on scroll
      if (missionRef.current) {
        const words = Array.from(
          missionRef.current.querySelectorAll<HTMLElement>(".about-reveal-word")
        );
        if (mq.matches) {
          words.forEach((w) => w.classList.add("is-on"));
        } else {
          ScrollTrigger.create({
            trigger: missionRef.current,
            start: "top 80%",
            end: "bottom 35%",
            scrub: 0.4,
            onUpdate: (self) => {
              const p = self.progress;
              words.forEach((w, i) => {
                const threshold = i / Math.max(words.length, 1);
                w.classList.toggle("is-on", p > threshold);
              });
            },
          });
        }
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const missionWords = MISSION.split(" ");

  return (
    <div ref={rootRef} className="page-wrap bg-[#F7F7F2]">
      <Header variant="two" />
      <main className="main-wrap">
        {/* Hulax-style about hero */}
        <section className="pt-40 sm:pt-44 lg:pt-48 pb-8 sm:pb-10">
          <div className="w-layout-blockcontainer container w-container">
            <div className="flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-12 mb-8 sm:mb-10">
              <div className="shrink-0 pt-1">
                <span className="inline-flex rounded-full border border-navy/20 px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-medium text-navy/55">
                  About Us
                </span>
              </div>
              <div ref={headlineRef} className="max-w-4xl">
                <div className="overflow-hidden">
                  <h1 className="masked-line-inner font-heading text-navy font-medium text-[2.35rem] sm:text-6xl lg:text-[4.1rem] leading-[1.06] sm:leading-[1.04] tracking-[-0.028em] m-0">
                    Building the future
                  </h1>
                </div>
                <div className="overflow-hidden mt-1.5 sm:mt-1">
                  <h1 className="masked-line-inner font-heading text-navy font-medium text-[2.35rem] sm:text-6xl lg:text-[4.1rem] leading-[1.06] sm:leading-[1.04] tracking-[-0.028em] m-0">
                    with trust
                  </h1>
                </div>
              </div>
            </div>

            <div data-reveal className="relative w-full rounded-[24px] sm:rounded-[36px] overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-navy">
              <Image
                src="/images/open-access-solar.jpg"
                alt="DYU Solar engineering and installation sites"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission — scroll word reveal */}
        <section className="py-12 sm:py-20">
          <div className="w-layout-blockcontainer container w-container">
            <div className="max-w-[44rem] ml-auto">
              <p
                ref={missionRef}
                className="font-heading text-[1.56rem] sm:text-[2.2rem] lg:text-[2.58rem] font-medium leading-[1.24] sm:leading-[1.2] tracking-[-0.014em] m-0"
              >
                {missionWords.map((word, i) => (
                  <span key={`${word}-${i}`} className="about-reveal-word">
                    {word}
                    {i < missionWords.length - 1 ? " " : ""}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="pb-16 sm:pb-24">
          <div className="w-layout-blockcontainer container w-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div data-reveal className="lg:col-span-6 relative aspect-[4/5] sm:aspect-[5/6] rounded-[28px] overflow-hidden bg-navy">
                <Image
                  src="/images/floating-solar.jpg"
                  alt="DYU Solar mission — clean energy infrastructure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div data-reveal className="lg:col-span-6 space-y-5 lg:pl-4">
                <span className="inline-flex rounded-full border border-navy/20 px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-medium text-navy/55">
                  Our Story
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[3.25rem] font-medium text-navy tracking-[-0.035em] leading-[1.1] m-0">
                  Born from a vision for change
                </h2>
                <p className="text-base sm:text-lg text-navy/65 leading-relaxed max-w-xl m-0">
                  DYU Solar LLP designs, procures, and constructs commercial, industrial, and
                  utility-scale solar power plants across Delhi/NCR. We position ourselves not merely
                  as a contractor, but as an institutional partner for sustainable energy landmarks —
                  engineered for maximum power yield, ALMM compliance, and long-term reliability.
                </p>
                <div className="pt-2">
                  <PrimaryButton href="/contact">Connect With Us</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="pb-16 sm:pb-24">
          <div className="w-layout-blockcontainer container w-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              <div data-reveal className="lg:col-span-5 space-y-5">
                <span className="inline-flex rounded-full border border-navy/20 px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-medium text-navy/55">
                  Our Values
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[3.25rem] font-medium text-navy tracking-[-0.035em] leading-[1.1] m-0">
                  Guided by engineering integrity
                </h2>
                <p className="text-base text-navy/65 leading-relaxed max-w-md m-0">
                  Performance, transparency, and sustainability drive every project we deliver.
                </p>
              </div>
              <div className="lg:col-span-7 space-y-0">
                {VALUES.map((value, i) => (
                  <div
                    key={value.title}
                    data-reveal
                    className="py-5 sm:py-6 border-t border-dashed border-navy/20 last:border-b"
                  >
                    <div className="flex gap-4 sm:gap-6 items-start">
                      <span className="text-sm font-semibold text-solar-gold shrink-0 pt-1">
                        0{i + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl font-medium text-navy tracking-[-0.02em] m-0">
                          {value.title}
                        </h3>
                        <p className="text-sm sm:text-base text-navy/60 leading-relaxed mt-2 m-0">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How we deliver */}
        <section className="pb-20 sm:pb-28">
          <div className="w-layout-blockcontainer container w-container">
            <div data-reveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-4">
              <span className="inline-flex rounded-full border border-navy/20 px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-medium text-navy/55">
                How We Work
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-medium text-navy tracking-[-0.035em] leading-[1.1] m-0">
                How we deliver solar projects
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-0">
                {STEPS.map((step) => (
                  <div
                    key={step.num}
                    data-reveal
                    className="flex gap-5 sm:gap-6 py-5 sm:py-6 border-t border-dashed border-navy/20 last:border-b"
                  >
                    <span className="text-2xl sm:text-3xl font-medium text-navy/25 tracking-tight shrink-0 w-12">
                      {step.num}
                    </span>
                    <div className="min-w-0 pt-1">
                      <h3 className="text-lg sm:text-xl font-medium text-navy m-0">{step.title}</h3>
                      <p className="text-sm sm:text-base text-navy/60 leading-relaxed mt-2 m-0">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div data-reveal className="lg:col-span-5 relative min-h-[380px] sm:min-h-[420px] rounded-[28px] overflow-hidden bg-navy">
                <Image
                  src="/images/about-journey-5.jpg"
                  alt="DYU Solar engineering delivery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-solar-gold m-0">
                    Engineering Feasibility
                  </p>
                  <p className="text-sm sm:text-base font-semibold mt-2 m-0 leading-snug">
                    Shadow &amp; load-bearing simulations before procurement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
