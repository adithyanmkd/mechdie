"use client";

import React, { useState } from "react";
import { X, Send, MessageSquare, Check, Building2, User } from "lucide-react";
import { Product } from "@/data/products";
import { siteConfig } from "@/data/site";

interface WhatsAppModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppModal({
  product,
  isOpen,
  onClose,
}: WhatsAppModalProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<"india" | "uae">("india");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!company.trim()) {
      setError("Please enter your company name.");
      return;
    }

    const whatsappNumber =
      selectedCountry === "india"
        ? siteConfig.contact.india.whatsappNumber
        : siteConfig.contact.uae.whatsappNumber;

    const composedText = [
      "Hello MECH & DIE, I would like to enquire about a product.",
      `Name: ${name.trim()}`,
      `Company: ${company.trim()}`,
      `Product: ${product.name} (Category: ${product.category})`,
      message.trim() ? `Message: ${message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      composedText
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-modal border border-[#EBEBF0] p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#EBEBF0] mb-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-brand-light flex items-center justify-center text-brand">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-title" className="text-lg font-bold text-dark">
                Enquire on WhatsApp
              </h3>
              <p className="text-xs text-muted">
                Direct connection to MECH & DIE engineering desk
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close WhatsApp enquiry modal"
            className="p-2 rounded-lg text-muted hover:text-dark hover:bg-surface transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Read-only Product & Category */}
          <div className="p-3.5 rounded-xl bg-surface border border-[#EBEBF0]">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted block mb-1">
              Selected Product
            </span>
            <div className="text-sm font-bold text-dark">{product.name}</div>
            <div className="text-xs text-brand font-medium mt-0.5">
              Category: {product.category}
            </div>
          </div>

          {/* Destination Number Toggle */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-dark mb-1.5">
              Choose Support Desk <span className="text-brand">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedCountry("india")}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all ${
                  selectedCountry === "india"
                    ? "bg-brand text-white border-brand shadow-sm"
                    : "bg-surface text-dark border-[#EBEBF0] hover:border-brand-border"
                }`}
              >
                <span>India ({siteConfig.contact.india.display})</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCountry("uae")}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all ${
                  selectedCountry === "uae"
                    ? "bg-brand text-white border-brand shadow-sm"
                    : "bg-surface text-dark border-[#EBEBF0] hover:border-brand-border"
                }`}
              >
                <span>UAE ({siteConfig.contact.uae.display})</span>
              </button>
            </div>
          </div>

          {/* Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark mb-1">
                Your Name <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Full name"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#EBEBF0] text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark mb-1">
                Company Name <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Company / Facility"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#EBEBF0] text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Message (Optional) */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-dark mb-1">
              Message <span className="text-muted font-normal">(Optional)</span>
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Inquire about price quote, custom mold tooling, lead time, or shipping to UAE/India..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#EBEBF0] text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand hover:bg-brand-hover active:bg-brand-dark rounded-button shadow-sm transition-all duration-150 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send on WhatsApp</span>
            </button>
            <p className="text-[11px] text-muted text-center mt-2.5">
              Opens WhatsApp with your pre-filled inquiry. No sign-up required.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
