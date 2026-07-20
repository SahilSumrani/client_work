"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Portfolio from "@/components/sections/Portfolio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    num: "01",
    slug: "end-to-end-epc",
    title: "End-to-End Solar EPC",
    tags: ["Rooftop", "Industrial", "20-Year Guarantee"],
    summary:
      "End-to-end Solar EPC services for both rooftop residential solar setup and Industrial Solar Power plant setup, including 20 years of Maintenance guarantees.",
    images: ["/images/solar-1.avif", "/images/solar-2.avif"],
  },
  {
    num: "02",
    slug: "site-assessment",
    title: "Site Assessment & Engineering",
    tags: ["Load-Bearing", "Shadow Studies", "Grid Layout"],
    summary:
      "Site assessments, load-bearing analysis, shadow studies, structural stability checks and electrical grid layout — every kilowatt engineered before ground breaks.",
    images: ["/images/solar-3.avif", "/images/solar-4.avif"],
  },
  {
    num: "03",
    slug: "tier-1-oem",
    title: "Tier-1 OEM Supply Chain",
    tags: ["Tier-1", "OEM", "Quality"],
    summary: "Direct supply-chain access to Tier-1 OEMs.",
    images: ["/images/solar-1.avif", "/images/solar-3.avif"],
  },
  {
    num: "04",
    slug: "topcon-modules",
    title: "TOPCon N-Type Modules",
    tags: ["TOPCon", "N-Type", "Efficiency"],
    summary:
      "Prioritising TOPCon N-Type modules for their superior efficiency, thermal resilience and long-term yield.",
    images: ["/images/solar-2.avif", "/images/solar-4.avif"],
  },
  {
    num: "05",
    slug: "epc-construction",
    title: "EPC Construction & Execution",
    tags: ["Mechanical", "Electrical", "Safety"],
    summary:
      "Mechanical assembly, structural mounting, electrical stringing, grid synchronization — executed under strict safety protocols and timelines.",
    images: ["/images/solar-3.avif", "/images/solar-1.avif"],
  },
  {
    num: "06",
    slug: "om-scada",
    title: "O&M with SCADA Monitoring",
    tags: ["SCADA", "Telemetry", "Performance"],
    summary:
      "5+ years of continuous O&M with SCADA-based asset monitoring, performance-ratio protection and technical telemetry.",
    images: ["/images/solar-4.avif", "/images/solar-2.avif"],
  },
];

export default function ServicesPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="page-wrap">
      <Header />
      <main className="main-wrap">
        {/* Banner Area */}
        <section className="banner-area">
          <div className="w-container">
            <div className="banner-wrap">
              <h1 data-fade className="heading-two text-white">Our Services</h1>
              <p data-fade className="section-content text-white indent-70">
                End-to-end Solar EPC — from rooftop residential to utility-scale ground-mounted
                plants, engineered and delivered to perform.
              </p>
            </div>
          </div>
          <div className="banner-img-wrap">
            <Image
              src="/images/solar-4.avif"
              alt="Our services"
              width={1400}
              height={500}
              className="banner-img object-cover w-full h-full"
            />
          </div>
        </section>

        {/* Services Area */}
        <section className="service-area">
          <div className="w-container">
            <div className="service-list">
              {SERVICES.map((s) => (
                <div key={s.slug} data-fade className="service-item">
                  <div className="service-item-left">
                    <div className="service-number">{s.num}</div>
                    <a href={`/service/${s.slug}`} className="service-title">
                      {s.title}
                    </a>
                    <div className="service-info">
                      <div className="service-tag-wrap">
                        <div className="service-tag-list">
                          {s.tags.map((t, idx) => (
                            <div key={idx} className="service-tag">
                              {t}
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="service-summary">{s.summary}</p>
                    </div>
                  </div>
                  <div className="service-coll-wrap">
                    <div className="service-coll-list">
                      {s.images.map((img, idx) => (
                        <div key={idx} className="service-thumb-wrap">
                          <Image
                            src={img}
                            alt="Service Thumbnail"
                            width={260}
                            height={160}
                            className="service-thumb object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
