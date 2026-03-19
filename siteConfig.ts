import { useState } from "react";
import { X, Mail, CheckCircle } from "lucide-react";

type Props = { onClose?: () => void };

export function MascotSection() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 shadow-xl">
        {/* Mascot SVG */}
        <div className="flex-shrink-0 w-48 h-48 relative">
          <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
            {/* Body */}
            <ellipse cx="100" cy="155" rx="42" ry="50" fill="#E8A87C"/>
            {/* Work shirt */}
            <ellipse cx="100" cy="165" rx="42" ry="42" fill="#F76B1C"/>
            {/* Collar */}
            <path d="M82 138 L100 155 L118 138" fill="white" opacity="0.9"/>
            {/* Chest curve / bust */}
            <ellipse cx="84" cy="152" rx="18" ry="14" fill="#E8A87C" opacity="0.6"/>
            <ellipse cx="116" cy="152" rx="18" ry="14" fill="#E8A87C" opacity="0.6"/>
            {/* Neck */}
            <rect x="89" y="108" width="22" height="20" rx="8" fill="#E8A87C"/>
            {/* Head */}
            <ellipse cx="100" cy="92" rx="34" ry="36" fill="#E8A87C"/>
            {/* Hair - brunette */}
            <ellipse cx="100" cy="72" rx="34" ry="20" fill="#3D1C02"/>
            <path d="M66 80 Q60 110 68 130" stroke="#3D1C02" strokeWidth="10" fill="none" strokeLinecap="round"/>
            <path d="M134 80 Q142 115 128 138" stroke="#3D1C02" strokeWidth="10" fill="none" strokeLinecap="round"/>
            <ellipse cx="100" cy="60" rx="30" ry="14" fill="#3D1C02"/>
            {/* Eyes */}
            <ellipse cx="88" cy="91" rx="6" ry="7" fill="white"/>
            <ellipse cx="112" cy="91" rx="6" ry="7" fill="white"/>
            <ellipse cx="89" cy="92" rx="3.5" ry="4" fill="#3D1C02"/>
            <ellipse cx="113" cy="92" rx="3.5" ry="4" fill="#3D1C02"/>
            <circle cx="90" cy="91" r="1.2" fill="white"/>
            <circle cx="114" cy="91" r="1.2" fill="white"/>
            {/* Lashes */}
            <line x1="84" y1="85" x2="82" y2="82" stroke="#3D1C02" strokeWidth="1.5"/>
            <line x1="88" y1="84" x2="87" y2="81" stroke="#3D1C02" strokeWidth="1.5"/>
            <line x1="92" y1="85" x2="92" y2="82" stroke="#3D1C02" strokeWidth="1.5"/>
            <line x1="108" y1="85" x2="107" y2="82" stroke="#3D1C02" strokeWidth="1.5"/>
            <line x1="112" y1="84" x2="112" y2="81" stroke="#3D1C02" strokeWidth="1.5"/>
            <line x1="116" y1="85" x2="118" y2="82" stroke="#3D1C02" strokeWidth="1.5"/>
            {/* Nose */}
            <ellipse cx="100" cy="100" rx="3" ry="2" fill="#C8896A"/>
            {/* Smile */}
            <path d="M90 110 Q100 118 110 110" stroke="#C8896A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            {/* Lips */}
            <path d="M90 110 Q100 116 110 110" fill="#E05C6A" opacity="0.7"/>
            {/* Cheeks */}
            <ellipse cx="78" cy="103" rx="8" ry="5" fill="#F9A8B4" opacity="0.5"/>
            <ellipse cx="122" cy="103" rx="8" ry="5" fill="#F9A8B4" opacity="0.5"/>
            {/* Left arm holding drill */}
            <path d="M58 148 Q40 155 30 165" stroke="#E8A87C" strokeWidth="14" fill="none" strokeLinecap="round"/>
            {/* Right arm raised */}
            <path d="M142 145 Q158 135 165 125" stroke="#F76B1C" strokeWidth="14" fill="none" strokeLinecap="round"/>
            {/* DRILL body */}
            <rect x="10" y="158" width="36" height="16" rx="5" fill="#2D3748"/>
            <rect x="14" y="152" width="12" height="10" rx="3" fill="#4A5568"/>
            {/* Drill bit */}
            <rect x="46" y="163" width="20" height="4" rx="2" fill="#A0AEC0"/>
            <polygon points="66,163 72,165 66,167" fill="#718096"/>
            {/* Drill details */}
            <circle cx="32" cy="166" r="4" fill="#4A5568"/>
            <circle cx="32" cy="166" r="2" fill="#F76B1C"/>
            {/* Hard hat */}
            <ellipse cx="100" cy="58" rx="36" ry="12" fill="#F76B1C"/>
            <rect x="64" y="56" width="72" height="8" rx="2" fill="#E05A0A"/>
            {/* Hat brim */}
            <ellipse cx="100" cy="64" rx="40" ry="5" fill="#E05A0A"/>
            {/* Safety glasses */}
            <rect x="78" y="87" width="16" height="9" rx="4" fill="none" stroke="#60A5FA" strokeWidth="2" opacity="0.8"/>
            <rect x="106" y="87" width="16" height="9" rx="4" fill="none" stroke="#60A5FA" strokeWidth="2" opacity="0.8"/>
            <line x1="94" y1="91" x2="106" y2="91" stroke="#60A5FA" strokeWidth="2" opacity="0.8"/>
            {/* Tool belt */}
            <rect x="60" y="188" width="80" height="10" rx="4" fill="#8B6914"/>
            <rect x="93" y="185" width="14" height="16" rx="3" fill="#A07820"/>
            <rect x="96" y="188" width="8" height="10" rx="2" fill="#F76B1C"/>
          </svg>
        </div>

        {/* Text + CTA */}
        <div className="text-center sm:text-left">
          <p className="text-blue-200 font-display text-sm uppercase tracking-widest mb-1">Meet Ria — Your Tool Expert</p>
          <h3 className="font-display font-bold text-white text-2xl sm:text-3xl leading-tight mb-3">
            Join the SIT3HERO™ <br className="hidden sm:block"/>Crew Club
          </h3>
          <p className="text-blue-100 font-sans text-sm leading-relaxed mb-5 max-w-xs">
            Get <strong className="text-orange-300">15% off your first order</strong>, exclusive deals, and early access to new tools. No spam — just good deals.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-display font-bold uppercase tracking-wider px-7 py-3 rounded-full shadow-lg transition-all hover:shadow-orange-500/30 hover:shadow-xl active:scale-95 text-sm"
          >
            🔧 Click Here — Get 15% Off
          </button>
        </div>
      </div>

      {showModal && <ClubModal onClose={() => setShowModal(false)} />}
    </>
  );
}

function ClubModal({ onClose }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: connect to your email provider (Mailchimp, ConvertKit, etc.)
    console.log("Club signup:", { name, email });
    setSubmitted(true);
  };

  return (
    <>
      <div className="modal-overlay fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="modal-panel bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>

          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
              <h3 className="font-display font-bold text-gray-900 text-2xl mb-2">You're In!</h3>
              <p className="text-gray-600 font-sans">Check your email for your <strong className="text-orange-500">15% off</strong> discount code. Welcome to the Crew!</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <span className="text-4xl">🔧</span>
                <h3 className="font-display font-bold text-gray-900 text-2xl mt-2 mb-1">Join the Crew Club</h3>
                <p className="text-gray-500 font-sans text-sm">Get <strong className="text-orange-500">15% off your first order</strong> + exclusive deals straight to your inbox.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-sans font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your first name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                </div>
                <button type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-display font-bold uppercase tracking-wider py-3 rounded-lg shadow-md transition-all active:scale-95">
                  Get My 15% Off →
                </button>
                <p className="text-center text-xs text-gray-400 font-sans">No spam, ever. Unsubscribe anytime.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
