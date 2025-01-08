import { useState, useRef, useEffect } from "react";

const GlareCard = ({ children, className }) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = cardRef.current;
      if (card) {
        const { left, top, width, height } = card.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;

        const percentageX = (mouseX / width) * 100;
        const percentageY = (mouseY / height) * 100;

        setMousePosition({ x: percentageX, y: percentageY });
        setRotate({
          x: (percentageY - 50) / 4,  // Adjust to control the rotation effect
          y: (percentageX - 50) / 4,  // Adjust to control the rotation effect
        });
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const containerStyle = {
    "--m-x": `${mousePosition.x}%`,
    "--m-y": `${mousePosition.y}%`,
    "--r-x": `${rotate.x}deg`,
    "--r-y": `${rotate.y}deg`,
  };

  return (
    <div
      ref={cardRef}
      className={`relative w-[320px] h-[400px] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 ${className}`}
      style={containerStyle}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/320x400')`,  // Replace with your image or background
          backgroundPosition: "center",
          backgroundSize: "cover",
          transform: `rotateY(var(--r-x)) rotateX(var(--r-y))`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
      <div className="relative z-10 text-white p-4">
        {children}
      </div>
    </div>
  );
};

export default GlareCard;
