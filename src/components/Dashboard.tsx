import { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, MousePointer, Target, BarChart3, Sparkles, AlertCircle } from 'lucide-react';
import CountingNumber from './CountingNumber';

export default function Dashboard() {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimized, setOptimized] = useState(false);

  const initialMetrics = {
    adSpend: 12450,
    clicks: 48200,
    conversions: 3891,
    cpc: 0.26,
    cac: 3.2,
    roas: 4.2,
    ctr: 2.8,
  };

  const [metrics, setMetrics] = useState(initialMetrics);

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setMetrics({
        adSpend: 12450,
        clicks: 78900,
        conversions: 7350,
        cpc: 0.19,
        cac: 1.69,
        roas: 7.2,
        ctr: 4.6,
      });
      setIsOptimizing(false);
      setOptimized(true);
    }, 3000);
  };

  const insights = [
    {
      type: 'warning',
      message: 'Campaign "Summer Sale" has 18% lower CTR than average. Consider creative refresh.',
      action: 'Optimize Creative',
    },
    {
      type: 'success',
      message: 'Audience segment "Tech Enthusiasts 25-34" outperforming by 142%. Increase budget by 25%.',
      action: 'Scale Budget',
    },
    {
      type: 'info',
      message: 'Peak conversion times: 2pm-4pm EST. Adjust bid schedule for maximum efficiency.',
      action: 'Update Schedule',
    },
  ];

  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Campaign Dashboard
              </span>
            </h2>
            <p className="text-gray-400">Real-time performance metrics and AI insights</p>
          </div>
          <button
            onClick={handleOptimize}
            disabled={isOptimizing || optimized}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 ${
              optimized
                ? 'bg-green-500/20 border border-green-500/50 text-green-400 cursor-default'
                : isOptimizing
                ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 cursor-wait'
                : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-2xl hover:shadow-cyan-500/50'
            }`}
          >
            <Sparkles className={`w-5 h-5 ${isOptimizing ? 'animate-spin' : ''}`} />
            <span>
              {optimized ? 'Optimized!' : isOptimizing ? 'Optimizing...' : 'Auto Optimize'}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-8 h-8 text-blue-400" />
                {optimized && <TrendingDown className="w-5 h-5 text-green-400" />}
              </div>
              <div className="text-3xl font-bold mb-2">
                $<CountingNumber end={metrics.adSpend} />
              </div>
              <p className="text-gray-400 text-sm">Ad Spend</p>
              {optimized && <p className="text-green-400 text-xs mt-1">Budget efficiency +15%</p>}
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <MousePointer className="w-8 h-8 text-purple-400" />
                {optimized && <TrendingUp className="w-5 h-5 text-green-400" />}
              </div>
              <div className="text-3xl font-bold mb-2">
                <CountingNumber end={metrics.clicks} />
              </div>
              <p className="text-gray-400 text-sm">Total Clicks</p>
              {optimized && <p className="text-green-400 text-xs mt-1">+63.7%</p>}
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <Target className="w-8 h-8 text-green-400" />
                {optimized && <TrendingUp className="w-5 h-5 text-green-400" />}
              </div>
              <div className="text-3xl font-bold mb-2">
                <CountingNumber end={metrics.conversions} />
              </div>
              <p className="text-gray-400 text-sm">Conversions</p>
              {optimized && <p className="text-green-400 text-xs mt-1">+88.9%</p>}
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="w-8 h-8 text-cyan-400" />
                {optimized && <TrendingUp className="w-5 h-5 text-green-400" />}
              </div>
              <div className="text-3xl font-bold mb-2">
                <CountingNumber end={metrics.roas} decimals={1} />x
              </div>
              <p className="text-gray-400 text-sm">ROAS</p>
              {optimized && <p className="text-green-400 text-xs mt-1">+71.4%</p>}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Cost Per Click</span>
                {optimized && <TrendingDown className="w-4 h-4 text-green-400" />}
              </div>
              <div className="text-2xl font-bold">
                $<CountingNumber end={metrics.cpc} decimals={2} />
              </div>
              {optimized && <p className="text-green-400 text-xs mt-1">-26.9%</p>}
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Cost Per Acquisition</span>
                {optimized && <TrendingDown className="w-4 h-4 text-green-400" />}
              </div>
              <div className="text-2xl font-bold">
                $<CountingNumber end={metrics.cac} decimals={2} />
              </div>
              {optimized && <p className="text-green-400 text-xs mt-1">-47.2%</p>}
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Click-Through Rate</span>
                {optimized && <TrendingUp className="w-4 h-4 text-green-400" />}
              </div>
              <div className="text-2xl font-bold">
                <CountingNumber end={metrics.ctr} decimals={1} />%
              </div>
              {optimized && <p className="text-green-400 text-xs mt-1">+64.3%</p>}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Sparkles className="w-6 h-6 text-cyan-400 mr-3" />
              AI Insights & Recommendations
            </h3>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-grow">
                      <AlertCircle
                        className={`w-5 h-5 mt-1 flex-shrink-0 ${
                          insight.type === 'warning'
                            ? 'text-yellow-400'
                            : insight.type === 'success'
                            ? 'text-green-400'
                            : 'text-cyan-400'
                        }`}
                      />
                      <div>
                        <p className="text-gray-300 mb-2">{insight.message}</p>
                        <button className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                          {insight.action} →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
