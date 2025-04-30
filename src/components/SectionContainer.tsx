import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  fullHeight?: boolean;
  delay?: number;
}

const SectionContainer = ({
  id,
  className = "",
  children,
  title,
  subtitle,
  fullHeight = true,
  delay = 0.2,
}: SectionContainerProps) => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative w-full bg-black ${fullHeight ? "min-h-screen" : ""} flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 py-16 ${className}`}
    >
      <motion.div
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {(title || subtitle) && (
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            {title && (
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                variants={itemVariants}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                className="text-lg text-gray-400 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        <motion.div variants={itemVariants}>{children}</motion.div>
      </motion.div>
    </section>
  );
};

export default SectionContainer;
