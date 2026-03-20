import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Mail, Phone, Award, Zap, Shield, Layers } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { products, categories } from "../data/products";
import { useCart } from "../lib/cart";
import ProductCard from "../components/ProductCard";
import { formatPrice } from "../lib/commerce";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { addItem } = useCart();

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main>
      {/* -- AWARD BANNER -- */}
      <div className="bg-s3h-navy text-s3h-cream text-center py-2.5 px-4 text-sm font-sans font-medium tracking-wide">
        🏆 {siteConfig.award}
      </div>

      {/* -- HERO -- */}
      <section className="relative bg-s3h-green-dark overflow-hidden tex-grain">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-s3h-green-mid/30 via-transparent to-s3h-navy/20 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #22C55E 0, #22C55E 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label text-s3h-green-light mb-4">
                {siteConfig.award}
              </p>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-s3h-white leading-[1.1] tracking-tight mb-6">
                Make Your Impact Wrench Do the Heavy{" "}
                <span className="text-s3h-green-light">Lifting</span>
              </h1>
              <p className="text-lg text-s3h-cream/80 mb-8 max-w-lg font-sans">
                Drill new holes, expand, thread, and align — all from your 1/2" or 3/4" impact wrench.{" "}
                <strong className="text-s3h-white">Connect. Click. GO.</strong>
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 bg-s3h-navy hover:bg-s3h-navy/80 text-s3h-white font-display font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded transition-all"
                >
                  Shop the Range
                </a>
                <Link
                  to="/size-guide"
                  className="inline-flex items-center gap-2 border-2 border-s3h-cream/30 text-s3h-cream hover:border-s3h-green-light hover:text-s3h-green-light font-display font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded transition-all"
                >
                  Size Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-s3h-cream/10">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-bold text-3xl sm:text-4xl text-s3h-green-light">
                  {stat.value}
                </p>
                <p className="text-sm text-s3h-cream/60 mt-1 font-sans uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- WHAT IT DOES -- */}
      <section className="bg-s3h-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔩",
                title: "New Holes",
                desc: "Drill new holes in thin gauge material from 1/8\" to 1-3/8\" with Step Drills and Step Reamers.",
              },
              {
                icon: "⭕",
                title: "Expand Holes",
                desc: "Expand and clean out existing holes across all major bolt sizes.",
              },
              {
                icon: "🔧",
                title: "Thread Holes",
                desc: "Cut threads up to 20× faster than hand tapping. 8 UNC sizes in material up to 1/2\" thick.",
              },
              {
                icon: "🎯",
                title: "Align Holes",
                desc: "Align mismatched bolt holes on site quickly and safely. 13 major diameter sizes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-lg text-s3h-green-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-s3h-steel font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-s3h-navy hover:bg-s3h-navy/80 text-s3h-white font-display font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded transition-all"
            >
              Shop the Range
            </a>
          </div>
        </div>
      </section>

      {/* -- PRODUCTS -- */}
      <section id="products" className="bg-s3h-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-s3h-green-light text-center">The Range</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-s3h-green-dark text-center mb-10">
            SIT3HERO™ Products
          </h2>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 rounded font-display font-semibold text-sm uppercase tracking-wider transition-all ${
                activeCategory === "all"
                  ? "bg-s3h-navy text-s3h-white"
                  : "bg-s3h-white text-s3h-green-dark hover:bg-s3h-navy/10"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded font-display font-semibold text-sm uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? "bg-s3h-navy text-s3h-white"
                    : "bg-s3h-white text-s3h-green-dark hover:bg-s3h-navy/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* -- HOW IT WORKS -- */}
      <section id="how-it-works" className="bg-s3h-green-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-s3h-green-light text-center">Simple as 1-2-3</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-s3h-white text-center mb-16">
            Connect. Click. GO.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Connect",
                desc: 'Attach the SIT3HERO™ holder to your 1/2" or 3/4" impact wrench. Quick-release mechanism locks on in seconds.',
                icon: <Zap className="w-8 h-8" />,
              },
              {
                step: "2",
                title: "Click",
                desc: "Pull, insert your chosen cutting tool — step drill, reamer, or tap — and lock it into the holder.",
                icon: <Shield className="w-8 h-8" />,
              },
              {
                step: "3",
                title: "GO",
                desc: "Start drilling, expanding, threading, or aligning. Smooth, easy cut with the SIT3HERO™ high-performance coating.",
                icon: <Layers className="w-8 h-8" />,
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-s3h-green-light text-s3h-green-dark font-display font-bold text-lg mb-4">
                  {item.step}
                </div>
                <div className="text-s3h-green-light mb-3">{item.icon}</div>
                <h3 className="font-display font-bold text-xl text-s3h-white mb-2">
                  {item.title}
                </h3>
                <p className="text-s3h-cream/70 font-sans text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- AWARD SECTION -- */}
      <section className="bg-s3h-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-s3h-white mb-4">
            PTIA 2025 Tool Innovation Award Winner
          </h2>
          <p className="text-s3h-cream/80 font-sans mb-8">
            Recognized as the most innovative new tool of the year. Built for metal. Built to last.
          </p>
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-s3h-green-light hover:bg-s3h-green-light/80 text-s3h-green-dark font-display font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded transition-all"
          >
            Shop Award-Winning Tools
          </a>
        </div>
      </section>

      {/* -- FEATURES -- */}
      <section id="features" className="bg-s3h-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-s3h-green-light text-center">Why SIT3HERO</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-s3h-green-dark text-center mb-16">
            Engineered for the Job Site
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "75% Longer Tool Life",
                desc: "The proprietary SIT3HERO™ coating is high-temperature tested to 356°F, giving you dramatically extended tool life compared to standard alternatives.",
              },
              {
                title: "Impact Wrench Powered",
                desc: 'No more switching tools on site. The SIT3HERO™ system works with your existing 1/2" or 3/4" impact wrench — the tool already in your hand.',
              },
              {
                title: "20× Faster Threading",
                desc: 'Thread holes up to 20 times faster than hand tapping. The spiral point machine taps are a one-tap solution for holes from 1/4" to 1" UNC.',
              },
              {
                title: "Full Range Coverage",
                desc: 'From 1/8" to 1-3/8" diameter holes. Step Drills, Step Reamers, Car Reamers, and Taps cover every major bolt size you\'ll encounter.',
              },
              {
                title: "Smooth, Easy Cut",
                desc: "Spiral flute technology across the range delivers faster, cleaner cuts with less vibration. Works on structural steel up to 1/2\" thick.",
              },
              {
                title: "Patent Pending",
                desc: "International patent pending (WO2024/100390). The SIT3HERO™ holder is a genuinely new innovation — not available from anyone else.",
              },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-lg bg-s3h-cream">
                <h3 className="font-display font-bold text-lg text-s3h-green-dark mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-s3h-steel font-sans">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- CONTACT -- */}
      <section id="contact" className="bg-s3h-green-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-s3h-white mb-4">
            Got Questions? We've Got Answers.
          </h2>
          <p className="text-s3h-cream/80 font-sans mb-8">
            Our team is ready to help you find the right SIT3HERO™ tools for the job.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 bg-s3h-navy hover:bg-s3h-navy/80 text-s3h-white font-display font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded transition-all"
            >
              <Mail className="w-5 h-5" />
              Email {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 border-2 border-s3h-cream/30 text-s3h-cream hover:border-s3h-green-light hover:text-s3h-green-light font-display font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded transition-all"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
