import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircleHeart, ArrowRight } from 'lucide-react';

interface Scene2Props {
  onNext: () => void;
  heading: string;
  paragraphs: string[];
  humorLine: string;
  buttonText: string;
}

export const Scene2AboutLastNight: React.FC<Scene2Props> = ({
  onNext,
  heading,
  paragraphs,
  humorLine,
  buttonText,
}) => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-12 relative z-10 max-w-xl mx-auto">
      {/* Chapter header badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-100/90 text-blush-600 text-xs font-medium mb-4 border border-blush-200/60"
      >
        <MessageCircleHeart className="w-3.5 h-3.5 text-blush-500" />
        <span>Chapter 2 • Honest Words</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif text-2xl sm:text-3xl md:text-4xl text-slate-800 font-bold mb-6 text-center"
      >
        {heading}
      </motion.h2>

      {/* Intimate letter paper card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full paper-texture rounded-3xl p-6 sm:p-8 shadow-warm-card border border-ivory-300 relative overflow-hidden"
      >
        {/* Decorative corner washi tape */}
        <div className="washi-tape absolute -top-3 left-8 w-24 h-7 -rotate-3 rounded-sm border border-blush-200/40" />
        <div className="washi-tape absolute -bottom-3 right-8 w-24 h-7 rotate-2 rounded-sm border border-blush-200/40" />

        <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
          {paragraphs.map((p, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 + index * 0.2 }}
              className={index === 0 ? "font-serif text-xl sm:text-2xl font-semibold text-slate-800" : ""}
            >
              {p}
            </motion.p>
          ))}

          {/* Playful humor line with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 + paragraphs.length * 0.2 }}
            className="pt-2 flex items-center gap-3 bg-blush-50/70 p-3.5 rounded-2xl border border-blush-100"
          >
            <motion.div
              animate={{
                rotate: [0, -10, 10, -5, 5, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="text-2xl select-none"
            >
              🙈
            </motion.div>
            <p className="font-handwritten text-xl sm:text-2xl text-blush-600 font-medium">
              {humorLine}
            </p>
          </motion.div>
        </div>

        {/* Floating delicate heart accent */}
        <div className="absolute bottom-4 right-4 text-blush-300/60 pointer-events-none">
          <Heart className="w-8 h-8 fill-blush-100" />
        </div>
      </motion.div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 + paragraphs.length * 0.2 + 0.3 }}
        className="mt-8"
      >
        <button
          onClick={onNext}
          className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-800 font-medium text-base shadow-sm hover:shadow-md border border-blush-200/90 hover:border-blush-300 hover:text-blush-600 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blush-300"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 text-blush-500 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};
