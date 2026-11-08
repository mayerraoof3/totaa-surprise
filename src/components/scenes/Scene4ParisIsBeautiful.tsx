import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Scene4Props {
  onNext: () => void;
  line1: string;
  line2: string;
  line3: string;
  climaxHighlight: string;
  reflection1: string;
  reflection2: string;
  buttonText: string;
}

export const Scene4ParisIsBeautiful: React.FC<Scene4Props> = ({
  onNext,
  line1,
  line2,
  line3,
  climaxHighlight,
  reflection1,
  reflection2,
  buttonText,
}) => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-12 relative z-10 max-w-2xl mx-auto">
      {/* Chapter header badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-100/90 text-blush-600 text-xs font-medium mb-3 border border-blush-200/60"
      >
        <Sparkles className="w-3.5 h-3.5 text-blush-500" />
        <span>Chapter 4 • Distance & Longing</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif text-2xl sm:text-3xl md:text-4xl text-slate-800 font-bold mb-4 text-center"
      >
        Paris is Beautiful, But...
      </motion.h2>

      {/* Illustrated Map & Flight Path Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-7 shadow-warm-card border border-blush-200/80 mb-8 overflow-hidden relative"
      >
        {/* Subtle grid background */}
        <div className="subtle-grid absolute inset-0 opacity-40 pointer-events-none" />

        {/* Flight Map SVG */}
        <div className="relative w-full h-48 sm:h-56 my-2">
          <svg
            viewBox="0 0 500 220"
            className="w-full h-full overflow-visible"
            fill="none"
          >
            {/* Soft decorative geographic contour accents */}
            <path
              d="M30 60 Q 90 40 140 70 T 220 50"
              stroke="#fed7aa"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.4"
            />
            <path
              d="M340 160 Q 400 130 460 170"
              stroke="#fed7aa"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.4"
            />

            {/* Flight Path Curve: Paris (80, 50) to Cairo (420, 170) */}
            <path
              id="flightPath"
              d="M 80 50 Q 250 20 420 170"
              stroke="#fb6f92"
              strokeWidth="3"
              strokeDasharray="8 8"
              fill="none"
              className="animate-pulse"
            />

            {/* Paris Pin (Top-Left) */}
            <g transform="translate(80, 50)">
              <circle r="14" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
              <circle r="6" fill="#64748b" />
              <text x="0" y="-22" textAnchor="middle" className="text-xs font-serif font-bold fill-slate-700">
                Paris, FR 🗼
              </text>
              <text x="0" y="30" textAnchor="middle" className="text-[10px] font-sans fill-slate-400">
                Where I am now
              </text>
            </g>

            {/* Cairo Pin (Bottom-Right) with glowing heart */}
            <g transform="translate(420, 170)">
              {/* Pulsing beacon glow */}
              <circle r="22" fill="#ffe4e6" opacity="0.6">
                <animate attributeName="r" values="16;28;16" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle r="14" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="2" />
              <path
                d="M 0 -3 L 2 -1 L 0 1 L -2 -1 Z"
                fill="#e11d48"
              />
              <text x="0" y="-22" textAnchor="middle" className="text-xs font-serif font-bold fill-blush-600">
                Cairo, EG 🇪🇬
              </text>
              <text x="0" y="32" textAnchor="middle" className="text-[10px] font-sans font-semibold fill-blush-500">
                Where my heart is ❤️
              </text>
            </g>

            {/* Airplane moving along the path */}
            <motion.g
              animate={{
                offsetDistance: ['0%', '100%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                offsetPath: 'path("M 80 50 Q 250 20 420 170")',
                offsetRotate: 'auto 0deg',
              }}
            >
              {/* Little cute airplane */}
              <circle r="10" fill="#ffffff" stroke="#fb6f92" strokeWidth="1.5" />
              <g transform="translate(-8, -8) scale(0.65)">
                <path
                  d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                  fill="#e11d48"
                />
              </g>
              {/* Trailing tiny heart */}
              <text x="-16" y="2" className="text-[10px] fill-blush-400">🤍</text>
            </motion.g>
          </svg>
        </div>

        {/* Story Text Sequential Reveal */}
        <div className="space-y-3 pt-3 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-lg sm:text-xl text-slate-800 font-medium"
          >
            {line1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-sm sm:text-base text-slate-600"
          >
            {line2}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-sm sm:text-base text-slate-500 italic"
          >
            {line3}
          </motion.p>

          {/* Dramatic Pause -> Climax reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.3, duration: 0.8, type: 'spring' }}
            className="py-4"
          >
            <div className="inline-block relative">
              <span className="font-serif text-3xl sm:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blush-500 via-rose-500 to-rosegold drop-shadow-sm">
                {climaxHighlight}
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 2.8, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-blush-400 to-rosegold rounded-full mx-auto mt-1"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2 }}
            className="text-base text-slate-700 max-w-lg mx-auto leading-relaxed"
          >
            {reflection1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.7 }}
            className="font-handwritten text-xl sm:text-2xl text-blush-600 font-medium max-w-lg mx-auto"
          >
            {reflection2}
          </motion.p>
        </div>
      </motion.div>

      {/* Button to Scene 5 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.0 }}
      >
        <button
          onClick={onNext}
          className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blush-400 to-rosegold text-white font-medium text-base shadow-soft-glow hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blush-300"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};
