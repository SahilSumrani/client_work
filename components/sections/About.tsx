"use client";

import Image from "next/image";
import { useFadeIn } from "@/components/useFadeIn";

const CARDS = [
  {
    icon: "/images/solution-icon-1.svg",
    iconGold: "/images/solution-icon-1-gold.svg",
    title: "EPC Delivery",
    desc: "End-to-end engineering, procurement, and construction for rooftop and utility-scale solar.",
  },
  {
    icon: "/images/solution-icon-2.svg",
    iconGold: "/images/solution-icon-2-gold.svg",
    title: "Tier-1 Quality",
    desc: "Direct access to Tier-1 OEMs and TOPCon N-type modules for long-term yield.",
  },
];

export default function About() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className="about-us">
      <div className="w-layout-blockcontainer container w-container">
        <div data-fade className="about-us-content">
          <div className="about-us-card-wrapper">
            <div className="about-us-subtitle-wrapper">
              <div className="about-us-subtitle">(About Us)</div>
            </div>
            <div className="about-us-card-content">
              {CARDS.map((card) => (
                <div key={card.title} className="about-us-card">
                  <div className="about-us-card-icon-wrapper">
                    <Image
                      src={card.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="about-us-card-icon"
                    />
                    <Image
                      src={card.iconGold}
                      alt=""
                      width={32}
                      height={32}
                      className="about-us-card-icon-gold"
                    />
                  </div>
                  <div className="about-us-card-title-description">
                    <div className="about-us-card-title">{card.title}</div>
                    <p className="about-us-card-description">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-us-typography">
            <div className="about-us-section-title-wrapper">
              <h2 className="about-us-section-title">
                We are on a mission to build a fossil-free future by accelerating the clean energy
                transition.
              </h2>
              <p className="about-us-description">
                An upcoming Solar EPC provider delivering residential rooftop and industrial-scale
                solar installations, built on ESG-compliant, ethically governed engineering
                practices.
              </p>
            </div>
            <div className="about-us-button-wrapper">
              <a href="/about" className="primary-button w-inline-block">
                <div className="primary-button-text-wrapper">
                  <div className="primary-button-text top">More About Us</div>
                  <div className="primary-button-text bottom">More About Us</div>
                </div>
                <div className="primary-button-arrow-wrapper">
                  <Image
                    src="/images/primary-button-arrow.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="primary-button-arrow top"
                  />
                  <Image
                    src="/images/primary-button-arrow.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="primary-button-arrow bottom"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
