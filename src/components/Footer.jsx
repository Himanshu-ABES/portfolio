import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-display font-medium text-lg text-light-text dark:text-dark-text"
            whileHover={{ scale: 1.02 }}
          >
            Himanshu Chauhan
          </motion.a>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-light-text-secondary dark:text-dark-text-secondary">
            <a
              href="#about"
              className="hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              About
            </a>
            <a
              href="#capabilities"
              className="hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#work"
              className="hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              Work
            </a>
            <a
              href="#contact"
              className="hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
            © {currentYear} All rights reserved.
          </p>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 pt-8 border-t border-light-border dark:border-dark-border">
          <p className="text-center text-xs text-light-text-secondary/50 dark:text-dark-text-secondary/50">
            Built with React, GSAP & Framer Motion • Designed with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
