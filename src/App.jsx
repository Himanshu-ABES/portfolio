import React, { useState, useEffect } from "react";
import avatar from "./assets/avatar.jpg";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="antialiased selection:bg-white selection:text-black">
      {/* Grain Texture Overlay */}
      <div className="grain-overlay"></div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 px-6 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-6"
        }`}
        id="navbar"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="glass-card rounded-2xl px-6 py-4 flex justify-between items-center relative overflow-hidden">
            {/* Inner glow effect */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 font-display font-bold text-xl tracking-tight z-10 hover:opacity-80 transition-opacity"
            >
              <img
                src={avatar}
                alt="Himanshu Chauhan"
                className="w-9 h-9 rounded-full border border-white/20 object-cover"
              />
              <span>Himanshu Chauhan</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 z-10">
              <a
                href="#home"
                className="px-5 py-2 text-sm font-medium rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
              >
                Home
              </a>
              <a
                href="#about"
                className="px-5 py-2 text-sm font-medium rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
              >
                About
              </a>
              <a
                href="#capabilities"
                className="px-5 py-2 text-sm font-medium rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
              >
                Capabilities
              </a>
              <a
                href="#work"
                className="px-5 py-2 text-sm font-medium rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
              >
                Work
              </a>
              <a
                href="#contact"
                className="px-5 py-2 text-sm font-medium rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
              >
                Contact
              </a>
            </div>

            {/* Resume Button */}
            <a
              href="./Resume.pdf"
              className="hidden md:inline-flex px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform z-10"
            >
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-24 left-6 right-6 glass-card rounded-2xl p-6 flex flex-col gap-4 md:hidden z-50"
          >
            <a
              href="#home"
              className="text-lg font-medium text-center py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg font-medium text-center py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#capabilities"
              className="text-lg font-medium text-center py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Capabilities
            </a>
            <a
              href="#work"
              className="text-lg font-medium text-center py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-lg font-medium text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="./Resume.pdf"
              className="btn-primary justify-center w-full"
            >
              Resume
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 relative overflow-hidden"
      >
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center gap-8">
          {/* Badge */}
          <div className="glass-card px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4 animate-float">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs uppercase tracking-wider font-semibold text-white/80">
              Available for projects
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
            Web Developer
            <br />
            <span className="text-white/40 font-display font-normal text-4xl md:text-6xl block mt-4">
              Hi, I'm Himanshu Chauhan
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-secondary max-w-2xl font-light leading-relaxed">
            Design and build great interfaces. I craft high-performance digital
            experiences that blend aesthetic precision with technical
            robustness.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a href="#work" className="btn-primary">
              View Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              {" "}
              Get in touch{" "}
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Bio Card */}
            <div className="lg:col-span-8 glass-card rounded-3xl p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-display text-3xl font-bold mb-6">About Me</h2>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                Himanshu Chauhan is a dedicated B.Tech student specializing in
                Computer Science with Data Science at ABES Engineering College.
                With strong expertise in frontend development and data science,
                validated through multiple certifications and hands-on projects
                including an Uber Clone and Weather Forecasting App, he
                demonstrates a perfect blend of technical skills and practical
                implementation.
              </p>
              <div className="flex gap-4 mt-auto pt-6 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold font-display">5+</span>
                  <span className="text-sm text-secondary">
                    Projects Completed
                  </span>
                </div>
                <div className="w-px bg-white/10 h-12 mx-4"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold font-display">Cert.</span>
                  <span className="text-sm text-secondary">
                    Frontend Specialist
                  </span>
                </div>
              </div>
            </div>

            {/* Photo / Stack Card */}
            <div className="lg:col-span-4 glass-card rounded-3xl p-2 min-h-[300px] relative overflow-hidden group">
              <img
                src={avatar}
                alt="Coding Setup"
                className="w-full h-full object-cover rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-xl p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-mono uppercase text-white/70">
                      Current Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/10 rounded-md text-xs">
                      React
                    </span>
                    <span className="px-2 py-1 bg-white/10 rounded-md text-xs">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-white/10 rounded-md text-xs">
                      Tailwind
                    </span>
                    <span className="px-2 py-1 bg-white/10 rounded-md text-xs">
                      Python
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="lg:col-span-5 glass-card rounded-3xl p-8">
              <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
                Education
              </h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white"></div>
                  <h4 className="font-semibold text-lg">
                    B.Tech in CSE & Data Science
                  </h4>
                  <p className="text-white/50 text-sm mb-1">
                    ABES Engineering College • 2022 - 2026
                  </p>
                  <p className="text-secondary text-sm">
                    Specializing in Data structures, Algorithms, and Machine
                    Learning.
                  </p>
                </div>
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <h4 className="font-semibold text-lg">
                    Senior Secondary Education
                  </h4>
                  <p className="text-white/50 text-sm mb-1">
                    Holy Child Public School • CBSE Board • 2021 - 2022
                  </p>
                  <p className="text-secondary text-sm">
                    Focus on Physics, Chemistry, Mathematics and Computer
                    Science.
                  </p>
                </div>
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <h4 className="font-semibold text-lg">Secondary Education</h4>
                  <p className="text-white/50 text-sm mb-1">
                    Holy Child Public School • CBSE Board • 2019 - 2020
                  </p>
                  <p className="text-secondary text-sm">
                    Focus on English, Mathematics and Information Technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Marquee Card */}
            <div className="lg:col-span-7 glass-card rounded-3xl p-8 flex flex-col justify-center overflow-hidden">
              <h3 className="font-display text-xl font-bold mb-6">
                Technical Arsenal
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "HTML5",
                  "CSS3",
                  "JS",
                  "React",
                  "Python",
                  "SQL",
                  "Git",
                  "Figma",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors cursor-default"
                  >
                    <span className="block text-2xl mb-2">{skill}</span>
                    <span className="text-xs text-secondary">Expert</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Capabilities) */}
      <section id="capabilities" className="py-24 px-6 bg-black/50">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-white/50 uppercase tracking-widest mb-4 block">
              Services
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Capability 1 */}
            <div className="glass-card rounded-3xl p-8 flex flex-col items-start h-full group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Web Developer
              </h3>
              <p className="text-secondary leading-relaxed mb-8 flex-grow">
                I specialize in building responsive, dynamic websites using HTML
                and CSS. My portfolio features practical projects like an Uber
                Clone, E-commerce platform, and Weather App. Backed by frontend
                certifications and ScholarHat workshops, I consistently deliver
                user-friendly solutions that combine clean code with engaging
                web experiences.
              </p>
              <a
                href="https://github.com/Himanshu-ABES"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold hover:text-white/70 transition-colors"
              >
                View Projects on GitHub
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Capability 2 */}
            <div className="glass-card rounded-3xl p-8 flex flex-col items-start h-full group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Problem Solving
              </h3>
              <p className="text-secondary leading-relaxed mb-8 flex-grow">
                I focus on algorithmic optimization and problem-solving using
                Python on platforms like LeetCode. My expertise lies in
                designing efficient algorithms and implementing advanced Data
                Structures. This rigorous practice allows me to analyze
                complexity and deliver high-performance, clean code for
                challenging computational problems.
              </p>
              <a
                href="https://leetcode.com/u/Himanshu-V7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold hover:text-white/70 transition-colors"
              >
                View Codebase
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Capability 3 */}
            <div className="glass-card rounded-3xl p-8 flex flex-col items-start h-full group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                UI/UX Designer
              </h3>
              <p className="text-secondary leading-relaxed mb-8 flex-grow">
                I craft intuitive digital experiences by designing user-centered
                interfaces, wireframes, and prototypes. My focus lies in
                ensuring seamless navigation and sharp visual aesthetics.
                Through projects like e-commerce sites, I successfully blend
                modern design principles with robust functionality to deliver
                compelling and engaging user journeys.
              </p>
              <a
                href="https://www.figma.com/@himanshu_v17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold hover:text-white/70 transition-colors"
              >
                View Designs
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-sm font-mono text-white/50 uppercase tracking-widest mb-4 block">
                Portfolio
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Selected Work
              </h2>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm"
            >
              View All Repositories
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <a href="#" className="group block">
              <div className="glass-card rounded-3xl overflow-hidden aspect-[16/10] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#1a1a1a] rounded-t-lg shadow-2xl border border-white/10 flex flex-col overflow-hidden">
                  <div className="h-8 bg-[#2a2a2a] border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="flex-1 bg-[#111] p-6 flex flex-col gap-4 relative">
                    <div className="w-1/3 h-4 bg-white/10 rounded"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-white/5 rounded"></div>
                      <div className="h-32 bg-white/5 rounded"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-6 py-3 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Deployment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold font-display group-hover:text-white/80 transition-colors">
                  Amazon Clone
                </h3>
                <p className="text-secondary mt-2">
                  A full-stack e-commerce simulation with cart functionality and
                  payment integration.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                    React
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                    Firebase
                  </span>
                </div>
              </div>
            </a>

            {/* Project 2 */}
            <a href="#" className="group block">
              <div className="glass-card rounded-3xl overflow-hidden aspect-[16/10] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-black group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#1a1a1a] rounded-t-lg shadow-2xl border border-white/10 flex flex-col overflow-hidden">
                  <div className="h-8 bg-[#2a2a2a] border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="flex-1 bg-[#111] p-6 flex items-center justify-center relative">
                    <div className="w-24 h-24 rounded-full border-4 border-white/10 flex items-center justify-center">
                      <div className="text-2xl font-bold">24°C</div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-6 py-3 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Deployment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold font-display group-hover:text-white/80 transition-colors">
                  Weather Forecasting App
                </h3>
                <p className="text-secondary mt-2">
                  Real-time weather data visualization using OpenWeatherMap API.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                    API
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 mt-12">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-display font-bold text-lg">
            Himanshu Chauhan
          </span>
          <div className="flex gap-6 text-sm text-secondary">
            <span>© 2025 All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Separated Contact Section Component to handle logic cleanly
function ContactSection() {
  const [formState, setFormState] = useState("idle"); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("sending");

    // Simulate API call
    setTimeout(() => {
      setFormState("success");
      e.target.reset();

      // Reset back to idle after 3 seconds
      setTimeout(() => {
        setFormState("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.02] blur-[100px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Let's start a project together
              </h2>
              <p className="text-secondary text-lg mb-12">
                I'm currently available for freelance projects and internships.
                Feel free to reach out.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:explore.himanshu@gmail.com"
                  className="flex items-center gap-4 text-xl hover:text-white/70 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  explore.himanshu@gmail.com
                </a>
                <div className="flex items-center gap-4 text-xl">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  +91 72920 55087
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-4 mt-12">
                {/* GitHub (Solid White) */}
                <a
                  href="https://github.com/Himanshu-ABES"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* LinkedIn (Glass) */}
                <a
                  href="https://www.linkedin.com/in/himanshu-chauhan-180p/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* X / Twitter (Glass) */}
                <a
                  href="https://x.com/exploreHimanshu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram (Glass) */}
                <a
                  href="https://www.instagram.com/himanshu._.z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              <div className="mt-8">
                <a href="./Resume.pdf" className="btn-primary">
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card rounded-3xl p-8">
            <form
              id="contactForm"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/70"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/70"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState === "sending" || formState === "success"}
                className={`w-full btn-primary justify-center ${
                  formState === "success"
                    ? "bg-green-500 text-white hover:scale-100"
                    : ""
                }`}
                style={{
                  opacity: formState === "sending" ? 0.7 : 1,
                  backgroundColor: formState === "success" ? "#22c55e" : "",
                  color: formState === "success" ? "white" : "",
                }}
              >
                {formState === "idle" && "Send Message"}
                {formState === "sending" && "Sending..."}
                {formState === "success" && "Sent!"}
              </button>

              {formState === "success" && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
