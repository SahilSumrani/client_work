"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// NOTE: many of this page's original images were not present in the scraped
// zip (only nav/footer icons were captured). Those are linked directly to
// Webflow's CDN for now so the page renders correctly â€” swap these for
// self-hosted files in /public/images/solarion before shipping to production.
const CDN = "https://cdn.prod.website-files.com/697475e9c18b02cefb27ba07";

const HOW_IT_WORKS = [
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
    icon: `${CDN}/698adc71c23a4c1a38a4ccef_Core%20Values%20Icon1.svg`,
    activeIcon: `${CDN}/698addd640bca7ce61054392_Core%20Values%20Active%20Icon1.svg`,
    title: "Engineering Accuracy",
    desc: "We design every system with precision, using performance data and environmental conditions to ensure long term reliability and energy output.",
  },
  {
    icon: `${CDN}/698adc710d5a26c78624a9ab_Core%20Values%20Icon2.svg`,
    activeIcon: `${CDN}/698addd64ded540866489935_Core%20Values%20Active%20Icon2.svg`,
    title: "Customer Transparency",
    desc: "We openly communicate expected ROI, installation timelines, and maintenance requirements, helping clients make informed decisions with confidence.",
  },
  {
    icon: `${CDN}/698adc715463f58407711271_Core%20Values%20Icon3.svg`,
    activeIcon: `${CDN}/698addd6be76069085c8e681_Core%20Values%20Active%20Icon3.svg`,
    title: "Sustainable Responsibility",
    desc: "Every installation reduces emissions, decreases grid dependency, and supports a cleaner future for the communities we serve.",
  },
  {
    icon: `${CDN}/698adc71fdc3ced9870c2326_Core%20Values%20Icon4.svg`,
    activeIcon: `${CDN}/698addd65ca9676f76a07100_Core%20Values%20Active%20Icon4.svg`,
    title: "Performance Commitment",
    desc: "We monitor system performance and provide ongoing support to maintain uptime, efficiency, and financial return throughout the lifecycle.",
  },
];

const JOURNEY = [
  { num: "01", year: "2017 — Founding & Research", desc: "Started as a small engineering group exploring ways to make solar systems more efficient and durable in local climate conditions.", img: `${CDN}/698ae3ce78d3de70d5c04b1b_Our%20Journey%20Image1.jpg` },
  { num: "02", year: "2019 — First Residential Deployments", desc: "Launched rooftop installations and introduced performance monitoring tools for homeowners to maximize energy output and cost efficiency.", img: `${CDN}/698ae3ce7e01e80b95e89a75_Our%20Journey%20Image2.jpg` },
  { num: "03", year: "2021 — Commercial Expansion", desc: "Expanded into manufacturing and logistics facilities, improving ROI modeling and maintenance programs for larger operations.", img: `${CDN}/698ae3ce4395ec816c3117a5_Our%20Journey%20Image3.jpg` },
  { num: "04", year: "2023 — Public Sector & Industrial", desc: "Secured government-led sustainability projects and integrated hybrid battery storage for critical infrastructure.", img: `${CDN}/698ae3ce4dccf5369a76472f_Our%20Journey%20Image4.jpg` },
  { num: "05", year: "2025 — Scaling & Innovation", desc: "Introduced next-generation solar modules with improved efficiency and expanded remote diagnostics for long-term system uptime.", img: `${CDN}/698ae3cea85c1b767a513647_Our%20Journey%20Image5.jpg` },
];

const TEAM = [
  { name: "Imran Khalid", role: "Chief Executive Officer", img: `${CDN}/698b41158c77850dda9ff877_Team%20Member%20Img1.jpg` },
  { name: "Maria Tan", role: "Chief Technology Officer", img: `${CDN}/698b411554c53b7f814286b9_Team%20Member%20Img2.jpg` },
  { name: "Rafiul Hasan", role: "Head of Operations", img: `${CDN}/698b4115157f0b46c81e2469_Team%20Member%20Img3.jpg` },
  { name: "Sabrina Noor", role: "Director of Customer Success", img: `${CDN}/698b4115d3ad014e78229090_Team%20Member%20Img4.jpg` },
];

