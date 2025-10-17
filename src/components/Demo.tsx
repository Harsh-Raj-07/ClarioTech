import { useState } from 'react';
import { Send, Calendar, Mail, Building2, DollarSign, MessageSquare, CheckCircle } from 'lucide-react';

export default function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Book Your Demo
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See ClarioTech in action. Schedule a personalized demo with our team and discover how AI can transform your ad performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <Calendar className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">What to Expect</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>30-minute personalized walkthrough of the platform</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Live analysis of your current ad performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Custom recommendations for your campaigns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Q&A with our ad optimization experts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>No commitment required</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Success Stories</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-cyan-500 pl-4">
                    <p className="text-gray-300 mb-2">
                      "ClarioTech reduced our CAC by 42% in the first month. The AI insights are incredible."
                    </p>
                    <p className="text-sm text-gray-500">Sarah Chen, CMO at TechFlow</p>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-4">
                    <p className="text-gray-300 mb-2">
                      "We've scaled from $50k to $200k monthly ad spend while maintaining profitability."
                    </p>
                    <p className="text-sm text-gray-500">Marcus Rodriguez, Founder at GrowthLab</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Request Received!</h3>
                  <p className="text-gray-400 text-center">
                    Our team will contact you within 24 hours to schedule your personalized demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                      <Mail className="w-4 h-4" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                      <Mail className="w-4 h-4" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                      <Building2 className="w-4 h-4" />
                      <span>Company Name</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                      <DollarSign className="w-4 h-4" />
                      <span>Monthly Ad Budget</span>
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
                    >
                      <option value="" className="bg-[#0b0b1f]">Select budget range</option>
                      <option value="<10k" className="bg-[#0b0b1f]">Less than $10k</option>
                      <option value="10k-50k" className="bg-[#0b0b1f]">$10k - $50k</option>
                      <option value="50k-100k" className="bg-[#0b0b1f]">$50k - $100k</option>
                      <option value="100k+" className="bg-[#0b0b1f]">$100k+</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Message (Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                      placeholder="Tell us about your ad challenges..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Schedule Demo</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
