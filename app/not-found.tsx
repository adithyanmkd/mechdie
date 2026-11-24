import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="text-center max-w-md">
        <span className="text-5xl font-extrabold text-brand block mb-4">404</span>
        <h1 className="text-2xl font-bold text-dark mb-2">Product Not Found</h1>
        <p className="text-sm text-muted mb-6">
          The requested machinery specification does not exist or has been relocated.
        </p>
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand hover:bg-brand-hover rounded-button shadow-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </Link>
      </div>
    </div>
  );
}
