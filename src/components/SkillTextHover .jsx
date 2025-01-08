"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const SkillTextHover = ({ text, duration = 4 }) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [loading, setLoading] = useState(true);

  // Update the cursor position based on mouse movement
  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  // Reset the loading effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false); // End the current animation
      setTimeout(() => {
        setLoading(true); // Restart the animation after a short delay
      }, 50); // Delay before restarting the animation
    }, 3000); // Repeat every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div
      className={cn(
        "relative w-full h-full bg-gradient-to-r from-[var(--yellow-500)] via-[var(--red-500)] to-[var(--blue-500)] overflow-hidden"
      )}
    >
      {/* Background layer */}
      <motion.div
        className={cn("absolute inset-0 z-0")}
        style={{
          background: "url('/path/to/your/image.jpg') no-repeat center/cover",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      ></motion.div>

      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className="select-none relative z-10"
      >
        <defs>
          <linearGradient
            id="textGradient"
            gradientUnits="userSpaceOnUse"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            {hovered && (
              <>
                <stop offset="0%" stopColor={"var(--yellow-500)"} />
                <stop offset="25%" stopColor={"var(--red-500)"} />
                <stop offset="50%" stopColor={"var(--blue-500)"} />
                <stop offset="75%" stopColor={"var(--cyan-500)"} />
                <stop offset="100%" stopColor={"var(--violet-500)"} />
              </>
            )}
          </linearGradient>

          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="20%"
            animate={maskPosition}
            transition={{ duration: duration ?? 0, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>
          <mask id="textMask">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
          </mask>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className={cn("font-[helvetica] font-bold stroke-neutral-200 dark:stroke-neutral-800 fill-transparent text-7xl")}
          style={{ opacity: hovered ? 0.7 : 0 }}
        >
          {text}
        </text>
        {loading && (
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            strokeWidth="0.3"
            className={cn("font-[helvetica] font-bold fill-transparent text-7xl stroke-neutral-200 dark:stroke-neutral-800")}
            initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
            animate={{
              strokeDashoffset: 0,
              strokeDasharray: 1000,
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
            }}
          >
            {text}
          </motion.text>
        )}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#textGradient)" // Apply gradient to fill
          strokeWidth="0.3"
          mask="url(#textMask)"
          className={cn("font-[helvetica] font-bold text-7xl")}
        >
          {text}
        </text>
      </svg>
    </div>
  );
};
