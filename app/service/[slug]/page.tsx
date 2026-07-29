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
  "ci-rooftop-solar": {
    title: "C&I Rooftop Solar",
    desc: "Turnkey rooftop solar solutions for factories, warehouses, commercial complexes, and institutions to cut grid power tariffs and lower operational costs.",
    img: "/images/rooftop-ci-solar.jpg",
    gallery: ["/images/rooftop-ci-solar.jpg", "/images/site-engineers.jpg", "/images/scada-monitoring.jpg"],
  },
  "utility-scale-ground-mounted": {
    title: "Utility-Scale Ground-Mounted Solar",
    desc: "High-yield ground-mounted solar power plants engineered for megawatt-scale power generation with optimized land footprint and high PR (Performance Ratio).",
    img: "/images/utility-scale-solar.jpg",
    gallery: ["/images/utility-scale-solar.jpg", "/images/solar-trackers.jpg", "/images/scada-monitoring.jpg"],
  },
  "open-access-solar": {
    title: "Open Access Solar",
    desc: "Group captive and third-party open access solar model enabling bulk power consumers to source low-tariff solar energy over state grid networks.",
    img: "/images/open-access-solar.jpg",
    gallery: ["/images/open-access-solar.jpg", "/images/utility-scale-solar.jpg", "/images/scada-monitoring.jpg"],
  },
  "floating-canal-top-solar": {
    title: "Floating (FSPV) & Canal-Top Solar",
    desc: "Innovative solar arrays mounted on water reservoirs or irrigation canals, preserving valuable land assets while benefiting from natural evaporative cooling.",
    img: "/images/floating-solar.jpg",
    gallery: ["/images/floating-solar.jpg", "/images/utility-scale-solar.jpg", "/images/site-engineers.jpg"],
  },
  "solar-trackers-bifacial": {
    title: "Solar Trackers & Bifacial Optimisation",
    desc: "Single-axis solar trackers paired with bifacial TOPCon/Mono PERC modules to boost daily power yield by up to 25% over fixed-tilt systems.",
    img: "/images/solar-trackers.jpg",
    gallery: ["/images/solar-trackers.jpg", "/images/utility-scale-solar.jpg", "/images/scada-monitoring.jpg"],
  },
  "monitoring-scada-om": {
    title: "Monitoring/SCADA & O&M",
    desc: "5-Year full-lifecycle Operations & Maintenance backed by continuous SCADA telemetry, automated fault diagnosis, and performance guarantee protection.",
    img: "/images/scada-monitoring.jpg",
    gallery: ["/images/scada-monitoring.jpg", "/images/site-engineers.jpg", "/images/rooftop-ci-solar.jpg"],
  },
  "site-feasibility-engineering": {
    title: "Site Feasibility & Engineering Consulting",
    desc: "Precision shadow analysis, structural load-bearing checks, electrical single-line diagrams, and yield forecasting engineered before procurement.",
    img: "/images/site-engineers.jpg",
    gallery: ["/images/site-engineers.jpg", "/images/subsidy-compliance.jpg", "/images/rooftop-ci-solar.jpg"],
  },
  "subsidy-compliance-assistance": {
    title: "Government Subsidy & Compliance Assistance",
    desc: "Full guidance through PM Surya Ghar subsidies, state discom net-metering approvals, MNRE ALMM list compliance, and statutory clearances.",
    img: "/images/subsidy-compliance.jpg",
    gallery: ["/images/subsidy-compliance.jpg", "/images/site-engineers.jpg", "/images/rooftop-ci-solar.jpg"],
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
        <section className="service-banner relative min-h-[400px] flex items-center bg-navy py-16">
          <div className="w-container relative z-10">
            <div className="banner-wrap max-w-3xl">
              <h1 data-fade className="heading-two text-white text-3xl md:text-5xl font-extrabold mb-4">
                {service.title}
              </h1>
              <p data-fade className="section-content text-gray-200 text-base md:text-lg">
                {service.desc}
              </p>
            </div>
          </div>
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={service.img}
              alt={service.title}
              fill
              className="object-cover w-full h-full filter brightness-40 opacity-40"
            />
          </div>
        </section>

        {/* Service Detail Area */}
        <section className="service-detail-area py-16 bg-white">
          <div className="w-container">
            <div className="service-detail-content max-w-4xl space-y-6">
              <div data-fade className="rich-text">
                <h2 className="text-2xl font-bold text-navy mb-4">Scope of Work &amp; Delivery Standards</h2>
                <p className="text-gray-700 leading-relaxed text-base mb-4">{service.desc}</p>
                <p className="text-gray-700 leading-relaxed text-base">
                  As an upcoming Solar EPC provider, DYU Solar LLP delivers every engagement with
                  ESG-compliant practices, safety-first execution, Tier-1 OEM sourcing, 5-Year O&amp;M guarantees, and
                  SCADA-based monitoring — engineered for government-tender credibility and maximum financial yield.
                </p>
              </div>
            </div>

            {/* Gallery */}
            <div data-fade className="service-gallery-wrap mt-12">
              <h3 className="text-xl font-bold text-navy mb-6">Technical Execution Gallery</h3>
              <div role="list" className="service-gallery-list grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.gallery.map((gImg, idx) => (
                  <div key={idx} className="service-gallery-item rounded-2xl overflow-hidden h-64 relative border border-gray-200 shadow-sm">
                    <Image
                      src={gImg}
                      alt={`${service.title} Technical Installation`}
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
