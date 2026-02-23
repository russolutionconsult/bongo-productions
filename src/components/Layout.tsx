import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Music, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/rentals", label: "Rentals" },
  { to: "/booking", label: "Booking" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
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
          ? "bg-[rgba(6,4,14,0.95)] backdrop-blur-md border-b border-border shadow-lg"
          : "bg-[rgba(6,4,14,0.4)] backdrop-blur-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Music className="w-4 h-4 text-primary" />
            </div>
            <span className="font-serif text-lg font-bold">
              <span className="font-bold text-foreground">Bongo</span>{" "}
              <span className="text-primary italic">Productions</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  style={isActive ? { color: "#ffffff" } : {}}
                  className={`nav-link pb-1 ${isActive ? "active" : ""}`}
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
              className="relative w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
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
                backgroundColor: "#8B5CF6",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(139,92,246,0.35)",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7C3AED")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#8B5CF6")}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-[rgba(6,4,14,0.98)] backdrop-blur-xl">
            <nav className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`py-3 text-sm font-medium border-b border-border/40 ${location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/booking"
                className="mt-4 py-3 rounded-full text-white text-center text-sm font-semibold"
                style={{ backgroundColor: "#8B5CF6" }}
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
      <footer className="bg-[hsl(240,15%,3%)] border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Music className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="font-serif font-bold text-base">
                  <span className="text-foreground">Bongo</span>{" "}
                  <span className="text-primary italic">Productions</span>
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Premium musical instruments, rentals, and professional band booking services in Accra, Ghana.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-5 tracking-wide">Quick Links</h4>
              <ul className="space-y-3">
                {["Shop Instruments", "Rent Equipment", "Book a Session", "About Us"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-5 tracking-wide">Contact</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
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
              <h4 className="text-sm font-semibold text-foreground mb-5 tracking-wide">Legal</h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center space-y-2">
            <p className="text-muted-foreground text-sm">
              © 2026 Bongo Productions. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Powered by{" "}
              <a
                href="https://russolutionconsult.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-semibold"
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
