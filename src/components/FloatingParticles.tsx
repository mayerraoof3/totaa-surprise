import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  type: 'heart' | 'sparkle' | 'petal' | 'circle';
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  opacity: number;
}

export const FloatingParticles: React.FC = () => {
  // Generate a stable set of gentle background particles
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      type: i % 4 === 0 ? 'heart' : i % 4 === 1 ? 'petal' : i % 4 === 2 ? 'sparkle' : 'circle',
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.floor(Math.random() * 14) + 10,
      duration: Math.floor(Math.random() * 8) + 12,
      delay: Math.random() * 5,
      rotation: Math.floor(Math.random() * 360),
      opacity: Math.random() * 0.35 + 0.2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-blush-400 select-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
          }}
          animate={{
            y: ['0vh', '-25vh', '0vh'],
            x: ['0vw', `${(p.id % 2 === 0 ? 1 : -1) * 3}vw`, '0vw'],
            rotate: [p.rotation, p.rotation + 45, p.rotation],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {p.type === 'heart' && '🤍'}
          {p.type === 'petal' && '🌸'}
          {p.type === 'sparkle' && '✨'}
          {p.type === 'circle' && (
            <span className="block rounded-full bg-blush-200/60 w-3 h-3 blur-[1px]" />
          )}
        </motion.div>
      ))}
    </div>
  );
};
