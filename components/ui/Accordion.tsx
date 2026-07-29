"use client";

import { useState } from "react";

export type AccordionItem = {
  question: string;
  answer: string;
};

function FaqChevron({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 text-black/55 transition-transform duration-400 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path
        d="M22 2.00008C22 2.00008 14.6352 12 12 12C9.36467 12 2 2 2 2"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (i: number) => {
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  };

  return (
    <div className="faq-items-wrapper w-full">
      {items.map((item, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={i} className="faq-single-item-block w-full">
            <button
              type="button"
              className="faq-toggle flex w-full items-center justify-between gap-5 sm:gap-6 py-4 sm:py-5 text-left bg-transparent border-0 cursor-pointer min-h-0"
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
            >
              <div className="faq-item-title-block min-w-0 flex-1">
                <div className="faq-title text-[1.125rem] sm:text-[1.5rem] md:text-[1.75rem] font-medium text-navy tracking-[-0.03em] leading-[1.15]">
                  {item.question}
                </div>
              </div>
              <div className="faq-icon-block shrink-0">
                <FaqChevron open={isOpen} />
              </div>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="faq-summary pb-4 sm:pb-5 max-w-[1010px] text-base sm:text-lg text-navy/70 tracking-[-0.02em] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
            <div
              className="faq-liner h-px w-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(27,54,93,0.28) 0 6px, transparent 6px 12px)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
