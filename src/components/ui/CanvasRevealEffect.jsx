// src/components/ui/CanvasRevealEffect.jsx

import React, { useEffect, useRef } from 'react';

export const CanvasRevealEffect = ({
  animationSpeed = 5,
  colors = [
    [59, 130, 246], // Blue
    [139, 92, 246], // Purple
  ],
  dotSize = 3,
  containerClassName = '',
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const dots = [];

    // Create random dots
    for (let i = 0; i < 500; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * dotSize + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * animationSpeed + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgb(${dot.color[0]}, ${dot.color[1]}, ${dot.color[2]})`;
        ctx.fill();

        dot.x += dot.speed * (Math.random() - 0.5);
        dot.y += dot.speed * (Math.random() - 0.5);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationFrameId); // Clean up on unmount
  }, [colors, animationSpeed, dotSize]);

  return (
    <div className={`absolute inset-0 pointer-events-none ${containerClassName}`}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
