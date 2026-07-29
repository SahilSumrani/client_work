"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Portfolio from "@/components/sections/Portfolio";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SunRayCogIcon, ShieldCheckIcon, BenchmarkIcon, TelemetryIcon, EnergyEfficiencyIcon, SolarGridIcon } from "@/components/ui/SolarIcons";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    num: "01",
    slug: "ci-rooftop-solar",
    title: "C&I Rooftop Solar",
    tags: ["Rooftop", "Industrial", "5-Year O&M"],
    summary:
      "Turnkey rooftop solar solutions for factories, warehouses, commercial complexes, and institutions to cut grid power tariffs and lower operational costs.",
    image: "/images/open-access-solar.jpg",
    icon: SolarGridIcon,
  },
  {
    num: "02",
    slug: "utility-scale-ground-mounted",
    title: "Utility-Scale Ground-Mounted Solar",
    tags: ["MW-Scale", "High PR", "Grid-Sync"],
    summary:
      "High-yield ground-mounted solar power plants engineered for megawatt-scale power generation with optimized land footprint and high Performance Ratio.",
    image: "/images/utility-scale-solar.jpg",
    icon: EnergyEfficiencyIcon,
  },
  {
    num: "03",
    slug: "open-access-solar",
    title: "Open Access Solar",
    tags: ["Group Captive", "Third-Party", "Low Tariff"],
    summary:
      "Group captive and third-party open access solar model enabling bulk power consumers to source low-tariff solar energy over state grid networks.",
    image: "/images/about-journey-3.jpg",
    icon: BenchmarkIcon,
  },
  {
    num: "04",
    slug: "floating-canal-top-solar",
    title: "Floating (FSPV) & Canal-Top Solar",
    tags: ["FSPV", "Water Bodies", "Cooling Yield"],
    summary:
      "Innovative solar arrays mounted on water reservoirs or irrigation canals, preserving valuable land assets while benefiting from natural evaporative cooling.",
    image: "/images/floating-solar.jpg",
    icon: SunRayCogIcon,
  },
  {
    num: "05",
    slug: "solar-trackers-bifacial",
    title: "Solar Trackers & Bifacial Optimisation",
    tags: ["Single-Axis", "TOPCon", "+25% Yield"],
    summary:
      "Single-axis solar trackers paired with bifacial TOPCon/Mono PERC modules to boost daily power yield by up to 25% over fixed-tilt systems.",
    image: "/images/rooftop-ci-solar.jpg",
    icon: EnergyEfficiencyIcon,
  },
  {
    num: "06",
    slug: "monitoring-scada-om",
    title: "Monitoring/SCADA & O&M",
    tags: ["SCADA Telemetry", "5-Year Guarantee", "Uptime"],
    summary:
      "5-Year full-lifecycle Operations & Maintenance backed by continuous SCADA telemetry, automated fault diagnosis, and performance guarantee protection.",
    image: "/images/about-journey-4.jpg",
    icon: TelemetryIcon,
  },
  {
    num: "07",
    slug: "site-feasibility-engineering",
    title: "Site Feasibility & Engineering Consulting",
    tags: ["Shadow Study", "Load-Bearing", "SLD Layout"],
    summary:
      "Precision shadow analysis, structural load-bearing checks, electrical single-line diagrams, and yield forecasting engineered before procurement.",
    image: "/images/about-journey-1.jpg",
    icon: SunRayCogIcon,
  },
  {
    num: "08",
    slug: "subsidy-compliance-assistance",
    title: "Government Subsidy & Compliance Assistance",
    tags: ["PM Surya Ghar", "MNRE ALMM", "Net-Metering"],
    summary:
      "Full guidance through PM Surya Ghar subsidies, state discom net-metering approvals, MNRE ALMM list compliance, and statutory clearances.",
    image: "/images/subsidy-compliance.jpg",
    icon: ShieldCheckIcon,
  },
];

