import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./solarion.css";

// Solarion's design system uses Inter Tight, distinct from Arvora's Manrope/Instrument Sans.
// Loaded with its own CSS variable so it never collides with the root layout's font vars.
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sol",
  display: "swap",
});

export const metadata: Metadata = {
  title: "About Us - Solarion",
  description:
    "HelioGrid Solar designs and deploys high-efficiency solar systems for homes, businesses, and industrial facilities.",
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  // Every element on this route lives inside .sol-page, which is the scope root
  // that app/about-us/solarion.css's selectors are prefixed against. This keeps
  // Solarion's ~130 colliding class names (.container, .nav-link, .paragraph, etc.)
  // from leaking into or being overridden by Arvora's global webflow.css.
  return (
    <div className={`sol-page ${interTight.variable}`}>
      {children}
    </div>
  );
}
