import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CreditCard, Tag, Check, Lock } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { useCart } from "@/context/CartContext";

const COUPON_CODES = {
  WELCOME10: { discount: 0.1, type: "percentage", description: "10% off your order" },
  SAVE25: { discount: 25, type: "fixed", description: "$25 off" },
  FREESHIP: { discount: 0, type: "shipping", description: "Free shipping" },
};

export default function Checkout() {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Ghana",
    phone: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<keyof typeof COUPON_CODES | null>(null);
  const [couponError, setCouponError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (items.length === 0 && !orderComplete) {
    navigate("/cart");
    return null;
  }

  const subtotal = getCartTotal();
  const baseShipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.075;

  let discount = 0;
  let shipping = baseShipping;

  if (appliedCoupon) {
    const coupon = COUPON_CODES[appliedCoupon];
    if (coupon.type === "percentage") {
      discount = subtotal * coupon.discount;
    } else if (coupon.type === "fixed") {
      discount = coupon.discount;
    } else if (coupon.type === "shipping") {
      shipping = 0;
    }
  }

  const total = subtotal - discount + shipping + tax;

  const handleApplyCoupon = () => {
    const code = couponCode.toUpperCase().trim();
    if (COUPON_CODES[code as keyof typeof COUPON_CODES]) {
      setAppliedCoupon(code as keyof typeof COUPON_CODES);
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code");
      setAppliedCoupon(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setProcessing(false);
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              Order Successful!
            </h1>
            <p className="text-muted-foreground mb-2 leading-relaxed">
              Thank you for your purchase! Your order has been confirmed.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Order confirmation has been sent to {formData.email}
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-purple-sm"
            >
              Back to Home
            </button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <title>Checkout — Bongo Productions</title>

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
            Checkout
          </h1>
        </ScrollReveal>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <ScrollReveal>
                <div className="glass-card rounded-2xl border border-border p-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Shipping Address */}
              <ScrollReveal delay={0.1}>
                <div className="glass-card rounded-2xl border border-border p-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Shipping Address
                  </h2>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                        Street Address
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                          City
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                          State/Region
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                          ZIP/Postal Code
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                          Country
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Payment Information */}
              <ScrollReveal delay={0.2}>
                <div className="glass-card rounded-2xl border border-border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Payment Details
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Lock className="w-4 h-4" />
                      <span>Secure Payment</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          maxLength={19}
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                          className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                          placeholder="1234 5678 9012 3456"
                        />
                        <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cardName}
                        onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                        className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="Name on card"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={5}
                          value={formData.expiryDate}
                          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                          className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                          CVV
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={3}
                          value={formData.cvv}
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                          className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={0.3}>
                <div className="glass-card rounded-2xl border border-border p-6 sticky top-24">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Order Summary
                  </h2>

                  {/* Cart Items */}
                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.isRental}`} className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-[hsl(240,12%,6%)] flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                          {item.isRental && (
                            <span className="inline-block px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full mt-1">
                              Rental
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-foreground">
                            ${(item.isRental ? item.rentalPrice : item.price) * item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Coupon Code */}
                  <div className="mb-6 pb-6 border-b border-border">
                    <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                      Coupon Code
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                          placeholder="Enter code"
                        />
                        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      </div>
                      <button
                        type="button"
                        onClick={handleApplyCoupon}
                        className="px-4 py-3 rounded-xl bg-primary/20 border border-primary/30 text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all"
                      >
                        Apply
                      </button>
                    </div>
                    {appliedCoupon && (
                      <p className="text-xs text-green-500 mt-2 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        {COUPON_CODES[appliedCoupon].description} applied!
                      </p>
                    )}
                    {couponError && (
                      <p className="text-xs text-red-500 mt-2">{couponError}</p>
                    )}
                    <div className="mt-3 space-y-1">
                      <p className="text-xs text-muted-foreground">Try these codes:</p>
                      <p className="text-xs text-primary">WELCOME10, SAVE25, FREESHIP</p>
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Discount</span>
                        <span className="text-green-500 font-semibold">-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground font-semibold">
                        {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax (7.5%)</span>
                      <span className="text-foreground font-semibold">${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-6">
                    <span className="text-lg font-bold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-purple-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {processing ? "Processing..." : "Complete Order"}
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
