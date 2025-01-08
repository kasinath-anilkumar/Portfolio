import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame, color } from "framer-motion";
import { wrap } from "@motionone/utils";
import { Filter } from "lucide-react";
import { blueGrey } from "@mui/material/colors";

const styles = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "#9900ff", // Purple background
    color: "#9900ff", // White text
    fontFamily: "Plaster, sans-serif",
    fontStyle: "normal",
  },
  section: {
    paddingTop: "10vh",
    paddingBottom: "5vh",
    position: "relative",
    color: '#9999ff',
    opacity: '0.5',
    filter: "brightness(0.4)", // Adds a slight brightness to the section for better glow visibility
    textShadow: "0 0 10px rgba(153, 153, 255, 0.9), 0 0 20px rgba(153, 153, 255, 0.6), 0 0 30px rgba(153, 153, 255, 0.4)", // Glowing text effect
    // boxShadow: "0 0 10px rgba(153, 153, 255, 0.6)", // Glowing section effect
  },
  parallax: {
    overflow: "hidden",
    letterSpacing: "-2px",
    lineHeight: "0.8",
    margin: 0,
    whiteSpace: "nowrap",
    display: "flex",
    flexWrap: "nowrap",
  },
  scroller: {
    fontWeight: 600,
    textTransform: "uppercase",
    fontSize: "64px",
    display: "flex",
    whiteSpace: "nowrap",
    flexWrap: "nowrap",
  },
  span: {
    display: "block",
    marginRight: "30px",
  }
};

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div style={styles.parallax}>
      <motion.div className="scroller" style={{ ...styles.scroller, x }}>
        <span style={styles.span}>{children} </span>
        <span style={styles.span}>{children} </span>
        <span style={styles.span}>{children} </span>
        <span style={styles.span}>{children} </span>
      </motion.div>
    </div>
  );
};

const ParallaxScrollDemo = () => {
  return (
    <section style={styles.section}>
      <ParallaxText baseVelocity={-5}>FRONTEND DEVELOPER</ParallaxText>
      <ParallaxText baseVelocity={5}>Kasinath Anilkumar</ParallaxText>
    </section>
  );
};

export default ParallaxScrollDemo;
  