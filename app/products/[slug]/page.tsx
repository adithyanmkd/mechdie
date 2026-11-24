import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, CheckCircle2, ShieldCheck, Wrench, Globe } from "lucide-react";
import { products, getProductBySlug } from "@/data/products";
import { siteConfig } from "@/data/site";
import ProductGallery from "@/components/ProductGallery";
import ProductEnquiryActions from "@/components/ProductEnquiryActions";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Generate static routes for all 14 products and aliases
export async function generateStaticParams() {
  const paths: { slug: string }[] = [];
  products.forEach((product) => {
    paths.push({ slug: product.slug });
    if (product.aliases) {
      product.aliases.forEach((alias) => paths.push({ slug: alias }));
    }
  });
  return paths;
}

// Dynamic SEO metadata per product
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | ${siteConfig.name}`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} – MECH & DIE Engineering Solutions`,
      description: product.shortDescription,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full bg-white py-10 sm:py-14 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back to products link */}
        <div className="mb-8">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to products</span>
          </Link>
        </div>

        {/* Main Product Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 sticky top-28">
            <ProductGallery
              name={product.name}
              category={product.category}
              images={product.gallery}
            />

            {/* Quality & Assurance Badges */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-[#EBEBF0] text-center">
              <div className="p-3 rounded-xl bg-surface border border-[#EBEBF0]">
                <ShieldCheck className="w-5 h-5 text-brand mx-auto mb-1.5" />
                <span className="text-[11px] font-semibold text-dark block">
                  Industrial Grade
                </span>
                <span className="text-[10px] text-muted">Tested for continuous duty</span>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-[#EBEBF0]">
                <Wrench className="w-5 h-5 text-brand mx-auto mb-1.5" />
                <span className="text-[11px] font-semibold text-dark block">
                  Custom Tooling
                </span>
                <span className="text-[10px] text-muted">Dies built to spec</span>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-[#EBEBF0]">
                <Globe className="w-5 h-5 text-brand mx-auto mb-1.5" />
                <span className="text-[11px] font-semibold text-dark block">
                  UAE & India
                </span>
                <span className="text-[10px] text-muted">Direct export & support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information, Specs & Inquiries */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              {/* Category Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface border border-[#EBEBF0] text-xs font-semibold text-brand mb-3 uppercase tracking-wider">
                <span>{product.category}</span>
              </div>

              {/* Product Title */}
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-dark mb-4">
                {product.name}
              </h1>

              {/* Short Description */}
              <p className="text-base sm:text-lg text-muted leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Action Buttons: WhatsApp & Call Now */}
            <ProductEnquiryActions product={product} />

            {/* Full Detailed Description */}
            <div className="space-y-3 pt-6 border-t border-[#EBEBF0]">
              <h2 className="text-lg font-bold text-dark">
                Product Overview
              </h2>
              <div className="text-sm text-dark/90 leading-relaxed font-normal whitespace-pre-line space-y-3">
                {product.fullDescription}
              </div>
            </div>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-3 pt-6 border-t border-[#EBEBF0]">
                <h2 className="text-lg font-bold text-dark">
                  Key Engineering Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg bg-surface border border-[#EBEBF0] text-xs text-dark"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Table */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-[#EBEBF0]">
                <h2 className="text-lg font-bold text-dark">
                  Technical Specifications
                </h2>
                <div className="rounded-xl border border-[#EBEBF0] overflow-hidden bg-white shadow-subtle">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {product.specifications.map((spec, idx) => (
                        <tr
                          key={idx}
                          className={`border-b border-[#EBEBF0] last:border-b-0 ${
                            idx % 2 === 0 ? "bg-white" : "bg-[#FAF9FC]"
                          }`}
                        >
                          <th className="py-3 px-4 text-xs font-semibold text-muted w-2/5 border-r border-[#EBEBF0]">
                            {spec.label}
                          </th>
                          <td className="py-3 px-4 text-xs font-medium text-dark">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
