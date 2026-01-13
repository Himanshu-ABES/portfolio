import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Capabilities() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const capabilities = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "I specialize in building responsive, dynamic websites using React and modern technologies. My portfolio features practical projects like an Uber Clone, E-commerce platform, and Weather App.",
      link: "https://github.com/Himanshu-ABES",
      linkText: "View Projects on GitHub",
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Problem Solving",
      description:
        "I focus on algorithmic optimization and problem-solving using Python on platforms like LeetCode. My expertise lies in designing efficient algorithms and implementing advanced Data Structures.",
      link: "https://leetcode.com/u/Himanshu-V7",
      linkText: "View Codebase",
      gradient: "from-yellow-500/10 to-orange-500/10",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "UI/UX Design",
      description:
        "I craft intuitive digital experiences by designing user-centered interfaces, wireframes, and prototypes. My focus lies in ensuring seamless navigation and sharp visual aesthetics.",
      link: "https://www.figma.com/@himanshu_v17",
      linkText: "View Designs",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
  ];

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-light-surface/50 dark:bg-dark-surface/50 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-particle-blue" />
            <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider">
              Services
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-light-text dark:text-dark-text">
            Capabilities
          </h2>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              variants={itemVariants}
              className="group bg-white dark:bg-dark-bg rounded-3xl p-8 border border-light-border dark:border-dark-border hover:border-particle-blue/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              whileHover={{ y: -4 }}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center mb-6 text-particle-blue group-hover:scale-110 group-hover:border-particle-blue/30 transition-all duration-300">
                  {capability.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-medium text-light-text dark:text-dark-text mb-4">
                  {capability.title}
                </h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-8 flex-grow">
                  {capability.description}
                </p>

                {/* Link */}
                <motion.a
                  href={capability.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-light-text dark:text-dark-text hover:text-particle-blue transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {capability.linkText}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-dark-bg rounded-3xl p-8 border border-light-border dark:border-dark-border"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-light-text dark:text-dark-text mb-2">
                  Clean & Maintainable Code
                </h4>
                <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
                  I write code that's not just functional, but also readable and
                  easy to maintain. Following best practices and industry
                  standards.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-dark-bg rounded-3xl p-8 border border-light-border dark:border-dark-border"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-light-text dark:text-dark-text mb-2">
                  Performance Optimized
                </h4>
                <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
                  Every project is built with performance in mind. Fast load
                  times, smooth animations, and optimal resource usage.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
