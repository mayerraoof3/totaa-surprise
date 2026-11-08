import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Scene1Props {
  onNext: () => void;
  greeting: string;
  subtitle1: string;
  subtitle2: string;
  buttonText: string;
}

export const Scene1GoodMorning: React.FC<Scene1Props> = ({
  onNext,
  greeting,
  subtitle1,
  subtitle2,
  buttonText,
}) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    // Subtle romantic confetti burst
    confetti({
      particleCount: 35,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#fb6f92', '#ffafcc', '#ffd6e0', '#faf6ee'],
    });

    // Delay transition so envelope opening animation plays smoothly
    setTimeout(() => {
      onNext();
    }, 1200);
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-8 text-center relative z-10 max-w-xl mx-auto">
      {/* Top greeting badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/90 text-blush-600 text-xs sm:text-sm font-medium mb-6 shadow-sm border border-blush-200/60"
      >
        <Sparkles className="w-3.5 h-3.5 text-blush-500 animate-spin" style={{ animationDuration: '4s' }} />
        <span>For Batool • My Totaa</span>
      </motion.div>

      {/* Main Greeting */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-800 font-bold tracking-tight mb-4 leading-tight"
      >
        {greeting}
      </motion.h1>

      {/* Subtitles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-2 mb-8 text-slate-600 font-light text-base sm:text-lg max-w-md mx-auto"
      >
        <p>{subtitle1}</p>
        <p className="font-handwritten text-2xl text-blush-600 font-medium">
          {subtitle2}
        </p>
      </motion.div>

      {/* Animated Envelope Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative my-6 cursor-pointer group"
        onClick={!isOpening ? handleOpen : undefined}
      >
        <div className="w-64 sm:w-72 h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-ivory-100 to-blush-100/80 shadow-warm-card border border-blush-200/80 relative overflow-hidden flex flex-col items-center justify-center p-4 transition-transform group-hover:scale-[1.02]">
          
          {/* Envelope flap */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blush-200/90 to-ivory-100 origin-top border-b border-blush-300/60 flex items-center justify-center"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}
            animate={isOpening ? { rotateX: 180, opacity: 0.3 } : { rotateX: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {/* Wax seal on flap */}
            <div className="wax-seal w-9 h-9 rounded-full flex items-center justify-center -mb-8 shadow-md">
              <span className="font-serif text-amber-100 font-bold text-xs tracking-widest">
                T
              </span>
            </div>
          </motion.div>

          {/* Letter peeking out */}
          <motion.div
            className="w-52 h-28 bg-white rounded-lg shadow-sm border border-blush-100 p-3 flex flex-col items-center justify-center text-center"
            animate={isOpening ? { y: -45, scale: 1.05 } : { y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Heart className="w-6 h-6 text-blush-400 fill-blush-300 mb-1 animate-pulse" />
            <span className="font-handwritten text-lg text-slate-700">
              To the girl I miss most
            </span>
          </motion.div>

          {/* Lower envelope fold decoration */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blush-100/70 to-transparent pointer-events-none"
            style={{
              clipPath: 'polygon(0 100%, 100% 100%, 50% 20%)',
            }}
          />
        </div>
      </motion.div>

      {/* Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-4"
      >
        <button
          onClick={handleOpen}
          disabled={isOpening}
          className="relative group px-8 py-4 rounded-full bg-gradient-to-r from-blush-400 via-blush-500 to-rosegold text-white font-medium text-base sm:text-lg shadow-soft-glow hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blush-200"
        >
          <span className="flex items-center gap-2">
            <span>{isOpening ? "Opening for you..." : buttonText}</span>
            <Sparkles className="w-5 h-5 text-blush-200 group-hover:rotate-45 transition-transform" />
          </span>
        </button>
      </motion.div>
    </div>
  );
};