// Technical Module Comparison
const MODULE_COMPARISON = [
  {
    param: "Cell Technology Structure",
    monoPerc: "p-Type Passivated Emitter Silicon",
    topCon: "n-Type Tunnel Oxide Passivated Contact",
  },
  {
    param: "Module Efficiency Rating",
    monoPerc: "20.5% – 21.5%",
    topCon: "22.5% – 24.5%+ (Higher Power Output)",
  },
  {
    param: "Temperature Coefficient",
    monoPerc: "-0.35% / °C (Higher heat loss)",
    topCon: "-0.30% / °C (Superior hot-climate yield)",
  },
  {
    param: "Degradation (Year 1 / Annual)",
    monoPerc: "~2.0% Year 1 / 0.55% per year",
    topCon: "~1.0% Year 1 / 0.40% per year",
  },
  {
    param: "Bifaciality Factor",
    monoPerc: "65% – 70%",
    topCon: "80% – 85% (Maximized rear-side gain)",
  },
  {
    param: "Recommended Application",
    monoPerc: "Standard Rooftop & Budget Projects",
    topCon: "High-Yield C&I Rooftops & Utility Plants",
  },
];

// Financial Model Comparison
const FINANCIAL_MODELS = [
  {
    model: "CAPEX Model (Capital Expenditure)",
    tag: "100% Asset Ownership",
    capital: "100% Upfront Capital by Client",
    ownership: "Client owns the solar plant from Day 1",
    savings: "Maximum lifetime cost savings after ~3-4 year payback",
    maintenance: "Supported by DYU Solar's 5-Year O&M Contract",
    bestFor: "Businesses with capital looking for maximum long-term ROI & tax depreciation",
  },
  {
    model: "RESCO / BOOT Model (PPA)",
    tag: "Zero Capital Outlay",
    capital: "Zero Upfront Capital Investment by Client",
    ownership: "Developer/IPP owns plant during PPA period (15–25 yrs)",
    savings: "Immediate 20%–40% reduction in electricity tariff vs Discom",
    maintenance: "Developer handles 100% maintenance during PPA term",
    bestFor: "Companies seeking immediate operational savings without upfront capital",
  },
];

