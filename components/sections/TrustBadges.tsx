"use client";

import { useFadeIn } from "@/components/useFadeIn";
import {
  HardHatIcon,
  ScrollDocIcon,
  EnergyEfficiencyIcon,
  ClockTimerIcon,
  HandshakeIcon,
} from "@/components/ui/SolarIcons";

const BADGES = [
  {
    icon: HardHatIcon,
    title: ["Experienced", "Engineers"],
    desc: "Qualified solar design & structural engineering team.",
  },
  {
    icon: ScrollDocIcon,
    title: ["Licensed", "Professionals"],
    desc: "Certified electrical & grid-synchronization experts.",
  },
  {
    icon: EnergyEfficiencyIcon,
    title: ["IEC-Certified", "Materials"],
    desc: "IEC 61215 / 61730 / 62109 Tier-1 ALMM modules.",
  },
  {
    icon: ClockTimerIcon,
    title: ["On-Time", "Delivery"],
    desc: "Strict adherence to project execution milestones.",
  },
  {
    icon: HandshakeIcon,
    title: ["Customer", "Satisfaction"],
    desc: "Transparent engineering with 5-year O&M support.",
  },
];

/**
 * Premium feature cards — soft border, generous padding, gold hover.
 */
export default function TrustBadges() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className="py-section-y bg-[#F7F7F2]">
      <div className="w-layout-blockcontainer container w-container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-block-y space-y-5" data-fade>
          <div className="section-badge-hulax">
            <p className="text-[13px] font-medium text-navy/70 m-0">Our Features</p>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[3.25rem] font-medium text-navy leading-[1.15] tracking-[-0.04em] m-0">
            Solar made simple,
            <br />
            sustainable, and smart
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5" data-fade>
          {BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.title.join(" ")} className="features-card-hulax group flex flex-col">
                <div className="text-navy/55 group-hover:text-navy transition-colors duration-300">
                  <Icon className="w-12 h-12 sm:w-14 sm:h-14" />
                </div>
                <div className="mt-auto pt-12 sm:pt-16 space-y-3 max-w-[260px]">
                  <h3 className="font-heading text-xl sm:text-[1.35rem] font-medium text-navy leading-[1.2] tracking-tight m-0">
                    {badge.title[0]}
                    <br />
                    {badge.title[1]}
                  </h3>
                  <p className="text-sm text-navy/70 leading-relaxed m-0">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
