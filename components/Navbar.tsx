"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About Us", href: "#about", id: "about" },
  { label: "Products", href: "#products", id: "products" },
  { label: "Contact Us", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Monitor scroll for shadow & active section on home page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Handle smooth scroll navigation
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    setMobileMenuOpen(false);

    if (isHomePage) {
      e.preventDefault();
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        const navHeight = 84;
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: sectionId === "home" ? 0 : targetPosition,
          behavior: "smooth",
        });
        setActiveSection(sectionId);
        window.history.pushState(null, "", `#${sectionId}`);
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white/95 backdrop-blur-md ${
        scrolled
          ? "border-b border-[#EBEBF0] shadow-subtle py-3"
          : "border-b border-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name (Enlarged) */}
          <Link
            href={isHomePage ? "#home" : "/"}
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("home");
              }
            }}
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-xl p-1"
            aria-label="MECH & DIE Home"
          >
            {/* Enlarged Logo Icon Container */}
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl bg-brand flex items-center justify-center p-1.5 shadow-card group-hover:bg-brand-hover group-hover:scale-105 transition-all duration-200 shrink-0">
              <Image
                src="/logo-purple.jpg"
                alt="MECH & DIE"
                width={64}
                height={64}
                className="h-full w-full object-contain rounded-lg"
                priority
              />
            </div>
            {/* Enlarged Brand Name & Subtitle */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl md:text-[25px] font-extrabold tracking-tight text-dark group-hover:text-brand transition-colors leading-none">
                MECH & DIE
              </span>
              <span className="text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-muted mt-1">
                Engineering Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = isHomePage && activeSection === item.id;
              const href = isHomePage ? `#${item.id}` : `/#${item.id}`;

              return (
                <Link
                  key={item.id}
                  href={href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-150 relative ${
                    isActive
                      ? "text-brand bg-brand-light font-bold"
                      : "text-dark/80 hover:text-brand hover:bg-[#F5F5F7]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-brand rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Quick Contact CTA */}
            <Link
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={(e) => handleNavClick(e, "contact")}
              className="ml-3 inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold text-white bg-brand hover:bg-brand-hover active:bg-brand-dark rounded-button shadow-sm transition-all duration-150"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-dark hover:text-brand hover:bg-[#F5F5F7] focus:outline-none focus:ring-2 focus:ring-brand"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EBEBF0] bg-white px-5 pt-3 pb-6 space-y-1.5 shadow-lg animate-in slide-in-from-top duration-200">
          {NAV_ITEMS.map((item) => {
            const isActive = isHomePage && activeSection === item.id;
            const href = isHomePage ? `#${item.id}` : `/#${item.id}`;

            return (
              <Link
                key={item.id}
                href={href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block px-3.5 py-3 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? "text-brand bg-brand-light font-bold"
                    : "text-dark hover:text-brand hover:bg-[#F5F5F7]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={(e) => handleNavClick(e, "contact")}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-bold text-white bg-brand hover:bg-brand-hover rounded-button shadow-sm transition-colors"
            >
              Contact Our Team
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
