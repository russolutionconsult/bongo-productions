import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const aboutBg = "/about-hero.png";
const missionBg = "https://images.unsplash.com/photo-1514320298573-73a5e7ec373b?w=1600&auto=format&fit=crop&q=80"; // Crowd at concert / passionate musicians

const stats = [
  { value: "300+", label: "Events Covered" },
  { value: "2,000+", label: "Happy Clients" },
  { value: "100+", label: "Instruments" },
  { value: "10+", label: "Years Experience" },
];

const values = [
  { title: "Quality First", desc: "Every instrument we sell or rent meets our exacting standards." },
  { title: "Client Focused", desc: "Your satisfaction drives every decision we make." },
  { title: "Musical Excellence", desc: "Our band members are Ghana's finest professional musicians." },
  { title: "Community", desc: "We invest in music education and local talent development." },
];

export default function About() {
  return (
    <Layout>
      <title>Our Story — Bongo Productions</title>
      <meta name="description" content="Passionate about music. Dedicated to excellence. Learn about Bongo Productions." />

      {/* Hero */}
      <div className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <img
          src={aboutBg}
          alt="Professional music studio"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.4) saturate(0.8)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(88,28,135,0.2)] via-transparent to-background/90" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto pt-24 pb-20">
          <ScrollReveal>
            <p className="section-label text-center mb-4">About</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Our Story</h1>
            <p className="text-white/55 text-lg">Passionate about music. Dedicated to excellence.</p>
          </ScrollReveal>
        </div>
      </div>

      {/* Story Body */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Bringing Music to Life in Ghana
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Founded in Accra, Bongo Productions is more than a music store — we're a community of passionate
              musicians, sound engineers, and music lovers. We provide premium instruments, professional rental
              services, and unforgettable live band experiences for every occasion.
            </p>
          </div>
        </ScrollReveal>

        {/* Mission Banner Section */}
        <ScrollReveal>
          <div className="relative h-[400px] rounded-3xl overflow-hidden my-16 group">
            <img
              src={missionBg}
              alt="Our Mission"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ filter: "brightness(0.3) saturate(0.8)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent flex items-center px-10 md:px-16">
              <div className="max-w-md">
                <h3 className="font-serif text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/70 leading-relaxed">
                  To empower every artist and enthusiast with the tools, the stage, and the sound they deserve.
                  We strive to be the heartbeat of Ghana's musical future.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-6 border border-border text-center">
                <p className="font-serif text-3xl font-bold text-gradient-purple mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Values */}
        <ScrollReveal>
          <div className="glass-card rounded-2xl border border-border p-8">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">Our Values</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title}>
                  <h4 className="font-semibold text-foreground text-sm mb-2 text-primary">{v.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-purple"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Layout>
  );
}
