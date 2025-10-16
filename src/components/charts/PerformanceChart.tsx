"use client";

import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import tradingData from "@/data/trading-results.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function PerformanceChart() {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          color: "#e4e4e7",
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: "#0f1629",
        titleColor: "#e4e4e7",
        bodyColor: "#e4e4e7",
        borderColor: "#1e293b",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
      },
    },
    scales: {
      x: {
        grid: {
          color: "#1e293b",
          drawBorder: false,
        },
        ticks: {
          color: "#94a3b8",
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: "#1e293b",
          drawBorder: false,
        },
        ticks: {
          color: "#94a3b8",
          font: {
            size: 11,
          },
          callback: function (value: any) {
            return value + "%";
          },
        },
      },
    },
  };

  const roiData = {
    labels: tradingData.monthlyPerformance.map((m) => m.month),
    datasets: [
      {
        label: "Monthly ROI",
        data: tradingData.monthlyPerformance.map((m) => m.roi),
        borderColor: "#00ff88",
        backgroundColor: "rgba(0, 255, 136, 0.1)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#00ff88",
        pointBorderColor: "#0a0e1a",
        pointBorderWidth: 2,
      },
    ],
  };

  const winRateData = {
    labels: tradingData.monthlyPerformance.map((m) => m.month),
    datasets: [
      {
        label: "Win Rate %",
        data: tradingData.monthlyPerformance.map((m) => m.winRate),
        backgroundColor: "#00d9ff",
        borderColor: "#00d9ff",
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* ROI Chart */}
      <div className="card-gradient border border-border rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-6">Monthly ROI Performance</h3>
        <div className="h-[300px] sm:h-[400px]">
          <Line data={roiData} options={chartOptions} />
        </div>
      </div>

      {/* Win Rate Chart */}
      <div className="card-gradient border border-border rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-6">Monthly Win Rate</h3>
        <div className="h-[300px] sm:h-[400px]">
          <Bar data={winRateData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
