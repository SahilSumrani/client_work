import type { Metadata } from "next";
import { Manrope, Instrument_Sans } from "next/font/google";
import "./webflow.css";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DYU Solar LLP — Solar EPC, Engineering, Procurement & Construction",
  description:
    "DYU Solar LLP is a Delhi-based Solar EPC provider delivering end-to-end rooftop residential and utility-scale ground-mounted solar — ESG-compliant, Tier-1 OEM, SCADA-monitored.",
  icons: {
    icon: "/images/dyu-logo-dark.png",
    apple: "/images/dyu-logo-dark.png",
  },
  openGraph: {
    title: "DYU Solar LLP — Solar EPC, Engineering, Procurement & Construction",
    description:
      "End-to-end Solar EPC for rooftop residential and industrial solar plants — engineered, procured and constructed for performance and compliance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DYU Solar LLP — Solar EPC, Engineering, Procurement & Construction",
    description:
      "End-to-end Solar EPC for rooftop residential and industrial solar plants — engineered, procured and constructed for performance and compliance.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSans.variable}`}>
      <body className="body">{children}</body>
    </html>
  );
}
