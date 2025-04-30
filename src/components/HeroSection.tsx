import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

// Animated text component for letter-by-letter animation
const AnimatedText = ({ text }: { text: string }) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2 + index * 0.08,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

interface HeroSectionProps {
  onExploreClick?: () => void;
  onScrollDown?: () => void;
}

const HeroSection = ({
  onExploreClick = () => {},
  onScrollDown = () => {},
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <WavyBackground />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl w-full px-4 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                Coding the Web, Solving Real-World Problems
              </h2>
              <br />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* Animated name with letter-by-letter animation */}
              <AnimatedText
                text="Hi There,                        
                                     
                                     I'm Yash Agnihotri"
              />
            </motion.h1>
            <br />
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">
                Full Stack Developer
              </span>{" "}
              <span className="text-gray-400">|</span>{" "}
              <span className="text-blue-400">Data Analyst</span>{" "}
              <span className="text-gray-400">|</span>{" "}
              <span className="text-purple-400">AI Enthusiast</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                onClick={onExploreClick}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Explore My Work
              </Button>
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl transform -rotate-3"></div>
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 backdrop-blur-md bg-black/30 shadow-2xl">
              <img
                src="others/yash.jpg"
                alt="Yash profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation arrow */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button
          onClick={onScrollDown}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </button>
      </motion.div>
    </section>
  );
};

// Wavy animated background component
const WavyBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b0764" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
          <path
            id="wave"
            d="M 0,400 C 0,400 200,440 500,440 C 800,440 900,380 1200,380 C 1500,380 1800,440 2100,440 L 2100,1080 L 0,1080 Z"
          />
        </defs>

        <g>
          <use xlinkHref="#wave" opacity="0.3" fill="url(#gradient)">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="25s"
              calcMode="spline"
              values="-270 0; 0 0; -270 0"
              keyTimes="0; 0.5; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity="0.6" fill="url(#gradient)">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="20s"
              calcMode="spline"
              values="0 0; -200 0; 0 0"
              keyTimes="0; 0.5; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity="0.9" fill="url(#gradient)">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="15s"
              calcMode="spline"
              values="0 0; 270 0; 0 0"
              keyTimes="0; 0.5; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
        </g>

        {/* Additional subtle background elements */}
        <circle cx="10%" cy="20%" r="80" fill="#3b0764" opacity="0.2">
          <animate
            attributeName="r"
            dur="8s"
            values="80; 120; 80"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="80%" cy="10%" r="150" fill="#1e40af" opacity="0.2">
          <animate
            attributeName="r"
            dur="10s"
            values="150; 200; 150"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default HeroSection;
