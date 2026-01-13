import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // GSAP animation for text reveal
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20"
    >
      <div className="max-w-5xl mx-auto px-6 text-center z-10 pb-24">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 border border-light-border dark:border-dark-border rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-light-text-secondary dark:text-dark-text-secondary text-sm font-medium uppercase tracking-wider">
              Available for Projects
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <div ref={titleRef} className="overflow-hidden mb-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-light-text dark:text-dark-text leading-[1.1] tracking-tight">
            <span className="hero-word inline-block">Web Developer</span>
          </h1>
        </div>

        <div ref={subtitleRef} className="overflow-hidden mb-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-4xl text-light-text-secondary dark:text-dark-text-secondary font-light"
          >
            Hi, I'm Himanshu Chauhan
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-light-text-secondary dark:text-dark-text-secondary text-base md:text-lg max-w-2xl mx-auto"
        >
          Design and build great interfaces. I craft high-performance digital
          experiences that blend aesthetic precision with technical robustness.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
        >
          <motion.a
            variants={itemVariants}
            href="#work"
            className="group flex items-center gap-2 px-5 py-2.5 sm:px-8 sm:py-4 border border-light-border dark:border-dark-border text-light-text dark:text-dark-text rounded-full font-medium text-sm sm:text-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Work
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 sm:px-8 sm:py-4 bg-light-text dark:bg-dark-text text-white dark:text-dark-bg rounded-full font-medium text-sm sm:text-lg hover:opacity-90 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
