"use client";

import Image from "next/image";
import { useFadeIn } from "@/components/useFadeIn";

export default function Hero() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className="hero-area">
      <div className="w-layout-blockcontainer container w-container">
        <div className="hero-top">
          <p data-w-id="eaee1984-fe14-7288-1173-d39b43d97081" data-fade className="section-content text-white">
            Solar EPC · ESG-compliant · Tier-1 OEM · SCADA-monitored
          </p>
        </div>
        <div className="hero-wrap">
          <div data-fade data-w-id="dbdd18d1-d28e-77ac-b1d8-706e81bf030c" className="hero-left">
            <div className="hero-btn">
              <a href="/contact" className="btn-primary w-inline-block">
                <div className="btn-primary-text">Get Started</div>
              </a>
            </div>
            <h2 className="heading-two text-white">
              Powering India&apos;s <span className="hero-title-span">Solar</span> Future
            </h2>
            <div className="hero-content-md">
              <p className="section-content text-white">
                End-to-end Solar EPC — from rooftop residential to utility-scale ground-mounted
                plants — engineered for performance, compliance, and scale.
              </p>
              <a href="/contact" className="btn-primary w-inline-block">
                <div className="btn-primary-text">Get Started</div>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="count-wrap">
              <p data-fade className="count-text">
                Solar EPC: PPC-compliant, Tier-1 OEM monitored
              </p>
              <p data-fade className="count-text">
                Engineering-Procurement-Construction
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-overlay" />
      <Image
        src="/images/solar-1.avif"
        alt="Solar installation"
        fill
        priority
        sizes="100vw"
        className="hero-video object-cover"
      />
    </section>
  );
}
