import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Shipping() {
  return (
    <main className="bg-texas-cream min-h-screen">
      <div className="bg-texas-dark py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-texas-cream/40 text-sm font-sans mb-6">
            <Link to="/" className="hover:text-texas-orange transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-texas-cream/70">Shipping & Returns</span>
          </nav>
          <h1 className="font-display font-bold text-texas-cream text-4xl tracking-tight">
            Shipping & Returns
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-14 prose prose-stone">
        <h2>Shipping</h2>
        <p>Orders are processed within <strong>{siteConfig.shipping.processingDays}</strong> and delivered within <strong>{siteConfig.shipping.deliveryDays}</strong> via standard ground shipping.</p>
        <p>Free shipping on orders over <strong>${siteConfig.shipping.freeThreshold}</strong>.</p>
        <h2>Returns</h2>
        <p>We accept returns within 30 days of delivery for unused items in original packaging. Contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> to start a return.</p>
        <h2>Questions?</h2>
        <p>Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>.</p>
      </div>
    </main>
  );
}
