import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useCart } from "../lib/cart";
import { products } from "../data/products";
import { formatPrice } from "../lib/commerce";

type Operation = "drill" | "expand" | "thread" | "align" | null;

const operationMap: Record<
  NonNullable<Operation>,
  { title: string; tool: string; body: string; cats: string[] }
> = {
  drill: {
    title: "You Need: Step Drills",
    tool: "Step Drills",
    body: 'SIT3HERO™ Step Drills create new holes in thin gauge material from 1/8" to 1-3/8". The split point ensures accurate positioning, and the spiral flute gives fast chip evacuation. Available individually or as a 3-piece kit covering all sizes.',
    cats: ["step-drills"],
  },
  expand: {
    title: "You Need: Step Reamers or Car Reamers",
    tool: "Step Reamers / Car Reamers",
    body: "Step Reamers expand holes across multiple sizes with one tool (5 steps each). Ideal for running through a range quickly. Car Reamers are single-size precision tools with a spiral flute and safety collar. Best when you need an exact diameter.",
    cats: ["step-reamers", "car-reamers"],
  },
  thread: {
    title: "You Need: Taps",
    tool: "Taps",
    body: 'SIT3HERO™ Taps thread holes up to 20× faster than hand tapping. The spiral point design pushes swarf forward for clean threads, ready for a bolt. Available in 8 UNC sizes from 1/4" to 1", individually or in kits.',
    cats: ["taps"],
  },
  align: {
    title: "You Need: Car Reamers",
    tool: "Car Reamers",
    body: 'SIT3HERO™ Car Reamers align mismatched bolt holes quickly and safely. The spiral flute design and built-in safety collar reduce operator risk. Available in all 13 major sizes from 5/16" to 1-1/16", individually or in kits of 4, 6 or 13.',
    cats: ["car-reamers"],
  },
};

const kits = products.filter((p) => p.category === "kits");

export default function SizeGuide() {
  const [operation, setOperation] = useState<Operation>(null);
  const { addItem } = useCart();

  const recommendation = operation ? operationMap[operation] : null;
  const recommendedProducts = recommendation
    ? products.filter((p) => recommendation.cats.includes(p.category))
    : [];

  return (
    <main className="bg-texas-cream min-h-screen">
      {/* Header */}
      <div className="bg-texas-dark py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-texas-cream/40 text-sm font-sans mb-6">
            <Link to="/" className="hover:text-texas-orange transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-texas-cream/70">Size Guide</span>
          </nav>
          <h1 className="font-display font-bold text-texas-cream text-4xl sm:text-5xl tracking-tight">
            Size Guide &amp; Tool Finder
          </h1>
          <p className="text-texas-cream/60 font-sans mt-4 text-lg">
            Not sure which tool you need? Find the right SIT3HERO™ product for your job in seconds.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-14">
        {/* Operation picker */}
        <div className="mb-10">
          <h2 className="font-display font-bold text-texas-dark text-2xl tracking-tight mb-6 text-center">
            What Do You Need To Do?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(
              [
                { id: "drill", label: "Drill New Holes", icon: "🔩", sub: "Create holes in thin gauge material" },
                { id: "expand", label: "Expand Holes", icon: "⭕", sub: "Enlarge or clean out existing holes" },
                { id: "thread", label: "Thread Holes", icon: "🔧", sub: "Cut threads for bolts" },
                { id: "align", label: "Align Holes", icon: "🎯", sub: "Align mismatched bolt holes" },
              ] as const
            ).map((op) => (
              <button
                key={op.id}
                onClick={() => setOperation(op.id === operation ? null : op.id)}
                className={`rounded-xl p-5 text-center border-2 transition-all duration-200 ${
                  operation === op.id
                    ? "border-texas-orange bg-texas-orange/10 shadow-md"
                    : "border-texas-cream bg-white hover:border-texas-orange/40 hover:shadow"
                }`}
              >
                <div className="text-3xl mb-2">{op.icon}</div>
                <p className="font-display font-bold text-texas-dark text-sm tracking-wide leading-snug">
                  {op.label}
                </p>
                <p className="text-xs text-texas-steel font-sans mt-1 leading-snug">{op.sub}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        {recommendation && (
          <div className="bg-white border border-texas-orange/20 rounded-xl p-8 mb-12 shadow-sm">
            <h3 className="font-display font-bold text-texas-orange text-2xl tracking-wide mb-3">
              {recommendation.title}
            </h3>
            <p className="text-texas-steel font-sans leading-relaxed mb-6">{recommendation.body}</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedProducts.map((p) => (
                <div key={p.id} className="border border-texas-cream rounded-lg p-4 bg-texas-cream/40">
                  <p className="font-display font-semibold text-texas-dark text-sm leading-snug mb-1">
                    {p.name}
                  </p>
                  <p className="text-xs text-texas-steel font-sans mb-3">{p.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-texas-orange">{formatPrice(p.price)}</span>
                    <button
                      onClick={() => addItem(p)}
                      className="text-xs bg-texas-orange text-texas-cream font-display font-semibold px-3 py-1.5 rounded hover:brightness-110 transition-all"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Kits */}
        <div>
          <h2 className="font-display font-bold text-texas-dark text-2xl tracking-tight mb-6 text-center">
            Save With Kits
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {kits.map((kit) => (
              <div
                key={kit.id}
                className="bg-white border border-texas-cream rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                {kit.badge && (
                  <span className="inline-block bg-texas-orange text-texas-cream text-xs font-display font-semibold px-2.5 py-1 rounded uppercase tracking-wider mb-3">
                    {kit.badge}
                  </span>
                )}
                <h3 className="font-display font-bold text-texas-dark text-base tracking-wide mb-1">
                  {kit.name}
                </h3>
                <p className="text-xs text-texas-steel font-sans mb-4">{kit.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display font-bold text-texas-orange text-xl">
                      {formatPrice(kit.price)}
                    </span>
                    {kit.compareAtPrice && (
                      <span className="ml-2 text-sm text-muted-foreground line-through">
                        {formatPrice(kit.compareAtPrice)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => addItem(kit)}
                    className="bg-texas-orange text-texas-cream font-display font-semibold text-sm px-4 py-2 rounded hover:brightness-110 transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
