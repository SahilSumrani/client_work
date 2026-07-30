"use client";

import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";

const LINK_COLS = [
  [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/service" },
    { label: "Contact", href: "/contact" },
  ],
  [
    { label: "Request Audit", href: "/contact" },
    { label: "WhatsApp", href: "https://wa.me/919899806844", external: true },
    { label: "+91-9899806844", href: "tel:+919899806844" },
    { label: "+91-9873875477", href: "tel:+919873875477" },
  ],
  [
    { label: "dyusolar@gmail.com", href: "mailto:dyusolar@gmail.com" },
    { label: "Delhi Office", href: "/contact" },
    { label: "Technical Brochure", href: "/docs/DYU-Solar-Technical-Brochure.pdf", external: true },
  ],
];

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-[51px] w-[51px] items-center justify-center rounded-full border border-white/35 text-white transition-colors duration-300 hover:bg-solar-gold hover:text-navy hover:border-transparent"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer-section relative bg-[#0B1220] text-white rounded-t-[28px] sm:rounded-t-[52px] pt-12 sm:pt-16 pb-12 sm:pb-16 -mt-2">
      <div className="w-layout-blockcontainer container w-container relative z-10">
        <div className="footer-contents-wrapper">
          {/* Quiet site map — conversion lives in FinalCTA above */}
          <div className="footer-heading-block flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 border-b border-white/10 pb-8 sm:pb-10">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-white/45 m-0 mb-3">
                DYU Solar LLP
              </p>
              <p className="font-heading text-white/90 font-medium text-xl sm:text-2xl tracking-[-0.03em] leading-snug m-0">
                Turnkey solar EPC across North India
              </p>
            </div>
            <p className="text-sm text-white/50 m-0 sm:text-right leading-relaxed">
              <a href="tel:+919899806844" className="text-white/70 hover:text-solar-gold transition-colors">
                +91-9899806844
              </a>
              <span className="text-white/25 mx-2" aria-hidden>
                ·
              </span>
              <a
                href="mailto:dyusolar@gmail.com"
                className="text-white/70 hover:text-solar-gold transition-colors"
              >
                dyusolar@gmail.com
              </a>
            </p>
          </div>

          {/* Link columns + center brand mark (fills the empty middle on large screens) */}
          <div className="footer-links-wrapper mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto_1fr] gap-10 sm:gap-12 lg:gap-8 lg:items-center">
            {LINK_COLS.slice(0, 2).map((col, i) => (
              <div key={i} className="footer-links-block flex flex-col items-start gap-3 sm:gap-4">
                {col.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    {...("external" in link && link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="footer-link-text text-base sm:text-lg text-white/55 hover:text-solar-gold transition-colors duration-300 leading-snug no-underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}

            <Link
              href="/"
              className="brand-block order-first lg:order-none flex justify-center lg:justify-center items-center py-2 sm:col-span-2 lg:col-span-1"
              aria-label="DYU Solar LLP home"
            >
              <BrandLogo variant="footer" />
            </Link>

            <div className="footer-links-block flex flex-col items-start gap-3 sm:gap-4">
              {LINK_COLS[2].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  {...("external" in link && link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="footer-link-text text-base sm:text-lg text-white/55 hover:text-solar-gold transition-colors duration-300 leading-snug no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social + copyright */}
          <div className="footer-bottom-contents-wrapper flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10 sm:gap-12 mt-14 sm:mt-16 lg:mt-20">
            <div className="social-meadia-wrapper">
              <p className="social-meadia-title text-sm font-light text-white/80 m-0">Social media</p>
              <div className="social-meadia-logo-wrapper flex gap-5 mt-6">
                <SocialIcon href="https://wa.me/919899806844" label="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="mailto:dyusolar@gmail.com" label="Email">
                  <svg width="20" height="16" viewBox="0 0 24 18" fill="none" aria-hidden>
                    <path
                      d="M1 1.5h22v15H1v-15z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M1 2.5l11 8 11-8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com" label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                    <path d="M8.9364 9.18281V15.2128H5.57031V4.63962H8.77119V6.5808H8.88821C9.12225 5.93374 9.5215 5.42665 10.086 5.05953C10.6504 4.68781 11.3227 4.50195 12.1029 4.50195C12.8463 4.50195 13.491 4.66945 14.0371 5.00446C14.5878 5.33487 15.0146 5.79837 15.3175 6.39495C15.625 6.98694 15.7764 7.67988 15.7718 8.47379V15.2128H12.4057V9.13462C12.4103 8.54722 12.2612 8.08831 11.9583 7.7579C11.66 7.42749 11.2447 7.26228 10.7124 7.26228C10.359 7.26228 10.047 7.34029 9.7762 7.49632C9.51003 7.64776 9.30352 7.86574 9.15667 8.15027C9.01441 8.43479 8.94098 8.77897 8.9364 9.18281Z" />
                    <path d="M0.062786 15.2134V4.64017H3.42887V15.2134H0.062786ZM1.74927 3.408C1.2766 3.408 0.870462 3.25198 0.530871 2.93992C0.19128 2.62327 0.0214844 2.24238 0.0214844 1.79724C0.0214844 1.35669 0.19128 0.980385 0.530871 0.668329C0.870462 0.351683 1.2766 0.193359 1.74927 0.193359C2.22653 0.193359 2.63267 0.351683 2.96767 0.668329C3.30726 0.980385 3.47705 1.35669 3.47705 1.79724C3.47705 2.24238 3.30726 2.62327 2.96767 2.93992C2.63267 3.25198 2.22653 3.408 1.74927 3.408Z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="tel:+919899806844" label="Call">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M6.6 3.2c.4-.4 1-.5 1.5-.3l2.4 1c.5.2.8.7.8 1.2v2.3c0 .4-.2.8-.5 1.1l-1.2 1.2a13 13 0 005.8 5.8l1.2-1.2c.3-.3.7-.5 1.1-.5h2.3c.5 0 1 .3 1.2.8l1 2.4c.2.5.1 1.1-.3 1.5l-1.4 1.4c-.4.4-1 .6-1.6.5C10.4 21.1 2.9 13.6 2.1 5.1c-.1-.6.1-1.2.5-1.6L6.6 3.2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </SocialIcon>
              </div>
            </div>

            <div className="footer-lower-text-block sm:text-right">
              <p className="footer-lower-text text-sm text-white/55 m-0 leading-relaxed">
                © {new Date().getFullYear()} DYU Solar LLP · Building the Future with Trust
                <br />
                2740/1 Roshanpura Nai Sarak, Delhi-6 ·{" "}
                <a href="mailto:dyusolar@gmail.com" className="text-solar-gold hover:underline">
                  dyusolar@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
