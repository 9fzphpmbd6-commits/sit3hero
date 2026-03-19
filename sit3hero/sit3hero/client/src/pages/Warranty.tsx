import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Warranty() {
  return (
    <main className="bg-texas-cream min-h-screen">
      <div className="bg-texas-dark py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-texas-cream/40 text-sm font-sans mb-6">
            <Link to="/" className="hover:text-texas-orange transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-texas-cream/70">Warranty</span>
          </nav>
          <h1 className="font-display font-bold text-texas-cream text-4xl tracking-tight">
            Warranty Information
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-14 prose prose-stone">
        <h2>SIT3HERO™ Warranty</h2>
        <p>All SIT3HERO™ tools are warranted against defects in materials and workmanship for 90 days from the date of purchase.</p>
        <h2>What's Covered</h2>
        <p>Manufacturing defects. Tools that fail under normal use conditions.</p>
        <h2>What's Not Covered</h2>
        <p>Normal wear and tear, misuse, use outside compatible impact wrenches, or damage from improper use.</p>
        <h2>Making a Claim</h2>
        <p>Contact us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> with your order number and a description of the issue. We'll make it right.</p>
      </div>
    </main>
  );
}
