"use client";

import Image from "next/image";
import { useFadeIn } from "@/components/useFadeIn";

const ITEMS = [
  {
    num: "01",
    title: "Engineering & Design",
    text: "Site surveys, shadow analysis, structural evaluation, and electrical single-line layouts — engineered before ground breaks.",
    img: "/images/process-1.avif",
  },
  {
    num: "02",
    title: "Procurement",
    text: "Tier-1 Mono PERC / TOPCon modules and inverters from MNRE ALMM-verified manufacturers — no compromise on yield.",
    img: "/images/process-3.avif",
  },
  {
    num: "03",
    title: "Construction",
    text: "Mechanical assembly, stringing, safety-first execution, and grid synchronization under strict on-site protocols.",
    img: "/images/process-2.avif",
  },
  {
    num: "04",
    title: "O&M",
    text: "Continuous SCADA telemetry, maintenance, and performance-ratio protection for up to 5 years post-commissioning.",
    img: "/images/about-journey-4.jpg",
  },
];

export default function Process() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className="py-section-y bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-solar-grid-pattern" />

      <div className="w-layout-blockcontainer container w-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-block-y space-y-4" data-fade>
          <span className="inline-flex text-[11px] font-extrabold uppercase tracking-[0.2em] text-solar-gold bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
            Our Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            How it works
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl mx-auto">
            A single-window EPC workflow — from feasibility audit to 5-year SCADA-monitored O&amp;M —
            delivered on schedule with full accountability.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative" data-fade>
          <div
            className="absolute top-[2.125rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-solar-gold/50 to-transparent"
            aria-hidden
          />
          <div className="grid grid-cols-4 gap-6 xl:gap-8">
            {ITEMS.map((item, i) => (
              <div
                key={item.num}
                className="group relative flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative z-10 mb-6 flex justify-center">
                  <span className="inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full border-2 border-solar-gold/60 bg-navy text-solar-gold text-lg font-black shadow-[0_0_0_6px_rgba(27,54,93,1)]">
                    {item.num}
                  </span>
                </div>
                <div className="flex flex-1 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition-colors duration-300 hover:border-solar-gold/45">
                  <div className="relative h-64 xl:h-72 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-solar-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/65 leading-relaxed m-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="lg:hidden relative pl-2" data-fade>
          <div
            className="absolute left-[1.375rem] top-3 bottom-3 w-px bg-gradient-to-b from-solar-gold/50 via-solar-gold/35 to-transparent"
            aria-hidden
          />
          <div className="space-y-8 sm:space-y-10">
            {ITEMS.map((item, i) => (
              <div
                key={item.num}
                className="group relative flex gap-5 sm:gap-6"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="relative z-10 shrink-0 pt-1">
                  <span className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-solar-gold/60 bg-navy text-solar-gold text-sm font-black shadow-[0_0_0_4px_rgba(27,54,93,1)]">
                    {item.num}
                  </span>
                </div>
                <div className="min-w-0 flex-1 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-colors duration-300 hover:border-solar-gold/45">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 80vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent" />
                  </div>
                  <div className="space-y-2 p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-solar-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/65 leading-relaxed m-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
