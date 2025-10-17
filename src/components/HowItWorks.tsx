import { Database, Brain, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Database,
      title: 'Collect Data',
      description: 'ClarioTech connects to your ad platforms and begins collecting comprehensive campaign data including impressions, clicks, conversions, and audience behavior.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Brain,
      title: 'Analyze',
      description: 'Our AI engine processes millions of data points, identifying patterns, inefficiencies, and opportunities that human analysis would miss.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Optimize',
      description: 'Real-time optimization adjusts targeting, bids, creative rotation, and budget allocation to maximize performance across all channels.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: TrendingUp,
      title: 'Scale',
      description: 'As performance improves, ClarioTech intelligently scales winning campaigns while maintaining efficiency and protecting profit margins.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const exampleMetrics = [
    { label: 'Campaign', value: 'Summer Sale 2024', change: null },
    { label: 'Ad Spend', value: '$12,450', change: '+15%' },
    { label: 'Impressions', value: '2.4M', change: '+32%' },
    { label: 'Clicks', value: '48,200', change: '+64%' },
    { label: 'Conversions', value: '3,891', change: '+89%' },
    { label: 'CPC', value: '$0.26', change: '-28%' },
    { label: 'CAC', value: '$3.20', change: '-45%' },
    { label: 'ROAS', value: '4.2x', change: '+156%' },
  ];

  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Four-step AI-powered pipeline that transforms your ad performance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-3xl font-bold text-gray-600">0{index + 1}</span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-8 h-8 text-cyan-500" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Real Campaign Performance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {exampleMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="text-sm text-gray-500 mb-2">{metric.label}</div>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  {metric.change && (
                    <div
                      className={`text-sm font-semibold ${
                        metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {metric.change}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Results from a real e-commerce brand after 30 days with ClarioTech
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold mb-4">
            Ready to transform your ad performance?
          </p>
          <p className="text-gray-400 mb-8">
            Join hundreds of businesses already scaling profitably with ClarioTech
          </p>
        </div>
      </div>
    </section>
  );
}
