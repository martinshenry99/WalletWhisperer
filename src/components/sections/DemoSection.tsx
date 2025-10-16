"use client";

import { motion } from "framer-motion";
import { MessageSquare, TrendingUp, AlertTriangle } from "lucide-react";
import DemoVideo from "@/components/DemoVideo";

const demoFeatures = [
  {
    icon: MessageSquare,
    title: "Telegram Interface",
    description: "Clean, intuitive bot commands for monitoring and control",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Alerts",
    description: "Instant notifications when high-confidence trades are detected",
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    description: "Automated stop-loss, position sizing, and panic sell features",
  },
];

const commands = [
  { cmd: "/scan", desc: "Scan and rank top wallets" },
  { cmd: "/watchlist", desc: "View monitored traders" },
  { cmd: "/portfolio", desc: "Check current positions" },
  { cmd: "/panic_sell", desc: "Emergency exit all positions" },
  { cmd: "/settings", desc: "Configure risk parameters" },
  { cmd: "/stats", desc: "View performance metrics" },
];

export default function DemoSection() {
  return (
    <section id="demo" className="py-20 sm:py-32 relative bg-card/30">
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
            See It in <span className="text-primary">Action</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Watch how WalletWhisperer identifies opportunities, analyzes risks, and executes trades 
            through an intuitive Telegram interface.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Demo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative space-y-6"
          >
            {/* Main Demo Video */}
            <DemoVideo 
              title="WalletWhisperer: Complete Walkthrough"
              thumbnail="/demo-thumbnail.jpg"
              duration="3:45"
            />
            
            {/* Additional Demo Videos */}
            <div className="grid grid-cols-2 gap-4">
              <DemoVideo 
                title="Telegram Interface"
                thumbnail="/interface-demo.jpg"
                duration="1:20"
              />
              <DemoVideo 
                title="Live Trade Execution"
                thumbnail="/trade-demo.jpg"
                duration="2:10"
              />
            </div>

            {/* Video Captions */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                <p className="text-foreground/70">
                  <span className="font-semibold text-foreground">0:00-0:30</span> - Overview of Telegram bot interface and main commands
                </p>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <div className="w-2 h-2 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                <p className="text-foreground/70">
                  <span className="font-semibold text-foreground">0:30-1:15</span> - Live wallet scanning and AI ranking in action
                </p>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                <p className="text-foreground/70">
                  <span className="font-semibold text-foreground">1:15-2:00</span> - Alert notification and automated mirror trade execution
                </p>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <div className="w-2 h-2 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                <p className="text-foreground/70">
                  <span className="font-semibold text-foreground">2:00-2:30</span> - Real-time portfolio monitoring and risk management
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features & Commands */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
              <div className="space-y-4">
                {demoFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-4 card-gradient border border-border rounded-lg p-4"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-foreground/60">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Command Reference */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Available Commands</h3>
              <div className="card-gradient border border-border rounded-xl p-6">
                <div className="space-y-3">
                  {commands.map((command, index) => (
                    <motion.div
                      key={command.cmd}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center justify-between py-2 border-b border-border last:border-0"
                    >
                      <code className="text-primary font-mono text-sm bg-background px-3 py-1 rounded">
                        {command.cmd}
                      </code>
                      <span className="text-sm text-foreground/60">{command.desc}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
