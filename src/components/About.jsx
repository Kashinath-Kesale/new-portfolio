import React from 'react';
import { FaUser } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* <h2 className="text-4xl font-bold text-orange-600 mb-6">About Me</h2> */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center gap-2">
          <FaUser className="text-gray-800" />
          About Me
        </h2>


        <p className="text-lg leading-relaxed">
          Hello! I'm <span className="font-semibold text-orange-600">Kashinath Kesale</span>, a passionate Software Developer with a strong foundation in the MERN stack and Java + DSA. I'm currently pursuing my degree in Electronics and Telecommunication Engineering and working toward mastering full-stack development and problem solving.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I love building efficient, scalable applications and solving algorithmic challenges. With hands-on experience in React, Node.js, MongoDB, and Express, I’m always eager to learn and take on new challenges.
        </p>
      </div>
    </section>
  );
}

export default About;
