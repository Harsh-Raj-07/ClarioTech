import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Tutorial from './components/Tutorial';
import Pricing from './components/Pricing';
import Demo from './components/Demo';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

type Page = 'home' | 'features' | 'how-it-works' | 'tutorial' | 'pricing' | 'demo' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <Features />
          </>
        );
      case 'features':
        return <Features fullPage />;
      case 'how-it-works':
        return <HowItWorks />;
      case 'tutorial':
        return <Tutorial onNavigate={setCurrentPage} />;
      case 'pricing':
        return <Pricing />;
      case 'demo':
        return <Demo />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0b0b1f] to-[#050505] text-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      {currentPage !== 'dashboard' && <Footer onNavigate={setCurrentPage} />}
    </div>
  );
}

export default App;
