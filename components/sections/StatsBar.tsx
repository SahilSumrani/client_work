"use client";

import {
  Factory,
  IndianRupee,
  RadioTower,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import CapacityCard from "@/components/ui/CapacityCard";

const CAPACITY_STATS = [
  {
    category: "Pipeline",
    value: "3+ MW",
    title: "Deployment Capacity",
    description:
      "Target engineering capacity across commercial & industrial projects.",
    badge: "Target 2026",
    icon: Factory,
  },
  {
    category: "CAPEX",
    value: "₹20 Cr",
    title: "Investment Benchmark",
    description: "Commercial EPC benchmark for industrial deployments.",
    badge: "Investment Ready",
    icon: IndianRupee,
  },
  {
    category: "Operations",
    value: "5 Years",
    title: "O&M Commitment",
    description:
      "Continuous monitoring, preventive maintenance and SCADA support.",
    badge: "Guaranteed Support",
    icon: RadioTower,
  },
  {
    category: "Quality",
    value: "100%",
    title: "Tier-1 Components",
    description: "ALMM approved modules and premium inverter sourcing.",
    badge: "MNRE Ready",
    icon: ShieldCheck,
  },
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function StatsBar() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="capacity-overview-heading"
      className="relative overflow-hidden bg-navy py-[120px] text-[#FCFBFC]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_12%,rgba(229,169,60,0.14),transparent_46%),radial-gradient(ellipse_at_88%_78%,rgba(247,247,242,0.06),transparent_42%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-solar-gold/35 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[24px] sm:px-[40px] lg:px-[48px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }
          className="mx-auto max-w-[760px] text-center"
        >
          <p className="m-0 mb-[20px] text-[11px] font-bold uppercase tracking-[0.22em] text-solar-gold">
            Engineering Capacity Overview
          </p>
          <h2
            id="capacity-overview-heading"
            className="m-0 font-heading text-[2.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-[#FCFBFC] sm:text-[3rem] lg:text-[3.75rem]"
          >
            Engineering Capacity Built for Scalable Solar Projects
          </h2>
          <p className="mx-auto mt-[20px] mb-0 max-w-[760px] text-[18px] leading-relaxed text-[rgba(252,251,252,0.8)]">
            Transparent benchmarks for capacity, CAPEX scale, O&amp;M commitment,
            and Tier-1 sourcing — engineered for institutional trust.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.12 }}
          variants={
            reduceMotion
              ? undefined
              : {
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
                  },
                }
          }
          className="mt-[64px] grid grid-cols-1 items-stretch gap-[24px] sm:grid-cols-2 lg:grid-cols-4"
        >
          {CAPACITY_STATS.map((stat) => (
            <motion.div
              key={stat.category}
              variants={reduceMotion ? undefined : cardVariants}
              className="h-full"
            >
              <CapacityCard
                category={stat.category}
                value={stat.value}
                title={stat.title}
                description={stat.description}
                badge={stat.badge}
                icon={stat.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
