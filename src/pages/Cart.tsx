import { Link, useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <Layout>
        <title>Shopping Cart — Bongo Productions</title>
        <div className="min-h-screen flex items-center justify-center px-6">
          <ScrollReveal>
            <div className="text-center max-w-md">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Looks like you haven't added any instruments to your cart yet.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-purple-sm"
              >
                Start Shopping <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Layout>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 6000 ? 0 : 300;
  const tax = subtotal * 0.075; // 7.5% tax
  const total = subtotal + shipping + tax;

  return (
    <Layout>
      <title>Shopping Cart — Bongo Productions</title>

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
                Shopping Cart
              </h1>
              <p className="text-muted-foreground">
                {items.length} {items.length === 1 ? "item" : "items"} in your cart
              </p>
            </div>
            <button
              onClick={clearCart}
              className="text-sm text-muted-foreground hover:text-red-500 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <ScrollReveal key={`${item.id}-${item.isRental}`} delay={i * 0.05}>
                <div className="glass-card rounded-2xl border border-border p-6 flex gap-6">
                  {/* Image */}
                  <Link
                    to={`/product/${item.id}`}
                    className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-[hsl(240,12%,6%)]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          className="font-serif text-lg font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.categoryLabel}
                          {item.isRental && (
                            <span className="ml-2 inline-block px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                              Rental
                            </span>
                          )}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-[hsl(240,12%,8%)] border border-border text-foreground hover:border-primary/40 transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-semibold text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-[hsl(240,12%,8%)] border border-border text-foreground hover:border-primary/40 transition-colors flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          GH₵{((item.isRental ? item.rentalPrice : item.price) * item.quantity).toLocaleString()}
                        </p>
                        {item.isRental && (
                          <p className="text-xs text-muted-foreground">
                            GH₵{item.rentalPrice.toLocaleString()}/day
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <ScrollReveal delay={0.2}>
              <div className="glass-card rounded-2xl border border-border p-6 sticky top-24">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground font-semibold">GH₵{subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground font-semibold">
                      {shipping === 0 ? "FREE" : `GH₵${shipping.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-xs text-green-500">
                      🎉 You've qualified for free shipping!
                    </p>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (7.5%)</span>
                    <span className="text-foreground font-semibold">GH₵{tax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="text-lg font-bold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-primary">GH₵{total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-purple-sm flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ArrowRight className="w-5 h-5" />
                </button>

                <Link
                  to="/shop"
                  className="block text-center text-sm text-muted-foreground hover:text-foreground mt-4 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Layout>
  );
}
