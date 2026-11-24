"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, PhoneCall, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const targetPosition =
        el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full bg-white pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 border-b border-[#EBEBF0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Small Heading / Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-[#EBEBF0] text-xs font-semibold tracking-wider uppercase text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-brand" />
            <span>Industrial Machinery & Engineering • UAE • India • Worldwide</span>
          </div>

          {/* Strong Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-dark leading-[1.12] mb-6">
            Precision Engineering & Industrial Machinery Solutions
          </h1>

          {/* One-line Description */}
          <p className="text-lg sm:text-xl text-muted font-normal leading-relaxed mb-10 max-w-2xl">
            Customized machinery manufacturing, tool & die fabrication, iron casting, and industrial food processing equipment engineered for global industrial reliability.
          </p>

          {/* Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo("products")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-brand hover:bg-brand-hover active:bg-brand-dark rounded-button shadow-sm transition-all duration-150"
            >
              View Products
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-dark hover:text-brand bg-white hover:bg-surface border border-[#D1CDED] rounded-button transition-all duration-150"
            >
              Contact Us
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Subtle Key Highlights */}
          <div className="mt-14 pt-8 border-t border-[#EBEBF0] grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
            <div>
              <div className="text-2xl font-bold text-dark">14+</div>
              <div className="text-xs sm:text-sm text-muted">Specialized Machinery Lines</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-dark">UAE & India</div>
              <div className="text-xs sm:text-sm text-muted">Direct Support & Export</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-2xl font-bold text-dark">Customized</div>
              <div className="text-xs sm:text-sm text-muted">Engineered to Specification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
