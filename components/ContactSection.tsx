"use client";

import React, { useState } from "react";
import { Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";

interface FormData {
  name: string;
  company: string;
  requirement: string;
  product: string;
  message: string;
  honeypot: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    requirement: siteConfig.requirementOptions[0] || "Buy a machine",
    product: "General Machinery Inquiry",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name.";
    if (!formData.company.trim()) errs.company = "Please enter your company name.";
    if (!formData.requirement.trim()) errs.requirement = "Please select a requirement.";
    if (!formData.message.trim()) errs.message = "Please write your message or requirements.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage({
          type: "success",
          text:
            data.message ||
            "Thank you! Your message has been sent successfully. Our team will contact you shortly.",
        });
        setFormData({
          name: "",
          company: "",
          requirement: siteConfig.requirementOptions[0] || "Buy a machine",
          product: "General Machinery Inquiry",
          message: "",
          honeypot: "",
        });
        setErrors({});
      } else {
        setStatusMessage({
          type: "error",
          text: data.error || "Unable to send your inquiry. Please try again or contact us directly.",
        });
      }
    } catch (err) {
      setStatusMessage({
        type: "error",
        text: "Network error occurred. Please call or WhatsApp our team directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#F5F5F7] py-20 lg:py-28 border-t border-[#EBEBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#EBEBF0] text-xs font-semibold tracking-wider uppercase text-brand mb-3">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-dark mb-4">
            Contact our team
          </h2>
          <p className="text-base sm:text-lg text-muted">
            Have a custom machinery requirement, inquiry, or need technical details? Connect with our engineering teams in India and the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info (No office address, India & UAE numbers, Email) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-[#EBEBF0] p-6 sm:p-8 shadow-card">
              <h3 className="text-xl font-bold text-dark mb-2">
                Engineering Inquiries & Sales
              </h3>
              <p className="text-sm text-muted mb-8 leading-relaxed">
                Connect directly with our technical advisors for machinery quotes, custom die designs, and export consultations.
              </p>

              <div className="space-y-6">
                {/* India Number */}
                <div className="flex items-start gap-4 pb-6 border-b border-[#F5F5F7]">
                  <div className="h-10 w-10 rounded-lg bg-surface flex items-center justify-center shrink-0 text-brand border border-[#EBEBF0]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-0.5">
                      India Direct Line
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.india.tel}`}
                      className="text-base sm:text-lg font-bold text-dark hover:text-brand transition-colors block"
                    >
                      {siteConfig.contact.india.display}
                    </a>
                    <a
                      href={`https://wa.me/${siteConfig.contact.india.whatsappNumber}?text=${encodeURIComponent(
                        "Hello MECH & DIE, I would like to inquire about your engineering solutions."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-brand hover:underline mt-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Chat on WhatsApp (India)
                    </a>
                  </div>
                </div>

                {/* UAE Number */}
                <div className="flex items-start gap-4 pb-6 border-b border-[#F5F5F7]">
                  <div className="h-10 w-10 rounded-lg bg-surface flex items-center justify-center shrink-0 text-brand border border-[#EBEBF0]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-0.5">
                      UAE Direct Line
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.uae.tel}`}
                      className="text-base sm:text-lg font-bold text-dark hover:text-brand transition-colors block"
                    >
                      {siteConfig.contact.uae.display}
                    </a>
                    <a
                      href={`https://wa.me/${siteConfig.contact.uae.whatsappNumber}?text=${encodeURIComponent(
                        "Hello MECH & DIE, I would like to inquire about your engineering solutions."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-brand hover:underline mt-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Chat on WhatsApp (UAE)
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-surface flex items-center justify-center shrink-0 text-brand border border-[#EBEBF0]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-0.5">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-base sm:text-lg font-bold text-dark hover:text-brand transition-colors block"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <span className="text-xs text-muted mt-0.5 block">
                      Rapid response within 24 business hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="bg-white/80 rounded-xl border border-[#EBEBF0] p-5 text-xs text-muted leading-relaxed">
              <span className="font-semibold text-dark block mb-1">
                Global Shipment & Logistics
              </span>
              We support containerized shipping, custom clearance coordination, and on-site engineering installation guidance across UAE, GCC, India, and international industrial centers.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#EBEBF0] p-6 sm:p-10 shadow-card">
              <h3 className="text-xl font-bold text-dark mb-2">
                Send an Inquiry
              </h3>
              <p className="text-sm text-muted mb-6">
                Fill in your project requirements below. All inquiries are routed directly to our engineering desk.
              </p>

              {/* Status Banner */}
              {statusMessage && (
                <div
                  className={`mb-6 p-4 rounded-xl flex items-start gap-3 border ${
                    statusMessage.type === "success"
                      ? "bg-[#F0EEF9] border-brand-border text-brand-dark"
                      : "bg-red-50 border-red-200 text-red-800"
                  }`}
                  role="alert"
                >
                  {statusMessage.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-brand mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                  )}
                  <p className="text-sm font-medium leading-relaxed">
                    {statusMessage.text}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot field for anti-spam */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave this empty</label>
                  <input
                    id="website_hp"
                    type="text"
                    name="website_hp"
                    value={formData.honeypot}
                    onChange={(e) =>
                      setFormData({ ...formData, honeypot: e.target.value })
                    }
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-dark mb-1.5"
                    >
                      Your Name <span className="text-brand">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder="e.g. Rahul Sharma / Ahmed Al-Mansoor"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm text-dark placeholder:text-muted/60 bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all ${
                        errors.name ? "border-red-400" : "border-[#EBEBF0]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-semibold uppercase tracking-wider text-dark mb-1.5"
                    >
                      Company Name <span className="text-brand">*</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({ ...formData, company: e.target.value });
                        if (errors.company) setErrors({ ...errors, company: "" });
                      }}
                      placeholder="e.g. Al-Noor Foods LLC / Apex Fabricators"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm text-dark placeholder:text-muted/60 bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all ${
                        errors.company ? "border-red-400" : "border-[#EBEBF0]"
                      }`}
                    />
                    {errors.company && (
                      <p className="text-xs text-red-600 mt-1">{errors.company}</p>
                    )}
                  </div>
                </div>

                {/* Requirement & Product Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-requirement"
                      className="block text-xs font-semibold uppercase tracking-wider text-dark mb-1.5"
                    >
                      Your Requirement <span className="text-brand">*</span>
                    </label>
                    <select
                      id="contact-requirement"
                      value={formData.requirement}
                      onChange={(e) =>
                        setFormData({ ...formData, requirement: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-[#EBEBF0] text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    >
                      {siteConfig.requirementOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-product"
                      className="block text-xs font-semibold uppercase tracking-wider text-dark mb-1.5"
                    >
                      Product of Interest
                    </label>
                    <select
                      id="contact-product"
                      value={formData.product}
                      onChange={(e) =>
                        setFormData({ ...formData, product: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-[#EBEBF0] text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    >
                      <option value="General Machinery Inquiry">General Machinery Inquiry</option>
                      {products.map((p) => (
                        <option key={p.id} value={`${p.name} (${p.category})`}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Other">Other / Custom Blueprint</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-dark mb-1.5"
                  >
                    Message / Specifications <span className="text-brand">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder="Provide details on required capacity, voltage, target delivery location (India / UAE / other), or engineering specifications..."
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-dark placeholder:text-muted/60 bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all ${
                      errors.message ? "border-red-400" : "border-[#EBEBF0]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-brand hover:bg-brand-hover active:bg-brand-dark disabled:opacity-60 rounded-button shadow-sm transition-all duration-150 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Inquiry to info@mechanddie.com</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
