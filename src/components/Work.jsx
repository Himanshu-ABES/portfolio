import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Work() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const projects = [
    {
      title: "Amazon Clone",
      description:
        "A full-stack e-commerce simulation with cart functionality and payment integration.",
      tags: ["React", "Firebase", "Stripe"],
      gradient: "from-orange-500 to-yellow-500",
      image: null,
      link: "#",
    },
    {
      title: "Weather Forecasting App",
      description:
        "Real-time weather data visualization using OpenWeatherMap API with location-based forecasts.",
      tags: ["JavaScript", "API", "CSS"],
      gradient: "from-blue-500 to-cyan-500",
      image: null,
      link: "#",
    },
    {
      title: "Uber Clone",
      description:
        "A ride-sharing application prototype with real-time location tracking and fare estimation.",
      tags: ["React Native", "Node.js", "Maps API"],
      gradient: "from-gray-800 to-gray-900",
      image: null,
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "This portfolio website built with React, GSAP animations, and Tailwind CSS.",
      tags: ["React", "GSAP", "Tailwind"],
      gradient: "from-purple-500 to-pink-500",
      image: null,
      link: "#",
    },
  ];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-particle-blue" />
              <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider">
                Portfolio
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-light-text dark:text-dark-text">
              Selected Work
            </h2>
          </div>

          <motion.a
            href="https://github.com/Himanshu-ABES"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-light-border dark:border-dark-border rounded-full text-sm font-medium text-light-text dark:text-dark-text hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Repositories
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              variants={itemVariants}
              className="group block"
              whileHover={{ y: -4 }}
            >
              <div className="bg-white dark:bg-dark-bg rounded-3xl overflow-hidden border border-light-border dark:border-dark-border hover:border-particle-blue/30 transition-all duration-300">
                {/* Project Preview */}
                <div
                  className={`aspect-[16/10] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  {/* Mockup Browser Window */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-white dark:bg-dark-surface rounded-xl shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700">
                    {/* Browser Bar */}
                    <div className="h-8 bg-light-surface dark:bg-dark-bg border-b border-light-border dark:border-dark-border flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <div className="flex-1 mx-4">
                        <div className="h-5 bg-light-border dark:bg-dark-border rounded-full w-2/3 mx-auto" />
                      </div>
                    </div>

                    {/* Content Placeholder */}
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-light-surface dark:bg-dark-bg rounded w-1/3" />
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 bg-light-surface dark:bg-dark-bg rounded" />
                        <div className="h-20 bg-light-surface dark:bg-dark-bg rounded" />
                      </div>
                      <div className="h-4 bg-light-surface dark:bg-dark-bg rounded w-2/3" />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-6 py-3 bg-white text-light-text font-medium rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-medium text-light-text dark:text-dark-text mb-2 group-hover:text-particle-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-light-surface dark:bg-dark-surface rounded-full text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary border border-light-border dark:border-dark-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
