import React, { useEffect, useRef } from 'react';

/**
 * 3D Ambient Trend Hologram & Cybernetic Neural Matrix
 * High performance canvas 3D particles & connecting constellation network
 */
export const ThreeCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes representing global trend telemetry signals
    const particleCount = Math.min(65, Math.floor(width / 24));
    interface Node3D {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
      color: string;
      glow: string;
    }

    const colors = [
      { base: 'rgba(255, 0, 128,', glow: 'rgba(255, 0, 128, 0.4)' }, // Neon Pink
      { base: 'rgba(0, 240, 255,', glow: 'rgba(0, 240, 255, 0.4)' }, // Cyan
      { base: 'rgba(0, 255, 136,', glow: 'rgba(0, 255, 136, 0.4)' }, // Emerald
      { base: 'rgba(121, 40, 202,', glow: 'rgba(121, 40, 202, 0.4)' }, // Violet
    ];

    const nodes: Node3D[] = [];
    for (let i = 0; i < particleCount; i++) {
      const c = colors[Math.floor(Math.random() * colors.length)];
      nodes.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * 800 + 100,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        vz: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1.2,
        color: c.base,
        glow: c.glow,
      });
    }

    const fov = 420;
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      angle += 0.0018;

      // Draw faint cybernetic grid line waves
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;

      // Project and draw 3D nodes
      const projectedNodes: { px: number; py: number; scale: number; node: Node3D }[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.z += n.vz;

        // Wrap around 3D box bounds
        if (n.x < -width / 2) n.x = width / 2;
        if (n.x > width / 2) n.x = -width / 2;
        if (n.y < -height / 2) n.y = height / 2;
        if (n.y > height / 2) n.y = -height / 2;
        if (n.z < 100) n.z = 900;
        if (n.z > 900) n.z = 100;

        // Subtle 3D camera rotation around Y axis
        const cosA = Math.cos(0.001);
        const sinA = Math.sin(0.001);
        const rx = n.x * cosA - n.z * sinA;
        const rz = n.z * cosA + n.x * sinA;
        n.x = rx;
        n.z = rz;

        const scale = fov / (fov + n.z);
        const px = n.x * scale + cx;
        const py = n.y * scale + cy;

        projectedNodes.push({ px, py, scale, node: n });
      }

      // Draw connective neural fibers
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.16 * p1.scale;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw glowing 3D nodes
      for (let i = 0; i < projectedNodes.length; i++) {
        const { px, py, scale, node } = projectedNodes[i];
        const r = node.radius * scale;
        const alpha = Math.min(1, Math.max(0.2, scale * 1.2));

        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}${alpha})`;
        ctx.shadowColor = node.glow;
        ctx.shadowBlur = 8 * scale;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-55"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
