"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";

// Select distinctive products for the rotating showcase
const SHOWCASE_PRODUCTS = [
  products.find((p) => p.slug === "idli-steaming-cabinet") || products[0],
  products.find((p) => p.slug === "automatic-chapathi-maker") || products[1],
  products.find((p) => p.slug === "piston-air-compressor") || products[11],
  products.find((p) => p.slug === "centrifugal-monoblock-pump") || products[5],
  products.find((p) => p.slug === "industrial-universal-joints") || products[12],
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SHOWCASE_PRODUCTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentProduct = SHOWCASE_PRODUCTS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + SHOWCASE_PRODUCTS.length) % SHOWCASE_PRODUCTS.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_PRODUCTS.length);
  };

  return (
    <section id="about" className="w-full bg-[#F5F5F7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Description & Services List */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#EBEBF0] text-xs font-semibold tracking-wider uppercase text-brand mb-4">
              <span>{siteConfig.about.badge}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-dark mb-6">
              {siteConfig.about.title}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted font-normal leading-relaxed mb-8">
              {siteConfig.about.description}
            </p>

            {/* Services List */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-dark mb-4">
                Core Capabilities & Offerings
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {siteConfig.about.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#EBEBF0] shadow-subtle hover:border-brand-border transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                    <span className="text-sm font-medium text-dark">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Link to Products */}
            <div className="pt-2">
              <a
                href="#products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover group"
              >
                <span>Explore all 14 machinery models</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Auto-rotating Product Photos */}
          <div
            className="lg:col-span-5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative bg-white rounded-2xl border border-[#EBEBF0] shadow-card overflow-hidden p-6 sm:p-8">
              {/* Image Frame */}
              <div className="relative h-72 sm:h-80 w-full flex items-center justify-center bg-[#FAF9FC] rounded-xl overflow-hidden p-4 mb-5">
                <Image
                  key={currentProduct.id}
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  fill
                  className="object-contain p-4 transition-all duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm border border-[#EBEBF0] text-[11px] font-medium text-dark shadow-subtle">
                  {currentProduct.category}
                </span>
              </div>

              {/* Product Info & Controls */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-semibold text-dark truncate">
                    {currentProduct.name}
                  </h4>
                  <Link
                    href={`/products/${currentProduct.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline mt-1"
                  >
                    View technical specs
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous showcase product"
                    className="p-2 rounded-md border border-[#EBEBF0] hover:bg-surface text-dark transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next showcase product"
                    className="p-2 rounded-md border border-[#EBEBF0] hover:bg-surface text-dark transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Indicator Dots */}
              <div className="flex items-center justify-center gap-1.5 mt-5 pt-4 border-t border-[#EBEBF0]">
                {SHOWCASE_PRODUCTS.map((prod, idx) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-6 bg-brand" : "w-1.5 bg-[#D1CDED]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
