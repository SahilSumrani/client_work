"use client";

import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import { useFadeIn } from "@/components/useFadeIn";
import Image from "next/image";

const FAQS: AccordionItem[] = [
  {
    question: "What is your typical project timeline for industrial installations?",
    answer:
      "Timelines depend on plant size, grid-connectivity, and statutory clearances. We begin with site assessment and engineering (load-bearing analysis, shadow studies, structural stability checks and electrical grid layout) before construction, then execute mechanical, structural, electrical and grid-synchronization works under strict safety protocols and agreed milestones. A detailed schedule is shared at the proposal stage.",
  },
  {
    question: "Do you provide maintenance guarantees?",
    answer:
      "Yes. Our end-to-end Solar EPC services include a 3-year maintenance guarantee, renewable for continued coverage beyond the initial period.",
  },
  {
    question: "What module technology do you use?",
    answer:
      "We prioritise TOPCon N-type modules for their superior efficiency, thermal resilience and long-term yield. For utility-scale ground-mounted solar we deploy MonoPERC half-cut bifacial and TOPCon half-cut bifacial panels sourced from Tier-1 OEMs.",
  },
  {
    question: "Do you handle both residential and industrial projects?",
    answer:
      "Yes. We deliver end-to-end Solar EPC for both rooftop residential solar setups and industrial solar power plants, including utility-scale ground-mounted installations.",
  },
  {
    question: "What is your O&M monitoring approach?",
    answer:
      "We provide 5+ years of continuous operation & maintenance with SCADA-based asset monitoring, performance-ratio protection and technical telemetry, so plant output and faults are tracked in real time.",
  },
];

export default function FAQ() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className="faq-area">
      <div className="w-layout-blockcontainer container w-container">
        <div className="faq-content">
          <div className="faq-section-title-wrapper">
            <div className="faq-section-title-description">
              <h2 className="section-title mb24">Frequently Asked Questions</h2>
              <p className="section-description">
                Clear answers to the most common solar-related questions from homeowners, businesses, and facility operators.
              </p>
            </div>
            <div className="faq-button-wrapper faq-cta-links">
              <a href="mailto:dyusolar@gmail.com" className="primary-button w-inline-block">
                <div className="primary-button-text-wrapper">
                  <div className="primary-button-text top">Email Us</div>
                  <div className="primary-button-text bottom">Email Us</div>
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
              <a href="https://wa.me/919899806844" target="_blank" rel="noreferrer" className="btn-secondary w-inline-block">
                <div>WhatsApp Us</div>
              </a>
            </div>
          </div>
          <div className="faq-wrapper-wrapper" data-fade>
            <Accordion items={FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}
