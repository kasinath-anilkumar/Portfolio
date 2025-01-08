"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.7
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 10,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  return (
    <div className={className}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-whit opacity-10"
            style={{
              filter: filter ? "blur(10px)" : "none",
              color:'rgb(214 208 250)'
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
