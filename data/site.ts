/**
 * MECH & DIE - Site Configuration & Content
 * 
 * Edit this file to customize company information, contact numbers,
 * about text, services, and branding across the entire website.
 */

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  markets: string[];
  contact: {
    india: {
      display: string;
      raw: string;
      tel: string;
      whatsappNumber: string;
    };
    uae: {
      display: string;
      raw: string;
      tel: string;
      whatsappNumber: string;
    };
    email: string;
  };
  about: {
    title: string;
    badge: string;
    description: string;
    services: string[];
  };
  navigation: {
    label: string;
    href: string;
  }[];
  requirementOptions: string[];
  footer: {
    copyright: string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "MECH & DIE",
  shortName: "MECH & DIE",
  tagline: "Engineering Solutions",
  description:
    "Specialized engineering manufacturing serving UAE, India, and global industrial markets. Experts in industrial machinery, bakery & food processing equipment, tool & die, iron casting, and custom engineering.",
  markets: ["UAE", "India", "Worldwide"],

  contact: {
    india: {
      display: "+91 85 472 70 761",
      raw: "+91 85 472 70 761",
      tel: "+918547270761",
      whatsappNumber: "918547270761",
    },
    uae: {
      display: "+971 56 308 8846",
      raw: "+971 56 308 8846",
      tel: "+971563088846",
      whatsappNumber: "971563088846",
    },
    email: "info@mechanddie.com",
  },

  about: {
    badge: "About Us",
    title: "Precision Engineering & Dedicated Manufacturing",
    // Placeholder description for MECH & DIE - ready for user customization
    description:
      "MECH & DIE delivers high-precision machinery manufacturing, industrial tool & die fabrication, and custom engineering solutions built to rigorous global standards. From high-capacity bakery and food processing units to industrial pumping systems and specialized metal-forming machinery, we engineer dependable equipment designed for longevity, efficiency, and peak operational reliability.",
    services: [
      "Customized Machinery Manufacturing",
      "Tool & Die",
      "Iron Casting",
      "Industrial & Bakery Machinery",
      "Made From India",
    ],
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact Us", href: "#contact" },
  ],

  requirementOptions: [
    "Buy a machine",
    "Custom machine manufacturing",
    "Spare parts",
    "Service & support",
    "Other",
  ],

  footer: {
    copyright: "© 2026 MECH & DIE. All rights reserved.",
  },

  social: {
    instagram: "https://www.instagram.com/mechanddie",
    facebook: "https://www.facebook.com/share/1FXktr3Gyv/?ref=1",
  },
};
