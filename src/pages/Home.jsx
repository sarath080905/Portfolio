// Home.jsx
import React from "react";
import { motion } from "framer-motion";
import NavigationButtons from "../components/NavigationButtons";
import "../App.css";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

// Floating background bubbles animation
const bubbles = Array.from({ length: 12 }, (_, i) => i + 1);

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden border rounded-lg bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      {/* Animated Gradient Overlay */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-100 opacity-40"
        style={{ backgroundSize: "200% 200%" }}
      ></motion.div>

      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble}
            className="absolute bg-blue-400 rounded-full opacity-20"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 md:px-12 py-20 text-center max-w-3xl"
      >
        {/* Name Section */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-sm"
        >
          Hi 👋, I'm  <span className="text-blue-600">SARATHKUMAR!</span>
        </motion.h1>

        {/* Passion Intro */}
        <motion.p
          variants={itemVariants}
          className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          I’m a dedicated developer passionate about creating modern, user-friendly,
          and performance-driven applications. My goal is to merge creativity with
          technology to deliver elegant solutions that make an impact.
        </motion.p>

        {/* Section Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-6 text-blue-800 tracking-wide"
        >
          Featured Skills
        </motion.h2>

        {/* Skills List */}
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          {["HTML", "CSS", "JavaScript", "React", "Python", "Django", "SQL"].map(
            (skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="bg-white px-6 py-2 rounded-full text-blue-700 font-medium shadow-md hover:shadow-xl border border-blue-200 hover:border-blue-400 transition-all cursor-pointer"
              >
                {skill}
              </motion.div>
            )
          )}
        </motion.div>

        {/* Resume Button */}
        <motion.div variants={itemVariants} className="mt-10">
          <a
            href="https://drive.google.com/file/d/1wRC5t5oipV5Z1Wai7x7qrNNwoiPlbJhs/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all"
          >
            View Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-14 left-0 right-0 flex justify-between px-6 z-20">
        <NavigationButtons />
      </div>
    </div>
  );
};

export default Home;
