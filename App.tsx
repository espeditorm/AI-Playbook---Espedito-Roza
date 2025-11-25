import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { TimelineItem } from './components/TimelineItem.tsx';
import { ArrowUp } from 'lucide-react';
import { STEPS } from './constants.ts';

const App: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans selection:bg-accent/30 selection:text-accent">
      <Header />
      
      <main className="w-full max-w-4xl mx-auto px-4 md:px-8 pb-32">
        <Hero />
        
        {/* Timeline Container */}
        <div className="relative mt-10">
          {STEPS.map((step, index) => (
            <TimelineItem 
              key={step.id} 
              step={step} 
              isLast={index === STEPS.length - 1} 
            />
          ))}
        </div>
      </main>

      <footer className="fixed bottom-8 left-0 right-0 flex justify-center z-40 pointer-events-none">
        <button
          onClick={scrollToTop}
          className="pointer-events-auto bg-slate-800/80 backdrop-blur hover:bg-slate-700 text-white border border-slate-600 px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
        >
          <span className="text-sm font-medium">Voltar ao topo</span>
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </footer>
      
      {/* Background Gradient Spot */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </div>
  );
};

export default App;