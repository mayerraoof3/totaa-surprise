import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  onSecretFound?: () => void;
  footerText?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onSecretFound,
  footerText = "Made with all my heart by Mayer for his Totaa",
}) => {
  return (
    <footer className="w-full py-8 mt-12 text-center text-xs text-slate-400 select-none relative z-10">
      <div className="flex items-center justify-center gap-1.5 flex-wrap px-4">
        <span>{footerText}</span>
        <button
          onClick={onSecretFound}
          aria-label="Secret kiss button"
          title="Psst... tap here"
          className="inline-flex items-center justify-center text-blush-400 hover:text-blush-500 hover:scale-125 transition-transform"
        >
          <Heart className="w-3.5 h-3.5 fill-blush-400 inline" />
        </button>
        <span className="text-[11px] text-slate-300">| 2026</span>
      </div>
    </footer>
  );
};
