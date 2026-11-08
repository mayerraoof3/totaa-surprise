import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EasterEggsProps {
  fiveClicksSecret: string;
  hiddenKissSecret?: string;
  onOpenKissSecret?: () => void;
}

export const EasterEggs: React.FC<EasterEggsProps> = ({
  fiveClicksSecret,
  hiddenKissSecret,
  onOpenKissSecret,
}) => {
  const [clickCount, setClickCount] = useState(0);
  const [activeSecret, setActiveSecret] = useState<string | null>(null);

  const handleCornerHeartClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);

    if (nextCount === 5) {
      setActiveSecret(fiveClicksSecret);
      setClickCount(0);
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { x: 0.1, y: 0.9 },
        colors: ['#ffafcc', '#fb6f92', '#ffeef2'],
      });
    }
  };

  const handleOpenKiss = () => {
    if (onOpenKissSecret) {
      onOpenKissSecret();
    } else if (hiddenKissSecret) {
      setActiveSecret(hiddenKissSecret);
    }
  };

  return (
    <>
      {/* Subtle corner heart */}
      <div className="fixed bottom-4 left-4 z-40 flex items-center gap-2">
        <button
          onClick={handleCornerHeartClick}
          aria-label="Tiny heart button"
          className="relative group p-2.5 rounded-full bg-white/70 hover:bg-white text-blush-400 hover:text-blush-500 shadow-sm border border-blush-100 transition-all active:scale-90 focus:outline-none"
          title="Tap me a few times..."
        >
          <Heart className="w-4 h-4 fill-blush-400/30 group-hover:fill-blush-500 transition-colors" />
          {clickCount > 0 && clickCount < 5 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blush-400 text-white text-[9px] flex items-center justify-center font-bold">
              {clickCount}
            </span>
          )}
        </button>

        {/* Tiny hidden stamp for the secret kiss */}
        <button
          onClick={handleOpenKiss}
          aria-label="Secret tiny stamp"
          className="opacity-20 hover:opacity-100 transition-opacity p-1.5 rounded-full hover:bg-blush-100/50 text-[11px]"
          title="A secret surprise..."
        >
          💌
        </button>
      </div>

      {/* Secret Message Modal */}
      <AnimatePresence>
        {activeSecret && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/30 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-sm w-full bg-white rounded-3xl p-6 shadow-2xl border border-blush-200 text-center"
            >
              <button
                onClick={() => setActiveSecret(null)}
                aria-label="Close secret note"
                className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-blush-100 flex items-center justify-center text-blush-500 shadow-soft-glow">
                <Sparkles className="w-6 h-6" />
              </div>

              <h4 className="font-serif text-lg font-semibold text-slate-800 mb-2">
                Secret Note 💌
              </h4>

              <p className="font-handwritten text-xl text-blush-600 leading-relaxed mb-6">
                "{activeSecret}"
              </p>

              <button
                onClick={() => setActiveSecret(null)}
                className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-blush-400 to-rosegold text-white text-sm font-medium shadow-md hover:shadow-lg hover:from-blush-500 hover:to-rosegold transition-all"
              >
                Close with love 💕
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
