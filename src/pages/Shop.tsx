import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <title>Shop Musical Instruments — Bongo Productions</title>
      <meta name="description" content="Browse our curated selection of professional-grade musical instruments." />

      {/* Page Header */}
      <div className="pt-28 pb-12 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="section-label">Shop</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            Musical Instruments
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Browse our curated selection of professional-grade instruments.
          </p>
        </ScrollReveal>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                ? "bg-primary text-white shadow-purple-sm"
                : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="pb-24 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.07}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}
