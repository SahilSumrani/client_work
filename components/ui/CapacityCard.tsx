"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export type CapacityCardProps = {
  category: string;
  value: string;
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
};

export default function CapacityCard({
  category,
  value,
  title,
  description,
  badge,
  icon: Icon,
}: CapacityCardProps) {
  return (
    <article
      tabIndex={0}
      className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-navy/10 bg-gradient-to-b from-[#FFFFFF] to-[#F7F7F2] p-[32px] shadow-[0_8px_24px_rgba(27,54,93,0.08)] transition-all duration-300 ease-out hover:-translate-y-[6px] hover:scale-[1.02] hover:border-solar-gold/45 hover:shadow-[0_20px_40px_rgba(27,54,93,0.14),0_0_0_1px_rgba(229,169,60,0.28)] focus-visible:border-solar-gold/50 focus-visible:shadow-[0_20px_40px_rgba(27,54,93,0.14),0_0_0_1px_rgba(229,169,60,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solar-gold"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-solar-gold via-solar-gold to-solar-gold/40 transition-all duration-300 group-hover:h-[4px]"
      />

      <div className="mb-[24px] flex items-start justify-between gap-[16px]">
        <p className="m-0 text-[11px] font-bold uppercase tracking-[0.18em] text-navy/45">
          {category}
        </p>
        <span className="inline-flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[16px] bg-navy text-solar-gold shadow-[0_8px_20px_rgba(27,54,93,0.18)] transition-transform duration-300 ease-out group-hover:rotate-[-6deg] group-focus-visible:rotate-[-6deg]">
          <Icon className="h-[26px] w-[26px]" strokeWidth={1.75} aria-hidden />
        </span>
      </div>

      <p className="m-0 origin-left font-heading text-[2.75rem] font-semibold leading-none tracking-[-0.04em] text-navy transition-transform duration-300 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04] sm:text-[3rem]">
        {value}
      </p>

      <h3 className="mt-[16px] m-0 font-heading text-[1.125rem] font-semibold leading-snug tracking-[-0.02em] text-navy">
        {title}
      </h3>

      <p className="mt-[10px] mb-0 flex-1 text-[14px] leading-relaxed text-navy/60">
        {description}
      </p>

      <div className="mt-[28px] flex items-center justify-between gap-[12px] border-t border-navy/[0.08] pt-[20px]">
        <span className="inline-flex items-center rounded-[8px] border border-solar-gold/35 bg-solar-gold/10 px-[10px] py-[6px] text-[11px] font-bold uppercase tracking-[0.12em] text-navy transition-all duration-300 group-hover:border-solar-gold/60 group-hover:bg-solar-gold/[0.18] group-hover:shadow-[0_0_0_3px_rgba(229,169,60,0.12)] group-focus-visible:border-solar-gold/60 group-focus-visible:bg-solar-gold/[0.18]">
          {badge}
        </span>
        <span
          aria-hidden
          className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-full border border-navy/10 text-navy/40 transition-all duration-300 group-hover:border-solar-gold/50 group-hover:bg-solar-gold group-hover:text-navy group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-focus-visible:border-solar-gold/50 group-focus-visible:bg-solar-gold group-focus-visible:text-navy"
        >
          <ArrowUpRight className="h-[16px] w-[16px]" strokeWidth={2} />
        </span>
      </div>
    </article>
  );
}
