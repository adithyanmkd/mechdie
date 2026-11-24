"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { products, PRODUCT_CATEGORIES, ProductCategory } from "@/data/products";

export default function ProductsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => ["All", ...PRODUCT_CATEGORIES], []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="products" className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-[#EBEBF0] text-xs font-semibold tracking-wider uppercase text-brand mb-3">
            <span>Engineering Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-dark mb-4">
            Industrial Machinery & Equipment
          </h2>
          <p className="text-base sm:text-lg text-muted">
            Precision-manufactured machinery lines engineered for bakery & food processing, fluid handling, metal forming, air compression, and custom automation.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="mb-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none no-scrollbar">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              const count =
                category === "All"
                  ? products.length
                  : products.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-150 border ${
                    isSelected
                      ? "bg-brand text-white border-brand shadow-sm font-semibold"
                      : "bg-surface text-dark/80 border-[#EBEBF0] hover:border-brand-border hover:text-brand hover:bg-[#EDEAF7]"
                  }`}
                >
                  <span>{category === "All" ? "All Products" : category}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-white text-muted border border-[#EBEBF0]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-[#EBEBF0] overflow-hidden shadow-subtle hover:shadow-card-hover hover:border-brand-border transition-all duration-200"
            >
              {/* Product Image Frame */}
              <div className="relative h-64 w-full bg-[#FAF9FC] p-6 flex items-center justify-center border-b border-[#EBEBF0] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/95 backdrop-blur-sm border border-[#EBEBF0] text-[11px] font-medium text-dark shadow-subtle">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-dark group-hover:text-brand transition-colors line-clamp-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2 leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5F5F7] flex items-center justify-between">
                  <span className="text-xs font-medium text-muted">
                    Engineering Specs Available
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-brand-hover">
                    View Details
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
