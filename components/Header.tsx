import React from 'react';
import { Palette } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-background/80 backdrop-blur-md border-b border-white/10 flex items-center justify-center px-4 md:px-8">
      <div className="w-full max-w-4xl flex items-center justify-between">
        <div className="text-xs md:text-sm font-medium text-textSecondary tracking-wide">
          Playbook de apoio às aulas de Espedito Roza
        </div>
      </div>
    </header>
  );
};