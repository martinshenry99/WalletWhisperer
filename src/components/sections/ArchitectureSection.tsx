"use client";

import { motion } from "framer-motion";
import { Database, Brain, Zap, Shield, Activity, TrendingUp } from "lucide-react";

const dataFlow = [
  {
    title: "Data Sources",
    icon: Database,
    items: [
      "DexScreener API - Real-time token prices & liquidity",
      "BitQuery - On-chain transaction analysis",
      "De.Fi API - Token safety & honeypot detection",
      "RPC Endpoints - Direct blockchain queries",
      "Telegram Bot API - User interface & alerts",
    ],
    color: "text-primary",
  },
  {
    title: "AI Modules",
    icon: Brain,
    items: [
      "Trader Ranking Model (LightGBM) - Scores wallets by performance",
      "Entry Decision Model (XGBoost) - Predicts optimal timing",
      "Risk Scorer (PyOD) - Detects anomalies & red flags",
      "Stop-Loss Optimizer - Dynamic exit strategy",
      "Position Sizer - Confidence-based allocation",
    ],
    color: "text-secondary",
  },
  {
    title: "Execution Flow",
    icon: Zap,
    items: [
      "Continuous wallet monitoring & pattern detection",
      "Multi-factor safety validation pipeline",
      "AI confidence scoring & trade signal generation",
      "Automated position entry with slippage protection",
      "Real-time P&L tracking & risk monitoring",
      "Smart exit execution (take-profit / stop-loss)",
    ],
    color: "text-primary",
  },
];

const architectureComponents = [
  {
    icon: Activity,
    title: "Real-Time Scanner",
    description: "Monitors 100+ top wallets every 30 seconds for new positions and trading patterns",
  },
  {
    icon: Shield,
    title: "Safety Layer",
    description: "Multi-source verification: honeypot checks, liquidity locks, mint authority, holder analysis",
  },
  {
    icon: Brain,
    title: "AI Decision Engine",
    description: "Machine learning models trained on 1,200+ historical trades for entry/exit optimization",
  },
  {
    icon: TrendingUp,
    title: "Portfolio Manager",
    description: "Dynamic position sizing, automated rebalancing, and risk-adjusted allocation",
  },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 sm:py-32 relative bg-card/30">
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
            System <span className="text-primary">Architecture</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A comprehensive breakdown of data sources, AI modules, and execution logic that power WalletWhisperer.
          </p>
        </motion.div>

        {/* Architecture Components */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {architectureComponents.map((component, index) => {
            const Icon = component.icon;
            return (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-gradient border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{component.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{component.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Data Flow Diagram */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {dataFlow.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="card-gradient border border-border rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-background rounded-lg flex items-center justify-center ${section.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${section.color === 'text-primary' ? 'bg-primary' : 'bg-secondary'}`} />
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-gradient border border-border rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">System Flow</h3>
          
          {/* Visual Flow Diagram */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-4">
            {[
              { label: "Blockchain\nData", icon: "🔗" },
              { label: "Data\nAggregation", icon: "📊" },
              { label: "AI\nAnalysis", icon: "🧠" },
              { label: "Risk\nValidation", icon: "🛡️" },
              { label: "Trade\nExecution", icon: "⚡" },
              { label: "Portfolio\nTracking", icon: "📈" },
            ].map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-background border-2 border-primary/30 rounded-xl flex items-center justify-center text-3xl mb-2 hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <p className="text-xs text-center text-foreground/70 whitespace-pre-line font-medium">
                    {step.label}
                  </p>
                </motion.div>
                {index < 5 && (
                  <div className="hidden lg:block w-8 h-0.5 bg-gradient-to-r from-primary to-secondary mx-2" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-foreground/60 text-center max-w-3xl mx-auto">
              The system operates in a continuous loop: scanning blockchain data → analyzing with AI → 
              validating safety → executing trades → tracking performance → feeding results back into the AI models for improvement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
