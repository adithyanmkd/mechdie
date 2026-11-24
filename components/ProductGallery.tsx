"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  name: string;
  category: string;
  images: string[];
}

export default function ProductGallery({
  name,
  category,
  images,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || "/products/idli-steaming-cabinet.png");

  return (
    <div className="space-y-4">
      {/* Primary Large Image */}
      <div className="relative h-80 sm:h-96 md:h-[440px] w-full bg-[#FAF9FC] rounded-2xl border border-[#EBEBF0] p-6 flex items-center justify-center overflow-hidden shadow-subtle">
        <Image
          src={selectedImage}
          alt={name}
          fill
          className="object-contain p-6"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded bg-white/95 backdrop-blur-sm border border-[#EBEBF0] text-xs font-semibold text-brand shadow-subtle">
          {category}
        </span>
      </div>

      {/* Thumbnail Gallery (shown if more than one image) */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedImage(img)}
              className={`relative h-20 w-20 rounded-xl bg-[#FAF9FC] border-2 overflow-hidden shrink-0 transition-all ${
                selectedImage === img
                  ? "border-brand shadow-sm scale-105"
                  : "border-[#EBEBF0] hover:border-brand-border opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${idx + 1}`}
                fill
                className="object-contain p-2"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
