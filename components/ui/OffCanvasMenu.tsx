"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/ui/BrandLogo";
import PrimaryButton from "@/components/ui/PrimaryButton";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Contact", href: "/contact" },
];

interface OffCanvasMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function OffCanvasMenu({ open, onClose }: OffCanvasMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex justify-end pointer-events-auto"
      aria-modal="true"
      role="dialog"
      aria-label="Mobile Navigation Menu"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm border-0 cursor-pointer"
        aria-label="Close menu overlay"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        className="relative z-10 w-[min(100%,380px)] bg-[#0f1f38] text-white h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-white/10"
      >
        <div>
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/15">
            <a href="/" className="flex items-center min-w-0" onClick={onClose}>
              <BrandLogo variant="drawer" />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="w-12 h-12 rounded-full bg-solar-gold text-navy hover:bg-[#ffd700] transition-colors flex items-center justify-center shrink-0 cursor-pointer border-0"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="mt-8" aria-label="Mobile">
            <ul className="space-y-2">
              {NAV.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(item.href + "/");

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-5 py-4 text-lg font-semibold rounded-2xl transition-colors min-h-[56px] ${
                        isActive
                          ? "bg-solar-gold text-navy"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden className="text-xl leading-none">
                        →
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="pt-6 border-t border-white/15 space-y-4">
          <a href="tel:+919899806844" className="block text-base font-semibold text-white hover:text-solar-gold">
            +91-9899806844
          </a>
          <a href="mailto:dyusolar@gmail.com" className="block text-sm text-white/70 hover:text-white">
            dyusolar@gmail.com
          </a>
          <PrimaryButton href="/contact" className="w-full justify-center" onClick={onClose}>
            Contact us
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
