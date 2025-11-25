import React, { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  label?: string;
  onDownload?: () => void;
  downloadLabel?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, label, onDownload, downloadLabel }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative mt-4 rounded-lg overflow-hidden border border-slate-700 bg-[#0B1221]">
      {/* Header bar of the code block */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
          {label || 'Prompt / Código'}
        </span>
        <div className="flex gap-2">
            {onDownload && (
                <button
                onClick={onDownload}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-accent bg-accent/10 hover:bg-accent/20 rounded transition-colors"
                >
                <FileText size={12} />
                {downloadLabel || 'Baixar'}
                </button>
            )}
            <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-700/50 hover:bg-slate-700 rounded transition-colors"
            >
                {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                {copied ? 'Copiado!' : 'Copiar'}
            </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-sm text-slate-300 leading-relaxed whitespace-pre">
          {code}
        </pre>
      </div>
    </div>
  );
};