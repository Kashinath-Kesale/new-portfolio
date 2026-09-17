import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown, FaEnvelope, FaDownload, FaCode, FaRocket } from 'react-icons/fa';

function Hero() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section className="relative text-center py-16 md:py-24 overflow-hidden w-full" id="home">
      {/* Ambient Floating Glow Orbs */}
      <div aria-hidden className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-28 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-indigo-400/25 via-sky-300/25 to-violet-300/20 dark:from-indigo-950/40 dark:via-sky-950/30 dark:to-cyan-950/30 blur-3xl rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-blue-400/20 via-teal-300/15 to-indigo-300/20 dark:from-zinc-900/50 dark:via-sky-950/30 dark:to-zinc-950 blur-3xl rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 -left-20 w-[350px] h-[350px] bg-gradient-to-r from-indigo-300/20 to-sky-300/20 dark:from-indigo-950/30 dark:to-cyan-950/25 blur-3xl rounded-full"
        />
      </div>

      <div className="relative flex flex-col items-center gap-5 z-10 px-4">
        
        {/* LeetCode Badge with subtle pulse */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 dark:bg-sky-500/10 border border-amber-500/30 dark:border-sky-400/30 text-amber-800 dark:text-sky-300 text-xs font-bold uppercase tracking-widest mb-1 shadow-xs backdrop-blur-md"
        >
          <FaRocket className="text-amber-600 dark:text-sky-400" /> LeetCode: 600+ Solved | 365+ Days Streak | 1500+ Rating
        </motion.div>

        {/* Animated Name */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight drop-shadow-xs"
        >
          Kashinath Kesale
        </motion.h1>

        {/* Tagline with Professional Typewriter effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg md:text-2xl mt-1 text-slate-700 dark:text-zinc-300 font-medium"
        >
          I'm {' '}
          <span className="text-indigo-600 dark:text-sky-400 font-bold tracking-tight">
            <Typewriter
              words={[
                'a Software Developer', 
                'Proficient in NestJS & TypeScript', 
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
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => setShowAbout((prev) => !prev)}
          className="mt-1 flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-sky-500 dark:to-cyan-500 text-white dark:text-zinc-950 font-semibold text-sm shadow-md shadow-indigo-500/25 dark:shadow-sky-500/20 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/35 dark:hover:shadow-sky-500/30 transition-all duration-200 focus:outline-none"
        >
          About Me <FaArrowDown className={`transition-transform duration-300 ${showAbout ? 'rotate-180' : ''}`} />
        </motion.button>

        {/* About Section (Animated Glassmorphism) */}
        <AnimatePresence>
          {showAbout && (
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-2xl mx-auto mt-6 bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.06)] dark:shadow-2xl px-6 py-8 text-left text-slate-800 dark:text-zinc-100 border border-white/80 dark:border-zinc-800"
            >
              <div className="flex flex-col items-center text-center">
                <p className="text-base md:text-lg leading-relaxed text-slate-800 dark:text-zinc-200 font-medium mb-6">
                  Hello! I'm <span className="font-bold text-indigo-600 dark:text-sky-400">Kashinath Kesale</span> - a developer who codes with purpose and passion.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-xl">
                  <div className="bg-slate-50/80 dark:bg-zinc-800/70 rounded-xl p-4 flex items-center gap-3 shadow-2xs border border-slate-200/70 dark:border-zinc-700/60 transition-transform duration-200 hover:scale-102 hover:border-indigo-300 dark:hover:border-sky-400/60">
                    <span className="text-left text-sm">
                      <span className="font-bold text-indigo-600 dark:text-sky-400">Impact-Driven:</span> I build scalable, real-world solutions that matter.
                    </span>
                  </div>
                  <div className="bg-slate-50/80 dark:bg-zinc-800/70 rounded-xl p-4 flex items-center gap-3 shadow-2xs border border-slate-200/70 dark:border-zinc-700/60 transition-transform duration-200 hover:scale-102 hover:border-indigo-300 dark:hover:border-sky-400/60">
                    <span className="text-left text-sm">
                      <span className="font-bold text-indigo-600 dark:text-sky-400">Collaborative:</span> I thrive in diverse teams and love sharing ideas.
                    </span>
                  </div>
                  <div className="bg-slate-50/80 dark:bg-zinc-800/70 rounded-xl p-4 flex items-center gap-3 shadow-2xs border border-slate-200/70 dark:border-zinc-700/60 transition-transform duration-200 hover:scale-102 hover:border-indigo-300 dark:hover:border-sky-400/60">
                    <span className="text-left text-sm">
                      <span className="font-bold text-indigo-600 dark:text-sky-400">Curious & Fast Learner:</span> I embrace new tech and adapt quickly.
                    </span>
                  </div>
                  <div className="bg-slate-50/80 dark:bg-zinc-800/70 rounded-xl p-4 flex items-center gap-3 shadow-2xs border border-slate-200/70 dark:border-zinc-700/60 transition-transform duration-200 hover:scale-102 hover:border-indigo-300 dark:hover:border-sky-400/60">
                    <span className="text-left text-sm">
                      <span className="font-bold text-indigo-600 dark:text-sky-400">Communicator:</span> I value clarity and enjoy making complex ideas simple.
                    </span>
                  </div>
                  <div className="bg-slate-50/80 dark:bg-zinc-800/70 rounded-xl p-4 flex items-center gap-3 shadow-2xs border border-slate-200/70 dark:border-zinc-700/60 transition-transform duration-200 hover:scale-102 hover:border-indigo-300 dark:hover:border-sky-400/60">
                    <span className="text-left text-sm">
                      <span className="font-bold text-indigo-600 dark:text-sky-400">Professional:</span> I deliver quality with integrity and attention to detail.
                    </span>
                  </div>
                  <div className="bg-slate-50/80 dark:bg-zinc-800/70 rounded-xl p-4 flex items-center gap-3 shadow-2xs border border-slate-200/70 dark:border-zinc-700/60 transition-transform duration-200 hover:scale-102 hover:border-indigo-300 dark:hover:border-sky-400/60">
                    <span className="text-left text-sm">
                      <span className="font-bold text-indigo-600 dark:text-sky-400">Growth-Minded:</span> I’m always learning, both as a developer and as a person.
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:kashinathkesale1@gmail.com"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-sky-500 dark:to-cyan-500 text-white dark:text-zinc-950 font-bold shadow-md shadow-indigo-500/25 dark:shadow-sky-500/25 hover:from-indigo-500 hover:to-blue-500 dark:hover:from-sky-400 dark:hover:to-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/35 transition-all duration-200 flex items-center gap-2"
          >
            <FaEnvelope className="text-base" /> Hire Me
          </a>
          <a
            href="/Kashinath_Kesale_Resume.pdf"
            download
            className="px-6 py-2.5 rounded-full bg-white/85 dark:bg-zinc-900/90 text-indigo-700 dark:text-zinc-100 font-semibold border border-indigo-100 dark:border-zinc-800 shadow-md shadow-slate-200/50 dark:shadow-none hover:bg-white hover:border-indigo-300 dark:hover:bg-zinc-800 hover:scale-105 hover:shadow-lg transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
          >
            <FaDownload className="text-base" /> Resume
          </a>
          <a
            href="https://leetcode.com/u/Kashinath_Kesale/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-white/85 dark:bg-zinc-900/90 text-slate-700 dark:text-zinc-200 font-semibold border border-slate-200/80 dark:border-zinc-800 shadow-md shadow-slate-200/50 dark:shadow-none hover:bg-white hover:border-slate-300 dark:hover:bg-zinc-800 hover:scale-105 hover:shadow-lg transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
          >
            <FaCode className="text-base" /> LeetCode
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;