export default function AboutUsPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      // Generic scroll-reveal fades for every [data-fade] block (mirrors the
      // original data-w-id + opacity:0 pattern).
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

      // Desktop-only interactions, matching Webflow's own breakpoint cutoff:
      // - .how-it-work-line is display:none below 767px
      // - .core-values-sticky becomes position:static below 991px
      // Running these on mobile would animate hidden/non-pinned elements for nothing.
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {
          // 1) "How We Deliver Solar Projects" step line: rests at 20% height,
          // grows to 100% as the user scrolls through the 4 steps.
          gsap.fromTo(
            ".how-it-work-active-line",
            { height: "20%" },
            {
              height: "100%",
              ease: "none",
              scrollTrigger: {
                trigger: ".how-it-work-content",
                start: "top 60%",
                end: "bottom 75%",
                scrub: true,
              },
            }
          );

          // 2) Core Values pinned section: .core-values-sticky is CSS
          // position:sticky inside a 300vh spacer (.core-values-vh) â€” no GSAP
          // pin needed for the pin itself. We only drive which card is
          // "active" (icon swap) off the same scroll range, split into 4
          // equal segments. Verify exact activation % against the live site
          // if the client wants pixel-perfect match â€” this is a reasonable
          // 4-way even split, not reverse-engineered from Webflow's compiled IX2.
          const st = ScrollTrigger.create({
            trigger: ".core-values-vh",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
              const idx = Math.min(3, Math.floor(self.progress * 4));
              setActiveCard(idx);
            },
          });

          return () => st.kill();
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      {/* ---------------- Header ---------------- */}
      <div className="navbar w-nav">
        <div className="container">
          <div className="navbar-content">
            <Link href="/" className="navbar-logo-wrapper w-nav-brand">
              <Image src={`${CDN}/697f42a2fcb938640a01614a_Navbar%20Logo.svg`} alt="Logo" width={140} height={36} className="navbar-logo-image" unoptimized />
            </Link>
            <nav className="nav-menu w-nav-menu">
              <Link href="/" className="nav-link w-nav-link">Home</Link>
              <Link href="/about-us" className="nav-link w-nav-link w--current">About</Link>
              <Link href="/project" className="nav-link w-nav-link">Project</Link>
              <Link href="/services" className="nav-link w-nav-link">Service</Link>
              <Link href="/blog" className="nav-link w-nav-link">Blog</Link>
            </nav>
            <div className="secondary-button-wrapper desktop">
              <a href="/contact-us" className="secondary-button navbar w-inline-block">
                <div className="secondary-button-single one nav">
                  <div className="secondary-button-text">Contact</div>
                  <Image src={`${CDN}/699318fc0086bb41a7c7bca8_Navbar%20Button%20White%20Arrow.svg`} alt="" width={16} height={16} className="secondary-button-arrow nav" unoptimized />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* ---------------- About Banner ---------------- */}
        <section className="section about-us-banner">
          <div className="container">
            <div className="about-banner-content">
              <div className="about-banner-typography">
                <div className="about-banner-title-description">
                  <h1 className="about-banner-title">Powering the Bold Clean Reliable Energy</h1>
                  <p className="about-banner-description">
                    HelioGrid Solar designs and deploys high-efficiency solar systems for homes, businesses, and
                    industrial facilities. Our mission is to help customers achieve energy independence, reduce
                    costs, and contribute to a sustainable future.
                  </p>
                </div>
              </div>
              <div className="about-banner-image-wrapper">
                <div className="about-banner-left-image-wrap">
                  <Image src={`${CDN}/698aa12aaff54b84a36aad64_About%20Banner%20Left%20Image.jpg`} alt="About Banner Left" width={600} height={500} className="about-banner-image" unoptimized />
                </div>
                <div className="about-banner-right-image-wrap">
                  <Image src={`${CDN}/698aa129b870e2d9cb33bc73_About%20Banner%20Right%20Image.jpg`} alt="About Banner Right" width={600} height={500} className="about-banner-image" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Our Vision ---------------- */}
        <section className="section our-vision">
          <div className="container">
            <div className="our-vision-content">
              <div data-fade className="our-vision-top-content">
                <div className="vision-left-typography">
                  <div className="vision-subtitle">(About Us)</div>
                  <div className="vision-title-description">
                    <div className="vision-title">70+ Team Members</div>
                    <p className="vision-description">
                      We aim to increase the productivity and quality of world solar power with our sustainably industries.
                    </p>
                  </div>
                </div>
                <div className="vision-right-typography">
                  <h2 className="vision-section-title">
                    Solar designs and deploys high-efficiency solar systems for homes, businesses, and industrial
                    facilities. Our mission is to help customers achieve energy reduce costs and contribute to a
                    sustainable future.
                  </h2>
                </div>
              </div>
              <div data-fade className="our-vision-bottom-content">
                <div className="vision-grid">
                  <div className="vision-left-content">
                    <div className="green-energy-card">
                      <Image src={`${CDN}/698aa6e90c37721327166fdf_Green%20Energy%20Card%20Bg.jpg`} alt="Green Energy" width={500} height={400} className="green-energy-card-image" unoptimized />
                      <div className="green-energy-card-typography">
                        <div className="green-energy-card-name">Clean Green Energy</div>
                        <div className="green-energy-card-bio">Powering Smarter Homes</div>
                      </div>
                    </div>
                    <div className="reduction-card-wrapper">
                      <div className="reduction-card-grid">
                        <div className="growth-card">
                          <Image src={`${CDN}/698aa95cbce126b2dc26df6a_Growth%20Card%20Bg.jpg`} alt="Growth" width={300} height={200} className="growth-card-image" unoptimized />
                          <div className="growth-card-typography">
                            <div className="growth-card-number">42.5%</div>
                            <div className="growth-card-text">Renewable Growth by 2030</div>
                          </div>
                        </div>
                        <div className="cost-reduction-card">
                          <div className="cost-reduction-card-title">Up to 60% Cost Reduction</div>
                          <div className="growth-card-text">Powered by smart AI optimization</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vision-right-content">
                    <Image src={`${CDN}/698ad6b3d152f9cb5e46ee5c_Empower%20Image.jpg`} alt="Empower" width={500} height={600} className="empower-card-image" unoptimized />
                    <div className="empower-typography">
                      <p className="empower-description">
                        Empower your home or business with dependable, renewable solar solutions built to reduce
                        energy costs and maximize efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- How We Deliver Solar Projects ---------------- */}
        <section className="section how-it-works">
          <div className="container">
            <div data-fade className="section-title-wrapper how-it-works">
              <h2 className="section-title">How We Deliver Solar Projects</h2>
            </div>
            <div data-fade className="how-it-work-content">
              <div className="how-it-work-typography" style={{ position: "relative" }}>
                {HOW_IT_WORKS.map((step) => (
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
                <Image src={`${CDN}/698ada796a87684d24a5b830_How%20It%20Work%20Image.jpg`} alt="How It Work" width={522} height={600} className="how-it-work-image" unoptimized />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Core Values (pinned) ---------------- */}
        <section className="section core-values">
          <div className="core-values-vh">
            <div className="core-values-sticky">
              <div className="container">
                <div data-fade className="section-title-wrapper core-values">
                  <h2 className="section-title mb24">The Principles That Power Our Work</h2>
                  <p className="section-description">
                    Our commitment to performance, transparency, and sustainability drives every project we
                    deliver, from residential installations to large-scale commercial and public deployments.
                  </p>
                </div>
                <div data-fade className="core-values-content">
                  <div className="core-values-grid">
                    {CORE_VALUES.map((card, i) => (
                      <div key={card.title} className={`core-values-card card-${i + 1} ${activeCard === i ? "is-active" : ""}`}>
                        <div className="core-values-icon-wrapper">
                          <Image
                            src={activeCard === i ? card.activeIcon : card.icon}
                            alt={card.title}
                            width={50}
                            height={50}
                            className="core-values-icon"
                            unoptimized
                          />
                        </div>
                        <div className="core-values-card-title-description">
                          <div className="core-values-card-title">{card.title}</div>
                          <p className="core-values-card-description">{card.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Our Journey ---------------- */}
        <section className="section our-journey">
          <div className="container">
            <div data-fade className="section-title-wrapper our-journey">
              <h2 className="section-title color-change mb24">Our Journey Toward Clean Energy Innovation</h2>
              <p className="section-description color-change our-journey">
                What began as a small engineering initiative has evolved into a renewable energy provider trusted
                by homeowners, enterprises, and public organizations across the region.
              </p>
            </div>
            <div data-fade className="our-journey-wrapper">
              {JOURNEY.map((j) => (
                <div key={j.num} className="our-journey-single">
                  <div className="our-journey-typography">
                    <div className="our-journey-number-wrapper">
                      <div className="our-journey-number">{j.num}</div>
                    </div>
                    <div className="our-journey-title-description">
                      <div className="our-journey-title">{j.year}</div>
                      <p className="our-journey-description">{j.desc}</p>
                    </div>
                  </div>
                  <div className="our-journey-image-wrapper">
                    <Image src={j.img} alt={j.year} width={500} height={350} className="our-journey-image" unoptimized />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Team ---------------- */}
        <section className="section team-member">
          <div className="container">
            <div data-fade className="section-title-wrapper team-member">
              <h2 className="section-title mb24">Meet the People Behind the Power</h2>
              <p className="section-description">
                A multidisciplinary team of engineers, installers, analysts, and support specialists dedicated to
                making clean energy reliable, cost-efficient, and accessible.
              </p>
            </div>
            <div data-fade className="team-member-content">
              {TEAM.map((member) => (
                <div key={member.name} className="team-member-card">
                  <div className="team-member-image-wrapper">
                    <Image src={member.img} alt={member.name} width={300} height={340} className="team-member-image" unoptimized />
                  </div>
                  <div className="team-member-typography">
                    <div className="team-member-typography-single">
                      <div className="team-member-name-bio">
                        <div className="team-member-name">{member.name}</div>
                        <div className="team-member-bio">{member.role}</div>
                      </div>
                      <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="team-member-social-media w-inline-block">
                        <Image src={`${CDN}/698b43802c63898b9d27e995_Team%20Member%20Social%20Media%20Icon.svg`} alt="Icon" width={20} height={20} className="team-member-social-media-icon" unoptimized />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- CTA + Footer ---------------- */}
      <div className="cta-footer">
        <section className="section cta">
          <div className="container">
            <div className="cta-content">
              <div className="cta-title-description">
                <h2 className="section-title">Renewable energy for homes & businesses.</h2>
                <p className="section-description cta">
                  Stay updated on solar innovations, incentives, and cost-saving insights. Join our mailing list
                  for quarterly updates.
                </p>
              </div>
              <div className="cta-button-wrapper">
                <a href="/contact-us" className="primary-button w-inline-block">
                  <div className="primary-button-text-wrapper">
                    <div className="primary-button-text top">Ask Some Question</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-top-content">
                <div className="footer-details-wrapper">
                  <Link href="/" className="footer-image-wrap w-inline-block">
                    <Image src="/images/solarion/698500612afd9738e764108c_Footer-Image.svg" alt="Footer" width={140} height={40} className="footer-image" />
                  </Link>
                  <p className="footer-details-text">
                    Trusted for high-performance systems that convert sunlight into reliable power with fast ROI
                    and minimized downtime.
                  </p>
                </div>
                <div className="footer-social-media-wrapper">
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer-social-media w-inline-block">
                    <Image src="/images/solarion/698502d346b04b6c1f09ca23_Footer-Social-Icon1.svg" alt="Facebook" width={20} height={20} className="footer-social-icon" />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="footer-social-media w-inline-block">
                    <Image src="/images/solarion/698502d3728137d57cab6ffe_Footer-Social-Icon2.svg" alt="Twitter" width={20} height={20} className="footer-social-icon" />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="footer-social-media w-inline-block">
                    <Image src="/images/solarion/698502d3e97de4e6af700c05_Footer-Social-Icon3.svg" alt="LinkedIn" width={20} height={20} className="footer-social-icon" />
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="footer-social-media w-inline-block">
                    <Image src="/images/solarion/698502d354389b00b04c03ae_Footer-Social-Icon4.svg" alt="Instagram" width={20} height={20} className="footer-social-icon" />
                  </a>
                </div>
              </div>
              <div className="footer-bottom-content">
                <div className="footer-information-wrapper">
                  <Link href="/privacy-policy" className="footer-information-text-link">Privacy Policy</Link>
                  <Link href="/terms-conditions" className="footer-information-text-link">Terms of Use</Link>
                </div>
                <div className="footer-information-text-link">© Copyright Solarion 2026</div>
              </div>
              <Image src="/images/solarion/6985041d0e48d2f8dd8c5c22_Footer-Shape.svg" alt="Shape" width={400} height={200} className="footer-shape" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
