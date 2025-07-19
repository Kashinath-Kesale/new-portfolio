import React from 'react';
import { FaUser } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-12 px-6 bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-slate-100 transition-colors duration-500">
      <div className="max-w-2xl mx-auto bg-white/90 dark:bg-slate-800/90 rounded-2xl shadow-lg border border-indigo-100 dark:border-slate-700 p-8 flex flex-col items-center transition-colors">
        <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-yellow-400 mb-4 flex items-center gap-2">
          <FaUser className="text-indigo-600 dark:text-yellow-400 text-2xl" />
          About Me
        </h2>
        <hr className="w-16 border-indigo-200 dark:border-yellow-400 mb-6 opacity-40" />
        <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 text-center font-medium">
          Hello! I'm <span className="font-semibold text-orange-500 dark:text-yellow-400">Kashinath Kesale</span>, a passionate software developer with a strong foundation in the MERN stack and Data Structures & Algorithms (DSA). Currently pursuing a degree in Electronics and Telecommunication Engineering, I thrive on building efficient, scalable applications and solving real-world problems through code.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 text-center font-medium mt-4">
          Beyond my technical expertise, I am known for my strong communication skills, adaptability, and a collaborative spirit. I enjoy working in diverse teams, embracing new challenges, and continuously learning to stay ahead in the ever-evolving tech landscape. My approach is driven by professionalism, attention to detail, and a genuine enthusiasm for both technology and personal growth.
        </p>
      </div>
    </section>
  );
}

export default About;
