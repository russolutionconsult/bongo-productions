import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Star, Shield, Truck, RefreshCw, FileText } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/lib/products";

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] || null);
    }
  }, [product]);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
            <Link to="/shop" className="text-primary hover:underline">
              Return to Shop
            </Link>
          </div>
        </div>
      </Layout>
    );
  }


  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      <title>{product.name} — Bongo Productions</title>
      <meta name="description" content={selectedVariant ? selectedVariant.description : product.description} />

      <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        {/* Product Detail */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <ScrollReveal>
            <div className={`relative rounded-2xl overflow-hidden border border-border ${product.imageFit === 'contain' ? 'bg-white/5' : 'bg-[hsl(240,12%,6%)]'}`}>
              <img
                src={selectedVariant ? selectedVariant.image : product.image}
                alt={selectedVariant ? `${product.name} - ${selectedVariant.colorName}` : product.name}
                className={`w-full aspect-[4/3] md:h-[500px] ${product.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
              />
              {product.featured && (
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10">
                  Featured
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Product Info */}
          <ScrollReveal delay={0.2}>
            <div>
              <p className="category-badge mb-3">{product.categoryLabel}</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(24 reviews)</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedVariant ? selectedVariant.description : product.description}
              </p>

              {/* Variants / Color Slider */}
              {product.variants && product.variants.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-foreground">Color / Model:</p>
                    <span className="text-sm text-muted-foreground">{selectedVariant?.colorName}</span>
                  </div>
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                          selectedVariant?.id === variant.id ? 'border-primary' : 'border-border hover:border-primary/50'
                        }`}
                        title={variant.colorName}
                      >
                        <div className={`absolute inset-0 ${product.imageFit === 'contain' ? 'bg-white/5' : 'bg-black/20'}`} />
                        <img 
                          src={variant.image} 
                          alt={variant.colorName}
                          className="w-full h-full object-contain p-1"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              {product.specs && product.specs.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Specifications</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-sm font-medium text-foreground mb-3">Quantity</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-[hsl(240,12%,8%)] border border-border text-foreground hover:border-primary/40 transition-colors"
                  >
                    −
                  </button>
                  <span className="w-16 text-center font-semibold text-foreground">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg bg-[hsl(240,12%,8%)] border border-border text-foreground hover:border-primary/40 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">
                    GH₵{(product.price * quantity).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <Link
                to={`/request-quote?productId=${product.id}${selectedVariant ? `&variantId=${selectedVariant.id}` : ''}`}
                className="w-full py-4 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 mb-8"
              >
                <FileText className="w-5 h-5" />
                Request for a Quote
              </Link>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, text: "1 Year Warranty" },
                  { icon: Truck, text: "Free Delivery" },
                  { icon: RefreshCw, text: "30-Day Returns" },
                  { icon: Check, text: "Quality Guaranteed" },
                ].map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <feature.icon className="w-4 h-4 text-primary" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <ScrollReveal>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Related Products
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, i) => (
                <ScrollReveal key={relatedProduct.id} delay={i * 0.1} className="h-full">
                  <Link
                    to={`/product/${relatedProduct.id}`}
                    className="group block bg-gradient-card glass-card rounded-2xl overflow-hidden hover-lift h-full flex flex-col"
                  >
                    <div className={`relative aspect-[4/3] sm:h-52 overflow-hidden shrink-0 ${relatedProduct.imageFit === 'contain' ? 'bg-white/5' : 'bg-[hsl(240,12%,6%)]'}`}>
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className={`w-full h-full ${relatedProduct.imageFit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-700 group-hover:scale-110`}
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="category-badge mb-2">{relatedProduct.categoryLabel}</p>
                      <h3 className="font-serif text-base font-semibold text-foreground mb-2 min-h-[2.75rem]">
                        {relatedProduct.name}
                      </h3>
                      <div className="mt-auto">
                        <p className="text-foreground font-bold text-lg">GH₵{relatedProduct.price.toLocaleString()}</p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
