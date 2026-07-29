"use client";

import { useFadeIn } from "@/components/useFadeIn";
import { BenchmarkIcon, TelemetryIcon, SunRayCogIcon, EnergyEfficiencyIcon, ArrowUpRightIcon } from "@/components/ui/SolarIcons";

const PIPELINE_METRICS = [
  {
    value: "3+ MW",
    title: "Target Capacity Pipeline",
    desc: "Targeted rooftop and ground-mounted C&I deployments currently in site-feasibility and grid engineering phases across Delhi/NCR.",
    icon: SunRayCogIcon,
    status: "Active Engineering",
  },
  {
    value: "₹20 Cr",
    title: "CAPEX Benchmark Target",
    desc: "Targeted project valuation capacity modeled for commercial & industrial clients seeking high-efficiency energy transition.",
    icon: BenchmarkIcon,
    status: "Modeled Capacity",
  },
  {
    value: "5 Years",
    title: "Full O&M Support",
    desc: "Comprehensive operations and maintenance pledge with continuous SCADA telemetry to guarantee performance ratios.",
    icon: TelemetryIcon,
    status: "Yield Protection",
  },
];

export default function Portfolio() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className="py-section-y bg-gradient-to-b from-white via-[#F7F7F2] to-white border-t border-gray-200">
      <div className="w-layout-blockcontainer container w-container">
        <div className="text-center max-w-4xl mx-auto mb-block-y space-y-heading" data-fade>
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-solar-gold bg-solar-gold/10 px-3.5 py-1.5 rounded-full inline-block">
            Capacity &amp; Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.15rem] font-black text-navy tracking-tight leading-[1.12]">
            Engineering Target &amp; Delivery Benchmarks
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            DYU Solar prioritizes transparent engineering standards. Rather than showcasing fabricated historical metrics,
            we benchmark our active project pipeline on strict Tier-1 ALMM compliance and guaranteed yield performance.
          </p>
        </div>

        {/* Pure Typography + Whitespace Grid (Requirement 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid py-6" data-fade>
          {PIPELINE_METRICS.map((metric, idx) => {
            const IconComp = metric.icon;
            return (
              <div
                key={idx}
                className="p-card-pad rounded-2xl bg-white border border-gray-200 shadow-solar-sm hover:shadow-solar-md transition-all flex flex-col justify-between group relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    {/* Avoid w-10/h-10 — spacing key 10 is 10px in this Tailwind config */}
                    <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-navy/5 border border-navy/10 flex items-center justify-center">
                      <IconComp className="w-5 h-5 lg:w-6 lg:h-6 text-navy" />
                    </div>
                    <span className="text-[10px] lg:text-[11px] font-extrabold uppercase tracking-wider text-solar-gold bg-solar-gold/10 px-2.5 py-0.5 rounded-full">
                      {metric.status}
                    </span>
                  </div>
                  {/* Dominant Typography */}
                  <div className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-navy tracking-tight pt-2">
                    {metric.value}
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-navy group-hover:text-solar-gold transition-colors">{metric.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{metric.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Card with Monoline Icon & Button Chip */}
        <div className="mt-12 p-card-pad rounded-3xl bg-navy text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-solar-xl relative overflow-hidden" data-fade>
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 lg:w-[3.75rem] lg:h-[3.75rem] rounded-2xl bg-solar-gold/20 border border-solar-gold/30 flex items-center justify-center text-solar-gold flex-shrink-0">
              <EnergyEfficiencyIcon className="w-7 h-7 text-solar-gold" />
            </div>
            <div>
              <h4 className="text-xl lg:text-2xl font-black text-white mb-1">Have a site ready for solar feasibility analysis?</h4>
              <p className="text-sm text-gray-300">Get a detailed structural load-bearing and shadow study report from our lead engineers.</p>
            </div>
          </div>
          <a
            href="/contact"
            className="relative z-10 inline-flex items-center gap-3 px-7 py-4 bg-solar-gold hover:bg-yellow-500 text-navy font-extrabold rounded-xl text-sm lg:text-base shadow-md transition-all hover:scale-[0.98] whitespace-nowrap group"
          >
            <span>Request Free Site Audit</span>
            <span className="w-6 h-6 rounded-full bg-navy/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowUpRightIcon className="w-3.5 h-3.5 text-navy" />
            </span>
          </a>
          {/* Avoid w-60 — spacing key 60 is 60px here */}
          <div className="absolute -right-10 -bottom-10 w-[15rem] h-[15rem] bg-solar-gold/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
