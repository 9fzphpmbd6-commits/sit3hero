import { ShoppingCart } from "lucide-react";
import { useCart } from "../lib/cart";
import { formatPrice } from "../lib/commerce";
import type { Product } from "../data/products";

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();

  return (
    <div className="card-tool flex flex-col bg-white dark:bg-s3h-green-mid/20 border border-s3h-cream/20 group">
      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-br from-s3h-green-mid/10 to-s3h-green-mid/30 flex items-center justify-center overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 bg-s3h-navy text-s3h-white text-xs font-display font-semibold px-2.5 py-1 rounded uppercase tracking-wider z-10">
            {product.badge}
          </span>
        )}
        {product.isBestSeller && !product.badge && (
          <span className="absolute top-3 left-3 bg-s3h-gold text-s3h-green-dark text-xs font-display font-semibold px-2.5 py-1 rounded uppercase tracking-wider z-10">
            Best Seller
          </span>
        )}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback placeholder
            const t = e.currentTarget;
            t.style.display = "none";
            t.parentElement!.classList.add("items-center", "justify-center");
          }}
        />
        {/* Placeholder shown when image missing */}
        <div className="absolute inset-0 flex items-center justify-center text-s3h-green-mid/40">
          <div className="text-center p-4">
            <div className="text-4xl mb-2">/</div>
            <p className="text-xs font-sans text-s3h-green-mid/50 leading-tight">
              {product.name}
            </p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-xs text-s3h-green-light/70 font-mono uppercase tracking-widest mb-1">
          {product.sku}
        </p>
        <h3 className="font-display font-semibold text-foreground text-base leading-snug mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground font-sans leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
          <div>
            <span className="font-display font-bold text-s3h-green-light text-xl">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="ml-2 text-sm text-muted-foreground line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={() => addItem(product)}
          className="flex items-center gap-2 bg-s3h-navy text-s3h-white text-sm font-display font-semibold px-4 py-2 rounded transition-all hover:brightness-110 hover:shadow-md active:scale-95 mt-3"
        >
          <ShoppingCart size={14} />
          Add
        </button>
      </div>
    </div>
  );
}
