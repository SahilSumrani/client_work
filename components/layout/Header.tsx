"use client";

import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import OffCanvasMenu from "@/components/ui/OffCanvasMenu";
import BrandLogo from "@/components/ui/BrandLogo";
import PrimaryButton from "@/components/ui/PrimaryButton";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Contact", href: "/contact" },
];

/**
 * Hulax-style frosted navbar:
 * - Desktop: logo + links + Contact us CTA
 * - Mobile: logo + gold hamburger → dark off-canvas
 */
export default function Header({ variant = "default" }: { variant?: "default" | "two" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-[100] isolate w-full px-3 sm:px-5 pointer-events-none ${
          variant === "two" ? "header-area-two" : ""
        }`}
      >
        <div
          className="pointer-events-auto relative z-[1] mx-auto max-w-[1200px] flex items-center justify-between gap-3 sm:gap-4 rounded-full backdrop-blur-[20px] pl-2.5 pr-3 sm:pl-3.5 sm:pr-5 py-1.5 sm:py-2 shadow-[0_8px_30px_rgba(0,0,0,0.18)] border border-white/10"
          style={{ backgroundColor: "rgba(27, 54, 93, 0.55)" }}
        >
          <a
            href="/"
            aria-current="page"
            className="relative z-[1] flex items-center justify-center shrink-0 p-0.5 sm:p-1 m-0 bg-transparent border-0 shadow-none outline-none"
          >
            <BrandLogo variant="header" priority />
          </a>

          <nav className="relative z-[1] hidden lg:flex items-center flex-1 justify-center" aria-label="Primary">
            <ul role="list" className="flex items-center gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-solar-gold text-navy"
                        : "text-white hover:bg-white/15"
                    }`}
                    style={isActive(item.href) ? undefined : { color: "rgba(255,255,255,0.9)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-[2] hidden lg:flex items-center shrink-0">
            <PrimaryButton href="/contact" size="nav">
              Contact us
            </PrimaryButton>
          </div>

          <button
            type="button"
            className="relative z-[2] lg:hidden w-12 h-12 rounded-full bg-solar-gold text-navy flex items-center justify-center cursor-pointer transition-transform active:scale-95 shrink-0 ml-auto"
            onClick={openMenu}
            aria-label="Open Navigation Menu"
            aria-expanded={menuOpen}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
              <path d="M1 1.5h20M1 8h20M1 14.5h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Outside pointer-events-none header so close/links work */}
      <OffCanvasMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
