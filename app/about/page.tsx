"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useFadeIn } from "@/components/useFadeIn";

const STEPS = [
  {
    num: "01",
    title: "Site Assessment",
    desc: "We conduct an on-site or remote evaluation to analyze sunlight exposure, roof structure, energy usage, and feasibility.",
  },
  {
    num: "02",
    title: "System Engineering",
    desc: "Our experts design a tailored solar configuration, model projected output, and determine expected ROI and payback period.",
  },
  {
    num: "03",
    title: "Installation & Commissioning",
    desc: "Certified technicians install the panels, inverters, and battery systems, followed by performance testing and grid integration.",
  },
  {
    num: "04",
    title: "Monitoring & Support",
    desc: "We activate real-time monitoring and provide ongoing maintenance, warranty support, and performance reporting.",
  },
];

const CORE_VALUES = [
  {
    title: "Engineering Accuracy",
    desc: "Every system is site-assessed with load-bearing analysis, shadow studies, and structural checks before any ground-breaking.",
  },
  {
    title: "Customer Transparency",
    desc: "Clear documentation and honest, defensible engineering practices — built for government-tender confidence.",
  },
  {
    title: "Sustainable Responsibility",
    desc: "ESG-compliant delivery to the highest ethical, safety, and governance standards.",
  },
  {
    title: "Performance Commitment",
    desc: "20-year maintenance guarantee with SCADA-based continuous monitoring across the plant lifecycle.",
  },
];

export default function AboutPage() {
  const ref = useFadeIn<HTMLDivElement>();
  const timelineRef = useRef<HTMLDivElement>(null);

  // Drive the gold timeline line downward as the section scrolls into view.
  useEffect(() => {
    const wrap = timelineRef.current;
    if (!wrap) return;
    const line = wrap.querySelector<HTMLElement>(".how-it-work-active-line");
    if (!line) return;

    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress: 0 when the block top hits ~80% of viewport, 1 when its
      // bottom reaches ~30% of viewport.
      const start = vh * 0.8;
      const end = vh * 0.3;
      const total = start - end;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / total)
      );
      line.style.height = `${progress * 100}%`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="page-wrap">
      <Header variant="two" />
      <main className="main-wrap">
        {/* About Us Banner */}
        <section className="section about-us-banner">
          <div className="w-container">
            <div className="about-banner-content">
              <div className="about-banner-typography">
                <div className="about-banner-title-description">
                  <h1 data-fade className="about-banner-title">
                    Powering the Bold Clean Reliable Energy
                  </h1>
                  <p data-fade className="about-banner-description">
                    DYU Solar LLP designs and deploys high-efficiency solar systems for homes,
                    businesses, and industrial facilities. Our mission is to help customers achieve
                    energy independence, reduce costs, and contribute to a sustainable future.
                  </p>
                </div>
                <div data-fade className="about-banner-button-wrapper">
                </div>
              </div>
              <div className="about-banner-image-wrapper">
                <div className="about-banner-left-image-wrap">
                  <img
                    src="/images/solar-1.avif"
                    alt="Residential Rooftop Solar"
                    className="about-banner-image"
                  />
                  <div className="banner-image-shape left" />
                  <div className="banner-image-shape right" />
                </div>
                <div className="about-banner-right-image-wrap">
                  <img
                    src="/images/solar-2.avif"
                    alt="Commercial Rooftop Solar"
                    className="about-banner-image"
                  />
                  <div className="banner-image-shape left" />
                  <div className="banner-image-shape right" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="section our-vision">
          <div className="w-container">
            <div className="our-vision-content">
              <div data-fade className="our-vision-top-content">
                <div className="vision-left-typography">
                  <div className="vision-subtitle">(About Us)</div>
                </div>
                <div className="vision-right-typography">
                  <h2 className="vision-section-title">
                    An upcoming Solar EPC provider focusing on setting up Solar installations on an
                    Industry level.
                  </h2>
                </div>
              </div>
              <div data-fade className="our-vision-bottom-content">
                <div className="w-layout-grid vision-grid">
                  <div className="vision-left-content">
                    <div className="green-energy-card">
                      <img
                        src="/images/solar-3.avif"
                        alt="Industrial Solar Installations"
                        className="green-energy-card-image"
                      />
                      <div className="green-energy-card-typography">
                        <div className="green-energy-card-name">Clean Green Energy</div>
                        <div className="green-energy-card-bio">Powering Smarter Homes</div>
                      </div>
                    </div>
                    <div className="reduction-card-wrapper">
                      <div className="w-layout-grid reduction-card-grid">
                        <div className="growth-card">
                          <img
                            src="/images/solar-4.avif"
                            alt="Ground-Mounted Solar Plant"
                            className="growth-card-image"
                          />
                          <div className="growth-card-typography">
                            <div className="growth-card-number">20-Year</div>
                            <div className="growth-card-text">Maintenance Guarantee</div>
                          </div>
                        </div>
                        <div className="cost-reduction-card">
                          <div className="cost-reduction-card-title">
                            Tier-1 OEM Sourcing
                          </div>
                          <div className="cost-reduction-card-text">
                            Direct access to Tier-1 components
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vision-right-content">
                    <img
                      src="/images/solar-img.avif"
                      alt="Agrivoltaics (Agri-PV)"
                      className="empower-card-image"
                    />
                    <div className="empower-typography">
                      <p className="empower-description">
                        Empower your home or business with dependable, renewable solar solutions
                        built to reduce energy costs and maximize efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section how-it-works">
          <div className="w-container">
            <div data-fade className="section-title-wrapper how-it-works">
              <h2 className="section-title">How We Deliver Solar Projects</h2>
            </div>
            <div data-fade className="how-it-work-content">
              <div ref={timelineRef} className="how-it-work-typography">
                {STEPS.map((step) => (
                  <div key={step.num} className="how-it-work-single">
                    <div className="how-it-work-number-wrapper">
                      <div className="how-it-work-number">{step.num}</div>
                    </div>
                    <div className="how-it-work-title-description">
                      <div className="how-it-work-title">{step.title}</div>
                      <p className="how-it-work-description">{step.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="how-it-work-line">
                  <div className="how-it-work-active-line" />
                </div>
              </div>
              <div className="how-it-work-image-wrapper">
                <img
                  src="/images/solar-2.avif"
                  alt="Floating Solar (Floatovoltaics)"
                  className="how-it-work-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section core-values">
          <div className="core-values-vh">
            <div className="core-values-sticky">
              <div className="w-container">
                <div data-fade className="section-title-wrapper core-values">
                  <h2 className="section-title mb24">The Principles That Power Our Work</h2>
                  <p className="section-description">
                    Our commitment to performance, transparency, and sustainability drives every
                    project we deliver, from residential installations to large-scale commercial
                    and public deployments.
                  </p>
                </div>
                <div data-fade className="core-values-content">
                  <div className="w-layout-grid core-values-grid">
                    {CORE_VALUES.map((value, i) => (
                      <div key={i} data-fade className={`core-values-card card-${i + 1}`}>
                        <div className="core-values-icon-wrapper">
                          <img
                            src={`/images/solution-icon-${(i % 3) + 1}.svg`}
                            alt=""
                            className="core-values-icon"
                          />
                          <img
                            src={`/images/solution-icon-${(i % 3) + 1}-gold.svg`}
                            alt=""
                            className="core-values-active-icon"
                          />
                        </div>
                        <div className="core-values-card-title-description">
                          <div className="core-values-card-title">{value.title}</div>
                          <p className="core-values-card-description">{value.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
