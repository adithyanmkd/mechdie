import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white border-t-4 border-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Column: Logo, Name & Socials */}
          <div className="md:col-span-5 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-xl"
              aria-label={`${siteConfig.name} Home`}
            >
              <div className="relative h-12 w-12 rounded-xl bg-brand border border-white/20 flex items-center justify-center p-1.5 shadow-card group-hover:bg-brand-hover transition-colors shrink-0">
                <Image
                  src="/Logo.svg"
                  alt={siteConfig.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                  {siteConfig.name}
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-border mt-1">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-md">
              {siteConfig.description}
            </p>

            {/* Social Links */}
            <div className="pt-1">
              <span className="block text-[11px] font-bold uppercase tracking-widest text-white/50 mb-2.5">
                Follow Us
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow MECH & DIE on Instagram"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-white hover:bg-white hover:text-brand-dark transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow MECH & DIE on Facebook"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-white hover:bg-white hover:text-brand-dark transition-all"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-border" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${item.href}`}
                    className="inline-flex items-center gap-1.5 text-sm text-white/75 hover:text-white transition-colors font-medium group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-border" />
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <span className="p-2 rounded-lg bg-white/10 border border-white/10 shrink-0">
                  <Phone className="w-4 h-4 text-brand-border" />
                </span>
                <div className="flex flex-col gap-1 pt-0.5">
                  <a
                    href={`tel:${siteConfig.contact.india.tel}`}
                    className="hover:text-white transition-colors"
                  >
                    <span className="text-white/50 text-xs uppercase tracking-wider mr-1.5">
                      India
                    </span>
                    {siteConfig.contact.india.display}
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.uae.tel}`}
                    className="hover:text-white transition-colors"
                  >
                    <span className="text-white/50 text-xs uppercase tracking-wider mr-1.5">
                      UAE
                    </span>
                    {siteConfig.contact.uae.display}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-white/10 border border-white/10 shrink-0">
                  <Mail className="w-4 h-4 text-brand-border" />
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-white/10 border border-white/10 shrink-0">
                  <MapPin className="w-4 h-4 text-brand-border" />
                </span>
                <span>Serving {siteConfig.markets.join(" • ")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-white/60">
          <p>{siteConfig.footer.copyright}</p>
          <p className="text-xs text-white/50">
            Precision Machinery &amp; Custom Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
