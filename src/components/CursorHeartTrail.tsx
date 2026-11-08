import React, { useEffect, useState } from 'react';

interface TrailHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  char: string;
}

export const CursorHeartTrail: React.FC = () => {
  const [hearts, setHearts] = useState<TrailHeart[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device to avoid rendering cursor trails on mobile/tablet
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    let heartId = 0;
    const chars = ['🌸', '✨', '💖', '🤍'];

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle spawn rate
      if (Math.random() > 0.35) return;

      const newHeart: TrailHeart = {
        id: ++heartId,
        x: e.clientX,
        y: e.clientY,
        size: Math.floor(Math.random() * 8) + 12,
        char: chars[Math.floor(Math.random() * chars.length)],
      };

      setHearts((prev) => [...prev.slice(-12), newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 900);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-float-slow select-none transition-all duration-700 ease-out"
          style={{
            left: heart.x,
            top: heart.y,
            fontSize: `${heart.size}px`,
            transform: 'translate(-50%, -50%)',
            opacity: 0.85,
            animation: 'heartFade 0.9s forwards ease-out',
          }}
        >
          {heart.char}
        </span>
      ))}
      <style>{`
        @keyframes heartFade {
          0% { transform: translate(-50%, -50%) scale(0.6); opacity: 1; }
          100% { transform: translate(-50%, -100%) scale(1.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
