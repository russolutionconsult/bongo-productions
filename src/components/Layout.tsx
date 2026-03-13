import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { categories, subcategories } from "@/lib/products";
const BongoLogo = "/logo.png";

const navLinks = [
  { to: "/", label: "Start" },
  { to: "/about", label: "About" },
  { to: "/rentals", label: "Rentals" },
  { to: "/booking", label: "Booking" },
  { to: "/contact", label: "Contact" },
  { to: "/blog", label: "Blog" },
];

// Categories for the dropdown (exclude "All")
const shopCategories = categories.filter((c) => c !== "All");

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if background should be active
      setScrolled(currentScrollY > 20);

      // Handle show/hide on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down - hide
      } else {
        setIsVisible(true); // Scrolling up - show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMenuOpen(false);
    setMobileShopOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setShopDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setShopDropdownOpen(false);
    }, 200);
  };

  const handleCategoryClick = (category: string) => {
    setShopDropdownOpen(false);
    setHoveredCategory(null);
    setMenuOpen(false);
    setMobileShopOpen(false);
    setMobileExpandedCat(null);
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  const handleSubcategoryClick = (category: string, subcategory: string) => {
    setShopDropdownOpen(false);
    setHoveredCategory(null);
    setMenuOpen(false);
    setMobileShopOpen(false);
    setMobileExpandedCat(null);
    navigate(`/shop?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(subcategory)}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
          } ${scrolled
            ? "bg-white border-b border-gray-200 shadow-lg py-2"
            : "bg-white py-4"
          }`}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-300 flex items-center justify-between ${scrolled ? "h-16" : "h-24 md:h-32"
          }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={BongoLogo}
              alt="Bongo Productions Logo"
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-16" : "h-24 md:h-32"}`}
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`pb-1 text-base font-medium transition-all duration-200 relative group ${isActive ? "text-primary font-bold" : "text-gray-800 hover:text-primary"
                    }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                </Link>
              );
            })}

            {/* Shop Now with Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                className={`pb-1 text-base font-medium transition-all duration-200 relative group flex items-center gap-1 ${location.pathname === "/shop" ? "text-primary font-bold" : "text-gray-800 hover:text-primary"
                  }`}
              >
                Shop Now
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${shopDropdownOpen ? "rotate-180" : ""}`} />
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-transform duration-300 ${location.pathname === "/shop" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 transition-all duration-200 origin-top ${shopDropdownOpen
                  ? "opacity-100 scale-y-100 pointer-events-auto"
                  : "opacity-0 scale-y-95 pointer-events-none"
                  }`}
              >
                {/* Main Category Panel */}
                <div className={`relative w-56 bg-white shadow-2xl border border-gray-100 overflow-visible ${hoveredCategory ? "rounded-l-xl" : "rounded-xl"}`}>
                  {/* View All */}
                  <Link
                    to="/shop"
                    onClick={() => setShopDropdownOpen(false)}
                    onMouseEnter={() => setHoveredCategory(null)}
                    className="flex items-center justify-between px-5 py-3 text-sm font-bold text-primary hover:bg-primary/5 transition-colors border-b border-gray-100"
                  >
                    View All Products
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  {/* Category Items */}
                  {shopCategories.map((cat) => {
                    const hasSubs = subcategories[cat] && subcategories[cat].length > 0;
                    return (
                      <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        onMouseEnter={() => setHoveredCategory(hasSubs ? cat : null)}
                        className={`w-full flex items-center justify-between px-5 py-3 text-sm font-medium transition-colors ${hoveredCategory === cat
                          ? "bg-primary/5 text-primary"
                          : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                          }`}
                      >
                        {cat}
                        {hasSubs && <ChevronRight className="w-3.5 h-3.5" />}
                      </button>
                    );
                  })}

                  {/* Subcategory Flyout — positions itself next to hovered row */}
                  {hoveredCategory && subcategories[hoveredCategory] && (() => {
                    const catIndex = shopCategories.indexOf(hoveredCategory);
                    const topOffset = 45 + catIndex * 44;
                    return (
                      <div
                        className="absolute left-full bg-white rounded-r-xl shadow-2xl border border-l-0 border-gray-100 w-fit min-w-max"
                        style={{ top: `${topOffset}px` }}
                        onMouseEnter={() => setHoveredCategory(hoveredCategory)}
                        onMouseLeave={() => setHoveredCategory(null)}
                      >
                        <div className="py-1 flex flex-col">
                          {subcategories[hoveredCategory].map((sub) => (
                            <button
                              key={sub}
                              onClick={() => handleSubcategoryClick(hoveredCategory, sub)}
                              className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors whitespace-nowrap"
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
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
          <div className="md:hidden border-t border-gray-100 bg-white animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col py-6 px-6 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`py-3 text-base font-medium border-b border-gray-50 transition-colors ${location.pathname === link.to ? "text-primary font-bold" : "text-gray-700 hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Shop by Category */}
              <div className="border-b border-gray-50">
                <button
                  onClick={() => setMobileShopOpen(!mobileShopOpen)}
                  className={`w-full py-3 text-base font-medium transition-colors flex items-center justify-between ${location.pathname === "/shop" ? "text-primary font-bold" : "text-gray-700 hover:text-primary"
                    }`}
                >
                  Shop Now
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileShopOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileShopOpen && (
                  <div className="pl-4 pb-3 space-y-1 animate-in slide-in-from-top duration-200">
                    <Link
                      to="/shop"
                      className="block py-2 text-sm font-bold text-primary"
                    >
                      View All Products
                    </Link>
                    {shopCategories.map((cat) => {
                      const hasSubs = subcategories[cat] && subcategories[cat].length > 0;
                      return (
                        <div key={cat}>
                          <button
                            onClick={() => {
                              if (hasSubs) {
                                setMobileExpandedCat(mobileExpandedCat === cat ? null : cat);
                              } else {
                                handleCategoryClick(cat);
                              }
                            }}
                            className="w-full text-left py-2 text-sm text-gray-600 hover:text-primary transition-colors flex items-center justify-between pr-2"
                          >
                            <span className="flex items-center gap-2">
                              <ChevronRight className="w-3 h-3 text-primary/50" />
                              {cat}
                            </span>
                            {hasSubs && (
                              <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${mobileExpandedCat === cat ? "rotate-180" : ""}`} />
                            )}
                          </button>
                          {hasSubs && mobileExpandedCat === cat && (
                            <div className="pl-6 pb-1 space-y-1 animate-in slide-in-from-top duration-150">
                              {subcategories[cat].map((sub) => (
                                <button
                                  key={sub}
                                  onClick={() => handleSubcategoryClick(cat, sub)}
                                  className="w-full text-left py-1.5 text-xs text-gray-500 hover:text-primary transition-colors flex items-center gap-1.5"
                                >
                                  <span className="w-1 h-1 rounded-full bg-primary/40" />
                                  {sub}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                to="/booking"
                className="mt-6 py-4 rounded-xl text-white text-center text-sm font-bold shadow-purple"
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
                <img src={BongoLogo} alt="Bongo Productions Logo" className="h-24 w-auto object-contain" style={{ imageRendering: "-webkit-optimize-contrast" }} />
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Premium musical instruments, rentals, and professional band booking services in Accra, Ghana.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-black mb-5 tracking-wide uppercase">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "Shop Instruments", to: "/shop" },
                  { label: "Rent Equipment", to: "/rentals" },
                  { label: "Book a Session", to: "/booking" },
                  { label: "About Us", to: "/about" }
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-gray-600 text-sm hover:text-[#8B5CF6] transition-colors font-medium">
                      {item.label}
                    </Link>
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
                  <span>📞</span>
                  <span>+233 27 217 0261</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📞</span>
                  <span>+233 244 651 174</span>
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
                {[
                  { label: "Privacy Policy", to: "/privacy-policy" },
                  { label: "Terms of Service", to: "/terms-of-service" },
                  { label: "Return Policy", to: "/return-policy" }
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-gray-600 text-sm hover:text-[#8B5CF6] transition-colors font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Copyright Band */}
        <div className="bg-[#1E1E2E] py-6 text-center space-y-1">
          <p className="text-gray-300 text-sm font-medium">
            © 2026 Bongo Productions. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs font-medium">
            Powered by{" "}
            <a
              href="https://russolutionconsult.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A78BFA] hover:text-[#C4B5FD] transition-colors font-bold"
            >
              Russolution Consult
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
