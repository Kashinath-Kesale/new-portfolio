import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown, FaUser } from 'react-icons/fa';

function Hero() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section className="relative text-center py-12 md:py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-100 overflow-hidden" id="home">
      {/* Animated Blurred Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        aria-hidden
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-300 via-blue-300 to-sky-200 opacity-40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 via-indigo-200 to-white opacity-30 blur-2xl rounded-full" />
      </motion.div>

      <div className="relative flex flex-col items-center gap-4 z-10">
        {/* Animated Profile Image */}
        {/**
        <motion.img
          src="/profile.jpg"
          alt="Kashinath Kesale"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-indigo-400 shadow-xl object-cover bg-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        */}

        {/* Animated Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-800 drop-shadow-lg"
        >
          Kashinath Kesale
        </motion.h1>

        {/* Tagline with Typewriter effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-2xl mt-2 text-slate-600 font-medium"
        >
          I'm a{' '}
          <span className="text-indigo-600 font-semibold">
            <Typewriter
              words={['Software Developer', 'MERN Stack Developer', 'DSA & Problem Solving Enthusiast', 'Open to Internships & Full-Time Roles']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>
        </motion.p>

        {/* About Me Arrow Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          onClick={() => setShowAbout((prev) => !prev)}
          className="mt-2 flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          About Me <FaArrowDown className={`transition-transform duration-300 ${showAbout ? 'rotate-180' : ''}`} />
        </motion.button>

        {/* About Section (Animated) */}
        <AnimatePresence>
          {showAbout && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl mx-auto mt-8 bg-white/80 rounded-2xl shadow-lg px-6 py-8 text-left text-gray-800 border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-center text-slate-800 mb-6 flex items-center justify-center gap-2">
                <FaUser className="text-indigo-600" />
                About Me
              </h2>
              <p className="text-lg leading-relaxed">
                Hello! I'm <span className="font-semibold text-indigo-600">Kashinath Kesale</span>, a final-year engineering student and passionate software developer with a strong foundation in full-stack development and Data Structures & Algorithms.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                I enjoy building efficient, scalable applications and solving real-world problems through code using technologies like React, Node.js, Express, and MongoDB. I'm driven by continuous learning, clean architecture, and impactful solutions.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:kashinathkesale1@gmail.com"
            className="px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition-colors"
          >
            Hire Me
          </a>
          <a
            href="/Kashinath_SDE_Resume.pdf"
            download
            className="px-6 py-2 rounded-full bg-white text-indigo-700 font-semibold border border-indigo-200 shadow-md hover:bg-indigo-50 transition-colors"
          >
            Download Resume
          </a>
          <a
            href="https://leetcode.com/u/Kashinath_Kesale/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-slate-200 text-slate-700 font-semibold shadow-md hover:bg-slate-300 transition-colors"
          >
            LeetCode Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
