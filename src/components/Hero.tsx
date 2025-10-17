import { Play, ArrowRight, TrendingDown, TrendingUp, Target } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import CountingNumber from './CountingNumber';

type Page = 'home' | 'features' | 'how-it-works' | 'tutorial' | 'pricing' | 'demo' | 'dashboard';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <div className="flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-cyan-400 font-medium">AI-Powered Ad Optimization</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Cut Your Ad Costs.
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Scale Profitably.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ClarioTech uses AI to optimize your ad targeting, creatives, and tracking — reducing CAC and boosting ROAS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('tutorial')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Tutorial</span>
            </button>
            <button
              onClick={() => onNavigate('demo')}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 hover:border-green-500/50 transition-all">
                <TrendingDown className="w-10 h-10 text-green-400 mb-3" />
                <div className="text-4xl font-bold text-green-400 mb-2">
                  <CountingNumber end={28} suffix="%" />
                </div>
                <p className="text-gray-400">Avg CAC Reduction</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                <TrendingUp className="w-10 h-10 text-cyan-400 mb-3" />
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  <CountingNumber end={64} suffix="%" prefix="+" />
                </div>
                <p className="text-gray-400">CTR Improvement</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                <Target className="w-10 h-10 text-purple-400 mb-3" />
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  <CountingNumber end={3.2} suffix="x" decimals={1} />
                </div>
                <p className="text-gray-400">ROAS Multiplier</p>
              </div>
            </div>
          </div>

          <div className="pt-12">
            <p className="text-sm text-gray-500 mb-4">TRUSTED BY LEADING BRANDS</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {['TechCorp', 'DataFlow', 'GrowthLab', 'AdScale', 'MetricPro'].map((brand) => (
                <div key={brand} className="text-xl font-semibold text-gray-400">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
