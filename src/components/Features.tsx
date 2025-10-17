import { Target, Sparkles, Zap, Activity, BarChart3, Shield } from 'lucide-react';

interface FeaturesProps {
  fullPage?: boolean;
}

export default function Features({ fullPage = false }: FeaturesProps) {
  const features = [
    {
      icon: Target,
      title: 'Audience & Targeting AI',
      description: 'Advanced machine learning algorithms analyze user behavior and automatically optimize audience segments for maximum conversion rates.',
      color: 'from-cyan-500 to-blue-500',
      stats: 'Up to 45% better targeting accuracy',
    },
    {
      icon: Sparkles,
      title: 'Creative Intelligence',
      description: 'AI-powered creative analysis identifies winning ad variations, suggests improvements, and automatically rotates creatives for peak performance.',
      color: 'from-purple-500 to-pink-500',
      stats: '2.3x average creative performance boost',
    },
    {
      icon: Zap,
      title: 'Bid Optimization Engine',
      description: 'Real-time bid adjustments based on conversion probability, competitor activity, and market conditions to maximize ROI.',
      color: 'from-yellow-500 to-orange-500',
      stats: 'Reduce CPC by up to 32%',
    },
    {
      icon: Activity,
      title: 'Server-Side Tracking Suite',
      description: 'Bypass iOS 14+ limitations with robust server-side tracking that captures 99% of conversion data accurately.',
      color: 'from-green-500 to-emerald-500',
      stats: '99.2% tracking accuracy',
    },
    {
      icon: BarChart3,
      title: 'Unified Dashboard',
      description: 'Monitor all your campaigns across Google Ads, Meta, TikTok, and more from a single, intuitive interface with real-time analytics.',
      color: 'from-blue-500 to-cyan-500',
      stats: 'Save 15+ hours per week',
    },
    {
      icon: Shield,
      title: 'Fraud Protection',
      description: 'Advanced algorithms detect and block fraudulent clicks, bot traffic, and invalid activity before they waste your budget.',
      color: 'from-red-500 to-pink-500',
      stats: 'Block 98% of fraudulent traffic',
    },
  ];

  return (
    <section className={`relative ${fullPage ? 'min-h-screen pt-24' : 'py-20'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {fullPage && (
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              ClarioTech isn't another ad tool — it's your unfair advantage in the digital ad war.
            </p>
          </div>
        )}

        {!fullPage && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Everything You Need
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive tools to dominate your ad campaigns
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{feature.description}</p>
                <div className={`text-sm font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {fullPage && (
          <div className="mt-20 text-center">
            <div className="inline-block bg-white/5 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Integration Ecosystem</h3>
              <p className="text-gray-400 mb-6 max-w-2xl">
                Seamlessly connect with all major advertising platforms
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads', 'Twitter Ads'].map((platform) => (
                  <div
                    key={platform}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:border-cyan-500/50 transition-colors"
                  >
                    <span className="text-sm font-medium">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
