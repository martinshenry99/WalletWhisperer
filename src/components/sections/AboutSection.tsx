"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, Award, AlertCircle, Zap, FileCheck } from "lucide-react";

const workflowSteps = [
  {
    icon: Search,
    title: "Scan Wallets",
    description: "Monitor top-performing wallets across multiple chains using real-time on-chain data",
    color: "text-primary",
  },
  {
    icon: BarChart3,
    title: "Analyze",
    description: "AI evaluates wallet history, win rates, position sizes, and trading patterns",
    color: "text-secondary",
  },
  {
    icon: Award,
    title: "Rank",
    description: "Machine learning models score and rank traders based on consistency and profitability",
    color: "text-primary",
  },
  {
    icon: AlertCircle,
    title: "Alert",
    description: "Instant Telegram notifications when high-confidence opportunities are detected",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Execute",
    description: "Automated trade execution with dynamic position sizing and risk management",
    color: "text-primary",
  },
  {
    icon: FileCheck,
    title: "Report",
    description: "Real-time performance tracking, P&L monitoring, and detailed trade analytics",
    color: "text-secondary",
  },
];

const features = [
  {
    title: "Smart Wallet Identification",
    description: "Identifies and ranks top-performing wallets based on historical win rate, trade consistency, average ROI, and position sizing discipline.",
  },
  {
    title: "Token Safety Analysis",
    description: "Comprehensive security checks including honeypot detection, liquidity verification, mint authority analysis, and holder concentration metrics.",
  },
  {
    title: "AI-Powered Decision Making",
    description: "Machine learning models (LightGBM, scikit-learn) optimize entry timing, position sizing, and exit strategies based on real-time market conditions.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
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
            About the <span className="text-primary">Project</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            WalletWhisperer combines blockchain analytics, artificial intelligence, and automated trading 
            to identify and mirror the strategies of successful on-chain traders.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Workflow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-display font-bold text-center mb-12">
            How It <span className="text-primary">Works</span>
          </h3>

          {/* Desktop Workflow */}
          <div className="hidden lg:flex items-center justify-between relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center z-10"
                >
                  <div className={`w-20 h-20 rounded-full bg-card border-2 border-border flex items-center justify-center mb-4 ${step.color} hover:scale-110 transition-transform`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <div className="text-center max-w-[140px]">
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-xs text-foreground/60">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Workflow */}
          <div className="lg:hidden space-y-6">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 card-gradient border border-border rounded-xl p-4"
                >
                  <div className={`w-14 h-14 rounded-full bg-background border-2 border-border flex items-center justify-center flex-shrink-0 ${step.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-foreground/60">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-gradient border border-border rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">AI & Tech Stack</h3>
          <p className="text-foreground/70 mb-6">
            Built with Python, leveraging industry-standard machine learning libraries and Web3 infrastructure
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Python", "LightGBM", "scikit-learn", "PyOD", "Web3.py", "Telegram Bot API", "DexScreener API", "BitQuery", "De.Fi"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
