import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-s3h-green-dark border-t border-s3h-green-mid/40 text-s3h-cream/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-s3h-green-light rounded flex items-center justify-center">
                <span className="font-display font-bold text-s3h-green-dark text-xs">S3H</span>
              </div>
              <span className="font-display font-bold text-s3h-white text-lg tracking-wider">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-s3h-cream/60">
              Turn your impact wrench into a multipurpose metalworking machine.
            </p>
            <p className="text-xs mt-3 text-s3h-cream/40">{siteConfig.parentBrand}</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-s3h-white tracking-wider uppercase text-sm mb-4">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              {["Holders", "Car Reamers", "Step Reamers", "Step Drills", "Taps", "Kits"].map((cat) => (
                <li key={cat}>
                  <a href="/#products" className="hover:text-s3h-green-light transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-s3h-white tracking-wider uppercase text-sm mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-s3h-green-light transition-colors"
                >
                  Email Support
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-s3h-green-light transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-s3h-green-light transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-s3h-green-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-s3h-white tracking-wider uppercase text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-s3h-green-light transition-colors"
                >
                  <Mail size={14} />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 hover:text-s3h-green-light transition-colors"
                >
                  <Phone size={14} />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-s3h-cream/40 text-xs pt-2">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-s3h-green-mid/30 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-s3h-cream/40">
            \u00a9 {new Date().getFullYear()} SIT3HERO\u2122. All Rights Reserved. Int. Pat. Pending WO2024/100390
          </p>
          <p className="text-xs text-s3h-cream/40">Powered by Stripe</p>
        </div>
      </div>
    </footer>
  );
}
