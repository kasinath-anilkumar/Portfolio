import Particles from "react-tsparticles";
import { AnimatePresence, motion } from "framer-motion";
import Projects from "../Projects/Projects";

const ParticleEffect = () => {
  return (
    <div  id="projects" className="relative min-h-screen w-screen">
      <Projects />
      {/* <Timeline/> */}
      <Particles
        options={{
          fullScreen: false,
          particles: {
            number: { value: 100 },
            color: { value: "#ffffff" },
            opacity: { value: 0.5 },
            size: { value: 5 },
            move: { enable: true, speed: 2 },
          },
        }}
        className="absolute inset-0"
      />
      <AnimatePresence>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-transparent backdrop-blur-md h-screen w-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ParticleEffect;
