"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, DollarSign, Target, Clock, Award } from "lucide-react";
import { formatCurrency, formatPercent, formatPrice } from "@/lib/utils";
import tradingData from "@/data/trading-results.json";
import PerformanceChart from "@/components/charts/PerformanceChart";
import TradesTable from "@/components/tables/TradesTable";

const stats = [
  {
    icon: Target,
    label: "Win Rate",
    value: `${tradingData.summary.winRate}%`,
    change: "+5.2%",
    positive: true,
  },
  {
    icon: TrendingUp,
    label: "Total ROI",
    value: formatPercent(tradingData.summary.totalROI, 1),
    change: "+69.3%",
    positive: true,
  },
  {
    icon: DollarSign,
    label: "Net Profit",
    value: formatCurrency(tradingData.summary.netProfit),
    change: formatCurrency(tradingData.summary.netProfit - 6500),
    positive: true,
  },
  {
    icon: Award,
    label: "Best Trade",
    value: formatPercent(tradingData.summary.bestTrade, 1),
    change: "MOODENG",
    positive: true,
  },
  {
    icon: Clock,
    label: "Avg Duration",
    value: tradingData.summary.averageDuration,
    change: "-15min",
    positive: true,
  },
  {
    icon: TrendingDown,
    label: "Worst Trade",
    value: formatPercent(tradingData.summary.worstTrade, 1),
    change: "SAMO",
    positive: false,
  },
];

export default function PerformanceSection() {
  return (
    <section id="performance" className="py-20 sm:py-32 relative">
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
            Performance <span className="text-primary">Dashboard</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Real historical results from personal testing. Transparent data showing wins, losses, 
            and overall performance metrics.
          </p>
          <p className="text-sm text-foreground/50 mt-2">
            ⚠️ Historical results from testing — Not financial advice
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-gradient border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${stat.positive ? 'text-primary' : 'text-red-400'}`} />
                  <span className={`text-xs ${stat.positive ? 'text-primary' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-foreground/60">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <PerformanceChart />
        </motion.div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-gradient border border-border rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-primary mr-2" />
              Profitable Trades
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-foreground/60">Total Wins</span>
                <span className="font-semibold text-primary">{tradingData.summary.profitableTrades}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Total Profit</span>
                <span className="font-semibold text-primary">{formatCurrency(tradingData.summary.totalProfit)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Avg ROI</span>
                <span className="font-semibold text-primary">{formatPercent(tradingData.summary.averageROI, 2)}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-gradient border border-border rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <TrendingDown className="w-5 h-5 text-red-400 mr-2" />
              Losing Trades
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-foreground/60">Total Losses</span>
                <span className="font-semibold text-red-400">{tradingData.summary.totalTrades - tradingData.summary.profitableTrades}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Total Loss</span>
                <span className="font-semibold text-red-400">{formatCurrency(tradingData.summary.totalLoss)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Worst Trade</span>
                <span className="font-semibold text-red-400">{formatPercent(tradingData.summary.worstTrade, 1)}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-gradient border border-primary/30 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <DollarSign className="w-5 h-5 text-primary mr-2" />
              Net Performance
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-foreground/60">Total Trades</span>
                <span className="font-semibold">{tradingData.summary.totalTrades}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Net Profit</span>
                <span className="font-semibold text-primary text-xl">{formatCurrency(tradingData.summary.netProfit)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Total ROI</span>
                <span className="font-semibold text-primary text-xl">{formatPercent(tradingData.summary.totalROI, 1)}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Trades Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TradesTable />
        </motion.div>
      </div>
    </section>
  );
}
