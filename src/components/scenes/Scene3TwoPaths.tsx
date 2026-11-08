import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ArrowRight, Heart, CheckCircle2 } from 'lucide-react';

interface Scene3Props {
  onNext: () => void;
  heading: string;
  intro: string;
  pathFrance: {
    location: string;
    tagline: string;
    description: string;
    details: string;
  };
  pathEgypt: {
    location: string;
    tagline: string;
    description: string;
    revealLines: string[];
  };
  buttonText: string;
}

export const Scene3TwoPaths: React.FC<Scene3Props> = ({
  onNext,
  heading,
  intro,
  pathFrance,
  pathEgypt,
  buttonText,
}) => {
  const [selectedPath, setSelectedPath] = useState<'france' | 'egypt' | null>(null);

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-12 relative z-10 max-w-2xl mx-auto">
      {/* Chapter header badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-100/90 text-blush-600 text-xs font-medium mb-3 border border-blush-200/60"
      >
        <Compass className="w-3.5 h-3.5 text-blush-500" />
        <span>Chapter 3 • Two Paths</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif text-2xl sm:text-3xl md:text-4xl text-slate-800 font-bold mb-3 text-center"
      >
        {heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-slate-500 text-sm sm:text-base text-center mb-8 max-w-md"
      >
        {intro}
      </motion.p>

      {/* Two Paths Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mb-8">
        
        {/* Path 1: France */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => setSelectedPath('france')}
          className={`cursor-pointer rounded-3xl p-5 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
            selectedPath === 'france'
              ? 'bg-white border-slate-300 shadow-md ring-2 ring-slate-300'
              : 'bg-white/80 hover:bg-white border-slate-200/70 shadow-sm hover:shadow-md'
          }`}
        >
          {/* Illustrated Paris Silhouette Header */}
          <div className="h-32 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200/60 flex items-center justify-center relative overflow-hidden mb-4">
            <svg
              viewBox="0 0 200 120"
              className="w-full h-full object-contain text-slate-400"
              fill="none"
              stroke="currentColor"
            >
              {/* Eiffel tower simplified artistic line art */}
              <path d="M100 20 L100 100" strokeWidth="2" strokeDasharray="2 2" />
              <path d="M96 22 L104 22 M94 35 L106 35 M88 65 L112 65" strokeWidth="2.5" />
              <path d="M100 15 L90 85 L85 105 M100 15 L110 85 L115 105" strokeWidth="2.5" />
              <path d="M88 105 Q100 88 112 105" strokeWidth="2" />
              {/* Paris clouds & stars */}
              <circle cx="45" cy="35" r="1.5" fill="#94a3b8" />
              <circle cx="155" cy="40" r="1.5" fill="#94a3b8" />
              <circle cx="170" cy="25" r="2" fill="#cbd5e1" />
            </svg>
            <span className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full bg-slate-200/90 text-slate-600 font-mono">
              FR
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-serif text-xl font-bold text-slate-800">
                {pathFrance.location}
              </h3>
              {selectedPath === 'france' && (
                <CheckCircle2 className="w-5 h-5 text-slate-400" />
              )}
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-500 italic mb-2">
              "{pathFrance.tagline}"
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              {pathFrance.description}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Tap to inspect path</span>
            <span>→</span>
          </div>
        </motion.div>

        {/* Path 2: Egypt */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() => setSelectedPath('egypt')}
          className={`cursor-pointer rounded-3xl p-5 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
            selectedPath === 'egypt'
              ? 'bg-gradient-to-b from-white via-blush-50/60 to-ivory-100 border-blush-300 shadow-soft-glow ring-2 ring-blush-400'
              : 'bg-white/80 hover:bg-white border-blush-200/60 shadow-sm hover:shadow-md'
          }`}
        >
          {/* Illustrated Cairo Nile & Pyramids */}
          <div className="h-32 rounded-2xl bg-gradient-to-b from-amber-50 to-blush-100/70 flex items-center justify-center relative overflow-hidden mb-4">
            <svg
              viewBox="0 0 200 120"
              className="w-full h-full object-contain text-rosegold"
              fill="none"
              stroke="currentColor"
            >
              {/* Crescent moon & stars */}
              <path d="M160 25 A 6 6 0 0 0 160 37 A 7 7 0 1 1 160 25" fill="#f43f5e" stroke="none" />
              <circle cx="40" cy="30" r="1.5" fill="#fb6f92" />
              <circle cx="125" cy="20" r="1.5" fill="#fb6f92" />
              {/* Pyramids silhouette */}
              <polygon points="75,45 40,95 110,95" fill="rgba(244, 63, 94, 0.15)" stroke="#fb6f92" strokeWidth="2" />
              <polygon points="120,55 90,95 150,95" fill="rgba(244, 63, 94, 0.22)" stroke="#e11d48" strokeWidth="2" />
              {/* Nile river wave */}
              <path d="M20 102 Q 60 96 100 102 T 180 102" stroke="#fb6f92" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="absolute top-2 right-2 text-xs px-2.5 py-0.5 rounded-full bg-blush-200/90 text-blush-700 font-mono font-medium">
              EG 🤍
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-serif text-xl font-bold text-slate-800 flex items-center gap-1.5">
                <span>{pathEgypt.location}</span>
                <Heart className="w-4 h-4 text-blush-500 fill-blush-400" />
              </h3>
              {selectedPath === 'egypt' && (
                <CheckCircle2 className="w-5 h-5 text-blush-500" />
              )}
            </div>
            <p className="text-xs sm:text-sm font-medium text-blush-600 italic mb-2">
              "{pathEgypt.tagline}"
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {pathEgypt.description}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-blush-100 flex items-center justify-between text-xs text-blush-500 font-medium">
            <span>Tap to see my heart's choice</span>
            <span>→</span>
          </div>
        </motion.div>
      </div>

      {/* Dynamic Content Panel Based on Selection */}
      <AnimatePresence mode="wait">
        {selectedPath === 'france' && (
          <motion.div
            key="france-explanation"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 text-slate-700 mb-6"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl">🏛️</span>
              <div>
                <p className="font-medium text-slate-800 mb-1">About the France possibility:</p>
                <p className="text-sm leading-relaxed text-slate-600">
                  {pathFrance.details}
                </p>
                <p className="text-xs text-slate-400 mt-2 italic">
                  Now tap on Egypt to see what I actually want...
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {selectedPath === 'egypt' && (
          <motion.div
            key="egypt-explanation"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-gradient-to-br from-blush-50 via-white to-ivory-100 border border-blush-200/90 rounded-3xl p-6 sm:p-8 shadow-warm-card mb-6"
          >
            <div className="space-y-3.5 text-slate-800">
              {pathEgypt.revealLines.map((line, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.18 }}
                  className={
                    idx === 0
                      ? "font-serif text-lg sm:text-xl font-bold text-blush-600 italic"
                      : idx === pathEgypt.revealLines.length - 1
                      ? "font-handwritten text-2xl sm:text-3xl text-slate-800 font-semibold pt-2"
                      : "text-base sm:text-lg leading-relaxed text-slate-700"
                  }
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button to Scene 4 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-2"
      >
        <button
          onClick={onNext}
          className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 text-white font-medium text-base shadow-sm hover:bg-slate-800 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 text-blush-300 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};
