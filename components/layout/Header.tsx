"use client";

import { useState } from "react";
import Image from "next/image";
import OffCanvasMenu from "@/components/ui/OffCanvasMenu";

const NAV = [
  { label: "Home", href: "/", current: true },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ variant = "default" }: { variant?: "default" | "two" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isTwo = variant === "two";

  return (
    <header className={isTwo ? "header-area-two" : "header-area"}>
      <div className="w-layout-blockcontainer container w-container">
        <div className="header-wrap">
          <a href="/" aria-current="page" className={isTwo ? "nav-logo-two w-inline-block w--current" : "nav-logo-wrap w-inline-block w--current"}>
            <Image
              src="/images/company-logo.png"
              alt="DYU Solar LLP"
              width={150}
              height={82}
              className="nav-logo"
              priority
            />
          </a>
          <ul role="list" className="nav">
            {NAV.map((item) => (
              <li key={item.href} className="nav-item">
                <a href={item.href} aria-current={item.current ? "page" : undefined} className={`nav-link ${item.current ? "w--current" : ""}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <div className="btn-nav">
              <a href="/contact" className="btn-secondary w-inline-block"><div>Contact Us</div></a>
            </div>
            <div className="offcanvas-icon" onClick={() => setMenuOpen(true)}>
              <Image src="/images/menu.svg" alt="Icon" width={24} height={24} className="menu-icon" />
            </div>
          </div>
        </div>
      </div>
      <OffCanvasMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
