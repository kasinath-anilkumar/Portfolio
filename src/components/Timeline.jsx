import { useScroll, useTransform, motion, px } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Vortex from "../components/Vortex ";

const Timeline = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const data = [
    { title: "2021", content: "Completed Higher Secondary education in Computer Science" },
    { title: "2024", content: "Graduated in Bachelor's Computer Application From Kerala University" },
    { title: "NOVEMBER 2024", content: "Completed MEARN Stack From Luminar Technolab Kochi." },
    { title: "SEPTEMBER 2024", content: "WEB DEVELOPER INTERN AT ZYMO - SELF DRIVE CAR RENTALS" },
    { title: "NOVEMBER 2024", content: "Completed 2 MONTH Internship at Zymo" },
    { title: "NOVEMBER 2024", content: "Completed MEARN Stack From Luminar Technolab Kochi." },
    { title: "DECEMBER 2024", content: "WORKING AS A FREELANCE REACT DEVELOPER" },
    { title: "2025", content: "Exploring new opportunities for a Frontend Developer role." },
  ];

  return (
    <div id="experience" className="relative">
      <Vortex
        particleCount={700}
        rangeY={100}
        backgroundColor="#000000"
        className="absolute top-0 left-0 h-screen w-screen z-0"
      />
      <div className="relative z-10 bg-black text-white">
        <div className="w-full bg-transparent font-sans md:px-10" ref={containerRef}>
          <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
            <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
              Changelog from my journey
            </h2>
            <p className="text-neutral-300 text-sm md:text-base max-w-sm">
              I've been honing my web development skills with React for the past few years. Here's a timeline of my journey.
            </p>
          </div>
          <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
            {data.map((item, index) => (
              <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                  </div>
                  <h3 className="hidden md:block text-xl md:pl-20 sm:text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                    {item.title}
                  </h3>
                </div>
                <div className="relative pl-14 pr-4 md:pl-6 w-full flex items-start flex-col md:flex-row">
  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500 text-[clamp(1.2rem,4vw,2rem)] md:ml-0 ml-6">
    {item.title}
  </h3>
  <p className="text-gray-400 uppercase text-[clamp(0.85rem,3vw,1.25rem)] sm:tracking-tighter lg:tracking-widest sm:ml-0 md:ml-0 ml-6">
    {item.content}
  </p>
</div>


              </div>
            ))}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
