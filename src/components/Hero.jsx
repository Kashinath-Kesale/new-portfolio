import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown, FaEnvelope, FaDownload, FaCode, FaRocket } from 'react-icons/fa';

function Hero() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section className="relative text-center py-12 md:py-20 overflow-hidden w-full" id="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        aria-hidden
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-300 via-blue-300 to-sky-200 dark:from-indigo-900 dark:via-slate-800 dark:to-slate-900 opacity-40 blur-3xl rounded-full transition-colors duration-500" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 via-indigo-200 to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 opacity-30 blur-2xl rounded-full transition-colors duration-500" />
      </motion.div>

      <div className="relative flex flex-col items-center gap-4 z-10">
        
        {/* Added: High-Impact LeetCode Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2 shadow-sm backdrop-blur-sm"
        >
          <FaRocket /> 614 Solved | 365 Days Streak Badge | 1488 Rating
        </motion.div>

        {/* Animated Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-slate-100 drop-shadow-lg transition-colors duration-500"
        >
          Kashinath Kesale
        </motion.h1>

        {/* Updated Tagline with Professional Typewriter effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-2xl mt-2 text-slate-600 dark:text-slate-300 font-medium transition-colors duration-500"
        >
          I'm {' '}
          <span className="text-indigo-600 dark:text-yellow-400 font-semibold transition-colors duration-500">
            <Typewriter
              words={[
                'a Full Stack Developer', 
                'a NestJS & TypeScript Specialist', 
                'an Ex-Intern @ GoBasera', 
                'a DSA Enthusiast (600+ Solved)'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
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
              className="w-full max-w-2xl mx-auto mt-8 bg-white/80 dark:bg-slate-800/90 rounded-2xl shadow-lg px-6 py-8 text-left text-gray-800 dark:text-slate-100 border border-gray-200 dark:border-slate-700 transition-colors duration-500"
            >
              <div className="flex flex-col items-center text-center">
                <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 font-medium mb-6">
                  Hello! I'm <span className="font-semibold text-indigo-600 dark:text-yellow-400">Kashinath Kesale</span> — a developer who codes with purpose and passion.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
                  <div className="bg-indigo-50 dark:bg-slate-800/70 rounded-xl p-4 flex items-center gap-3 shadow border border-indigo-100 dark:border-slate-700 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="text-left">
                      <span className="font-bold text-indigo-600 dark:text-yellow-400">Impact-Driven:</span> I build scalable, real-world solutions that matter.
                    </span>
                  </div>
                  <div className="bg-indigo-50 dark:bg-slate-800/70 rounded-xl p-4 flex items-center gap-3 shadow border border-indigo-100 dark:border-slate-700 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="text-left">
                      <span className="font-bold text-indigo-600 dark:text-yellow-400">Collaborative:</span> I thrive in diverse teams and love sharing ideas.
                    </span>
                  </div>
                  <div className="bg-indigo-50 dark:bg-slate-800/70 rounded-xl p-4 flex items-center gap-3 shadow border border-indigo-100 dark:border-slate-700 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="text-left">
                      <span className="font-bold text-indigo-600 dark:text-yellow-400">Curious & Fast Learner:</span> I embrace new tech and adapt quickly.
                    </span>
                  </div>
                  <div className="bg-indigo-50 dark:bg-slate-800/70 rounded-xl p-4 flex items-center gap-3 shadow border border-indigo-100 dark:border-slate-700 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="text-left">
                      <span className="font-bold text-indigo-600 dark:text-yellow-400">Communicator:</span> I value clarity and enjoy making complex ideas simple.
                    </span>
                  </div>
                  <div className="bg-indigo-50 dark:bg-slate-800/70 rounded-xl p-4 flex items-center gap-3 shadow border border-indigo-100 dark:border-slate-700 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="text-left">
                      <span className="font-bold text-indigo-600 dark:text-yellow-400">Professional:</span> I deliver quality with integrity and attention to detail.
                    </span>
                  </div>
                  <div className="bg-indigo-50 dark:bg-slate-800/70 rounded-xl p-4 flex items-center gap-3 shadow border border-indigo-100 dark:border-slate-700 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="text-left">
                      <span className="font-bold text-indigo-600 dark:text-yellow-400">Growth-Minded:</span> I’m always learning, both as a developer and as a person.
                    </span>
                  </div>
                </div>
              </div>
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
            className="px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-indigo-400 transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <FaEnvelope className="text-lg" /> Hire Me
          </a>
          <a
            href="/Kashinath_Kesale_Resume.pdf"
            download
            className="px-6 py-2 rounded-full bg-white text-indigo-700 font-semibold border border-indigo-200 shadow-md hover:bg-indigo-50 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-indigo-400 transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <FaDownload className="text-lg" /> Resume
          </a>
          <a
            href="https://leetcode.com/u/Kashinath_Kesale/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-slate-200 text-slate-700 font-semibold shadow-md hover:bg-slate-300 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-yellow-400 transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <FaCode className="text-lg" /> LeetCode
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;