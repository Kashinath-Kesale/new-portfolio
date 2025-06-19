import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase, FaTools, FaCogs, FaCodeBranch } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiPostman, SiDocker, SiVercel } from 'react-icons/si';
import { MdOutlineApi } from 'react-icons/md';

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: <FaCodeBranch className="text-indigo-500 text-2xl" />,
    skills: [
      { name: 'Java', icon: <FaJava className="text-3xl text-indigo-600" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-3xl text-yellow-400" /> },
      { name: 'Python', icon: <FaPython className="text-3xl text-blue-400" /> },
    ],
  },
  {
    title: 'Frontend & Backend Development',
    icon: <MdOutlineApi className="text-indigo-500 text-2xl" />,
    skills: [
      { name: 'React.js', icon: <FaReact className="text-3xl text-blue-500" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-3xl text-green-500" /> },
      { name: 'Express.js', icon: <FaNodeJs className="text-3xl text-gray-700" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-3xl text-green-600" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-3xl text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-3xl text-blue-400" /> },
      { name: 'REST APIs', icon: <MdOutlineApi className="text-3xl text-indigo-400" /> },
    ],
  },
  {
    title: 'Databases',
    icon: <FaDatabase className="text-indigo-500 text-2xl" />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-3xl text-green-600" /> },
      { name: 'MySQL', icon: <SiMysql className="text-3xl text-blue-400" /> },
      { name: 'SQL', icon: <FaDatabase className="text-3xl text-indigo-400" /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools className="text-indigo-500 text-2xl" />,
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-3xl text-orange-400" /> },
      { name: 'GitHub', icon: <FaGitAlt className="text-3xl text-black" /> },
      { name: 'Docker', icon: <SiDocker className="text-3xl text-blue-500" /> },
      { name: 'Postman', icon: <SiPostman className="text-3xl text-orange-500" /> },
      { name: 'VS Code', icon: <FaCogs className="text-3xl text-indigo-400" /> },
      { name: 'GitHub Actions', icon: <FaCodeBranch className="text-3xl text-indigo-500" /> },
      { name: 'CI/CD', icon: <SiVercel className="text-3xl text-black" /> },
    ],
  },
  {
    title: 'Computer Science Fundamentals',
    icon: <FaCogs className="text-indigo-500 text-2xl" />,
    skills: [
      { name: 'Data Structures & Algorithms', icon: <FaCogs className="text-3xl text-indigo-600" /> },
      { name: 'OOP', icon: <FaCogs className="text-3xl text-indigo-400" /> },
      { name: 'DBMS', icon: <FaDatabase className="text-3xl text-indigo-400" /> },
      { name: 'OS', icon: <FaCogs className="text-3xl text-indigo-400" /> },
      { name: 'Computer Networks', icon: <FaCogs className="text-3xl text-indigo-400" /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-br from-indigo-50 via-white to-blue-100 text-slate-800 py-8 px-4">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8 flex items-center justify-center gap-2">
        <FaCogs className="text-indigo-600" />
        Skills
      </h2>
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white via-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl shadow-lg p-6 min-w-[260px] max-w-xs flex-1 flex flex-col items-center hover:-rotate-1 hover:scale-105 hover:shadow-indigo-200/60 transition-transform duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              {group.icon}
              <span className="text-lg font-semibold text-indigo-700">{group.title}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {group.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-1 bg-indigo-50 rounded-xl px-3 py-2 shadow hover:scale-110 hover:shadow-indigo-200/60 border border-transparent hover:border-indigo-300 transition-all duration-300 min-w-[80px] group"
                >
                  <span className="group-hover:shadow-[0_0_8px_2px_rgba(99,102,241,0.15)] transition-all duration-300 rounded-full">{skill.icon}</span>
                  <span className="text-xs font-medium mt-1 text-slate-700 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
