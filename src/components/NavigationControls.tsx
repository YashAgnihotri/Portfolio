import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

interface NavigationControlsProps {
  sections: string[];
  activeSection: string;
  onNavigate: (section: string) => void;
}

const NavigationControls = ({
  sections = ["hero", "about", "skills", "projects", "education", "contact"],
  activeSection = "hero",
  onNavigate = () => {},
}: NavigationControlsProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide controls when scrolling down rapidly, show when scrolling up or stopped
      if (currentScrollY > lastScrollY + 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 10 || currentScrollY === 0) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const currentIndex = sections.indexOf(activeSection);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < sections.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      onNavigate(sections[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onNavigate(sections[currentIndex + 1]);
    }
  };

  const navItems = ["skills", "projects", "education", "contact"];

  return (
    <div className="fixed right-8 bottom-8 z-50 flex flex-col items-center gap-4">
      {/* Navigation arrows */}
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={handlePrevious}
          disabled={!hasPrevious}
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white transition-all shadow-lg shadow-purple-500/10 ${hasPrevious ? "hover:bg-white/20 hover:scale-110 hover:border-purple-400/50" : "opacity-30 cursor-not-allowed"}`}
          aria-label="Navigate to previous section"
        >
          <ChevronUp className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          disabled={!hasNext}
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white transition-all shadow-lg shadow-blue-500/10 ${hasNext ? "hover:bg-white/20 hover:scale-110 hover:border-blue-400/50" : "opacity-30 cursor-not-allowed"}`}
          aria-label="Navigate to next section"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </motion.div>

      {/* Minimal navbar - moved to right side with enhanced styling */}
      <motion.nav
        className="fixed top-8 right-8 z-50 bg-black/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-lg shadow-purple-500/10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => onNavigate(item)}
                className={`text-sm font-medium transition-all ${activeSection === item ? "text-white" : "text-white/60 hover:text-white"}`}
              >
                <span className="relative">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {activeSection === item && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Section indicator with enhanced animations */}
      <motion.div
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {sections.map((section, index) => {
          const isActive = activeSection === section;
          const dotColor = isActive
            ? "bg-gradient-to-r from-blue-400 to-purple-500"
            : "bg-white/30 group-hover:bg-white/60";

          return (
            <button
              key={section}
              onClick={() => onNavigate(section)}
              className="relative group"
              aria-label={`Navigate to ${section} section`}
            >
              <motion.div
                className={`w-2 h-2 rounded-full transition-all ${dotColor} border border-white/20`}
                initial={false}
                animate={{
                  scale: isActive ? 1.5 : 1,
                  y: isActive ? [0, -3, 0] : 0,
                }}
                transition={{
                  duration: 0.6,
                  y: {
                    repeat: isActive ? Infinity : 0,
                    repeatType: "reverse",
                    duration: 1.5,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.8 }}
              />
              <motion.div
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md whitespace-nowrap border border-white/10"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.div>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default NavigationControls;
