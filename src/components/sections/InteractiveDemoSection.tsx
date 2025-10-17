"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle, TrendingUp, Search, Shield, Zap } from "lucide-react";

interface DemoMessage {
  type: "user" | "bot";
  text: string;
  timestamp: string;
}

export default function InteractiveDemoSection() {
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [messages, setMessages] = useState<DemoMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoScenarios = [
    {
      command: "/scan",
      description: "Scan top wallets",
      response: "🔍 Scanning top 100 wallets...\n\n✅ Found 3 high-performing wallets:\n\n1. 0x7a9f...3d2c\n   • Win Rate: 78.3%\n   • Avg ROI: +42.1%\n   • Last 24h: 5 trades\n\n2. 0x4b2e...8f1a\n   • Win Rate: 71.2%\n   • Avg ROI: +38.7%\n   • Last 24h: 3 trades\n\n3. 0x9c5d...6a4b\n   • Win Rate: 69.8%\n   • Avg ROI: +35.4%\n   • Last 24h: 4 trades",
    },
    {
      command: "/watchlist",
      description: "View monitored traders",
      response: "📋 Your Watchlist (5 traders)\n\n🟢 Active Traders:\n\n1. SmartWhale_0x7a9f\n   Status: 🟢 Online\n   Last Trade: 12 min ago\n   Token: PEPE (+23.4%)\n\n2. CryptoSniper_0x4b2e\n   Status: 🟢 Online\n   Last Trade: 45 min ago\n   Token: BONK (+18.2%)\n\n3. DeFiPro_0x9c5d\n   Status: 🟡 Idle\n   Last Trade: 3 hours ago",
    },
    {
      command: "/portfolio",
      description: "Check current positions",
      response: "💼 Your Portfolio\n\n📊 Overview:\n• Total Value: $2,847.50\n• Today&apos;s P&L: +$247.30 (+9.5%)\n• Open Positions: 3\n\n🔓 Active Positions:\n\n1. PEPE\n   Entry: $0.000012\n   Current: $0.000016\n   P&L: +$127.50 (+33.3%)\n   Duration: 2h 15m\n\n2. WIF\n   Entry: $1.24\n   Current: $1.45\n   P&L: +$84.20 (+16.9%)\n   Duration: 5h 42m\n\n3. BONK\n   Entry: $0.000089\n   Current: $0.000095\n   P&L: +$35.60 (+6.7%)\n   Duration: 1h 08m",
    },
    {
      command: "/analyze PEPE",
      description: "Analyze a token",
      response: "🔬 Token Analysis: PEPE\n\n✅ Safety Score: 87/100\n\n🛡️ Security Checks:\n✅ No honeypot detected\n✅ Liquidity locked (92 days)\n✅ Mint authority revoked\n✅ Top holder: 4.2% (safe)\n\n📊 Market Data:\n• Price: $0.000016\n• 24h Volume: $12.4M\n• Liquidity: $8.7M\n• Holders: 142,387\n\n🧠 AI Confidence: 82%\n📈 Recommendation: STRONG BUY\n\n⚡ 3 top wallets recently bought",
    },
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsEmailSubmitted(true);
    
    // Welcome message
    const welcomeMsg: DemoMessage = {
      type: "bot",
      text: `🎉 Welcome to WalletWhisperer Demo!\n\nHi there! I&apos;m your AI trading assistant.\n\nYou can try these commands:\n• /scan - Find top wallets\n• /watchlist - View tracked traders\n• /portfolio - Check positions\n• /analyze PEPE - Analyze a token\n\nClick any command to try it!`,
      timestamp: new Date().toLocaleTimeString(),
    };
    
    setMessages([welcomeMsg]);
  };

  const handleCommandClick = (scenario: typeof demoScenarios[0]) => {
    // User message
    const userMsg: DemoMessage = {
      type: "user",
      text: scenario.command,
      timestamp: new Date().toLocaleTimeString(),
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Bot response after delay
    setTimeout(() => {
      const botMsg: DemoMessage = {
        type: "bot",
        text: scenario.response,
        timestamp: new Date().toLocaleTimeString(),
      };
      
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      setCurrentStep((prev) => prev + 1);
    }, 1500);
  };

  return (
    <section id="interactive-demo" className="py-20 sm:py-32 relative bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Interactive Demo</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Try It <span className="text-primary">Live</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Experience WalletWhisperer in action. Enter your email to start a live demo 
            and see how the AI analyzes wallets, tracks trades, and manages your portfolio.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {!isEmailSubmitted ? (
            /* Email Collection Form */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="card-gradient border border-border rounded-2xl p-8 sm:p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Start Your Free Demo</h3>
                  <p className="text-foreground/70">
                    Enter your email to unlock the interactive demo. No credit card required.
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="demo-email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="demo-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-lg"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-background font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                  >
                    <Send className="w-5 h-5" />
                    <span>Start Demo</span>
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <Search className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm text-foreground/60">Wallet Scanning</p>
                    </div>
                    <div>
                      <Shield className="w-6 h-6 text-secondary mx-auto mb-2" />
                      <p className="text-sm text-foreground/60">Safety Analysis</p>
                    </div>
                    <div>
                      <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm text-foreground/60">Live Trading</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Interactive Demo Interface */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Command Buttons */}
              <div className="lg:col-span-1 space-y-4">
                <div className="card-gradient border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-primary mr-2" />
                    Available Commands
                  </h3>
                  
                  <div className="space-y-3">
                    {demoScenarios.map((scenario, index) => (
                      <button
                        key={scenario.command}
                        onClick={() => handleCommandClick(scenario)}
                        disabled={isTyping}
                        className="w-full text-left p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <code className="text-primary font-mono text-sm">{scenario.command}</code>
                          {currentStep > index && (
                            <CheckCircle className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <p className="text-xs text-foreground/60">{scenario.description}</p>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center space-x-2 text-sm text-foreground/60">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span>Demo Mode Active</span>
                    </div>
                    <p className="text-xs text-foreground/40 mt-2">
                      Testing with: {email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Interface */}
              <div className="lg:col-span-2">
                <div className="card-gradient border border-border rounded-xl overflow-hidden flex flex-col h-[600px]">
                  {/* Chat Header */}
                  <div className="bg-background border-b border-border p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <span className="text-lg font-bold text-background">WW</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">WalletWhisperer Bot</h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <span className="text-xs text-foreground/60">Online</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    <AnimatePresence>
                      {messages.map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                              message.type === "user"
                                ? "bg-primary text-background"
                                : "bg-card border border-border"
                            }`}
                          >
                            <p className="text-sm whitespace-pre-line">{message.text}</p>
                            <p className={`text-xs mt-1 ${
                              message.type === "user" ? "text-background/70" : "text-foreground/50"
                            }`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-card border border-border rounded-2xl px-4 py-3">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Input Area */}
                  <div className="bg-background border-t border-border p-4">
                    <div className="flex items-center space-x-2 text-sm text-foreground/60">
                      <span>💡 Click a command on the left to try it</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-foreground/50 mb-4">
            🔒 Your email is safe. We never share your information.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-foreground/40">
            <span>✓ No credit card required</span>
            <span>✓ Instant access</span>
            <span>✓ Full demo features</span>
            <span>✓ No installation needed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
