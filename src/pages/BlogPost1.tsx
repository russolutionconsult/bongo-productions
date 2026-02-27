import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const heroImg = "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1600&auto=format&fit=crop&q=80";

export default function BlogPost1() {
  return (
    <Layout>
      <title>Top 5 Instruments Every Beginner Should Start With | Bongo Productions Blog</title>
      <meta
        name="description"
        content="Looking for the best beginner instruments? Discover the top 5 instruments that are easy to learn, affordable, and fun to play. Shop or rent them at Bongo Productions in Accra, Ghana."
      />
      <meta name="keywords" content="beginner instruments, learn music Ghana, buy instruments Accra, guitar for beginners, keyboard for beginners, Bongo Productions" />

      {/* Hero Image */}
      <div className="relative pt-28 pb-20 overflow-hidden flex items-center justify-center min-h-[50vh]">
        <img
          src={heroImg}
          alt="Musical instruments laid out on a wooden surface — guitars, keyboards, and drums"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.4) saturate(0.8)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(88,28,135,0.25)] via-transparent to-background" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <ScrollReveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/50 text-sm mb-6 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wider mb-4 px-3 py-1 rounded-full"
              style={{ color: "#8B5CF6", background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)" }}
            >
              Tips & Guides
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Top 5 Instruments Every Beginner Should Start With
            </h1>
            <div className="flex items-center justify-center gap-5 text-sm text-white/50">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Feb 20, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 5 min read</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 pb-28">
        <ScrollReveal>
          <div className="prose prose-invert prose-lg max-w-none" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.85 }}>

            {/* Intro */}
            <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", fontSize: "18px", lineHeight: 1.85 }}>
              So you want to learn music? That's great! But with so many instruments out there, choosing the right one can feel confusing. Don't worry — we've made it simple for you. Here are the <strong style={{ color: "#fff" }}>top 5 instruments</strong> that are perfect for beginners. They are easy to learn, affordable, and a lot of fun to play.
            </p>

            <p style={{ fontSize: "16px" }}>
              Whether you're a student, a parent looking for your child's first instrument, or an adult trying something new, this guide will help you make the right choice. And the best part? You can{" "}
              <Link to="/shop" className="text-primary hover:underline font-medium">buy all of these instruments</Link>{" "}
              right here at Bongo Productions in Accra, or{" "}
              <Link to="/rentals" className="text-primary hover:underline font-medium">rent them</Link>{" "}
              if you want to try before you commit.
            </p>

            {/* 1. Acoustic Guitar */}
            <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">1. Acoustic Guitar</h2>
            <img
              src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=900&auto=format&fit=crop&q=80"
              alt="Person playing an acoustic guitar"
              className="w-full h-64 object-cover rounded-xl mb-5"
            />
            <p style={{ fontSize: "16px" }}>
              The acoustic guitar is one of the most popular instruments in the world — and for good reason. It's easy to carry, doesn't need electricity, and you can play almost any type of music with it. From highlife to pop, gospel to afrobeats, the guitar fits everywhere.
            </p>
            <p style={{ fontSize: "16px" }}>
              Most beginners can learn basic chords in just a few weeks. Once you know 3 or 4 chords, you can already play many songs. It's a great feeling!
            </p>
            <p style={{ fontSize: "16px" }}>
              <strong style={{ color: "#fff" }}>Why it's great for beginners:</strong> Affordable, portable, and you can learn at your own pace. Check out our{" "}
              <Link to="/shop" className="text-primary hover:underline font-medium">guitar collection</Link>{" "}
              to find the perfect one.
            </p>

            {/* 2. Keyboard / Piano */}
            <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">2. Keyboard (Piano)</h2>
            <img
              src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=900&auto=format&fit=crop&q=80"
              alt="Electronic keyboard piano keys"
              className="w-full h-64 object-cover rounded-xl mb-5"
            />
            <p style={{ fontSize: "16px" }}>
              The keyboard is the best instrument for understanding how music works. When you look at the keys, you can actually <em>see</em> the notes laid out in order. This makes it much easier to learn music theory, scales, and chords.
            </p>
            <p style={{ fontSize: "16px" }}>
              Modern keyboards come with built-in sounds, drum beats, and recording features. Some even connect to apps on your phone that teach you how to play. It's like having a music teacher right at home.
            </p>
            <p style={{ fontSize: "16px" }}>
              <strong style={{ color: "#fff" }}>Why it's great for beginners:</strong> Visual layout makes learning easy, and it's used in almost every genre of music. Not sure about buying one? You can{" "}
              <Link to="/rentals" className="text-primary hover:underline font-medium">rent a keyboard</Link>{" "}
              from us to try it out first.
            </p>

            {/* 3. Djembe Drum */}
            <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">3. Djembe Drum</h2>
            <img
              src="https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=900&auto=format&fit=crop&q=80"
              alt="Traditional African djembe drums"
              className="w-full h-64 object-cover rounded-xl mb-5"
            />
            <p style={{ fontSize: "16px" }}>
              If you love rhythm and want to feel the music in your hands, the djembe drum is the perfect choice. It's a traditional West African drum that produces deep, warm sounds. You don't need to read music to play it — just feel the beat!
            </p>
            <p style={{ fontSize: "16px" }}>
              The djembe is great for group playing too. Many communities and churches in Ghana use it for worship and celebrations. It's also a fantastic stress reliever — there's something very calming about drumming.
            </p>
            <p style={{ fontSize: "16px" }}>
              <strong style={{ color: "#fff" }}>Why it's great for beginners:</strong> No music reading required, builds your sense of rhythm, and it's deeply rooted in Ghanaian culture.
            </p>

            {/* 4. Ukulele */}
            <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">4. Ukulele</h2>
            <img
              src="https://images.unsplash.com/photo-1556449895-a33c9dba33dd?w=900&auto=format&fit=crop&q=80"
              alt="Small ukulele instrument on a bright background"
              className="w-full h-64 object-cover rounded-xl mb-5"
            />
            <p style={{ fontSize: "16px" }}>
              Think of the ukulele as a smaller, friendlier version of the guitar. It has only 4 strings (instead of 6), which makes it much easier to learn. It's small enough for children and adults alike, and it has a bright, happy sound that makes everyone smile.
            </p>
            <p style={{ fontSize: "16px" }}>
              You can learn your first song on the ukulele in just one day. It's that easy! Plus, it's one of the most affordable instruments you can buy.
            </p>
            <p style={{ fontSize: "16px" }}>
              <strong style={{ color: "#fff" }}>Why it's great for beginners:</strong> Only 4 strings, very affordable, lightweight, and you can learn songs quickly.
            </p>

            {/* 5. Cajon */}
            <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">5. Cajón (Box Drum)</h2>
            <img
              src="https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?w=900&auto=format&fit=crop&q=80"
              alt="Musician sitting on and playing a cajón box drum"
              className="w-full h-64 object-cover rounded-xl mb-5"
            />
            <p style={{ fontSize: "16px" }}>
              The cajón is a box-shaped drum that you sit on and play with your hands. It's become very popular in acoustic bands and church worship teams. It gives you the sound of a full drum kit but in a simple, portable box.
            </p>
            <p style={{ fontSize: "16px" }}>
              The cajón is easy to learn and doesn't take up much space. It's perfect if you want to be the rhythm of the band without needing a full drum set.
            </p>
            <p style={{ fontSize: "16px" }}>
              <strong style={{ color: "#fff" }}>Why it's great for beginners:</strong> Compact, affordable, and gives you drum-like sounds without the complexity.
            </p>

            {/* Summary / CTA */}
            <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">Ready to Start Your Music Journey?</h2>
            <p style={{ fontSize: "16px" }}>
              Choosing your first instrument is the most exciting step. The important thing is to pick something that makes you happy and stick with it. Practice a little every day, and you'll be surprised how quickly you improve.
            </p>
            <p style={{ fontSize: "16px" }}>
              At <strong style={{ color: "#fff" }}>Bongo Productions</strong>, we're here to support you every step of the way. You can:
            </p>
            <ul className="space-y-2 my-4" style={{ fontSize: "16px" }}>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span><Link to="/shop" className="text-primary hover:underline font-medium">Browse and buy instruments</Link> from our curated collection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span><Link to="/rentals" className="text-primary hover:underline font-medium">Rent instruments</Link> on flexible daily, weekly, or monthly plans</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span><Link to="/booking" className="text-primary hover:underline font-medium">Book our band</Link> to hear these instruments live at your next event</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span><Link to="/contact" className="text-primary hover:underline font-medium">Contact us</Link> if you need advice on which instrument is right for you</span>
              </li>
            </ul>
            <p style={{ fontSize: "16px" }}>
              Whether you're in Accra or anywhere in Ghana, we deliver instruments straight to your door. Visit our{" "}
              <Link to="/shop" className="text-primary hover:underline font-medium">online shop</Link>{" "}
              today and take the first step toward making music!
            </p>

          </div>
        </ScrollReveal>

        {/* Share & Navigation */}
        <ScrollReveal>
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to all posts
            </Link>
            <button
              onClick={() => { if (navigator.share) navigator.share({ title: document.title, url: window.location.href }); }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
            >
              <Share2 className="w-4 h-4" /> Share this article
            </button>
          </div>
        </ScrollReveal>

        {/* Related Links */}
        <ScrollReveal>
          <div className="mt-16 glass-card rounded-2xl border border-border p-8">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">You might also like</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                to="/shop"
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎸</span>
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">Shop Instruments</p>
                  <p className="text-muted-foreground text-xs">Browse our full collection</p>
                </div>
              </Link>
              <Link
                to="/rentals"
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎹</span>
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">Rent Equipment</p>
                  <p className="text-muted-foreground text-xs">Try before you buy</p>
                </div>
              </Link>
              <Link
                to="/booking"
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎵</span>
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">Book Our Band</p>
                  <p className="text-muted-foreground text-xs">Live music for your event</p>
                </div>
              </Link>
              <Link
                to="/contact"
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">Get Advice</p>
                  <p className="text-muted-foreground text-xs">We'll help you choose</p>
                </div>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </article>
    </Layout>
  );
}
