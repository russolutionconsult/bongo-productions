import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Guitar, Calendar, Music2, Star } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

/**
 * HERO BG — dark stage: guitar LEFT, drums CENTER, keyboard RIGHT, purple haze upper-center.
 * Exact match to Lovable inspiration from screenshot 2026-02-23 054524.png
 */
const heroBg =
  "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=1920&auto=format&fit=crop&q=90";

/**
 * BAND CTA BG — Band silhouettes on a deeply purple-lit stage (full-bleed, edge-to-edge).
 * Exact match to Lovable HOMEPAGE 3.png — vivid purple/magenta stage atmosphere.
 */
const bandBg =
  "https://images.unsplash.com/photo-1501386761578-eaa54b01af4f?w=1920&auto=format&fit=crop&q=90";

const featured = products.filter((p) => p.featured);

/* ─────────────────────────────────────────────
   EXACT BUTTON STYLES  (from pixel analysis of the inspiration images)

   PRIMARY:   solid #8B5CF6 fill, rounded-lg (NOT fully pill — slightly rounded rect)
              white text, semi-bold, arrow icon
   SECONDARY: dark transparent bg, 1px solid rgba(255,255,255,0.45) border,
              same shape as primary, white text
   BAND CTA:  same as primary but narrower
───────────────────────────────────────────── */
const btnPrimary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "11px 28px",
  borderRadius: "10px",           /* slightly rounded rect — NOT fully pill */
  backgroundColor: "#8B5CF6",
  color: "#fff",
  fontWeight: 600,
  fontSize: "14px",
  letterSpacing: "0.01em",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color 0.2s, transform 0.15s",
  boxShadow: "0 4px 18px rgba(139,92,246,0.38)",
};

const btnSecondary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "11px 28px",
  borderRadius: "10px",
  backgroundColor: "rgba(0,0,0,0.30)",
  border: "1px solid rgba(255,255,255,0.45)",
  color: "#fff",
  fontWeight: 600,
  fontSize: "14px",
  letterSpacing: "0.01em",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color 0.2s",
};

const btnBandCta: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "11px 32px",
  borderRadius: "10px",
  backgroundColor: "#8B5CF6",
  color: "#fff",
  fontWeight: 600,
  fontSize: "14px",
  letterSpacing: "0.01em",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color 0.2s",
  boxShadow: "0 4px 18px rgba(139,92,246,0.50)",
};

