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
      {/* ── AWARD BANNER ── */}
      <div className="bg-texas-orange text-texas-cream text-center py-2.5 px-4 text-sm font-sans font-medium tracking-wide">
        🏆 {siteConfig.award}
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-texas-dark overflow-hidden tex-grain">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-texas-brown/30 via-transparent to-texas-red/20 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C84B11 0, #C84B11 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label text-texas-orange mb-4">
                {siteConfig.award}
              </p>
              <h1 className="font-display font-bold text-texas-cream text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight mb-6">
                Turn Your Impact Wrench Into a Metalworking{" "}
                <span className="text-texas-orange">Powerhouse</span>
              </h1>
              <p className="text-texas-cream/70 text-lg font-sans leading-relaxed mb-8 max-w-lg">
                Drill new holes, expand, thread, and align — all from your 1/2&quot; or
                3/4&quot; impact wrench.{" "}
                <strong className="text-texas-gold">Connect. Click. GO.</strong>
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#products" className="btn-primary text-base">
                  Shop the Range
                </a>
                <Link
                  to="/size-guide"
                  className="btn-secondary text-base border-texas-cream/30 text-texas-cream hover:bg-texas-cream hover:text-texas-dark"
                >
                  Size Guide
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {siteConfig.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-texas-brown/30 border border-texas-brown/50 rounded-xl p-6 text-center"
                >
                  <div className="font-display font-bold text-texas-orange text-4xl leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="text-texas-cream/60 text-xs font-sans uppercase tracking-wider leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IT DOES ── */}
      <section className="bg-texas-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                className="bg-white border border-texas-cream rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display font-bold text-texas-dark text-lg mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-texas-steel font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#products" className="btn-primary">
              Shop the Range
            </a>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-label mb-2">The Range</p>
            <h2 className="font-display font-bold text-texas-dark text-4xl tracking-tight">
              SIT3HERO™ Products
            </h2>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 rounded font-display font-semibold text-sm uppercase tracking-wider transition-all ${
                activeCategory === "all"
                  ? "bg-texas-orange text-texas-cream"
                  : "bg-texas-cream text-texas-dark hover:bg-texas-orange/10"
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
                    ? "bg-texas-orange text-texas-cream"
                    : "bg-texas-cream text-texas-dark hover:bg-texas-orange/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="bg-texas-dark py-20 tex-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label text-texas-orange mb-2">Simple as 1-2-3</p>
            <h2 className="font-display font-bold text-texas-cream text-4xl tracking-tight">
              Connect. Click. GO.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Connect",
                desc: 'Attach the SIT3HERO™ holder to your 1/2" or 3/4" impact wrench. Quick-release mechanism locks on in seconds.',
                icon: <Zap size={28} className="text-texas-orange" />,
              },
              {
                step: "2",
                title: "Click",
                desc: "Pull, insert your chosen cutting tool — step drill, reamer, or tap — and lock it into the holder.",
                icon: <Layers size={28} className="text-texas-orange" />,
              },
              {
                step: "3",
                title: "GO",
                desc: "Start drilling, expanding, threading, or aligning. Smooth, easy cut with the SIT3HERO™ high-performance coating.",
                icon: <Shield size={28} className="text-texas-orange" />,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-texas-brown/30 border border-texas-brown/50 rounded-xl p-8"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-texas-orange rounded-full flex items-center justify-center font-display font-bold text-texas-cream text-sm">
                  {item.step}
                </div>
                <div className="mb-4 mt-2">{item.icon}</div>
                <h3 className="font-display font-bold text-texas-cream text-2xl tracking-wider mb-3">
                  {item.title}
                </h3>
                <p className="text-texas-cream/60 font-sans leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARD SECTION ── */}
      <section className="bg-texas-red py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Award size={48} className="text-texas-gold mx-auto mb-4" />
          <h2 className="font-display font-bold text-texas-cream text-3xl tracking-tight mb-3">
            PTIA 2025 Tool Innovation Award Winner
          </h2>
          <p className="text-texas-cream/70 font-sans mb-6">
            Recognized as the most innovative new tool of the year. Built for metal. Built to last.
          </p>
          <a href="#products" className="btn-primary bg-texas-gold text-texas-dark hover:brightness-105">
            Shop Award-Winning Tools
          </a>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="bg-texas-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-2">Why SIT3HERO</p>
            <h2 className="font-display font-bold text-texas-dark text-4xl tracking-tight">
              Engineered for the Job Site
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div
                key={f.title}
                className="bg-white border border-texas-cream rounded-xl p-7 shadow-sm"
              >
                <div className="w-2 h-8 bg-texas-orange rounded mb-4" />
                <h3 className="font-display font-bold text-texas-dark text-lg mb-3 tracking-wide">
                  {f.title}
                </h3>
                <p className="text-sm text-texas-steel font-sans leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-texas-brown/20 border-t border-texas-brown/30 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-texas-dark text-3xl tracking-tight mb-3">
            Got Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-texas-steel font-sans mb-8">
            Our team is ready to help you find the right SIT3HERO™ tools for the job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center justify-center gap-2 btn-primary"
            >
              <Mail size={16} />
              Email {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 btn-secondary"
            >
              <Phone size={16} />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
