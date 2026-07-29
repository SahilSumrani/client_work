"use client";

import Image from "next/image";
import { useFadeIn } from "@/components/useFadeIn";
import { ArrowRightIcon } from "@/components/ui/SolarIcons";
import PrimaryButton from "@/components/ui/PrimaryButton";

const CARDS = [
  {
    title: "C&I Rooftop Solar",
    text: "On-grid, net-metered installations for factories, warehouses and offices — with hybrid battery options available.",
    href: "/service/ci-rooftop-solar",
    image: "/images/about-journey-3.jpg",
    tag: "Rooftop · Net-Metering",
  },
  {
    title: "Utility-Scale Ground-Mounted",
    text: "Large-format solar parks optimised for grid supply with high Performance Ratio and Tier-1 ALMM modules.",
    href: "/service/utility-scale-ground-mounted",
    image: "/images/solar-4.avif",
    tag: "MW-Scale · Grid Sync",
  },
  {
    title: "Open Access Solar",
    text: "Decentralised generation sold directly to commercial and industrial consumers through open-access frameworks.",
    href: "/service/open-access-solar",
    image: "/images/about-journey-2.jpg",
    tag: "Group Captive · PPA",
  },
  {
    title: "Monitoring & O&M",
    text: "SCADA-based telemetry, automated fault alerts, and performance-ratio protection for up to 5 years.",
    href: "/service/monitoring-scada-om",
    image: "/images/scada-monitoring.jpg",
    tag: "SCADA · 5-Year O&M",
  },
];

export default function Solutions() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className="py-section-y bg-white">
      <div className="w-layout-blockcontainer container w-container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-block-y" data-fade>
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex text-[11px] font-extrabold uppercase tracking-[0.2em] text-solar-gold bg-solar-gold/10 px-3.5 py-1.5 rounded-full">
              Solar Solutions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight leading-tight">
              Solar EPC solutions for a greener tomorrow
            </h2>
            <p className="text-sm md:text-base text-body/70 max-w-lg leading-relaxed">
              From commercial rooftop systems to megawatt ground-mounted plants — engineered,
              procured, and constructed to deliver maximum ROI.
            </p>
          </div>
          <PrimaryButton href="/service" variant="navy">
            Explore All Services
          </PrimaryButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-grid" data-fade>
          {CARDS.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="group relative block overflow-hidden rounded-[28px] bg-navy min-h-[320px] sm:min-h-[360px] shadow-solar-md"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/25" />
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end gap-3.5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-solar-gold">
                  {card.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">{card.title}</h3>
                <p className="text-sm leading-relaxed max-w-md m-0" style={{ color: "rgba(255,255,255,0.88)" }}>
                  {card.text}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-solar-gold pt-1">
                  Explore solution
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
