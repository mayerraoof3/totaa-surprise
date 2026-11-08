import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Scene6Props {
  onRestart: () => void;
  salutation: string;
  letterParagraphs: string[];
  signOff: string;
  signatureName: string;
  finaleButtonText: string;
  finale: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    restartButtonText: string;
  };
}

export const Scene6LetterToTotaa: React.FC<Scene6Props> = ({
  onRestart,
  salutation,
  letterParagraphs,
  signOff,
  signatureName,
  finaleButtonText,
  finale,
}) => {
  const [showFinale, setShowFinale] = useState(false);

  const triggerPetalShower = () => {
    setShowFinale(true);

    // Continuous romantic petal shower
    const duration = 4.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 25, spread: 360, ticks: 70, zIndex: 100 };

    const interval: number = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 20;
      confetti({
        ...defaults,
        particleCount,
        origin: { x: Math.random() * 0.4 + 0.3, y: Math.random() * 0.2 },
        colors: ['#fb6f92', '#ffafcc', '#ffd6e0', '#f43f5e', '#ffffff'],
        shapes: ['circle'],
        scalar: 1.1,
      });
    }, 350);
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-12 relative z-10 max-w-2xl mx-auto">
      {/* Chapter header badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-100/90 text-blush-600 text-xs font-medium mb-4 border border-blush-200/60"
      >
        <Sparkles className="w-3.5 h-3.5 text-blush-500" />
        <span>Chapter 6 • From the Bottom of My Heart</span>
      </motion.div>

      {/* Warm Parchment Letter Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full paper-texture rounded-3xl p-7 sm:p-10 shadow-warm-card border border-ivory-300 relative overflow-hidden text-slate-800"
      >
        {/* Decorative corner tapes */}
        <div className="washi-tape absolute -top-3 left-10 w-24 h-7 -rotate-2 rounded-sm border border-blush-200/50" />
        <div className="washi-tape absolute -bottom-3 right-10 w-24 h-7 rotate-2 rounded-sm border border-blush-200/50" />

        {/* Floating subtle ambient heart */}
        <div className="absolute top-6 right-6 text-blush-300/40 pointer-events-none animate-pulse-soft">
          <Heart className="w-10 h-10 fill-blush-100" />
        </div>

        {/* Salutation */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {salutation}
          </h2>
        </div>

        {/* Letter Body */}
        <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-slate-700">
          {letterParagraphs.map((para, idx) => {
            const isSingleShort = para === "You're not." || para === "I'm sorry I made you feel otherwise.";
            const isLoveDeclaration = para === "I love you, Totaa.";

            return (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                className={
                  isLoveDeclaration
                    ? "font-handwritten text-2xl sm:text-3xl font-bold text-blush-600 pt-2"
                    : isSingleShort
                    ? "font-semibold text-slate-900 italic py-1"
                    : ""
                }
              >
                {para}
              </motion.p>
            );
          })}
        </div>

        {/* Sign-off & Mayer's Signature */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 pt-4 border-t border-blush-100/80 flex items-center justify-between flex-wrap gap-4"
        >
          <div>
            <p className="font-serif text-sm text-slate-500 italic">{signOff}</p>
            <p className="font-handwritten text-3xl sm:text-4xl text-blush-600 font-bold mt-1">
              {signatureName}
            </p>
          </div>

          {/* Real wax seal stamp */}
          <div className="wax-seal w-12 h-12 rounded-full flex items-center justify-center text-amber-100 font-serif font-bold text-sm tracking-wider shadow-md">
            M & T
          </div>
        </motion.div>
      </motion.div>

      {/* Button to Final Surprise */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-8"
      >
        <button
          onClick={triggerPetalShower}
          className="group relative px-9 py-4 rounded-full bg-gradient-to-r from-blush-400 via-blush-500 to-rosegold text-white font-medium text-base sm:text-lg shadow-soft-glow hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blush-200"
        >
          <span className="flex items-center gap-2">
            <span>{finaleButtonText}</span>
            <Heart className="w-5 h-5 fill-white text-white group-hover:scale-125 transition-transform" />
          </span>
        </button>
      </motion.div>

      {/* GRAND FINALE OVERLAY */}
      <AnimatePresence>
        {showFinale && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-b from-blush-100/95 via-ivory-50/95 to-blush-50/95 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 240 }}
              className="relative max-w-lg w-full bg-white/95 rounded-3xl p-8 sm:p-10 shadow-2xl border border-blush-200 text-center my-8"
            >
              {/* Giant Glowing Heart */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -3, 3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blush-200 to-blush-400 flex items-center justify-center shadow-soft-glow"
              >
                <Heart className="w-14 h-14 text-white fill-white drop-shadow-md" />
              </motion.div>

              <div className="space-y-4 mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-serif text-lg sm:text-xl text-slate-600 italic"
                >
                  "{finale.line1}"
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="font-serif text-xl sm:text-2xl text-slate-800 font-bold leading-snug"
                >
                  {finale.line2}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 }}
                  className="font-handwritten text-4xl sm:text-5xl text-blush-600 font-bold py-2"
                >
                  {finale.line3}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="text-base sm:text-lg text-slate-700 font-medium"
                >
                  {finale.line4}
                </motion.p>
              </div>

              {/* Read our story again button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                <button
                  onClick={() => {
                    setShowFinale(false);
                    onRestart();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blush-50 text-blush-700 hover:bg-blush-100 border border-blush-200 text-sm font-medium transition-all duration-300"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{finale.restartButtonText}</span>
                </button>

                <button
                  onClick={() => setShowFinale(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 text-sm font-medium transition-all duration-300"
                >
                  <span>Close & keep letter</span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
