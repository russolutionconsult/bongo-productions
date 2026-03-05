import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { products, categories, subcategories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const subcategoryFromUrl = searchParams.get("subcategory");

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  // Sync with URL params when they change
  useEffect(() => {
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    } else {
      setActiveCategory("All");
    }

    if (subcategoryFromUrl) {
      setActiveSubcategory(subcategoryFromUrl);
    } else {
      setActiveSubcategory(null);
    }
  }, [categoryFromUrl, subcategoryFromUrl]);

  // Get subcategories for the active category
  const activeSubs = subcategories[activeCategory] || [];

  const filtered = products.filter((p) => {
    if (activeCategory !== "All" && p.category !== activeCategory) return false;
    if (activeSubcategory && p.subcategory !== activeSubcategory) return false;
    return true;
  });

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    setActiveSubcategory(null);
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const handleSubcategoryClick = (sub: string) => {
    if (activeSubcategory === sub) {
      setActiveSubcategory(null);
      setSearchParams({ category: activeCategory });
    } else {
      setActiveSubcategory(sub);
      setSearchParams({ category: activeCategory, subcategory: sub });
    }
  };

  return (
    <Layout>
      <title>Shop Musical Instruments — Bongo Productions</title>
      <meta name="description" content="Browse our curated selection of professional-grade musical instruments." />

      {/* Page Header */}
      <div className="pt-28 pb-12 px-6 max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <p className="section-label mx-auto">Shop</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            Musical Instruments
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mx-auto">
            Browse our curated selection of professional-grade instruments.
          </p>
        </ScrollReveal>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                ? "bg-primary text-white shadow-purple-sm"
                : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Subcategory Filters */}
        {activeSubs.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {activeSubs.map((sub) => (
              <button
                key={sub}
                onClick={() => handleSubcategoryClick(sub)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${activeSubcategory === sub
                  ? "bg-primary/20 text-primary border border-primary/40"
                  : "border border-border/50 text-muted-foreground/70 hover:border-primary/30 hover:text-foreground"
                  }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Grid */}
      <div className="pb-24 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`${activeCategory}-${activeSubcategory}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.length > 0 ? (
              filtered.map((product, i) => (
                <ScrollReveal key={product.id} delay={i * 0.07}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-muted-foreground text-lg mb-2">No products found in this category yet.</p>
                <p className="text-muted-foreground/60 text-sm">Check back soon — new gear is on the way!</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}

