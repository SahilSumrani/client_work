"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import OffCanvasMenu from "@/components/ui/OffCanvasMenu";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
];

export default function Header({ variant = "default" }: { variant?: "default" | "two" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isTwo = variant === "two";

  // A nav item is "current" when the active route matches its href exactly,
  // or (for nested/sub pages) when the path starts with the href. The home
  // link ("/") is only active on the exact home route to avoid matching every
  // page.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

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
                <a href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`nav-link ${isActive(item.href) ? "w--current" : ""}`}>
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
