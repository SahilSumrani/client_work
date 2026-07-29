"use client";

import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { DownloadIcon } from "@/components/ui/SolarIcons";

export default function FinalCTA() {
  return (
    <section className="relative py-12 sm:py-14 lg:py-16 overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/solar-1.avif"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/88" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/45" />
      </div>

      <div className="w-layout-blockcontainer container w-container relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-2.5 sm:gap-3">
          <span className="inline-flex text-[11px] font-extrabold uppercase tracking-[0.2em] text-solar-gold bg-solar-gold/15 px-3.5 py-1.5 rounded-full border border-solar-gold/25">
            Free Feasibility &amp; ROI Assessment
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-tight leading-[1.15] m-0">
            Ready to see what your site can generate?
          </h2>
          <p className="text-[15px] sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed m-0">
            Get a free feasibility audit with capacity estimate, savings projection, and financing options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mt-1.5">
            <PrimaryButton href="/contact" size="home">
              Request Free Feasibility Audit
            </PrimaryButton>
            <a
              href="/docs/DYU-Solar-Technical-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 pl-3 pr-5 py-2 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-solar-gold text-navy shrink-0">
                <DownloadIcon className="w-[18px] h-[18px]" />
              </span>
              Download Technical Brochure
            </a>
          </div>
          <p className="text-sm text-white/60 m-0 mt-1 leading-snug">
            Or call{" "}
            <a href="tel:+919899806844" className="text-solar-gold font-bold hover:underline">
              +91-9899806844
            </a>
            {" · "}
            <a
              href="https://wa.me/919899806844"
              target="_blank"
              rel="noopener noreferrer"
              className="text-solar-gold font-bold hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
