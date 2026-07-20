"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useFadeIn } from "@/components/useFadeIn";

const ITEMS = [
  {
    img: "/images/process-1.avif",
    title: "Site Assessment & Engineering",
    text: "Load-bearing analysis, shadow studies, structural stability checks and electrical grid layout — every kilowatt engineered before ground breaks.",
  },
  {
    img: "/images/process-2.avif",
    title: "EPC Execution & Construction",
    text: "Mechanical assembly, structural mounting, electrical stringing and grid synchronization — executed under strict safety protocols and timelines with Tier-1 OEM components.",
  },
  {
    img: "/images/process-3.avif",
    title: "O&M & SCADA Monitoring",
    text: "Continuous operation & maintenance with SCADA-based asset monitoring, performance-ratio protection and technical telemetry, backed by 20-year maintenance guarantees.",
  },
];

export default function Process() {
  const ref = useFadeIn<HTMLElement>();
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    // The split only makes sense on large screens where .process-sticky is
    // horizontal/sticky. On <=991px it stacks vertically (static/column),
    // so skip the animation there to avoid shoving the headings off-screen.
    const desktopMq = window.matchMedia("(min-width: 992px)");
    if (!desktopMq.matches) return;

    const section = stickyRef.current?.closest<HTMLElement>(".process-area");
    const left = stickyRef.current?.querySelector<HTMLElement>(".process-sticky-left");
    const right = stickyRef.current?.querySelector<HTMLElement>(".process-sticky-right");
    if (!section || !left || !right) return;

    // Match the original: the two headings slide apart (0 -> ±16rem) over the
    // first ~300px after the section scrolls into view, then hold fully open,
    // and come back together when you scroll back up.
    const OPEN_DISTANCE = 300;
    const MAX_SHIFT = 256; // 16rem in px at the default root font-size

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      // progress: 0 when the section top reaches the viewport top, 1 after
      // OPEN_DISTANCE px of scrolling past that point.
      const p = Math.min(Math.max(-rect.top / OPEN_DISTANCE, 0), 1);
      const shift = p * MAX_SHIFT;
      left.style.transform = `translateX(${-shift}px)`;
      right.style.transform = `translateX(${shift}px)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      left.style.transform = "";
      right.style.transform = "";
    };
  }, []);

  return (
    <section ref={ref} className="process-area">
        <div className="w-layout-blockcontainer container w-container">
        <div ref={stickyRef} className="process-sticky">
          <div className="process-sticky-left">
            <h2 className="heading-five text-white">Engineered From</h2>
          </div>
          <div className="process-sticky-right">
            <h2 className="heading-five text-white">The Ground Up</h2>
          </div>
        </div>
        <div className="process-right">
          {ITEMS.map((item) => (
            <div key={item.title} data-fade className="process-item">
              <div className="process-img-wrap">
                <Image
                  src={item.img}
                  alt="Process"
                  width={1200}
                  height={675}
                  className="process-img"
                  sizes="100vw"
                />
              </div>
              <div className="process-details">
                <h2 className="process-title">{item.title}</h2>
                <p className="process-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
