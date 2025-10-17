import { Play, CheckCircle, ArrowRight } from 'lucide-react';

type Page = 'home' | 'features' | 'how-it-works' | 'tutorial' | 'pricing' | 'demo' | 'dashboard';

interface TutorialProps {
  onNavigate: (page: Page) => void;
}

export default function Tutorial({ onNavigate }: TutorialProps) {
  const tutorialPoints = [
    'Connect your ad accounts in under 60 seconds',
    'Set your optimization goals and target metrics',
    'Let AI analyze your campaign data',
    'Review AI-generated insights and recommendations',
    'Enable auto-optimization or manual approval mode',
    'Monitor real-time performance improvements',
    'Scale winning campaigns automatically',
    'Export reports and share with your team',
  ];

  const quickTips = [
    {
      title: 'Start Small',
      description: 'Begin with one campaign to see how ClarioTech optimizes before scaling',
    },
    {
      title: 'Set Clear Goals',
      description: 'Define your target ROAS, CAC, and other KPIs for better AI optimization',
    },
    {
      title: 'Monitor Daily',
      description: 'Check your dashboard daily for the first week to understand AI decisions',
    },
    {
      title: 'Trust the Process',
      description: 'AI needs 7-14 days to gather sufficient data for optimal performance',
    },
  ];

  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Video Tutorial
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn how to run high-performing ad campaigns using ClarioTech's AI platform
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-2xl"></div>
          <div className="relative bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-12 h-12 text-white ml-2" />
                </div>
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <span>15:24</span>
                <span>•</span>
                <span>Complete Setup Guide</span>
                <span>•</span>
                <span>Beginner Friendly</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-cyan-400 mr-3" />
                What You'll Learn
              </h3>
              <ul className="space-y-4">
                {tutorialPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Tips</h3>
                <div className="space-y-4">
                  {quickTips.map((tip, index) => (
                    <div key={index} className="border-l-2 border-cyan-500 pl-4">
                      <h4 className="font-semibold text-cyan-400 mb-1">{tip.title}</h4>
                      <p className="text-sm text-gray-400">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-400 mb-6">
                  Try ClarioTech risk-free with our interactive demo or book a personalized walkthrough with our team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onNavigate('dashboard')}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Try Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onNavigate('demo')}
                    className="flex-1 px-6 py-3 border border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
