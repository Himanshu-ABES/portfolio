import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import avatar from "../assets/avatar.jpg";

export default function About() {
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

  const skills = [
    { name: "React", level: "Expert" },
    { name: "JavaScript", level: "Expert" },
    { name: "Python", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "SQL", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
    { name: "Figma", level: "Intermediate" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8"
        >
          {/* Main Bio Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-light-surface dark:bg-dark-surface rounded-3xl p-6 sm:p-8 md:p-12 border border-light-border dark:border-dark-border"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-particle-blue" />
              <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider">
                About Me
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-medium text-light-text dark:text-dark-text mb-6 leading-tight">
              Building digital experiences that matter
            </h2>

            <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg leading-relaxed mb-8">
              I'm Himanshu Chauhan, a dedicated B.Tech student specializing in
              Computer Science with Data Science at ABES Engineering College.
              With strong expertise in frontend development and data science, I
              demonstrate a perfect blend of technical skills and practical
              implementation through projects like an Uber Clone and Weather
              Forecasting App.
            </p>

            <div className="flex flex-wrap gap-6 pt-6 border-t border-light-border dark:border-dark-border">
              <div className="flex flex-col">
                <span className="text-4xl font-display font-medium text-light-text dark:text-dark-text">
                  5+
                </span>
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  Projects Completed
                </span>
              </div>
              <div className="w-px bg-light-border dark:bg-dark-border" />
              <div className="flex flex-col">
                <span className="text-4xl font-display font-medium text-light-text dark:text-dark-text">
                  Cert.
                </span>
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  Frontend Specialist
                </span>
              </div>
              <div className="w-px bg-light-border dark:bg-dark-border" />
              <div className="flex flex-col">
                <span className="text-4xl font-display font-medium text-light-text dark:text-dark-text">
                  2026
                </span>
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  Expected Graduation
                </span>
              </div>
            </div>
          </motion.div>

          {/* Photo Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 order-first lg:order-none bg-light-surface dark:bg-dark-surface rounded-3xl overflow-hidden border border-light-border dark:border-dark-border relative group min-h-[300px] sm:min-h-[400px]"
          >
            <img
              src={avatar}
              alt="Himanshu Chauhan"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <div className="bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-light-border dark:border-dark-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider">
                      Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 justify-end">
                    {["React", "Node.js", "Tailwind", "Python"].map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-light-surface dark:bg-dark-bg rounded-full text-[10px] sm:text-xs font-medium text-light-text dark:text-dark-text border border-light-border dark:border-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 bg-light-surface dark:bg-dark-surface rounded-3xl p-6 sm:p-8 border border-light-border dark:border-dark-border"
          >
            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-5 h-5 text-particle-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
              <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider">
                Education
              </span>
            </div>

            <div className="space-y-6">
              {[
                {
                  degree: "B.Tech in CSE & Data Science",
                  school: "ABES Engineering College",
                  period: "2022 - 2026",
                  description:
                    "Specializing in Data structures, Algorithms, and Machine Learning.",
                  active: true,
                },
                {
                  degree: "Senior Secondary Education",
                  school: "Holy Child Public School • CBSE",
                  period: "2021 - 2022",
                  description:
                    "Focus on Physics, Chemistry, Mathematics and Computer Science.",
                  active: false,
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-light-border dark:border-dark-border"
                >
                  <div
                    className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${
                      edu.active
                        ? "bg-particle-blue border-particle-blue"
                        : "bg-light-surface dark:bg-dark-surface border-light-border dark:border-dark-border"
                    }`}
                  />
                  <h4 className="font-medium text-lg text-light-text dark:text-dark-text">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-1">
                    {edu.school} • {edu.period}
                  </p>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-light-surface dark:bg-dark-surface rounded-3xl p-6 sm:p-8 border border-light-border dark:border-dark-border"
          >
            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-5 h-5 text-particle-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider">
                Technical Arsenal
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group bg-white dark:bg-dark-bg rounded-2xl p-4 border border-light-border dark:border-dark-border hover:border-particle-blue/50 transition-all cursor-default"
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <span className="block text-xl font-medium text-light-text dark:text-dark-text mb-1 group-hover:text-particle-blue transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
