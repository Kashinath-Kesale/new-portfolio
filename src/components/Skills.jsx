import React from 'react';
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si';
import { FaLaptopCode } from 'react-icons/fa';


const skills = [
  { name: 'Java', icon: <FaJava className="text-4xl text-orange-300" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-300" /> },
  { name: 'React.js', icon: <FaReact className="text-4xl text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-4xl text-blue-300" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-teal-300" /> },
  { name: 'Git/GitHub', icon: <FaGitAlt className="text-4xl text-red-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
];

function Skills() {
  return (
    <section id="skills" className="bg-gray-900 text-white py-12 px-4">
      {/* <h2 className="text-3xl font-bold text-center text-orange-400 mb-10">Skills</h2> */}
      <h2 className="text-3xl font-bold text-center text-orange-400 mb-10 flex items-center justify-center gap-2">
        <FaLaptopCode className="text-orange-400" />
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-300 w-24"
          >
            {skill.icon}
            <p className="text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
