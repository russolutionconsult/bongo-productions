import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const blogPosts = [
  {
    id: 1,
    slug: "/blog/top-5-beginner-instruments",
    title: "Top 5 Instruments Every Beginner Should Start With",
    excerpt: "Starting your musical journey? Here are the best instruments for beginners that will set you on the path to success.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=80",
    date: "Feb 20, 2026",
    readTime: "5 min read",
    category: "Tips & Guides",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Band for Your Wedding",
    excerpt: "Your big day deserves the perfect soundtrack. Learn what to look for when booking a live band for your wedding.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80",
    date: "Feb 15, 2026",
    readTime: "4 min read",
    category: "Events",
  },
  {
    id: 3,
    title: "The Rise of Highlife Music in Modern Ghana",
    excerpt: "Exploring how traditional highlife is blending with contemporary sounds to create a vibrant new wave of Ghanaian music.",
    image: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=800&auto=format&fit=crop&q=80",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    category: "Culture",
  },
  {
    id: 4,
    title: "Caring for Your Guitar: A Complete Maintenance Guide",
    excerpt: "Keep your guitar sounding its best with these essential maintenance tips from our expert technicians.",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&auto=format&fit=crop&q=80",
    date: "Feb 5, 2026",
    readTime: "7 min read",
    category: "Tips & Guides",
  },
  {
    id: 5,
    title: "Behind the Scenes: Setting Up for a Corporate Event",
    excerpt: "A look at what goes into preparing a professional music setup for large-scale corporate events in Accra.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    category: "Events",
  },
  {
    id: 6,
    title: "Why Renting Instruments Makes Sense for Events",
    excerpt: "Discover the benefits of renting professional-grade instruments instead of buying for your next event or session.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
    date: "Jan 20, 2026",
    readTime: "4 min read",
    category: "Rentals",
  },
];

const heroBg = "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1600&auto=format&fit=crop&q=80";

export default function Blog() {
  return (
    <Layout>
      <title>Blog — Bongo Productions</title>
      <meta name="description" content="Read the latest news, tips, and stories from Bongo Productions. Music insights, event guides, and more." />

      {/* Hero Banner */}
      <div className="relative pt-28 pb-20 overflow-hidden flex items-center justify-center min-h-[45vh]">
        <img
          src={heroBg}
          alt="Music notes and sheet music"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35) saturate(0.7)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(88,28,135,0.30)] via-transparent to-background" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">Blog</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
              Stories & Insights
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Music tips, event guides, and the latest from Bongo Productions.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-28">
        {/* Featured Post */}
        <ScrollReveal>
          <Link to="/blog/top-5-beginner-instruments" className="group block mb-12">
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="glass-card p-8 md:p-10 flex flex-col justify-center">
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-wider mb-3 px-3 py-1 rounded-full w-fit"
                  style={{ color: "#8B5CF6", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)" }}
                >
                  {blogPosts[0].category}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{blogPosts[0].date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {blogPosts[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* Other Posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.1}>
              <Link to="#" className="group block glass-card rounded-xl overflow-hidden border border-border hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{ color: "#fff", background: "rgba(139,92,246,0.75)", backdropFilter: "blur(4px)" }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Layout>
  );
}
