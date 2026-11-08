import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasCustomAudio, setHasCustomAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthTimerRef = useRef<number | null>(null);

  // Check if public/music.mp3 exists
  useEffect(() => {
    fetch('/music.mp3', { method: 'HEAD' })
      .then((res) => {
        if (res.ok && res.headers.get('content-type')?.includes('audio')) {
          setHasCustomAudio(true);
        }
      })
      .catch(() => {
        setHasCustomAudio(false);
      });
  }, []);

  // Web Audio API music box melody synthesizer for a gentle romantic lullaby
  const startSynthMelody = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Romantic music-box notes (frequencies in Hz: F4, A4, C5, E5, D5, G4, etc.)
    const notes = [
      349.23, 440.0, 523.25, 659.25, // Fmaj7
      329.63, 392.0, 493.88, 587.33, // Em7
      293.66, 349.23, 440.0, 523.25, // Dm7
      261.63, 329.63, 392.0, 523.25, // C
    ];

    let step = 0;
    const playNote = () => {
      if (!ctx || ctx.state === 'closed') return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Soft sine + triangle bell tone
      osc.type = 'triangle';
      const freq = notes[step % notes.length];
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Delicate pluck envelope (music box / kalimba)
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.045, ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.8);

      step++;
    };

    // Trigger notes every 420ms
    playNote();
    synthTimerRef.current = window.setInterval(playNote, 420);
  };

  const stopSynthMelody = () => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      if (hasCustomAudio && audioRef.current) {
        audioRef.current.pause();
      } else {
        stopSynthMelody();
      }
      setIsPlaying(false);
    } else {
      if (hasCustomAudio && audioRef.current) {
        audioRef.current.play().catch(() => {
          startSynthMelody();
        });
      } else {
        startSynthMelody();
      }
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopSynthMelody();
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
      <audio ref={audioRef} src="/music.mp3" loop preload="none" />
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute background melody" : "Play romantic background melody"}
        title={isPlaying ? "Mute music" : "Play soft melody"}
        className="group relative flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 hover:bg-white text-rosegold shadow-sm hover:shadow-md border border-blush-200/80 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blush-400"
      >
        <span className="relative flex h-3 w-3">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blush-400 opacity-75"></span>
          )}
          <span className={`relative inline-flex rounded-full h-3 w-3 ${isPlaying ? 'bg-blush-500' : 'bg-slate-300'}`}></span>
        </span>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-blush-500 animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-rosegold" />
        )}

        <span className="text-xs font-medium text-slate-600 hidden sm:inline">
          {isPlaying ? "Music Playing" : "Soft Melody"}
        </span>

        {isPlaying && (
          <span className="hidden sm:inline text-xs animate-bounce">
            <Music className="w-3 h-3 text-blush-400" />
          </span>
        )}
      </button>
    </div>
  );
};
