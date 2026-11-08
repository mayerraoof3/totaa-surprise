import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, RefreshCw } from 'lucide-react';
import { PolaroidCard } from '../../types';

interface Scene5Props {
  onNext: () => void;
  heading: string;
  subtitle: string;
  cards: PolaroidCard[];
  closing1: string;
  closing2: string;
  buttonText: string;
}

// Fallback artistic SVG illustrations if Mayer hasn't added custom pictures yet
const getArtIllustration = (id: number) => {
  switch (id) {
    case 1: // Smile
      return (
        <div className="w-full h-full bg-gradient-to-br from-blush-100 to-rose-200 flex flex-col items-center justify-center text-center p-4">
          <span className="text-4xl mb-2 animate-bounce">🥰</span>
          <span className="font-handwritten text-xl text-blush-700">That beautiful smile</span>
        </div>
      );
    case 2: // Dates
      return (
        <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col items-center justify-center text-center p-4">
          <span className="text-4xl mb-2">☕ 🧁</span>
          <span className="font-handwritten text-xl text-amber-800">Our cozy coffee dates</span>
        </div>
      );
    case 3: // Laughing
      return (
        <div className="w-full h-full bg-gradient-to-br from-pink-50 to-blush-200 flex flex-col items-center justify-center text-center p-4">
          <span className="text-4xl mb-2">😂 ✨</span>
          <span className="font-handwritten text-xl text-rose-700">Laughing until it hurts</span>
        </div>
      );
    case 4: // Pictures
      return (
        <div className="w-full h-full bg-gradient-to-br from-purple-50 to-blush-100 flex flex-col items-center justify-center text-center p-4">
          <span className="text-4xl mb-2">📸 🤳</span>
          <span className="font-handwritten text-xl text-purple-700">One good pic, 99 funny faces</span>
        </div>
      );
    case 5: // Clock / Time
      return (
        <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center text-center p-4">
          <span className="text-4xl mb-2">🌙 ⏳</span>
          <span className="font-handwritten text-xl text-indigo-700">Hours melting away</span>
        </div>
      );
    case 6: // Next to you
    default:
      return (
        <div className="w-full h-full bg-gradient-to-br from-rose-100 to-blush-200 flex flex-col items-center justify-center text-center p-4">
          <span className="text-4xl mb-2">🤍 🤝</span>
          <span className="font-handwritten text-xl text-rose-800">Holding your hand again</span>
        </div>
      );
  }
};

export const Scene5LittleThings: React.FC<Scene5Props> = ({
  onNext,
  heading,
  subtitle,
  cards,
  closing1,
  closing2,
  buttonText,
}) => {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleImageError = (id: number) => {
    setImgErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-12 relative z-10 max-w-4xl mx-auto">
      {/* Chapter header badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-100/90 text-blush-600 text-xs font-medium mb-3 border border-blush-200/60"
      >
        <Sparkles className="w-3.5 h-3.5 text-blush-500" />
        <span>Chapter 5 • Scrapbook of Dreams</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif text-2xl sm:text-3xl md:text-4xl text-slate-800 font-bold mb-2 text-center"
      >
        {heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-slate-500 text-sm sm:text-base text-center mb-8"
      >
        {subtitle}
      </motion.p>

      {/* Polaroid Scrapbook Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full mb-12">
        {cards.map((card, index) => {
          const isFlipped = !!flippedCards[card.id];
          const hasError = !!imgErrors[card.id];

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`perspective-1000 cursor-pointer ${card.rotation} hover:rotate-0 transition-transform duration-300`}
              onClick={() => toggleFlip(card.id)}
            >
              <div
                className={`relative w-full h-[340px] preserve-3d transition-transform duration-700 ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT SIDE (Polaroid frame) */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-2xl p-4 shadow-polaroid border border-slate-200/80 flex flex-col justify-between">
                  {/* Decorative Washi Tape */}
                  <div className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 -rotate-1 rounded-sm border border-blush-200/50" />

                  {/* Top sticker */}
                  <span className="absolute top-2 right-3 text-lg select-none" title="Sticker">
                    {card.sticker}
                  </span>

                  {/* Photo area */}
                  <div className="w-full h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 relative">
                    {!hasError ? (
                      <img
                        src={card.image}
                        alt={card.altText}
                        onError={() => handleImageError(card.id)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      getArtIllustration(card.id)
                    )}

                    {/* Hint overlay */}
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-sm text-[10px] text-slate-500 flex items-center gap-1">
                      <RefreshCw className="w-2.5 h-2.5" />
                      <span>Tap to flip</span>
                    </div>
                  </div>

                  {/* Bottom handwritten caption */}
                  <div className="text-center pt-2 pb-1">
                    <h4 className="font-handwritten text-xl font-bold text-slate-800 leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                {/* BACK SIDE (Heartfelt note on paper) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 paper-texture rounded-2xl p-6 shadow-polaroid border border-ivory-300 flex flex-col justify-between text-center">
                  {/* Decorative stamp */}
                  <div className="w-8 h-8 rounded-full bg-blush-100 mx-auto flex items-center justify-center text-blush-500 mb-2">
                    <Heart className="w-4 h-4 fill-blush-300" />
                  </div>

                  <div className="space-y-3 my-auto">
                    <h5 className="font-serif text-sm font-semibold text-blush-600 uppercase tracking-wider">
                      Note from Mayer
                    </h5>
                    <p className="font-handwritten text-xl sm:text-2xl text-slate-700 leading-relaxed">
                      "{card.backMessage}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-blush-100/80 text-[11px] text-slate-400 flex items-center justify-center gap-1">
                    <RefreshCw className="w-3 h-3" />
                    <span>Tap to flip back</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Climax Quotes */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="w-full max-w-xl text-center space-y-2 mb-10 py-6 px-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-blush-100"
      >
        <p className="text-base sm:text-lg text-slate-600 font-light">
          {closing1}
        </p>
        <p className="font-serif text-xl sm:text-2xl text-blush-600 font-semibold italic">
          {closing2}
        </p>
      </motion.div>

      {/* Button to Scene 6 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
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
