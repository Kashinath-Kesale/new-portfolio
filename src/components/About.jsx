import React from 'react';
import { FaUser } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-slate-100 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center">
        {/* <h2 className="text-4xl font-bold text-orange-600 mb-6">About Me</h2> */}
        <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-yellow-400 mb-10 flex items-center justify-center gap-2">
          <FaUser className="text-gray-800 dark:text-yellow-400" />
          About Me
        </h2>


        <p className="text-base text-slate-500 dark:text-slate-200">
          Hello! I'm <span className="font-semibold text-orange-600 dark:text-yellow-400">Kashinath Kesale</span>, a passionate software developer with a strong foundation in the MERN stack and Data Structures & Algorithms (DSA). Currently pursuing a degree in Electronics and Telecommunication Engineering, I'm focused on mastering full-stack development and sharpening my problem-solving skills.
        </p>
        <p className="text-base text-slate-500 dark:text-slate-200 mt-4">
          I enjoy building efficient, scalable applications and tackling algorithmic challenges. With practical experience in React, Node.js, Express, and MongoDB, I'm driven by a passion for continuous learning and solving real-world problems through code.
        </p>
      </div>
    </section>
  );
}

export default About;
