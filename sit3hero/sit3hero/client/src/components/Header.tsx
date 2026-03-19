import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../lib/cart";
import { siteConfig } from "../data/siteConfig";

export default function Header() {
  const { totalItems, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: "Products", href: isHome ? "#products" : "/#products" },
    { label: "How It Works", href: isHome ? "#how-it-works" : "/#how-it-works" },
    { label: "Why SIT3HERO", href: isHome ? "#features" : "/#features" },
    { label: "Size Guide", href: "/size-guide", isRoute: true },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-texas-dark border-b border-texas-brown/40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-texas-orange rounded flex items-center justify-center">
              <span className="font-display font-bold text-texas-cream text-xs tracking-tight">S3H</span>
            </div>
            <span className="font-display font-bold text-texas-cream text-xl tracking-wider group-hover:text-texas-orange transition-colors">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-2 text-sm font-sans font-medium text-texas-cream/80 hover:text-texas-orange transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-sans font-medium text-texas-cream/80 hover:text-texas-orange transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 px-4 py-2 bg-texas-orange/10 border border-texas-orange/30 rounded text-texas-cream hover:bg-texas-orange hover:border-texas-orange transition-all duration-200"
              aria-label="Open cart"
            >
              <ShoppingCart size={18} />
              <span className="hidden sm:block text-sm font-sans font-medium">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-texas-orange text-texas-cream text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              className="md:hidden text-texas-cream hover:text-texas-orange transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-texas-dark border-t border-texas-brown/40 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-sm font-sans font-medium text-texas-cream/80 hover:text-texas-orange transition-colors uppercase tracking-wider border-b border-texas-brown/20"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-sm font-sans font-medium text-texas-cream/80 hover:text-texas-orange transition-colors uppercase tracking-wider border-b border-texas-brown/20"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
