"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowDownRight, ChevronDown, ChevronUp } from "lucide-react";
import { formatPercent, formatPrice } from "@/lib/utils";
import tradingData from "@/data/trading-results.json";

export default function TradesTable() {
  const [showAll, setShowAll] = useState(false);
  const displayedTrades = showAll ? tradingData.recentTrades : tradingData.recentTrades.slice(0, 5);

  return (
    <div className="card-gradient border border-border rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-xl font-semibold">Recent Trades</h3>
        <p className="text-sm text-foreground/60 mt-1">
          Latest {tradingData.recentTrades.length} trades from the trading history
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-background/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                Token
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                Entry Price
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                Exit Price
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                ROI
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                Outcome
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {displayedTrades.map((trade, index) => (
              <tr key={index} className="hover:bg-background/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {new Date(trade.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-primary">
                        {trade.symbol.slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">{trade.token}</div>
                      <div className="text-xs text-foreground/50">{trade.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-mono">
                  ${formatPrice(trade.entryPrice)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-mono">
                  ${formatPrice(trade.exitPrice)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <span
                    className={`inline-flex items-center font-semibold ${
                      trade.roi >= 0 ? "text-primary" : "text-red-400"
                    }`}
                  >
                    {trade.roi >= 0 ? (
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 mr-1" />
                    )}
                    {formatPercent(trade.roi, 1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-foreground/70">
                  {trade.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span
                    className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      trade.outcome === "profit"
                        ? "bg-primary/10 text-primary"
                        : "bg-red-400/10 text-red-400"
                    }`}
                  >
                    {trade.outcome === "profit" ? "Profit" : "Loss"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden divide-y divide-border">
        {displayedTrades.map((trade, index) => (
          <div key={index} className="p-4 hover:bg-background/30 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-primary">
                    {trade.symbol.slice(0, 2)}
                  </span>
                </div>
                <div>
                  <div className="font-medium">{trade.token}</div>
                  <div className="text-xs text-foreground/50">
                    {new Date(trade.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
              <span
                className={`inline-flex items-center font-semibold text-lg ${
                  trade.roi >= 0 ? "text-primary" : "text-red-400"
                }`}
              >
                {trade.roi >= 0 ? (
                  <ArrowUpRight className="w-5 h-5 mr-1" />
                ) : (
                  <ArrowDownRight className="w-5 h-5 mr-1" />
                )}
                {formatPercent(trade.roi, 1)}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-foreground/50">Entry:</span>{" "}
                <span className="font-mono">${formatPrice(trade.entryPrice)}</span>
              </div>
              <div>
                <span className="text-foreground/50">Exit:</span>{" "}
                <span className="font-mono">${formatPrice(trade.exitPrice)}</span>
              </div>
              <div>
                <span className="text-foreground/50">Duration:</span> {trade.duration}
              </div>
              <div>
                <span
                  className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${
                    trade.outcome === "profit"
                      ? "bg-primary/10 text-primary"
                      : "bg-red-400/10 text-red-400"
                  }`}
                >
                  {trade.outcome === "profit" ? "Profit" : "Loss"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {tradingData.recentTrades.length > 5 && (
        <div className="p-4 border-t border-border">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full flex items-center justify-center space-x-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            <span>{showAll ? "Show Less" : `Show All ${tradingData.recentTrades.length} Trades`}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
