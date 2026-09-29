import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  X,
  Maximize2,
  TrendingUp,
} from 'lucide-react';
import { TrendItem } from '../types';
import { useI18n } from '../i18n/useI18n';

interface AudioPodcasterDockProps {
  trends: TrendItem[];
  currentTrendIndex: number;
  onSelectTrendIndex: (index: number) => void;
  isOpen: boolean;
  onClose: () => void;
  onOpenArticle: (trend: TrendItem) => void;
  currentLangCode: string;
}

export const AudioPodcasterDock: React.FC<AudioPodcasterDockProps> = ({
  trends,
  currentTrendIndex,
  onSelectTrendIndex,
  isOpen,
  onClose,
  onOpenArticle,
  currentLangCode,
}) => {
  const { t, getLocalizedTrend, getLocalizedCategory } = useI18n(currentLangCode);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const rawTrend = trends[currentTrendIndex] || trends[0];
  const currentTrend = rawTrend ? getLocalizedTrend(rawTrend) : null;

  const speakCurrentTrend = () => {
    if (!('speechSynthesis' in window) || !currentTrend) return;

    window.speechSynthesis.cancel();

    const script = `${currentTrend.rank}. ${currentTrend.topic}. ${getLocalizedCategory(currentTrend.category)}. ${currentTrend.summary}`;
    const utterance = new SpeechSynthesisUtterance(script);
    utterance.rate = playbackRate;
    utterance.pitch = 1.0;
    utterance.lang = currentLangCode;

    utterance.onend = () => {
      if (currentTrendIndex < trends.length - 1) {
        onSelectTrendIndex(currentTrendIndex + 1);
      } else {
        setIsPlaying(false);
      }
    };

    utterance.onerror = () => setIsPlaying(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      speakCurrentTrend();
    }
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentTrendIndex, playbackRate, currentLangCode]);

  const togglePlay = () => {
    if (isPlaying) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
    } else {
      speakCurrentTrend();
    }
  };

  const handleNext = () => {
    if (currentTrendIndex < trends.length - 1) {
      onSelectTrendIndex(currentTrendIndex + 1);
    } else {
      onSelectTrendIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentTrendIndex > 0) {
      onSelectTrendIndex(currentTrendIndex - 1);
    } else {
      onSelectTrendIndex(trends.length - 1);
    }
  };

  const cycleSpeed = () => {
    const speeds = [1.0, 1.25, 1.5, 2.0];
    const nextIdx = (speeds.indexOf(playbackRate) + 1) % speeds.length;
    setPlaybackRate(speeds[nextIdx]);
  };

  if (!isOpen || !currentTrend) return null;

  return (
    <div className="fixed bottom-14 lg:bottom-4 inset-x-2 sm:inset-x-auto sm:right-6 sm:w-96 z-40 bg-[#0e0e16]/95 backdrop-blur-xl border border-white/[0.12] rounded-2xl shadow-2xl p-3 text-slate-200 animate-in slide-in-from-bottom-3 duration-200">
      {/* Header & Close */}
      <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-1.5 font-mono text-[#00ff88]">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
          <span className="font-bold text-[11px]">{t('audio_dock_badge')}</span>
          <span className="text-[10px] text-slate-500 font-mono">({currentTrendIndex + 1}/{trends.length})</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onOpenArticle(currentTrend)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition"
            title="Open Full Article"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => {
              if ('speechSynthesis' in window) window.speechSynthesis.cancel();
              setIsPlaying(false);
              onClose();
            }}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition"
            title="Dismiss Audio Dock"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Current Trend Info */}
      <div className="py-2">
        <div className="flex items-center justify-between text-[11px] font-mono mb-1">
          <span className="text-[#ff0080] font-bold">#{currentTrend.rank} {getLocalizedCategory(currentTrend.category)}</span>
          <span className="text-[#00ff88] font-bold flex items-center gap-0.5">
            <TrendingUp className="w-3 h-3" />
            +{currentTrend.velocity}%
          </span>
        </div>
        <div
          onClick={() => onOpenArticle(currentTrend)}
          className="text-xs font-bold text-white line-clamp-1 hover:text-[#ff0080] transition cursor-pointer"
        >
          {currentTrend.topic}
        </div>
      </div>

      {/* Animated Waveform */}
      <div className="flex items-center justify-center gap-1 h-4 my-1">
        {[40, 70, 30, 90, 60, 100, 45, 80, 50, 75, 95, 35].map((h, i) => (
          <div
            key={i}
            className={`w-1 rounded-full transition-all duration-150 ${
              isPlaying ? 'bg-gradient-to-t from-[#ff0080] to-[#00ff88]' : 'bg-white/10'
            }`}
            style={{
              height: isPlaying ? `${Math.max(20, (h * (i % 2 === 0 ? 1 : 0.7)))}%` : '20%',
            }}
          />
        ))}
      </div>

      {/* Control Strip */}
      <div className="flex items-center justify-between gap-2 pt-1">
        <button
          onClick={cycleSpeed}
          className="px-2 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-[10px] font-mono text-slate-300 font-bold transition min-w-[38px] text-center"
          title="Playback speed"
        >
          {playbackRate}x
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-1.5 rounded-full hover:bg-white/[0.08] text-slate-300 hover:text-white transition"
            title="Previous"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlay}
            className="p-2.5 rounded-full bg-gradient-to-r from-[#ff0080] to-[#00ff88] text-white hover:scale-105 active:scale-95 transition shadow-lg shadow-[#ff0080]/20"
            title={isPlaying ? t('pause_briefing') : t('play_briefing')}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
          </button>

          <button
            onClick={handleNext}
            className="p-1.5 rounded-full hover:bg-white/[0.08] text-slate-300 hover:text-white transition"
            title="Next"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={() => onOpenArticle(currentTrend)}
          className="text-[10px] font-mono text-[#00ff88] hover:underline"
        >
          {t('read_report')}
        </button>
      </div>
    </div>
  );
};
