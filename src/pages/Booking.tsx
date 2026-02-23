import { useState } from "react";
import { motion } from "framer-motion";
import { Music2, Users, Clock, CalendarDays, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const bandBg = "https://images.unsplash.com/photo-1501386761578-eaa54b01af4f?w=1600&auto=format&fit=crop&q=80";

const perks = [
  { icon: Music2, title: "Multiple Genres", desc: "Afro, highlife, gospel, jazz, pop & more." },
  { icon: Users, title: "3–12 Musicians", desc: "Flexible ensemble size for any event." },
  { icon: Clock, title: "Flexible Dates", desc: "Available 7 days a week for your schedule." },
  { icon: CalendarDays, title: "2–8 Hour Sets", desc: "Choose the performance duration you need." },
];

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Funeral / Celebration of Life",
  "Church / Religious Event",
  "Concert",
  "Other",
];

export default function Booking() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", eventType: "", details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <title>Book Our Band — Bongo Productions</title>
      <meta name="description" content="Book professional musicians for weddings, corporate events, and private celebrations in Accra, Ghana." />

      {/* Hero Banner */}
      <div className="relative pt-28 pb-24 overflow-hidden flex items-center justify-center min-h-[55vh]">
        <img
          src={bandBg}
          alt="Band performing on stage"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.2) saturate(0.6)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(88,28,135,0.35)] to-background" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">Booking</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
              Book Our Band
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Professional musicians for weddings, corporate events, and private celebrations.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Perks */}
      <div className="max-w-5xl mx-auto px-6 -mt-8 mb-16">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {perks.map((perk) => (
              <div key={perk.title} className="glass-card rounded-xl p-5 border border-border text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                  <perk.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{perk.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Booking Form */}
      <div className="max-w-2xl mx-auto px-6 pb-28">
        <ScrollReveal>
          <div className="glass-card rounded-2xl border border-border p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Request a Booking</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                  <Music2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Request Received!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Thank you! We'll review your booking request and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Phone</label>
                    <input
                      type="tel"
                      placeholder="+233 XX XXX XXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Event Date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      required
                      className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Event Type</label>
                  <select
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    required
                    className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                  >
                    <option value="" disabled>Select event type</option>
                    {eventTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-[38px] w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Additional Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your event..."
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    className="w-full bg-[hsl(240,12%,8%)] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-purple-sm hover:shadow-purple"
                >
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </Layout>
  );
}
