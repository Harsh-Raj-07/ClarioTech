import { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

type Page = 'home' | 'features' | 'how-it-works' | 'tutorial' | 'pricing' | 'demo' | 'dashboard';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home' as Page },
    { name: 'Features', page: 'features' as Page },
    { name: 'How It Works', page: 'how-it-works' as Page },
    { name: 'Tutorial', page: 'tutorial' as Page },
    { name: 'Pricing', page: 'pricing' as Page },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0b0b1f]/95 backdrop-blur-lg shadow-lg shadow-cyan-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              ClarioTech
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  currentPage === link.page ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => onNavigate('demo')}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Book Demo
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-4 py-2 border border-cyan-500/50 rounded-lg text-sm font-semibold hover:bg-cyan-500/10 transition-all"
            >
              Dashboard
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0b1f]/98 backdrop-blur-lg border-t border-cyan-500/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-gray-300 hover:bg-cyan-500/10'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('demo');
                setMobileMenuOpen(false);
              }}
              className="block w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-sm font-semibold"
            >
              Book Demo
            </button>
            <button
              onClick={() => {
                onNavigate('dashboard');
                setMobileMenuOpen(false);
              }}
              className="block w-full px-3 py-2 border border-cyan-500/50 rounded-lg text-sm font-semibold"
            >
              Dashboard
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
