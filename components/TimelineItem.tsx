import React, { useState } from 'react';
import { StepData } from '../types.ts';
import { CodeBlock } from './CodeBlock.tsx';
import { Download, AlertTriangle } from 'lucide-react';

interface TimelineItemProps {
  step: StepData;
  isLast: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ step, isLast }) => {
  // State to manage toggle tabs (0 is the first option)
  const [activeToggleIndex, setActiveToggleIndex] = useState(0);

  const handleDownload = () => {
    const blob = new Blob([step.codeSnippet], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = step.downloadFileName || 'documento.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Determine which code to show:
  // If it's a toggle type, use the code from the active toggle option.
  // Otherwise, use the standard codeSnippet.
  const currentCode = step.type === 'toggle' && step.toggleContent
    ? step.toggleContent[activeToggleIndex].code
    : step.codeSnippet;

  const currentLabel = step.type === 'toggle' && step.toggleContent
    ? step.toggleContent[activeToggleIndex].label
    : (step.type === 'handoff' ? 'EXEMPLO DE RESULTADO' : undefined);

  return (
    <div className="relative flex gap-6 md:gap-10 pb-16 md:pb-24">
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-[15px] top-[32px] bottom-0 w-[2px] bg-slate-800 md:left-[23px]" />
      )}

      {/* Number Circle */}
      <div className="flex-shrink-0 z-10">
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-slate-800 border-2 border-accent flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <span className="text-accent font-bold text-sm md:text-lg">{step.id}</span>
        </div>
      </div>

      {/* Content Card */}
      <div className="flex-grow min-w-0">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-3">
          {step.title}
        </h2>
        <p className="text-slate-400 mb-6 leading-relaxed">
          {step.description}
        </p>

        <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 md:p-6 shadow-sm">
          {/* Specific visual controls based on type */}
          
          {step.type === 'download' && (
            <button 
                onClick={handleDownload}
                className="w-full flex items-center gap-3 mb-0 p-4 bg-slate-900/50 hover:bg-slate-800/80 rounded-lg border border-slate-700/50 hover:border-accent/50 transition-all cursor-pointer group text-left"
            >
                <div className="p-3 bg-blue-500/10 group-hover:bg-blue-500/20 rounded-full transition-colors">
                    <Download size={20} className="text-blue-400 group-hover:text-blue-300" />
                </div>
                <div className="flex-grow">
                    <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors">Product Requirements Document (PRD)</h4>
                    <span className="text-xs text-slate-500 group-hover:text-slate-400">Clique para baixar o .txt • 12kb</span>
                </div>
            </button>
          )}

          {step.type === 'toggle' && step.toggleContent && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Modo de Fluxo</span>
               <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700 self-start sm:self-auto">
                  {step.toggleContent.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveToggleIndex(index)}
                      className={`px-3 py-1 text-xs font-medium rounded transition-all duration-200 ${
                        activeToggleIndex === index
                          ? 'bg-slate-700 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
               </div>
            </div>
          )}

          {step.type === 'handoff' && (
             <div className="flex gap-3 mb-0 p-3 bg-amber-900/10 border border-amber-500/20 rounded-lg">
                <AlertTriangle className="text-amber-500 flex-shrink-0" size={20} />
                <div>
                    <h4 className="text-sm font-bold text-amber-500">Hora do Handoff</h4>
                    <p className="text-xs text-amber-200/70 mt-1">
                        Copie o código gerado na sua IA conversacional e cole diretamente na ferramenta de prototipação escolhida (Google AI Studio, Lovable, Figma Make etc.).
                    </p>
                </div>
             </div>
          )}

          {/* Render CodeBlock only if it's NOT a download OR handoff type */}
          {step.type !== 'download' && step.type !== 'handoff' && (
            <CodeBlock 
                code={currentCode} 
                label={currentLabel}
            />
          )}
        </div>
      </div>
    </div>
  );
};