// Services Page Specific FAQ (§5.5)
const SERVICES_FAQS: AccordionItem[] = [
  {
    question: "What is the difference between CAPEX and RESCO financing models?",
    answer:
      "In CAPEX, you fund and own the solar plant directly, realizing 100% electricity savings and accelerated tax depreciation after a ~3 to 4-year payback. In RESCO (PPA), an investor funds and owns the plant on your roof, selling power to you at a discounted tariff with zero upfront investment.",
  },
  {
    question: "Why does DYU Solar recommend TOPCon N-type modules over Mono PERC?",
    answer:
      "TOPCon N-type modules offer higher efficiency (22.5%+ vs 20.5%), lower degradation (0.4% vs 0.55%/year), better bifaciality (85% vs 70%), and superior performance in hot climates due to a lower temperature coefficient (-0.30%/°C).",
  },
  {
    question: "How does DYU Solar handle discom net-metering approvals?",
    answer:
      "Our team manages end-to-end statutory documentation, site inspection coordination, CEIG approvals, and net-meter installation with local electrical distribution utilities.",
  },
  {
    question: "What is included in the 5-Year O&M guarantee?",
    answer:
      "Our 5-Year Operations & Maintenance commitment includes continuous SCADA monitoring, quarterly preventive maintenance, module washing schedules, thermographic fault scans, and guaranteed performance ratio (PR) monitoring.",
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
    <div ref={ref} className="page-wrap bg-white">
      <Header />
      <main className="main-wrap">
        
        {/* Banner Area — avoid spacing keys 20/40/60 (Tailwind maps them to px) */}
        <section className="banner-area relative min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] flex items-center bg-navy py-[4.5rem] sm:py-[5.5rem] lg:py-[7rem] overflow-hidden">
          <div className="w-container relative z-10">
            <div className="banner-wrap max-w-3xl space-y-5 lg:space-y-6">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-solar-gold bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full inline-block border border-white/10">
                Turnkey Solar EPC &amp; Engineering
              </span>
              <h1 data-fade className="heading-two text-white text-[2.35rem] sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.1] tracking-tight">
                Services Offered
              </h1>
              <p data-fade className="section-content text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                End-to-end Solar EPC — from commercial rooftop installations to megawatt utility plants,
                engineered for long-term power yield, safety, and government compliance.
              </p>
            </div>
          </div>
          <div className="banner-img-wrap absolute inset-0 z-0">
            <Image
              src="/images/about-journey-2.jpg"
              alt="DYU Solar engineers on a solar installation site"
              fill
              priority
              sizes="100vw"
              className="banner-img object-cover w-full h-full filter brightness-35 opacity-45"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>

        {/* 8 Categories Services Grid */}
        <section className="py-section-y bg-white">
          <div className="w-container">
            <div className="text-center max-w-4xl mx-auto mb-block-y space-y-heading" data-fade>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-solar-gold bg-solar-gold/10 px-3.5 py-1.5 rounded-full inline-block">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[3.15rem] font-extrabold text-navy tracking-tight leading-[1.12]">
                Comprehensive Solar EPC &amp; Engineering Solutions
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our full suite of solar capabilities, backed by Tier-1 ALMM component sourcing and 5-Year O&amp;M commitments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
              {SERVICES.map((s) => {
                const IconComp = s.icon;
                return (
                  <div
                    key={s.slug}
                    data-fade
                    className="bg-white rounded-2xl border border-gray-200 shadow-solar-sm hover:shadow-solar-xl transition-all duration-300 flex flex-col overflow-hidden group border-t-2 border-t-transparent hover:border-t-solar-gold"
                  >
                    <div className="relative h-[200px] sm:h-[230px] lg:h-[260px] w-full overflow-hidden bg-navy">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute top-3 left-3 bg-navy text-solar-gold font-extrabold text-xs px-2.5 py-1 rounded-md shadow-md">
                        {s.num}
                      </div>
                      <div className="absolute bottom-3 right-3 w-9 h-9 lg:w-11 lg:h-11 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                        <IconComp className="w-5 h-5 lg:w-6 lg:h-6 text-navy" />
                      </div>
                    </div>

                    <div className="p-6 lg:p-7 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <h3 className="text-base lg:text-lg font-bold text-navy group-hover:text-solar-gold transition-colors leading-snug">
                          {s.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {s.tags.map((t, idx) => (
                            <span key={idx} className="text-[10px] lg:text-[11px] font-bold bg-[#F7F7F2] text-navy/80 px-2 py-0.5 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                          {s.summary}
                        </p>
                      </div>

                      <a
                        href={`/service/${s.slug}`}
                        className="inline-flex items-center text-xs sm:text-sm font-bold text-navy hover:text-solar-gold gap-1.5 pt-3 border-t border-gray-100 transition-colors"
                      >
                        <span>Explore Service Details</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical Module Comparison: Mono PERC vs TOPCon */}
        <section className="py-section-y bg-[#F7F7F2] border-y border-gray-200">
          <div className="w-container">
            <div className="text-center max-w-4xl mx-auto mb-block-y space-y-heading" data-fade>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-navy bg-navy/5 px-3.5 py-1.5 rounded-full">
                Technology Standard
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[3.15rem] font-extrabold text-navy leading-[1.12]">
                Mono PERC vs. TOPCon N-Type Solar Modules
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding why DYU Solar prioritizes TOPCon N-Type technology for commercial &amp; utility installations.
              </p>
            </div>

            {/* Redesigned Table with Elevated "DYU Recommended" Column */}
            <div data-fade className="overflow-x-auto rounded-2xl border border-gray-200 shadow-solar-lg bg-white">
              <div className="min-w-[680px]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="py-5 px-6 lg:py-6 lg:px-7 font-extrabold text-xs uppercase tracking-wider bg-navy text-white w-1/3">
                        Technical Parameter
                      </th>
                      <th className="py-5 px-6 lg:py-6 lg:px-7 font-extrabold text-xs uppercase tracking-wider bg-navy-light text-gray-200 border-l border-white/10 w-1/3">
                        Mono PERC (p-Type)
                      </th>
                      <th className="py-5 px-6 lg:py-6 lg:px-7 font-extrabold text-xs uppercase tracking-wider bg-solar-gold text-navy border-l border-solar-gold-dark w-1/3 shadow-inner">
                        <div className="flex items-center justify-between gap-2">
                          <span>TOPCon N-Type</span>
                          <span className="bg-navy text-solar-gold text-[10px] px-2 py-0.5 rounded font-extrabold whitespace-nowrap">
                            DYU Recommended ★
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm lg:text-base">
                    {MODULE_COMPARISON.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F7F7F2]/60"}>
                        <td className="py-4 px-6 lg:py-5 lg:px-7 font-bold text-navy">{row.param}</td>
                        <td className="py-4 px-6 lg:py-5 lg:px-7 text-gray-600 border-l border-gray-200">{row.monoPerc}</td>
                        <td className="py-4 px-6 lg:py-5 lg:px-7 font-bold text-navy border-l-2 border-solar-gold/30 bg-solar-gold/10">
                          <span className="flex items-center gap-1.5">
                            <span className="text-emerald-700 font-extrabold">✓</span>
                            <span>{row.topCon}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-3 md:hidden">
              ← Scroll horizontally to view full technical comparison →
            </p>
          </div>
        </section>

        {/* Financial Model Comparison: CAPEX vs RESCO */}
        <section className="py-section-y bg-white">
          <div className="w-container">
            <div className="text-center max-w-4xl mx-auto mb-block-y space-y-heading" data-fade>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-solar-gold bg-solar-gold/10 px-3.5 py-1.5 rounded-full inline-block">
                Financial Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[3.15rem] font-extrabold text-navy tracking-tight leading-[1.12]">
                Solar Investment Models: CAPEX vs. RESCO / BOOT
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the commercial framework that aligns with your capital allocation strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8" data-fade>
              {FINANCIAL_MODELS.map((model, idx) => (
                <div
                  key={idx}
                  className="p-7 lg:p-9 rounded-2xl border border-gray-200 bg-white shadow-solar-md hover:shadow-solar-lg transition-all flex flex-col justify-between relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-navy group-hover:bg-solar-gold transition-colors" />
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <h3 className="text-xl lg:text-2xl font-extrabold text-navy leading-snug">{model.model}</h3>
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-solar-gold bg-solar-gold/10 px-3 py-1 rounded-full whitespace-nowrap self-start">
                        {model.tag}
                      </span>
                    </div>

                    <div className="space-y-3 text-sm lg:text-base">
                      <div className="p-3.5 lg:p-4 rounded-lg bg-[#F7F7F2] border border-gray-100">
                        <span className="font-bold text-navy block text-[11px] sm:text-xs uppercase mb-1">Capital Requirement</span>
                        <span className="text-gray-700">{model.capital}</span>
                      </div>
                      <div className="p-3.5 lg:p-4 rounded-lg bg-[#F7F7F2] border border-gray-100">
                        <span className="font-bold text-navy block text-[11px] sm:text-xs uppercase mb-1">Asset Ownership</span>
                        <span className="text-gray-700">{model.ownership}</span>
                      </div>
                      <div className="p-3.5 lg:p-4 rounded-lg bg-[#F7F7F2] border border-gray-100">
                        <span className="font-bold text-navy block text-[11px] sm:text-xs uppercase mb-1">Energy Cost Savings</span>
                        <span className="text-gray-700">{model.savings}</span>
                      </div>
                      <div className="p-3.5 lg:p-4 rounded-lg bg-[#F7F7F2] border border-gray-100">
                        <span className="font-bold text-navy block text-[11px] sm:text-xs uppercase mb-1">Operations &amp; Maintenance</span>
                        <span className="text-gray-700">{model.maintenance}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200 bg-navy/5 p-4 lg:p-5 rounded-xl">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-navy block mb-1">
                      Best Suited For:
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">{model.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Pipeline Component */}
        <Portfolio />

        {/* Services Page Specific FAQ (§5.5) */}
        <section className="py-section-y bg-[#F7F7F2] border-t border-gray-200">
          <div className="w-container">
            <div className="max-w-3xl mx-auto" data-fade>
              <div className="text-center mb-block-y space-y-heading">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-navy bg-navy/5 px-3.5 py-1.5 rounded-full">
                  Technical FAQ
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-navy leading-[1.15]">
                  Frequently Asked Questions on Services &amp; Technology
                </h2>
              </div>
              <Accordion items={SERVICES_FAQS} />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
