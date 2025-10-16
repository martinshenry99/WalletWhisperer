"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Brain, Shield } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="grid-background absolute inset-0 opacity-30" />
        
        {/* Glowing orbs */}
        <div className="glow-orb w-96 h-96 bg-primary/30 top-20 -left-48" style={{ animationDelay: "0s" }} />
        <div className="glow-orb w-80 h-80 bg-secondary/20 bottom-20 -right-40" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8"
          >
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Trading Intelligence</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            Wallet<span className="text-primary">Whisperer</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-foreground/80">
              AI That Listens to the Blockchain
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            My personal trading automation project using on-chain intelligence. 
            An AI-powered Telegram bot that scans blockchain wallets, analyzes top traders, 
            mirrors strategic trades, and manages portfolio performance with precision.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12"
          >
            <div className="card-gradient border border-border rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">69.4%</div>
              <div className="text-xs sm:text-sm text-foreground/60">Win Rate</div>
            </div>
            <div className="card-gradient border border-border rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1">+284%</div>
              <div className="text-xs sm:text-sm text-foreground/60">Total ROI</div>
            </div>
            <div className="card-gradient border border-border rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">147</div>
              <div className="text-xs sm:text-sm text-foreground/60">Trades</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#performance"
              className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-background font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Explore Results</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-card hover:bg-card/80 border border-border font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              <Shield className="w-5 h-5" />
              <span>See How It Works</span>
            </a>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-xs sm:text-sm text-foreground/40 max-w-2xl mx-auto"
          >
            Personal project showcase. Historical results from testing. Not financial advice.
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
