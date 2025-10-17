import { Check, Zap, Crown, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small businesses testing the waters',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Up to $10k monthly ad spend',
        '2 connected ad platforms',
        'Basic AI optimization',
        'Weekly performance reports',
        'Email support',
        'Dashboard access',
      ],
    },
    {
      name: 'Pro',
      icon: Crown,
      description: 'Most popular for growing businesses',
      monthlyPrice: 799,
      yearlyPrice: 7990,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      features: [
        'Up to $50k monthly ad spend',
        'Unlimited connected platforms',
        'Advanced AI optimization',
        'Daily performance reports',
        'Priority support',
        'Custom integrations',
        'Creative testing suite',
        'Server-side tracking',
      ],
    },
    {
      name: 'Agency',
      icon: Rocket,
      description: 'Enterprise solution for agencies & brands',
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      color: 'from-orange-500 to-red-500',
      features: [
        'Unlimited ad spend',
        'Unlimited platforms',
        'White-label dashboard',
        'Real-time optimization',
        'Dedicated account manager',
        'Custom AI models',
        'API access',
        'Multi-user accounts',
        'Advanced fraud protection',
      ],
    },
  ];

  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </p>

          <div className="inline-flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !isYearly
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all flex items-center space-x-2 ${
                isYearly
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>Yearly</span>
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${plan.popular ? 'lg:-mt-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${plan.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}
              ></div>
              <div
                className={`relative bg-white/5 backdrop-blur-md border rounded-3xl p-8 hover:border-white/20 transition-all duration-300 h-full flex flex-col ${
                  plan.popular ? 'border-purple-500/50 lg:scale-105' : 'border-white/10'
                }`}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">
                      ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  {isYearly && (
                    <div className="text-sm text-gray-500 mt-2">
                      Billed annually (${plan.yearlyPrice}/year)
                    </div>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  Start Free Trial
                </button>

                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Plan?</h3>
            <p className="text-gray-400 mb-6">
              Managing $100k+ in monthly ad spend? Contact us for enterprise pricing and custom features tailored to your needs.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
