import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowLeft, Send, Package, Info, List } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/lib/products";

export default function RequestQuote() {
    const [searchParams] = useSearchParams();
    const productId = searchParams.get("productId");
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        quantity: "1",
        message: "",
    });

    const product = products.find((p) => p.id === productId);

    useEffect(() => {
        if (product) {
            setForm((prev) => ({
                ...prev,
                message: `I would like to request a quote for the ${product.name}.`,
            }));
        }
    }, [product]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <Layout>
            <title>Request a Quote — Bongo Productions</title>

            <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
                <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Shop
                </Link>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20 glass-card rounded-2xl border border-border"
                    >
                        <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10 text-green-500" />
                        </div>
                        <h1 className="font-serif text-3xl font-bold text-white mb-4">Quote Request Sent!</h1>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                            Thank you for your interest. Our team will review your request for the <strong>{product?.name}</strong> and get back to you with a formal quote within 24 hours.
                        </p>
                        <Link
                            to="/shop"
                            className="inline-flex px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-purple-sm"
                        >
                            Back to Shop
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Product Summary — Left */}
                        <div className="lg:col-span-2">
                            <ScrollReveal>
                                <div className="space-y-6 sticky top-24">
                                    {product ? (
                                        <div className="glass-card rounded-2xl border border-border overflow-hidden">
                                            <div className="h-48 overflow-hidden bg-[hsl(240,12%,6%)] border-b border-border">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="p-6">
                                                <p className="category-badge mb-3">{product.categoryLabel}</p>
                                                <h2 className="font-serif text-2xl font-bold text-white mb-3">{product.name}</h2>
                                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                                    {product.description}
                                                </p>

                                                {product.specs && product.specs.length > 0 && (
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-4 text-white">
                                                            <List className="w-4 h-4 text-primary" />
                                                            <h3 className="text-sm font-semibold uppercase tracking-wider">Specifications</h3>
                                                        </div>
                                                        <ul className="space-y-2">
                                                            {product.specs.map((spec, index) => (
                                                                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                                                                    <div className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                                                                    {spec}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="glass-card rounded-2xl border border-border p-8 text-center">
                                            <Info className="w-12 h-12 text-primary/20 mx-auto mb-4" />
                                            <p className="text-muted-foreground">Please select a product from the shop to see details here.</p>
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Form Section — Right */}
                        <div className="lg:col-span-3">
                            <ScrollReveal delay={0.2}>
                                <div className="glass-card rounded-2xl border border-border p-8">
                                    <h1 className="font-serif text-3xl font-bold text-white mb-2">Request a Quote</h1>
                                    <p className="text-muted-foreground mb-8 text-sm">
                                        Fill out the form below and we'll provide you with a customized quote.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
                                            <div className="flex items-center gap-3">
                                                <Package className="w-5 h-5 text-primary" />
                                                <div>
                                                    <p className="text-xs text-primary uppercase tracking-wider font-bold">Selected Product</p>
                                                    <p className="text-foreground font-semibold">{product?.name || "No product selected"}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={form.name}
                                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                    className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={form.email}
                                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                    className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Phone</label>
                                                <input
                                                    type="tel"
                                                    value={form.phone}
                                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                    className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                                                    placeholder="+233 XX XXX XXXX"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Quantity</label>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={form.quantity}
                                                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                                                    className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Additional Notes</label>
                                            <textarea
                                                rows={4}
                                                value={form.message}
                                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                                placeholder="Any specific requirements?"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-purple-sm flex items-center justify-center gap-2"
                                        >
                                            <Send className="w-4 h-4" />
                                            Submit Quote Request
                                        </button>
                                    </form>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
