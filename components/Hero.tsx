import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 flex flex-col items-center text-center max-w-3xl mx-auto">
      <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
        <span className="text-xs font-bold tracking-widest text-accent uppercase">
          Material de Apoio
        </span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
        Prototipação & Prompt<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Engineering.</span>
      </h1>

      <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
        Um passo a passo para transformar suas ideias em código funcional utilizando agentes de IA modernos. Siga o fluxo abaixo.
      </p>
    </section>
  );
};

export default Hero;