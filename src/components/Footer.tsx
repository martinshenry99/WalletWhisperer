"use client";

import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-background">WW</span>
              </div>
              <span className="text-xl font-display font-bold">
                Wallet<span className="text-primary">Whisperer</span>
              </span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed max-w-md">
              An AI-powered blockchain analysis and trading automation bot. 
              Personal project showcasing machine learning, on-chain intelligence, and automated trading strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-foreground/60 hover:text-primary transition-colors">
                  About Project
                </a>
              </li>
              <li>
                <a href="#demo" className="text-foreground/60 hover:text-primary transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#performance" className="text-foreground/60 hover:text-primary transition-colors">
                  Performance
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-foreground/60 hover:text-primary transition-colors">
                  Architecture
                </a>
              </li>
              <li>
                <a href="#updates" className="text-foreground/60 hover:text-primary transition-colors">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:scale-110 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:scale-110 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:scale-110 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:martinshenry12e@gmail.com"
                className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:scale-110 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-foreground/60">
              © {currentYear} WalletWhisperer. Personal project showcase.
            </p>
            <p className="text-xs text-foreground/40 text-center max-w-2xl">
              <strong>Disclaimer:</strong> This website presents a personal AI trading project. 
              The information here reflects past historical data and does not constitute financial advice. 
              Cryptocurrency trading involves substantial risk of loss.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
