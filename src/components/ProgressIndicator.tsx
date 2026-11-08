import React from 'react';
import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentChapter: number;
  totalChapters: number;
  onSelectChapter?: (chapter: number) => void;
}

const chapterNames = [
  "Good Morning",
  "About Last Night",
  "Two Paths",
  "Paris & Cairo",
  "What I Miss",
  "My Letter",
];

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentChapter,
  totalChapters,
  onSelectChapter,
}) => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 max-w-[92vw]">
      <div className="flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-2 rounded-full bg-white/85 backdrop-blur-md border border-blush-200/70 shadow-sm">
        <span className="text-[11px] sm:text-xs font-serif italic text-slate-500 mr-1 hidden xs:inline">
          Chapter {currentChapter} of {totalChapters}
        </span>

        <div className="flex items-center gap-1 sm:gap-1.5">
          {Array.from({ length: totalChapters }).map((_, index) => {
            const step = index + 1;
            const isActive = step === currentChapter;
            const isCompleted = step < currentChapter;

            return (
              <button
                key={step}
                onClick={() => onSelectChapter && onSelectChapter(step)}
                disabled={!onSelectChapter}
                title={chapterNames[index]}
                aria-label={`Go to chapter ${step}: ${chapterNames[index]}`}
                className={`relative flex items-center justify-center transition-all duration-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blush-400 ${
                  isActive
                    ? 'w-6 h-6 sm:w-7 sm:h-7 bg-blush-400 text-white shadow-soft-glow'
                    : isCompleted
                    ? 'w-4 h-4 sm:w-5 sm:h-5 bg-blush-200/80 text-blush-600 hover:bg-blush-300'
                    : 'w-3 h-3 sm:w-3.5 sm:h-3.5 bg-slate-200 hover:bg-slate-300'
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="active-indicator"
                    className="text-[10px] sm:text-xs font-semibold"
                  >
                    {step}
                  </motion.span>
                ) : isCompleted ? (
                  <span className="text-[9px] sm:text-[10px] leading-none">✓</span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
