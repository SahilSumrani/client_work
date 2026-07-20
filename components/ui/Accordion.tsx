"use client";

import { useState } from "react";
import Image from "next/image";

export type AccordionItem = {
  question: string;
  answer: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (i: number) => {
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  };

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={i} className={`faq-single-accordion-wrap ${isOpen ? "open" : ""}`}>
            <div
              className="faq-accordion-link"
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(i);
                }
              }}
            >
              <div className="faq-accordion-title-wrap">
                <div className="faq-accordion-title">{item.question}</div>
                <div className="faq-accordion-icon-wrapper">
                  <Image
                    src="/images/faq-accordion-icon.svg"
                    alt=""
                    width={16}
                    height={16}
                    className={`faq-accordion-icon ${isOpen ? "open" : ""}`}
                  />
                </div>
              </div>
            </div>
            <div className={`faq-accordion-ans-wrap ${isOpen ? "open" : ""}`}>
              <div className="faq-accordion-content-wrap">
                <p className="faq-accordion-ans">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
