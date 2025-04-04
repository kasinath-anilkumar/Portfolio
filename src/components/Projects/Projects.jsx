import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Projects = ({ className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [allProjectIsValid, setAllProjectIsValid] = useState(false);

  const projectItems = [
    {
      title: "Ai Chatbot -Samoosa",
      description: "A Personal Assistant",
      link: "https://samoosa-chatbot.netlify.app/",
    },
    {
      title: "Weather App",
      description: "A weather forecast app with real-time updates.",
      link: "https://react-weather-app-kasinath.netlify.app/",
    },
    {
      title: "Apple Website Clone",
      description: "Apple official website clone",
      link: "https://kasinath-anilkumar.github.io/apple-clone-kasinath-anilkuamar/",
    },
    {
      title: "Versace Clone",
      description: "Versase official page clone.",
      link: "https://kasinath-anilkumar.github.io/Versace-Clone/",
    },
    {
      title: "Gucci Clone",
      description: "Gucci Brand Clone",
      link: "https://kasinath-anilkumar.github.io/Gucci-Clone/",
    },
    {
      title: "Rog Clone",
      description: "Republic of Gamers Official Website Clone",
      link: "https://kasinath-anilkumar.github.io/Rog-Clone/",
    },
  ];

  const otherProjects = [
    {
      title: "Registration Form",
      description: "A Registration Form Made using React, to engance form handiling",
      link: "https://react-student-registration-form.netlify.app/",
    },
    {
      title: "Porsche Clone",
      description: "Porsche official website clone, its a static websiste made by HTML, CSS",
      link: "https://porsche-clone-kasinath.netlify.app/",
    },
    {
      title: "Tomato",
      description: "An online food odering web application its a static website simplily made by HTML & CSS",
      link: "https://tomato-online-food-delivery.netlify.app/",
    },
    {
      title: "EasyRead",
      description: "An online book store, where you can see the collections of books. its a webapplication made by HTML & CSS",
      link: "https://www.test.com",
    },
  ];

  const toggleProjects = () => setAllProjectIsValid((prev) => !prev);

  return (
    <>
      <h1 id="projects-main" className="text-center sm:text-xs lg:text-6xl font-semibold my-10 text-gray-300">
        Projects
      </h1>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 sm:m-0 lg:mx-60 min-h-full ${className}`}>
        {projectItems.map((item, idx) => (
          <a
            href={item.link}
            key={item.link || idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={`View ${item.title}`}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-400/40 to-purple-900/40 via-transparent shadow-lg backdrop-blur-md dark:bg-slate-800/40 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                  style={{
                    maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
                    WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </a>
        ))}
      </div>

      {/* All Projects */}
      {allProjectIsValid && ( 
        
       <div>
        <h2 className="text-center font-semibold uppercase text-gray-500">Other Small Projects</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:m-0 lg:mx-60 min-h-full ${className}`}>
            
            {otherProjects.map((item, idx) => (
              <a
                href={item.link}
                key={item.link || idx}
                className="relative group block p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                aria-label={`View ${item.title}`}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-400/40 to-purple-900/40 via-transparent shadow-lg backdrop-blur-md dark:bg-slate-800/40 block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.15 } }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                      style={{
                        maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
                        WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
                      }}
                    />
                  )}
                </AnimatePresence>
                <Card>
                  {/* <div className="z10 ">
                    <img className="rounded-xl opacity-80" src="https://cdn.motor1.com/images/mgl/y2GlxY/s1/porsche-taycan-turbo-gt.webp" alt="" />
                    <div className=""> */}
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    {/* </div>
                  </div> */}
                </Card>
              </a>
            ))}
          </div>
       </div>
      )}

      {/* Show All Projects Button */}
      <div className="flex justify-center mt-6 z-50 relative">
        <button
          onClick={toggleProjects}
          className="bg-purple-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-900 transition cursor-pointer"
        >
          {allProjectIsValid ? "Collapse" : "Show All Projects"}
        </button>
      </div>
    </>
  );
};

export const Card = ({ className, children }) => {
  return (
    <article
      className={`rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ${className}`}
      aria-labelledby="project-card-title"
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </article>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 id="project-card-title" className={`text-zinc-100 font-bold tracking-wide mt-4 ${className}`}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={`mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm ${className}`}>
      {children}
    </p>
  );
};

export default Projects;
