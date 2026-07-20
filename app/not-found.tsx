"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="page-wrap">
      <Header variant="two" />
      <main className="main-wrap">
        <div className="utility-wrap flex flex-col items-center justify-center py-100 text-center min-h-600">
          <div className="utility-content max-w-500 px-20">
            {/* Custom SVG Error Icon */}
            <div className="w-120 h-120 mx-auto flex items-center justify-center bg-gray--400 rounded-full text-dark--100 mb-24">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </div>
            <h2 className="heading-three pt-20">Oops! Page not found</h2>
            <div className="error-content mt-10">
              <div className="section-content text-gray--100">
                {"If the page you're looking for isn't there, it may have moved, been deleted, or never existed."}
              </div>
            </div>
            <a href="/" className="btn-secondary inline-block mt-30">
              Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
