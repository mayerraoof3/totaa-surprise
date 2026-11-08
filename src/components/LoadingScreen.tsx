import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface LoadingScreenProps {
  onLoaded: () => void;
  message?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoaded,
  message = "Collecting all my love for Totaa...",
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onLoaded, 600);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-blush-50 via-ivory-50 to-lavender-50 px-6 text-center"
        >
          <div className="relative mb-6">
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-16 h-16 rounded-full bg-blush-100 flex items-center justify-center shadow-soft-glow"
            >
              <Heart className="w-8 h-8 text-blush-500 fill-blush-500" />
            </motion.div>
            <motion.span
              animate={{
                opacity: [0, 1, 0],
                y: [-4, -18],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              className="absolute -top-1 -right-1 text-sm"
            >
              ✨
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-lg sm:text-xl text-slate-700 font-medium italic mb-3"
          >
            {message}
          </motion.p>

          <div className="w-48 h-1.5 bg-blush-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.7, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-blush-300 via-blush-400 to-rosegold rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
