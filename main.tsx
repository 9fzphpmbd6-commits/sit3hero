import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-white text-xs">S3H</span>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-wider">{siteConfig.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              One wrench. Every metal job. The impact wrench metalworking system.
            </p>
            <p className="text-xs mt-3 text-gray-600">{siteConfig.parentBrand}</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-white tracking-wider uppercase text-sm mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              {["Holders", "Car Reamers", "Step Reamers", "Step Drills", "Taps", "Kits"].map((cat) => (
                <li key={cat}>
                  <a href="/#products" className="hover:text-orange-400 transition-colors">{cat}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-white tracking-wider uppercase text-sm mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/size-guide" className="hover:text-orange-400 transition-colors">Size Guide</Link></li>
              <li><Link to="/shipping" className="hover:text-orange-400 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/warranty" className="hover:text-orange-400 transition-colors">Warranty</Link></li>
              <li><Link to="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white tracking-wider uppercase text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Mail size={14} />{siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} SIT3HERO™. All Rights Reserved. Int. Pat. Pending WO2024/100390
          </p>
          <p className="text-xs text-gray-600">Powered by Stripe</p>
        </div>
      </div>
    </footer>
  );
}
