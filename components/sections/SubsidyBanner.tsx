"use client";

import Image from "next/image";
import { useFadeIn } from "@/components/useFadeIn";
import { LandmarkIcon, CheckIcon } from "@/components/ui/SolarIcons";
import PrimaryButton from "@/components/ui/PrimaryButton";

const BENEFITS = [
  {
    title: "PM Surya Ghar Subsidy",
    desc: "Direct credit to beneficiary bank account for eligible rooftop systems.",
  },
  {
    title: "MNRE & ALMM Compliance",
    desc: "Tier-1 approved panels and inverters verified against the latest ALMM list.",
  },
  {
    title: "Discom Net-Metering",
    desc: "End-to-end applications, CEIG approvals, and grid synchronization support.",
  },
];

export default function SubsidyBanner() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className="py-section-y bg-[#F7F7F2] overflow-visible">
      <div className="w-layout-blockcontainer container w-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-7 order-2 lg:order-1" data-fade>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-solar-gold bg-solar-gold/10 px-3.5 py-2 rounded-full">
              <LandmarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              Government Incentives &amp; Compliance
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy leading-tight tracking-tight m-0">
              Leverage PM Surya Ghar &amp; MNRE Solar Subsidies
            </h2>

            <p className="text-sm md:text-base text-navy/70 leading-relaxed max-w-xl m-0">
              Maximize ROI with government-backed rooftop solar subsidies and net-metering support.
              DYU Solar handles MNRE compliance, discom applications, and ALMM-listed component verification.
            </p>

            <ul className="space-y-3.5 pt-1">
              {BENEFITS.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-4 rounded-2xl bg-white p-4 sm:p-5 border border-navy/8 shadow-solar-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-solar-md hover:border-solar-gold/35"
                >
                  <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-navy/5 flex items-center justify-center">
                    <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-solar-gold" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-navy m-0">{item.title}</h3>
                    <p className="text-sm text-navy/65 leading-relaxed mt-1 m-0">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <PrimaryButton href="/contact">Check Subsidy Eligibility</PrimaryButton>
              <PrimaryButton href="/service" variant="navy">
                View Compliance Services
              </PrimaryButton>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2" data-fade>
            <div className="relative">
              <div className="relative rounded-[28px] overflow-hidden bg-navy shadow-solar-lg aspect-[4/3] group">
                <Image
                  src="/images/solar-4.avif"
                  alt="Commercial solar installation eligible for government subsidies"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/20 to-transparent" />

                <div className="absolute z-30 bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:bottom-5 sm:max-w-[300px]">
                  <div
                    className="rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 shadow-solar-xl border border-navy/10 transition-transform duration-300 hover:-translate-y-0.5"
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgba(229, 169, 60, 0.2)" }}
                      >
                        <LandmarkIcon className="w-6 h-6 text-solar-gold" />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-[11px] font-extrabold uppercase tracking-[0.14em] m-0"
                          style={{ color: "#E5A93C" }}
                        >
                          MNRE Verified
                        </p>
                        <p
                          className="text-sm font-bold mt-1 leading-snug m-0"
                          style={{ color: "#1B365D" }}
                        >
                          ALMM-listed components &amp; net-metering ready
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute z-10 -bottom-4 -left-2 sm:-bottom-5 sm:-left-4 w-[40%] max-w-[180px] rounded-2xl overflow-hidden shadow-solar-lg border-4 border-white hidden md:block transition-transform duration-300 hover:-translate-y-1">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/subsidy-compliance.jpg"
                    alt="MNRE compliance documentation and subsidy processing"
                    fill
                    sizes="180px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
