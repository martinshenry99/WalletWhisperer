"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";
import blogPosts from "@/data/blog-posts.json";

export default function UpdatesSection() {
  return (
    <section id="updates" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Project <span className="text-primary">Updates</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Development logs, performance reports, and technical insights from the WalletWhisperer journey.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-gradient border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all group"
            >
              {/* Post Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center space-x-2 text-sm text-foreground/60 mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Post Preview */}
              <div className="p-6">
                <div className="prose prose-sm prose-invert max-w-none">
                  <div className="text-foreground/60 text-sm line-clamp-6">
                    {post.content.split("\n").slice(0, 3).join("\n")}
                  </div>
                </div>
                
                <button className="mt-4 inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-medium text-sm group-hover:translate-x-1 transition-transform">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Featured Update - Latest Post Expanded */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 card-gradient border-2 border-primary/30 rounded-xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold">Latest Highlight</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3">{blogPosts[0].title}</h4>
              <div className="flex items-center space-x-2 text-sm text-foreground/60 mb-4">
                <Calendar className="w-4 h-4" />
                <time dateTime={blogPosts[0].date}>
                  {new Date(blogPosts[0].date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background border border-border rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-1">+69.3%</div>
                <div className="text-sm text-foreground/60">Total ROI</div>
              </div>
              <div className="bg-background border border-border rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-1">75.8%</div>
                <div className="text-sm text-foreground/60">Win Rate</div>
              </div>
              <div className="bg-background border border-border rounded-lg p-4">
                <div className="text-3xl font-bold text-secondary mb-1">33</div>
                <div className="text-sm text-foreground/60">Trades</div>
              </div>
              <div className="bg-background border border-border rounded-lg p-4">
                <div className="text-3xl font-bold text-secondary mb-1">+156%</div>
                <div className="text-sm text-foreground/60">Best Trade</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
