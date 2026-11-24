import React from "react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#EBEBF0] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm text-muted">
          {siteConfig.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
