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
      title: "easyBasket - 10 Mins Delivery",
      description:
        "A full-stack Blinkit-style grocery delivery app with Zustand state management, real-time cart updates, and Supabase backend for auth & database.",
      tags: ["React", "Supabase", "Zustand", "Tailwind"],
      gradient: "from-yellow-400 to-green-600",
      image: "/projects/easyBasket.jfif",
      link: "https://quick-basket-chi.vercel.app/",
      fitImage: true,
    },
    {
      title: "Apple iPhone 15 Clone",
      description:
        "A modern iPhone 15 inspired website featuring Three.js 3D models, GSAP animations, and stunning visual effects with interactive elements.",
      tags: ["React", "Three.js", "GSAP", "Tailwind"],
      gradient: "from-zinc-800 to-black",
      image: "/projects/apple-clone.jpeg",
      link: "https://app-iphone.netlify.app/",
      fitImage: true,
    },
    {
      title: "K72 Website Clone",
      description:
        "A fully responsive clone of K72.ca featuring smooth GSAP animations, Framer Motion effects, and modern UI/UX design across 3 pages.",
      tags: ["React", "GSAP", "Framer Motion", "Tailwind"],
      gradient: "from-lime-400 to-black",
      image: "/projects/k72-clone.jpeg",
      link: "https://k27-website-clone-project.vercel.app/",
      fitImage: true,
    },
    {
      title: "Edvyn - Education Platform",
      description:
        "An educational platform website with modern gradient design, GSAP animations, and multiple course pages for practical learning.",
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      gradient: "from-green-500 to-black",
      image: "/projects/edvyn.jpeg",
      link: "https://himanshu-abes.github.io/Edvyn/",
      fitImage: true,
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
            href="https://github.com/Himanshu-ABES?tab=repositories"
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
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-white dark:bg-dark-surface rounded-xl shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700">
                    {/* Browser Bar */}
                    <div className="h-8 bg-light-surface dark:bg-dark-bg border-b border-light-border dark:border-dark-border flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <div className="flex-1 mx-4">
                        <div className="h-5 bg-light-border dark:bg-dark-border rounded-full w-2/3 mx-auto" />
                      </div>
                    </div>

                    {/* Project Screenshot */}
                    {project.image ? (
                      <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-full ${project.fitImage ? "object-contain bg-white dark:bg-dark-surface" : "object-cover object-top"}`}
                        />
                      </div>
                    ) : (
                      <div className="p-4 space-y-3">
                        <div className="h-4 bg-light-surface dark:bg-dark-bg rounded w-1/3" />
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-20 bg-light-surface dark:bg-dark-bg rounded" />
                          <div className="h-20 bg-light-surface dark:bg-dark-bg rounded" />
                        </div>
                        <div className="h-4 bg-light-surface dark:bg-dark-bg rounded w-2/3" />
                      </div>
                    )}

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