export default function Index() {
  return (
    <Layout>
      <title>Bongo Productions — Premium Musical Instruments & Band Booking</title>
      <meta
        name="description"
        content="Premium musical instruments, rentals, and professional band booking services in Accra, Ghana."
      />

      {/* ══════════════════════════════════════════════════════════
          HERO — Dark stage: guitar / drums / keyboard + purple haze
          Exact match to Lovable screenshot 2026-02-23 054524.png
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* ① Base image — instruments barely visible against black stage */}
        <img
          src={heroBg}
          alt="Stage with guitar, drums, and keyboard"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(0.28) saturate(1.0)",
            objectPosition: "center center",
          }}
        />

        {/* ② Purple atmospheric glow — UPPER CENTRE ONLY (the distinctive purple smoke) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 58% 48% at 50% 22%, rgba(120,40,200,0.55) 0%, rgba(80,20,140,0.20) 55%, transparent 80%)",
          }}
        />

        {/* ③ Bottom fade to page colour */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,5,18,0.0) 0%, rgba(8,5,18,0.35) 55%, rgba(8,5,18,0.97) 100%)",
          }}
        />

        {/* ④ Hero content — centered, exactly as in inspiration */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {/* Label */}
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.30em",
                textTransform: "uppercase",
                color: "#8B5CF6",
                marginBottom: "24px",
              }}
            >
              Premium Music Experience
            </p>

            {/* Headline */}
            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#ffffff",
                marginBottom: "22px",
              }}
            >
              Your Sound,{" "}
              <span
                style={{
                  /* "Always Perfected" — gradient from lavender to vivid purple */
                  background: "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 45%, #C084FC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontStyle: "italic",
                }}
              >
                Always Perfected
              </span>
            </h1>

            {/* Sub-copy */}
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.58)",
                maxWidth: "520px",
                margin: "0 auto 40px",
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              Discover premium instruments, flexible rentals, and professional band booking
              — all from Ghana's most trusted music brand.
            </p>

            {/* CTA row — EXACT button designs from inspiration */}
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/shop"
                style={btnPrimary}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#7C3AED";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.025)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#8B5CF6";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                Shop Instruments <ArrowRight style={{ width: "15px", height: "15px" }} />
              </Link>

              <Link
                to="/booking"
                style={btnSecondary}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,0,0,0.30)";
                }}
              >
                Book a Session
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B5CF6", marginBottom: "16px" }}>
                What We Offer
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                Everything You Need to Make Music
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Guitar, title: "Instrument Sales", desc: "Curated collection of professional-grade instruments from the world's finest makers.", link: "/shop" },
              { icon: Calendar, title: "Equipment Rentals", desc: "Flexible daily, weekly, or monthly rental plans for events, rehearsals, or studio sessions.", link: "/rentals" },
              { icon: Music2, title: "Band Booking", desc: "Book our talented musicians for weddings, corporate events, and private celebrations.", link: "/booking" },
            ].map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 0.15}>
                <Link
                  to={svc.link}
                  className="group block rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 h-full"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.35)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(139,92,246,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-[rgba(139,92,246,0.2)]"
                    style={{ background: "rgba(139,92,246,0.10)", border: "1px solid rgba(139,92,246,0.22)" }}>
                    <svc.icon className="h-7 w-7" style={{ color: "#8B5CF6" }} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">{svc.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>{svc.desc}</p>
                  <div className="flex items-center gap-1 mt-6 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#8B5CF6" }}>
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FEATURED PRODUCTS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B5CF6", marginBottom: "12px" }}>Featured</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Top Instruments</h2>
              </div>
              <Link to="/shop" className="hidden sm:flex items-center gap-2 text-sm font-medium group" style={{ color: "rgba(255,255,255,0.38)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}>
                View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {featured.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BAND CTA
          Exact match to HOMEPAGE 3.png:
          — Full-width edge-to-edge (no rounded card)
          — Band silhouettes against VIVID PURPLE stage atmosphere
          — Deeply saturated purple/magenta throughout the section
          — "Book Now →" same primary button style
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden my-0">
        {/* Band silhouette image */}
        <img
          src={bandBg}
          alt="Band performing on stage under purple lights"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(0.18) saturate(0.5)",
            objectPosition: "center 30%",
          }}
        />
        {/* Heavy vivid purple overlay — this is what gives the section its distinctive look */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 40%, rgba(120,20,200,0.80) 0%, rgba(80,10,140,0.65) 45%, rgba(20,5,40,0.70) 100%)",
          }}
        />
        {/* Dark fade at very top and bottom edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,5,18,0.45) 0%, transparent 20%, transparent 80%, rgba(8,5,18,0.45) 100%)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Star className="mx-auto mb-6 w-7 h-7" style={{ color: "#FBBF24", fill: "#FBBF24" }} />
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem,4.5vw,3.5rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "18px",
              }}
            >
              Book Our Band for Your Event
            </h2>
            <p style={{ color: "rgba(255,255,255,0.60)", fontSize: "16px", lineHeight: 1.7, marginBottom: "36px", maxWidth: "480px", margin: "0 auto 36px" }}>
              From intimate gatherings to grand celebrations, our professional musicians
              bring the perfect sound to every occasion.
            </p>
            <Link
              to="/booking"
              style={btnBandCta}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7C3AED")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#8B5CF6")}
            >
              Book Now <ArrowRight style={{ width: "15px", height: "15px" }} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { value: "300+", label: "Events Covered" },
                { value: "2,000+", label: "Happy Clients" },
                { value: "100+", label: "Instruments" },
                { value: "10+", label: "Years Experience" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center rounded-2xl px-4 py-8"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p
                    className="font-serif text-3xl md:text-4xl font-bold mb-2"
                    style={{
                      background: "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 55%, #C084FC 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.40)", fontSize: "13px" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TESTIMONIAL
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "28px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5" style={{ fill: "#FBBF24", color: "#FBBF24" }} />
              ))}
            </div>
            <blockquote
              className="font-serif"
              style={{ fontSize: "clamp(1.3rem,2.5vw,1.9rem)", color: "#ffffff", fontStyle: "italic", lineHeight: 1.55, marginBottom: "24px" }}
            >
              "Bongo Productions made our wedding unforgettable. The band was
              phenomenal and the sound equipment was top-notch."
            </blockquote>
            <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.06em" }}>
              — Ama & Kwame, Accra
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
