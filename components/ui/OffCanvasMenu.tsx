"use client";

import { useEffect } from "react";
import Image from "next/image";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Contact", href: "/contact" },
];

export default function OffCanvasMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".offcanvas-main") && !target.closest(".offcanvas-wrap")) {
        onClose();
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div className={`offcanvas-main ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="offcanvas-wrap">
        <div className="offcanvas-top">
          <a href="#" className="offcanvas-logo-wrap" onClick={onClose}>
            <Image
              src="/images/company-logo.png"
              alt="DYU Solar LLP"
              width={150}
              height={82}
              className="offcanvas-logo"
            />
          </a>
          <Image
            src="/images/close.svg"
            alt="Close"
            width={24}
            height={24}
            className="close-icon"
            onClick={onClose}
          />
        </div>
        <ul role="list" className="offcanvas-nav">
          {NAV.map((item) => (
            <li key={item.href} className="offcanvas-nav-item">
              <a href={item.href} className="offcanvas-nav-link" onClick={onClose}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
