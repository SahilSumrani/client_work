"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA: Record<string, {
  title: string;
  desc: string;
  img: string;
  gallery: string[];
}> = {
  "end-to-end-epc": {
    title: "End-to-End Solar EPC",
    desc: "End-to-end Solar EPC services for both rooftop residential solar setup and Industrial Solar Power plant setup, including 20 years of Maintenance guarantees.",
    img: "/images/solar-4.avif",
    gallery: ["/images/solar-1.avif", "/images/solar-2.avif", "/images/solar-3.avif"],
  },
  "site-assessment": {
    title: "Site Assessment & Engineering",
    desc: "Site assessments, load-bearing analysis, shadow studies, structural stability checks and electrical grid layout — every kilowatt engineered before ground breaks.",
    img: "/images/solar-3.avif",
    gallery: ["/images/solar-4.avif", "/images/solar-1.avif", "/images/solar-2.avif"],
  },
  "tier-1-oem": {
    title: "Tier-1 OEM Supply Chain",
    desc: "Direct supply-chain access to Tier-1 OEMs.",
    img: "/images/solar-1.avif",
    gallery: ["/images/solar-2.avif", "/images/solar-3.avif", "/images/solar-4.avif"],
  },
  "topcon-modules": {
    title: "TOPCon N-Type Modules",
    desc: "Prioritising TOPCon N-Type modules for their superior efficiency, thermal resilience and long-term yield.",
    img: "/images/solar-2.avif",
    gallery: ["/images/solar-1.avif", "/images/solar-3.avif", "/images/solar-4.avif"],
  },
  "epc-construction": {
    title: "EPC Construction & Execution",
    desc: "Mechanical assembly, structural mounting, electrical stringing, grid synchronization — executed under strict safety protocols and timelines.",
    img: "/images/solar-3.avif",
    gallery: ["/images/solar-4.avif", "/images/solar-1.avif", "/images/solar-2.avif"],
  },
  "om-scada": {
    title: "O&M with SCADA Monitoring",
    desc: "5+ years of continuous O&M with SCADA-based asset monitoring, performance-ratio protection and technical telemetry.",
    img: "/images/solar-4.avif",
    gallery: ["/images/solar-1.avif", "/images/solar-2.avif", "/images/solar-3.avif"],
  },
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICES_DATA[params.slug];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!service) return;

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
  }, [service]);

  if (!service) {
    notFound();
  }

  return (
    <div ref={ref} className="page-wrap">
      <Header />
      <main className="main-wrap">
        {/* Service Hero Banner */}
        <section className="service-banner relative h-500 overflow-hidden flex items-center">
          <div className="w-container relative z-10">
            <div className="banner-wrap">
              <h1 data-fade className="heading-two text-white">
                {service.title}
              </h1>
              <p data-fade className="section-content text-white indent-70">
                {service.desc}
              </p>
            </div>
          </div>
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={service.img}
              alt={service.title}
              fill
              className="object-cover w-full h-full filter brightness-50"
            />
          </div>
          <div className="section-overlay absolute inset-0 bg-black/30 pointer-events-none" />
        </section>

        {/* Service Detail Area */}
        <section className="service-detail-area">
          <div className="w-container">
            <div className="service-detail-content">
              <div data-fade className="rich-text w-richtext">
                <h2>About this service</h2>
                <p>{service.desc}</p>
                <p>
                  As an upcoming Solar EPC provider, DYU Solar LLP delivers every engagement with
                  ESG-compliant practices, safety-first execution, Tier-1 OEM sourcing and
                  SCADA-based monitoring — engineered for government-tender credibility.
                </p>
              </div>
            </div>

            {/* Gallery */}
            <div data-fade className="service-gallery-wrap mt-60">
              <div role="list" className="service-gallery-list grid grid-cols-1 md:grid-cols-3 gap-24">
                {service.gallery.map((gImg, idx) => (
                  <div key={idx} className="service-gallery-item rounded-16 overflow-hidden h-300 relative">
                    <Image
                      src={gImg}
                      alt="Service Detail Gallery"
                      fill
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
