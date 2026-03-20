import React, { useRef, useEffect } from "react";

export default function ParticleField({ color = "#7b2fff", count = 120, speed = 0.3 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Parse color to rgb
    const hexToRgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };
    const rgb = hexToRgb(color);

    // Particles
    const particles = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.0002,
      vy: (Math.random() - 0.5) * 0.0002,
      vz: (Math.random() - 0.5) * 0.0003 * speed,
      size: Math.random() * 1.5 + 0.5,
    }));

    let mouse = { x: 0.5, y: 0.5 };
    const onMove = (e) => {
      mouse.x = e.clientX / W;
      mouse.y = e.clientY / H;
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Update
      for (const p of particles) {
        p.x += p.vx + (mouse.x - 0.5) * 0.00008;
        p.y += p.vy + (mouse.y - 0.5) * 0.00008;
        p.z += p.vz;
        if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
        if (p.z < 0) p.z = 1; if (p.z > 1) p.z = 0;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = (a.x - b.x) * W, dy = (a.y - b.y) * H;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.15 * Math.min(a.z, b.z);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x * W, a.y * H);
            ctx.lineTo(b.x * W, b.y * H);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        const alpha = 0.4 + p.z * 0.6;
        const size = p.size * (0.5 + p.z * 0.8);
        ctx.beginPath();
        ctx.arc(p.x * W, p.y * H, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [color, count, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
    />
  );
}