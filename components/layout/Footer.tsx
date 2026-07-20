"use client";

import Image from "next/image";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { href: "https://www.facebook.com/", src: "/images/footer-social-1.svg", alt: "Facebook" },
  { href: "https://twitter.com/", src: "/images/footer-social-2.svg", alt: "Twitter" },
  { href: "https://linkedin.com/", src: "/images/footer-social-3.svg", alt: "LinkedIn" },
  { href: "https://instagram.com/", src: "/images/footer-social-4.svg", alt: "Instagram" },
];

export default function Footer() {
  return (
    <div className="cta-footer">
      <section className="section cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-title-description">
              <h2 className="section-title">Renewable energy for homes &amp; businesses.</h2>
              <p className="section-description cta">
                Stay updated on solar innovations, incentives, and cost-saving insights. Join our
                mailing list for quarterly updates.
              </p>
            </div>
            <div className="cta-button-wrapper">
              <a href="/contact" className="primary-button w-inline-block">
                <div className="primary-button-text-wrapper">
                  <div className="primary-button-text top">Ask Some Question</div>
                  <div className="primary-button-text bottom">Ask Some Question</div>
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
      </section>
      <section className="section footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-top-content">
              <div className="footer-details-wrapper">
                <a href="/" aria-current="page" className="footer-image-wrap w-inline-block w--current">
                  <Image
                    src="/images/company-logo.png"
                    alt="DYU Solar LLP"
                    width={150}
                    height={82}
                    className="footer-image"
                  />
                </a>
                <p className="footer-details-text">
                  Trusted for high-performance solar systems that convert sunlight into reliable
                  power with fast ROI and minimized downtime.
                </p>
              </div>
              <div className="footer-menu-wrapper">
                <div className="footer-menu-single">
                  <div className="footer-menu-title-wrapper">
                    <div className="footer-menu-title">Pages</div>
                  </div>
                  <ul role="list" className="footer-menu-list">
                    {NAV.map((item) => (
                      <li key={item.href} className="footer-menu-list-item">
                        <a
                          href={item.href}
                          aria-current={item.href === "/" ? "page" : undefined}
                          className={`footer-menu-text-link ${item.href === "/" ? "w--current" : ""}`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="footer-social-media-wrapper">
                  {SOCIALS.map((s) => (
                    <a key={s.href} href={s.href} target="_blank" className="footer-social-media w-inline-block">
                      <Image src={s.src} alt={s.alt} width={20} height={20} className="footer-social-icon" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="footer-bottom-content">
              <div className="footer-information-wrapper">
                <a href="/contact" className="footer-information-text-link">Contact</a>
              </div>
              <div className="footer-information-text-link">
                © Copyright <a href="/" aria-current="page" className="footer-information-text-link w--current">DYU Solar LLP</a> {new Date().getFullYear()}
              </div>
            </div>
            <Image
              src="/images/footer-shape.svg"
              alt=""
              width={297}
              height={314}
              className="footer-shape"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
