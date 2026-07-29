"use client";

import Image from "next/image";
import { useFadeIn } from "@/components/useFadeIn";
import PrimaryButton from "@/components/ui/PrimaryButton";

/**
 * Blueprint §4.3 condensed to 3 pillars — unique images (no windmills).
 */
const PILLARS = [
  {
    title: "Single-window EPC",
    text: "One accountable partner from design through 5-year O&M — no vendor handoffs.",
    image: "/images/about-journey-1.jpg",
    alt: "DYU Solar engineers reviewing a solar project on site",
  },
  {
    title: "Flexible commercial models",
    text: "CAPEX ownership or zero-upfront RESCO / PPA structures for C&I clients.",
    image: "/images/subsidy-compliance.jpg",
    alt: "Commercial planning session for solar financing models",
  },
  {
    title: "Certified & compliant",
    text: "Tier-1 Mono PERC and TOPCon modules with IEC 61215 / 61730 / 62109 and ALMM (MNRE) listings for tender confidence.",
    image: "/images/rooftop-ci-solar.jpg",
    alt: "Tier-1 solar modules on a DYU Solar array",
  },
];

/**
 * Blueprint §4.3 Why Choose — 3-up photo cards, condensed.
 */
export default function WhyChooseUs() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className="py-section-y bg-white">
      <div className="w-layout-blockcontainer container w-container">
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-block-y max-w-5xl"
          data-fade
        >
          <div className="space-y-5 max-w-2xl">
            <div className="section-badge-hulax">
              <p className="text-[13px] font-medium text-navy/70 m-0">Why Choose DYU Solar</p>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.85rem] font-medium text-navy leading-[1.2] tracking-[-0.04em] m-0">
              Creating a sustainable world through engineering excellence
            </h2>
            <p className="text-sm sm:text-base text-navy/65 leading-[1.75] max-w-lg m-0">
              Building the Future with Trust — institutional EPC discipline for commercial,
              industrial, and utility-scale solar across Delhi/NCR.
            </p>
          </div>
          <PrimaryButton href="/contact" variant="navy">
            Get In Touch
          </PrimaryButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6" data-fade>
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="group flex flex-col overflow-hidden rounded-[28px] bg-[#F7F7F2]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-80" />
              </div>
              <div className="flex flex-col gap-2.5 p-6 sm:p-7 flex-1">
                <h3 className="font-heading text-xl sm:text-[1.35rem] font-medium text-navy m-0 tracking-tight leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-navy/65 leading-[1.7] m-0">{pillar.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
