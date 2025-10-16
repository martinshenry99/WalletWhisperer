"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DemoVideoProps {
  title: string;
  thumbnail: string;
  duration: string;
}

export default function DemoVideo({ title, thumbnail, duration }: DemoVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {/* Video Thumbnail */}
      <div
        onClick={() => setIsPlaying(true)}
        className="relative aspect-video bg-gradient-to-br from-card to-background border-2 border-border rounded-xl overflow-hidden cursor-pointer group"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="absolute inset-0 grid-background opacity-20" />
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-primary/50">
            <Play className="w-10 h-10 text-primary fill-primary ml-1" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium">
          {duration}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
          <h4 className="font-semibold text-lg">{title}</h4>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-lg p-4"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute -top-12 right-0 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player Simulation */}
              <div className="aspect-video bg-card border-2 border-border rounded-xl overflow-hidden">
                <DemoVideoPlayer title={title} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Simulated Video Player with Animated Demo
function DemoVideoPlayer({ title }: { title: string }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-background to-card flex items-center justify-center relative overflow-hidden">
      {/* Animated Demo Content */}
      <div className="absolute inset-0 p-8">
        {title.includes("Interface") && <TelegramInterfaceDemo />}
        {title.includes("Scanning") && <WalletScanningDemo />}
        {title.includes("Trade") && <TradeExecutionDemo />}
      </div>

      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎬</div>
          <h3 className="text-2xl font-bold mb-2">Demo Video Coming Soon</h3>
          <p className="text-foreground/60">4K walkthrough in production</p>
        </div>
      </div>
    </div>
  );
}

// Animated Demo Components
function TelegramInterfaceDemo() {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-lg p-4"
      >
        <div className="text-sm text-primary font-mono">/scan</div>
        <div className="text-xs text-foreground/60 mt-2">Scanning top wallets...</div>
      </motion.div>
    </div>
  );
}

function WalletScanningDemo() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2 }}
          className="bg-card border border-primary/30 rounded-lg p-4"
        >
          <div className="text-xs text-foreground/60">Wallet #{i}</div>
          <div className="text-sm font-semibold text-primary mt-1">Win Rate: {70 + i * 2}%</div>
        </motion.div>
      ))}
    </div>
  );
}

function TradeExecutionDemo() {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-primary/10 border border-primary rounded-lg p-4"
      >
        <div className="text-sm font-semibold text-primary">✓ Trade Executed</div>
        <div className="text-xs text-foreground/60 mt-2">Entry: $0.00124 | Size: $250</div>
      </motion.div>
    </div>
  );
}
