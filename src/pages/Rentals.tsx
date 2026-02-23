import { Clock, Shield, Headphones, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/lib/products";

const heroBg = "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=1600&auto=format&fit=crop&q=80";

export default function Rentals() {
  return (
    <Layout>
      <title>Rent Musical Equipment — Bongo Productions</title>
      <meta name="description" content="Flexible rental plans for events, studio sessions, or exploring a new instrument." />

      {/* Hero Banner */}
      <div className="relative pt-28 pb-20 overflow-hidden">
        <img
          src={heroBg}
          alt="Music equipment"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.15) saturate(0.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="section-label">Rentals</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
              Rent Instruments
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Flexible rental plans for events, studio sessions, or exploring a new instrument.
            </p>
          </ScrollReveal>

          {/* Perks */}
          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            {[
              { icon: Clock, title: "Flexible Duration", desc: "Daily, weekly, or monthly rental options." },
              { icon: Shield, title: "Insured Equipment", desc: "All instruments are fully insured during rental." },
              { icon: Headphones, title: "Expert Support", desc: "Setup assistance and technical support included." },
            ].map((perk) => (
              <ScrollReveal key={perk.title}>
                <div className="flex items-start gap-4 glass-card rounded-xl p-5 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <perk.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{perk.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{perk.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Rental Grid */}
      <div className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.07}>
              <div className="group bg-gradient-card glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer">
                <div className="relative h-52 overflow-hidden bg-[hsl(240,12%,6%)]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240,12%,7%)] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-5">
                  <p className="category-badge mb-2">{product.categoryLabel}</p>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-foreground font-bold text-lg">GH₵{product.rentalPrice.toLocaleString()}</span>
                      <span className="text-muted-foreground text-xs">/day</span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-all duration-200">
                      <ArrowRight className="w-3.5 h-3.5" /> Rent
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Layout>
  );
}
