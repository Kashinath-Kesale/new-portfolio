import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaTools, FaCogs, FaCodeBranch, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiPostman, SiDocker, SiVercel, SiTypescript, SiNestjs, SiNextdotjs, SiPostgresql, SiRedis } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { MdOutlineApi } from 'react-icons/md';

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: <FaCodeBranch className="text-indigo-500 text-2xl" />,
    skills: [
      { name: 'Java', icon: <FaJava className="text-3xl text-indigo-600" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-3xl text-blue-600" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-3xl text-yellow-400" /> },
      { name: 'Python', icon: <FaPython className="text-3xl text-blue-400" /> },
    ],
  },
  {
    title: 'Backend & Full-Stack',
    icon: <MdOutlineApi className="text-indigo-500 text-2xl" />,
    skills: [
      { name: 'NestJS', icon: <SiNestjs className="text-3xl text-red-600" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-3xl text-green-500" /> },
      { name: 'Express.js', icon: <FaNodeJs className="text-3xl text-gray-700 dark:text-gray-300" /> },
      { name: 'React.js', icon: <FaReact className="text-3xl text-blue-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-3xl text-black dark:text-white" /> },
      { name: 'REST APIs', icon: <MdOutlineApi className="text-3xl text-indigo-400" /> },
    ],
  },
  {
    title: 'Databases & Caching',
    icon: <FaDatabase className="text-indigo-500 text-2xl" />,
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-3xl text-blue-400" /> },
      { name: 'Redis', icon: <SiRedis className="text-3xl text-red-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-3xl text-green-600" /> },
      { name: 'MySQL', icon: <SiMysql className="text-3xl text-blue-400" /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools className="text-indigo-500 text-2xl" />,
    skills: [
      { name: 'Docker', icon: <SiDocker className="text-3xl text-blue-500" /> },
      { name: 'Git', icon: <FaGitAlt className="text-3xl text-orange-400" /> },
      { name: 'GitHub', icon: <FaGithub className="text-3xl text-gray-800 dark:text-white" /> },
      { name: 'Postman', icon: <SiPostman className="text-3xl text-orange-500" /> },
      { name: 'VS Code', icon: <VscVscode className="text-3xl text-blue-500" /> },
      { name: 'CI/CD', icon: <SiVercel className="text-3xl text-black dark:text-white" /> },
    ],
  },
  {
    title: 'Computer Science Fundamentals',
    icon: <FaCogs className="text-indigo-500 text-2xl" />,
    skills: [
      { name: 'OOP', icon: <FaCogs className="text-3xl text-indigo-400" /> },
      { name: 'DSA', icon: <FaCogs className="text-3xl text-indigo-600" /> },
      { name: 'DBMS', icon: <FaDatabase className="text-3xl text-indigo-400" /> },
      { name: 'OS', icon: <FaCogs className="text-3xl text-indigo-400" /> },
      { name: 'Networks', icon: <FaCogs className="text-3xl text-indigo-400" /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="relative bg-gradient-to-br from-slate-50 via-indigo-50/20 to-sky-50/30 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-slate-800 dark:text-zinc-100 py-16 px-4 sm:px-6 md:px-8 transition-colors duration-500 overflow-hidden">
      {/* Ambient Floating Glow Orbs */}
      <div aria-hidden className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-indigo-300/20 via-sky-200/20 to-violet-200/15 dark:from-indigo-950/30 dark:via-sky-950/20 dark:to-zinc-950/20 blur-3xl rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-10 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-300/20 to-indigo-300/20 dark:from-zinc-900/40 dark:to-cyan-950/20 blur-3xl rounded-full"
        />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-sky-400 mb-3 flex items-center justify-center gap-3">
            <FaCogs className="text-indigo-600 dark:text-sky-400" />
            Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Languages, frameworks, databases, and core computer science competencies
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-center">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/80 dark:border-zinc-800 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-xl p-6 flex flex-col items-center hover:shadow-[0_16px_36px_rgba(79,70,229,0.1)] hover:border-indigo-300 dark:hover:border-sky-400/60 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100 dark:border-zinc-800 w-full justify-center">
                {group.icon}
                <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-sky-300 tracking-tight">{group.title}</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3 w-full">
                {group.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="flex flex-col items-center justify-center gap-1.5 bg-slate-50/90 dark:bg-zinc-800/80 rounded-xl px-3.5 py-2.5 shadow-2xs border border-slate-200/70 dark:border-zinc-700/60 hover:border-indigo-300 dark:hover:border-sky-400/80 hover:bg-white dark:hover:bg-zinc-700 hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-200 min-w-[82px] cursor-default"
                  >
                    <span className="text-2xl transition-transform duration-200">{skill.icon}</span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200 text-center tracking-tight">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;