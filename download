import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Privacy() {
  return (
    <main className="bg-texas-cream min-h-screen">
      <div className="bg-texas-dark py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-texas-cream/40 text-sm font-sans mb-6">
            <Link to="/" className="hover:text-texas-orange transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-texas-cream/70">Privacy Policy</span>
          </nav>
          <h1 className="font-display font-bold text-texas-cream text-4xl tracking-tight">
            Privacy Policy
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-14 prose prose-stone">
        <p>Last updated: {new Date().getFullYear()}</p>
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you place an order or contact us for support.</p>
        <h2>How We Use Your Information</h2>
        <p>We use your information to process orders, communicate with you, and improve our services.</p>
        <h2>Sharing</h2>
        <p>We do not sell your personal information. We may share it with service providers (like Stripe for payment processing) as needed to fulfill orders.</p>
        <h2>Contact</h2>
        <p>Questions? Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
      </div>
    </main>
  );
}
