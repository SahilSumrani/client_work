"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageSquareIcon } from "@/components/ui/SolarIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PHONE_PRIMARY = "+91-9899806844";
const PHONE_SECONDARY = "+91-9873875477";
const EMAIL = "dyusolar@gmail.com";

// TODO(client-confirm): Office address location is unconfirmed. Showing Delhi / NCR with Google Maps view.
const OFFICE_ADDRESS = "Delhi / NCR, India";

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
        <section className="banner-area relative min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] flex items-end bg-navy pt-[200px] pb-[80px] sm:pt-[240px] sm:pb-[96px] lg:pt-[300px] lg:pb-[120px] overflow-hidden">
          <div className="w-container relative z-10">
            <div className="banner-wrap">
              <h1 data-fade className="heading-two text-white">
                Contact Us
              </h1>
              <div data-fade className="contact-banner-tagline">
                <p className="section-content text-white">
                  Tell us about your rooftop or utility-scale solar requirement — we&apos;ll get
                  back to you with an engineered plan and custom ROI assessment.
                </p>
              </div>
            </div>
          </div>
          <div className="banner-img-wrap absolute inset-0 z-0">
            <Image
              src="/images/open-access-solar.jpg"
              alt="Commercial rooftop solar panel array at golden hour"
              fill
              priority
              sizes="100vw"
              className="banner-img !rounded-none object-cover object-[center_42%] w-full h-full brightness-[0.55]"
            />
          </div>
        </section>

        <section className="contact-area">
          <div className="w-container">
            <div className="max-w-2xl py-12 space-y-8">
              <div data-fade>
                <h2 className="heading-four mb-4">Let&apos;s Build Energy Together</h2>
                <p className="section-content text-gray-700">
                  Get in touch with DYU Solar for technical feasibility audits, solar EPC
                  consultations, or project quotes.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div data-fade className="contact-info-item p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-xs uppercase tracking-wider text-solar-gold font-bold mb-1">
                    Phone Enquiries
                  </p>
                  <div className="flex flex-col space-y-1">
                    <a
                      href={`tel:${PHONE_PRIMARY.replace(/[^+\d]/g, "")}`}
                      className="text-navy font-semibold hover:underline text-lg"
                    >
                      {PHONE_PRIMARY}
                    </a>
                    <a
                      href={`tel:${PHONE_SECONDARY.replace(/[^+\d]/g, "")}`}
                      className="text-navy font-semibold hover:underline text-base"
                    >
                      {PHONE_SECONDARY} (Direct Line)
                    </a>
                  </div>
                </div>

                <div data-fade className="contact-info-item p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-xs uppercase tracking-wider text-solar-gold font-bold mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-navy font-semibold hover:underline text-lg"
                  >
                    {EMAIL}
                  </a>
                </div>

                <div data-fade className="contact-info-item p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                  <p className="text-xs uppercase tracking-wider text-emerald-700 font-bold mb-1">
                    Direct WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919899806844?text=Hello%20DYU%20Solar%2C%20I%20would%20like%20to%20enquire%20about%20a%20solar%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-800 font-semibold hover:underline text-base"
                  >
                    <MessageSquareIcon className="w-5 h-5 text-emerald-700" />
                    <span>Chat with an Engineer on WhatsApp</span>
                  </a>
                </div>

                <div data-fade className="contact-info-item p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-xs uppercase tracking-wider text-solar-gold font-bold mb-1">
                    Office Location
                  </p>
                  <p className="text-navy font-medium">{OFFICE_ADDRESS}</p>
                </div>
              </div>
            </div>

            <div data-fade className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-96 relative">
              <iframe
                title="DYU Solar Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192777!2d77.06889754125712!3d28.64455848529323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
