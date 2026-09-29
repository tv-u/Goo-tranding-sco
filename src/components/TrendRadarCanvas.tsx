import React, { useRef, useEffect, useState } from 'react';
import { Radio } from 'lucide-react';
import { TrendItem } from '../types';
import { useI18n } from '../i18n/useI18n';

interface TrendRadarCanvasProps {
  trends: TrendItem[];
  onSelectTrend: (trend: TrendItem) => void;
  currentLangCode: string;
}

interface RadarNode {
  name: string;
  country: string;
  flag: string;
  normX: number; // 0 - 1
  normY: number; // 0 - 1
  topic: string;
  velocity: number;
  slug: string;
}

export const TrendRadarCanvas: React.FC<TrendRadarCanvasProps> = ({
  trends,
  onSelectTrend,
  currentLangCode,
}) => {
  const { t, getLocalizedTrend } = useI18n(currentLangCode);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNode, setActiveNode] = useState<RadarNode | null>(null);

  const locTrends = trends.map(getLocalizedTrend);

  const nodes: RadarNode[] = [
    {
      name: 'Cadarache / Paris',
      country: 'France',
      flag: '🇫🇷',
      normX: 0.51,
      normY: 0.36,
      topic: locTrends[0]?.topic || 'ITER Plasma Confinement',
      velocity: locTrends[0]?.velocity || 284,
      slug: locTrends[0]?.slug || 'iter-fusion-magnetic-plasma-confinement-milestone',
    },
    {
      name: 'Nagoya / Tokyo',
      country: 'Japan',
      flag: '🇯🇵',
      normX: 0.85,
      normY: 0.40,
      topic: locTrends[1]?.topic || 'Solid-State Battery Rollout',
      velocity: locTrends[1]?.velocity || 216,
      slug: locTrends[1]?.slug || 'solid-state-battery-commercial-rollout-ev',
    },
    {
      name: 'New Delhi / Bengaluru',
      country: 'India',
      flag: '🇮🇳',
      normX: 0.70,
      normY: 0.48,
      topic: locTrends[2]?.topic || 'Global Sovereign AI Accord',
      velocity: locTrends[2]?.velocity || 188,
      slug: locTrends[2]?.slug || 'global-sovereign-ai-infrastructure-initiative',
    },
    {
      name: 'Washington / Florida',
      country: 'United States',
      flag: '🇺🇸',
      normX: 0.25,
      normY: 0.42,
      topic: locTrends[3]?.topic || 'Artemis IV Lunar Gateway',
      velocity: locTrends[3]?.velocity || 165,
      slug: locTrends[3]?.slug || 'artemis-iv-lunar-gateway-habitation-delivery',
    },
    {
      name: 'Brasília / São Paulo',
      country: 'Brazil',
      flag: '🇧🇷',
      normX: 0.35,
      normY: 0.72,
      topic: locTrends[4]?.topic || 'G20 Project Agora Digital Trade',
      velocity: locTrends[4]?.velocity || 154,
      slug: locTrends[4]?.slug || 'g20-digital-trade-currency-framework-project-agora',
    },
    {
      name: 'Nairobi / Accra',
      country: 'Africa',
      flag: '🌍',
      normX: 0.56,
      normY: 0.60,
      topic: locTrends[5]?.topic || 'WHO R21 Malaria Vaccine 100M',
      velocity: locTrends[5]?.velocity || 142,
      slug: locTrends[5]?.slug || 'who-r21-malaria-vaccine-100-million-doses',
    },
    {
      name: 'Singapore / Marina',
      country: 'Singapore',
      flag: '🇸🇬',
      normX: 0.78,
      normY: 0.62,
      topic: locTrends[6]?.topic || 'QKD Satellite Cryptographic Mesh',
      velocity: locTrends[6]?.velocity || 139,
      slug: locTrends[6]?.slug || 'quantum-key-distribution-qkd-satellite-mesh',
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(centerX, centerY) * 0.9;

      ctx.clearRect(0, 0, width, height);

      // Radar rings
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      for (let r = 0.25; r <= 1.0; r += 0.25) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Crosshairs
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.beginPath();
      ctx.moveTo(centerX - radius, centerY);
      ctx.lineTo(centerX + radius, centerY);
      ctx.moveTo(centerX, centerY - radius);
      ctx.lineTo(centerX, centerY + radius);
      ctx.stroke();

      // Sweeping beam
      angle += 0.02;
      if (angle >= Math.PI * 2) angle = 0;

      const sweepGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      sweepGradient.addColorStop(0, 'rgba(0, 255, 136, 0.35)');
      sweepGradient.addColorStop(1, 'rgba(0, 255, 136, 0.0)');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, angle - 0.4, angle);
      ctx.closePath();
      ctx.fillStyle = sweepGradient;
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
      ctx.stroke();
      ctx.restore();

      // Draw nodes
      nodes.forEach((node) => {
        const nx = width * node.normX;
        const ny = height * node.normY;

        const nodeAngle = (Math.atan2(ny - centerY, nx - centerX) + Math.PI * 2) % (Math.PI * 2);
        const diffAngle = Math.abs(angle - nodeAngle);
        const isSwept = diffAngle < 0.3;

        ctx.beginPath();
        ctx.arc(nx, ny, isSwept ? 6 : 4, 0, Math.PI * 2);
        ctx.fillStyle = isSwept ? '#00ff88' : '#ff0080';
        ctx.shadowColor = isSwept ? '#00ff88' : '#ff0080';
        ctx.shadowBlur = isSwept ? 15 : 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (isSwept) {
          ctx.beginPath();
          ctx.arc(nx, ny, 12, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(0, 255, 136, 0.5)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillStyle = isSwept ? '#ffffff' : '#94a3b8';
        ctx.fillText(node.name.split('/')[0], nx + 8, ny + 3);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [trends, currentLangCode]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    for (const node of nodes) {
      const nx = rect.width * node.normX;
      const ny = rect.height * node.normY;
      const dist = Math.hypot(clickX - nx, clickY - ny);
      if (dist < 25) {
        const matched = trends.find((t) => t.slug === node.slug) || trends[0];
        if (matched) {
          onSelectTrend(matched);
        }
        return;
      }
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let found: RadarNode | null = null;
    for (const node of nodes) {
      const nx = rect.width * node.normX;
      const ny = rect.height * node.normY;
      const dist = Math.hypot(mouseX - nx, mouseY - ny);
      if (dist < 25) {
        found = node;
        break;
      }
    }
    setActiveNode(found);
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#09090f] border border-white/[0.08] p-4 sm:p-6 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#00ff88]">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>{t('radar_badge')}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
            {t('radar_title')}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#00ff88]" /> {t('radar_active_pulse')}
          </span>
          <span>·</span>
          <span>{t('radar_click_node')}</span>
        </div>
      </div>

      <div className="relative h-64 sm:h-80 w-full flex items-center justify-center">
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          onMouseMove={handleCanvasMouseMove}
          onMouseLeave={() => setActiveNode(null)}
          onTouchStart={(e) => {
            const touch = e.touches[0];
            if (!touch) return;
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            const clickX = touch.clientX - rect.left;
            const clickY = touch.clientY - rect.top;
            for (const node of nodes) {
              const nx = rect.width * node.normX;
              const ny = rect.height * node.normY;
              if (Math.hypot(clickX - nx, clickY - ny) < 32) {
                const matched = trends.find((t) => t.slug === node.slug) || trends[0];
                if (matched) onSelectTrend(matched);
                return;
              }
            }
          }}
          className="w-full h-full cursor-crosshair touch-manipulation"
        />

        {activeNode && (
          <div className="absolute top-4 right-4 bg-[#14141f]/95 border border-[#00ff88]/40 rounded-xl p-3 shadow-2xl max-w-xs text-xs pointer-events-none animate-in fade-in duration-150">
            <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 mb-1">
              <span>{activeNode.flag} {activeNode.name}</span>
              <span className="text-[#00ff88] font-bold">+{activeNode.velocity}%</span>
            </div>
            <div className="font-bold text-white line-clamp-1">{activeNode.topic}</div>
            <div className="text-[10px] text-[#ffdd00] font-mono mt-1">
              {t('radar_tooltip_click')}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pt-3 border-t border-white/[0.05] no-scrollbar">
        {nodes.map((node) => (
          <button
            key={node.name}
            onClick={() => {
              const matched = trends.find((t) => t.slug === node.slug) || trends[0];
              if (matched) onSelectTrend(matched);
            }}
            className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-[11px] text-slate-300 hover:text-white transition flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>{node.flag}</span>
            <span className="font-medium">{node.name.split('/')[0]}</span>
            <span className="text-[#00ff88] font-mono">+{node.velocity}%</span>
          </button>
        ))}
      </div>
    </div>
  );
};
