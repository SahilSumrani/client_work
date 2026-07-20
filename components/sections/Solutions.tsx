"use client";

import Image from "next/image";
import { useFadeIn } from "@/components/useFadeIn";

const CARDS = [
  {
    icon: "/images/solution-icon-1.svg",
    label: "Ground-Mounted Solar",
    title: "Utility-Scale Solar Parks",
    text: "Utility-scale ground-mounted installations using MonoPERC and TOPCon halfcut bifacial modules, engineered for maximum long-term yield.",
  },
  {
    icon: "/images/solution-icon-2.svg",
    label: "Rooftop Installations",
    title: "Rooftop Residential & Industrial",
    text: "End-to-end rooftop EPC for residential and industrial sites, backed by a 20-year maintenance guarantee.",
  },
  {
    icon: "/images/solution-icon-3.svg",
    label: "O&M & Monitoring",
    title: "O&M & Asset Monitoring",
    text: "SCADA-based continuous monitoring and performance-ratio protection across the full plant lifecycle.",
  },
];

export default function Solutions() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className="solution-area">
      <div className="w-layout-blockcontainer container w-container">
        <div className="solution-top">
          <h2 data-w-id="76a0418e-c45f-a5b1-9843-df1504fa69f0" data-fade className="heading-three text-white">
            Solar EPC solutions built for scale
          </h2>
          <div id="w-node-_099f9053-2d05-cb60-4d7d-d6161ef8d604-2f73c7cf" data-w-id="099f9053-2d05-cb60-4d7d-d6161ef8d604" data-fade className="solution-top-right">
            <p className="section-content text-white">
              From rooftop residential to utility-scale ground-mounted plants — engineered,
              procured, and constructed to perform.
            </p>
            <a href="/contact" className="btn-primary w-inline-block">
              <div className="btn-primary-text">Get started</div>
            </a>
          </div>
        </div>
        <div className="solution-wrap">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              data-fade
              style={{ transitionDelay: `${i * 0.12}s` }}
              className={`solution-card ${i === 0 ? "_1st" : i === CARDS.length - 1 ? "last" : ""}`}
            >
              <span className="solution-icon-wrap">
                <Image
                  src={card.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="solution-icon"
                />
                <Image
                  src={card.icon.replace(".svg", "-gold.svg")}
                  alt=""
                  width={48}
                  height={48}
                  className="solution-icon-gold"
                />
              </span>
              <p className="solution-label">{card.label}</p>
              <h3 className="solution-title">{card.title}</h3>
              <p className="section-content">{card.text}</p>
              <span className="solution-arrow" aria-hidden="true">
                <Image src="/images/arrow-right.svg" alt="" width={20} height={20} className="solution-arrow-icon" />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="section-overlay" />
      <video className="solution-video" autoPlay loop muted playsInline poster="/videos/solar-poster.jpg">
        <source src="/videos/solar-transcode.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
