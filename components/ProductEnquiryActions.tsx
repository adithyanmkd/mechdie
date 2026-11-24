"use client";

import React, { useState, useRef, useEffect } from "react";
import { Phone, MessageSquare, ChevronDown, ExternalLink } from "lucide-react";
import { Product } from "@/data/products";
import { siteConfig } from "@/data/site";
import WhatsAppModal from "./WhatsAppModal";

interface ProductEnquiryActionsProps {
  product: Product;
}

export default function ProductEnquiryActions({
  product,
}: ProductEnquiryActionsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCallDropdownOpen, setIsCallDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCallDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-4 pt-6 border-t border-[#EBEBF0]">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* WhatsApp Button */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand hover:bg-brand-hover active:bg-brand-dark rounded-button shadow-sm transition-all duration-150 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Enquire on WhatsApp</span>
        </button>

        {/* Call Now with Dropdown */}
        <div className="relative flex-1" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsCallDropdownOpen(!isCallDropdownOpen)}
            aria-expanded={isCallDropdownOpen}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-dark hover:text-brand bg-white hover:bg-surface border border-[#D1CDED] rounded-button transition-all duration-150 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-brand" />
            <span>Call Now</span>
            <ChevronDown
              className={`w-4 h-4 text-muted transition-transform duration-200 ${
                isCallDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Call Options Popover */}
          {isCallDropdownOpen && (
            <div className="absolute right-0 bottom-full sm:bottom-auto sm:top-full mb-2 sm:mb-0 sm:mt-2 w-full sm:w-72 bg-white rounded-xl shadow-modal border border-[#EBEBF0] p-2 z-30 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted border-b border-[#F5F5F7]">
                Choose Regional Desk
              </div>

              {/* India Line */}
              <a
                href={`tel:${siteConfig.contact.india.tel}`}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-surface text-dark hover:text-brand transition-colors group"
                onClick={() => setIsCallDropdownOpen(false)}
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted group-hover:text-brand">
                    India Office
                  </div>
                  <div className="text-sm font-bold text-dark">
                    {siteConfig.contact.india.display}
                  </div>
                </div>
                <Phone className="w-4 h-4 text-brand group-hover:scale-110 transition-transform" />
              </a>

              {/* UAE Line */}
              <a
                href={`tel:${siteConfig.contact.uae.tel}`}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-surface text-dark hover:text-brand transition-colors group"
                onClick={() => setIsCallDropdownOpen(false)}
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted group-hover:text-brand">
                    UAE Office
                  </div>
                  <div className="text-sm font-bold text-dark">
                    {siteConfig.contact.uae.display}
                  </div>
                </div>
                <Phone className="w-4 h-4 text-brand group-hover:scale-110 transition-transform" />
              </a>
            </div>
          )}
        </div>
      </div>

      <WhatsAppModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
