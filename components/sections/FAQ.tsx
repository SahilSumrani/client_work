"use client";

import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import { useFadeIn } from "@/components/useFadeIn";

const FAQS: AccordionItem[] = [
  {
    question: "What is your typical project timeline for industrial installations?",
    answer:
      "Timelines depend on plant size, grid connectivity, and statutory clearances. We begin with comprehensive site assessment and engineering (load-bearing analysis, shadow studies, structural stability checks, and electrical grid layout) before construction, executing mechanical, structural, electrical, and grid-synchronization works under strict safety protocols and agreed milestones.",
  },
  {
    question: "Do you provide operations & maintenance (O&M) guarantees?",
    answer:
      "Yes. DYU Solar provides a 5-Year Operations & Maintenance (O&M) commitment on all turnkey EPC installations, supported by SCADA telemetry, automated performance monitoring, and guaranteed response times.",
  },
  {
    question: "What module technology do you deploy for projects?",
    answer:
      "We prioritize TOPCon N-type modules for their superior efficiency (22.5%+), lower temperature coefficient (-0.30%/°C), and higher bifacial gain. For utility-scale ground-mounted solar, we deploy Mono PERC half-cut bifacial and TOPCon half-cut bifacial panels sourced directly from MNRE ALMM Tier-1 OEMs.",
  },
  {
    question: "Do you handle both residential rooftop and industrial-scale projects?",
    answer:
      "Yes. We deliver end-to-end Solar EPC for both rooftop residential solar setups (with PM Surya Ghar subsidy support) and industrial commercial solar power plants, as well as utility-scale ground-mounted installations.",
  },
  {
    question: "What is your O&M telemetry and monitoring approach?",
    answer:
      "We provide 5-Year full-lifecycle O&M with SCADA-based asset monitoring, performance-ratio (PR) protection, and technical telemetry, ensuring real-time tracking of plant output, string performance, and fault alerts.",
  },
];

export default function FAQ() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className="faq-section pt-14 sm:pt-20 pb-14 sm:pb-20 bg-[#F7F7F2]">
      <div className="w-layout-blockcontainer container w-container">
        <div className="faq-contents-wrapper max-w-5xl mx-auto">
          <div className="section-heading-block text-center" data-fade>
            <div className="inline-flex items-center justify-center rounded-full border border-navy/20 px-4 py-2 mb-5">
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-navy/60 m-0">
                frequently asked questions
              </p>
            </div>
            <div className="section-title-block space-y-1">
              <h2 className="font-heading text-navy font-medium text-3xl sm:text-5xl lg:text-[3.75rem] tracking-[-0.04em] leading-[1.1] m-0">
                Your solar questions,
              </h2>
              <h2 className="font-heading text-navy font-medium text-3xl sm:text-5xl lg:text-[3.75rem] tracking-[-0.04em] leading-[1.1] m-0">
                answered
              </h2>
            </div>
          </div>

          <div className="mt-10 sm:mt-14" data-fade>
            <div
              className="faq-liner h-px w-full mb-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(27,54,93,0.28) 0 6px, transparent 6px 12px)",
              }}
            />
            <Accordion items={FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}
