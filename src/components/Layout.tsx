import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import BongoLogo from "@/assets/Bongo_Productions_official_logo1.png";

const navLinks = [
  { to: "/", label: "Start" },
  { to: "/about", label: "About" },
  { to: "/rentals", label: "Rentals" },
  { to: "/booking", label: "Booking" },
  { to: "/contact", label: "Contact" },
  { to: "/blog", label: "Blog" },
  { to: "/shop", label: "Shop Now" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { getCartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[rgba(255,255,255,0.92)] backdrop-blur-md border-b border-gray-200 shadow-lg"
          : "bg-[rgba(255,255,255,0.85)] backdrop-blur-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-32 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={BongoLogo} alt="Bongo Productions Logo" className="h-32 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  style={isActive ? { color: "#8B5CF6", fontWeight: 700 } : { color: "#000000" }}
                  className={`pb-1 text-base font-medium hover:text-[#8B5CF6] transition-colors ${isActive ? "border-b-2 border-[#8B5CF6]" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/cart"
              className="relative w-9 h-9 rounded-lg flex items-center justify-center text-[#8B5CF6] hover:text-[#7C3AED] hover:bg-purple-50 transition-all"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" fill="currentColor" fillOpacity={0.15} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              to="/booking"
              style={{
                padding: "8px 20px",
                borderRadius: "8px",
                backgroundColor: "#801919",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                border: "none",
                boxShadow: "0 4px 14px rgba(128,25,25,0.35)",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#661414")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#801919")}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/cart"
              className="relative w-10 h-10 flex items-center justify-center text-[#8B5CF6]"
              aria-label="Cart"
            >
              <ShoppingCart className="w-6 h-6" fill="currentColor" fillOpacity={0.15} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="w-10 h-10 flex items-center justify-center text-white rounded-[4px] shadow-sm transition-transform active:scale-95"
              style={{ backgroundColor: "#801919" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-[rgba(255,255,255,0.95)] backdrop-blur-xl">
            <nav className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`py-3 text-sm font-medium border-b border-gray-200 transition-colors hover:text-[#8B5CF6] ${location.pathname === link.to ? "text-[#8B5CF6] font-bold" : "text-gray-700"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/booking"
                className="mt-4 py-3 rounded-full text-white text-center text-sm font-semibold"
                style={{ backgroundColor: "#801919" }}
              >
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#EDEEF0] border-t border-gray-300 mt-24 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src={BongoLogo} alt="Bongo Productions Logo" className="h-24 w-auto object-contain" />
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Premium musical instruments, rentals, and professional band booking services in Accra, Ghana.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-black mb-5 tracking-wide uppercase">Quick Links</h4>
              <ul className="space-y-3">
                {["Shop Instruments", "Rent Equipment", "Book a Session", "About Us"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 text-sm hover:text-[#8B5CF6] transition-colors font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold text-black mb-5 tracking-wide uppercase">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-600 font-medium">
                <li className="flex items-start gap-2">
                  <span>📞</span>
                  <span>+233 26 300 9284</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✉️</span>
                  <span>info@bongoproductions.com.gh</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Accra, Ghana</span>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-bold text-black mb-5 tracking-wide uppercase">Legal</h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 text-sm hover:text-[#8B5CF6] transition-colors font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center space-y-2">
            <p className="text-gray-500 text-sm font-medium">
              © 2026 Bongo Productions. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs font-medium">
              Powered by{" "}
              <a
                href="https://russolutionconsult.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-bold"
              >
                Russolution Consult
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
