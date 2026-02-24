import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Check, Star, Shield, Truck, RefreshCw } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [purchaseType, setPurchaseType] = useState<"buy" | "rent">("buy");
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);

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

  const handleAddToCart = () => {
    addToCart(product, purchaseType === "rent");
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, purchaseType === "rent");
    navigate("/cart");
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      <title>{product.name} — Bongo Productions</title>
      <meta name="description" content={product.description} />

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
            <div className="relative rounded-2xl overflow-hidden bg-[hsl(240,12%,6%)] border border-border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
              {product.featured && (
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
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

              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              {/* Purchase Type Toggle */}
              <div className="mb-6">
                <p className="text-sm font-medium text-foreground mb-3">Purchase Type</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setPurchaseType("buy")}
                    className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                      purchaseType === "buy"
                        ? "bg-primary text-white shadow-purple-sm"
                        : "bg-[hsl(240,12%,8%)] border border-border text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    Buy GH₵{product.price.toLocaleString()}
                  </button>
                  <button
                    onClick={() => setPurchaseType("rent")}
                    className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                      purchaseType === "rent"
                        ? "bg-primary text-white shadow-purple-sm"
                        : "bg-[hsl(240,12%,8%)] border border-border text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    Rent GH₵{product.rentalPrice.toLocaleString()}/day
                  </button>
                </div>
              </div>

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
                    GH₵{(purchaseType === "buy" ? product.price : product.rentalPrice).toLocaleString()}
                  </span>
                  {purchaseType === "rent" && (
                    <span className="text-muted-foreground">/day</span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 rounded-full bg-[hsl(240,12%,8%)] border border-border text-foreground font-semibold hover:border-primary/40 transition-all flex items-center justify-center gap-2"
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5" /> Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" /> Add to Cart
                    </>
                  )}
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-purple-sm"
                >
                  Buy Now
                </button>
              </div>

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
                <ScrollReveal key={relatedProduct.id} delay={i * 0.1}>
                  <Link
                    to={`/product/${relatedProduct.id}`}
                    className="group block bg-gradient-card glass-card rounded-2xl overflow-hidden hover-lift"
                  >
                    <div className="relative h-52 overflow-hidden bg-[hsl(240,12%,6%)]">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <p className="category-badge mb-2">{relatedProduct.categoryLabel}</p>
                      <h3 className="font-serif text-base font-semibold text-foreground mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-foreground font-bold text-lg">GH₵{relatedProduct.price.toLocaleString()}</p>
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
