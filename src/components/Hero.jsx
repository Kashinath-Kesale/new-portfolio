import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="text-center py-20 bg-gray-900 text-white" id="home">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Profile Image */}
        {/* <motion.img
          src="/profile.jpg"
          alt="Kashinath Kesale"
          className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        /> */}

        {/* Animated Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-orange-500"
        >
          Kashinath Kesale
        </motion.h1>

        {/* Tagline with Typewriter effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl mt-2 text-gray-300"
        >
        I'm a{' '}
        <Typewriter
          words={['Software Developer', 'MERN Stack Developer', 'Java DSA Enthusiast', 'Passionate Coder', 'Problem Solver']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />

        </motion.p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:kashinathkesale1@gmail.com"
            className="fiery-button hover:bg-orange-100 transition-colors"
          >
            Hire Me
          </a>
          <a
            href="/Kashinath_Kesale_Resume_2025.pdf"
            download
            className="fiery-button hover:bg-orange-100 transition-colors"
          >
            Download Resume
          </a>
          <a
            href="https://leetcode.com/u/Kashinath_Kesale/"
            target="_blank"
            rel="noopener noreferrer"
            className="fiery-button hover:bg-orange-100 transition-colors"
          >
            LeetCode Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
