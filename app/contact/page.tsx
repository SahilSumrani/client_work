"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const ctx = gsap.context(() => {
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
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="page-wrap">
      <Header />
      <main className="main-wrap">
        {/* Banner Area */}
        <section className="banner-area">
          <div className="w-container">
            <div className="banner-wrap">
              <h1 data-fade className="heading-two text-white">Contact Us</h1>
              <div data-fade className="contact-banner-tagline">
                <p className="section-content text-white">
                  Tell us about your rooftop or utility-scale solar requirement — we&apos;ll get
                  back to you with an engineered plan.
                </p>
              </div>
            </div>
          </div>
          <div className="banner-img-wrap">
            <Image
              src="/images/solar-3.avif"
              alt="Contact us"
              width={1400}
              height={500}
              className="banner-img object-cover w-full h-full"
            />
          </div>
        </section>

        {/* Contact Area */}
        <section className="contact-area">
          <div className="w-container">
            <div className="contact-wrap">
              {/* Contact Left */}
              <div className="contact-left">
                <h2 data-fade className="heading-four">
                  Let&apos;s Build Energy Together
                </h2>
                <p data-fade className="section-content pt-16">
                  Tell us about your rooftop residential or industrial solar requirement. We respond
                  with an engineered plan — no obligation.
                </p>

                <div data-fade className="contact-info-item _1st">
                  <p className="contact-info-title">Email</p>
                  <a href="mailto:dyusolar@gmail.com" className="contact-info-link text-black hover:underline">
                    dyusolar@gmail.com
                  </a>
                </div>

                <div data-fade className="contact-info-item">
                  <p className="contact-info-title">Phone</p>
                  {/* TODO for client: a second phone number was listed as just "+91-" with no digits.
                      Do NOT fabricate it. Add the verified number here once provided. */}
                  <a href="tel:+919899806844" className="contact-info-link text-black hover:underline">
                    +91-9899806844
                  </a>
                </div>

                <div data-fade className="contact-info-item">
                  <p className="contact-info-title">Location</p>
                  {/* TODO for client: confirm whether to show a full office address or just "Delhi, India". */}
                  <p className="section-content">Delhi, India</p>
                </div>

                <a
                  href="mailto:dyusolar@gmail.com"
                  data-fade
                  className="btn-secondary mt-20 inline-block"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Map Area Mockup */}
            <div data-fade className="map-link mt-40 rounded-20 overflow-hidden relative h-400">
              <a href="https://maps.app.goo.gl/6DgNQ1JQi6bo1H9q7" target="_blank">
                <Image
                  src="/images/solar-img.avif"
                  alt="Map Location"
                  fill
                  className="object-cover w-full h-full filter brightness-75 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/95 text-black px-24 py-12 rounded-100 shadow-md font-medium">
                    View on Google Maps
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
