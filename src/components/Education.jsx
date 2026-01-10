import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const timelineData = [
  {
    type: 'experience',
    title: "Software Engineering Intern (Founder's Office)",
    organization: 'GoBasera',
    duration: 'Oct 2025 – Dec 2025',
    description: [
      'Built full-stack features for a multi-service SaaS platform using NestJS, TypeScript, React, and PostgreSQL within a monorepo architecture.',
      'Collaborated with the CEO to deliver production-grade releases with >80% test coverage via GitHub Actions CI/CD pipelines.',
      'Optimized environment startup time by 45% by resolving critical Docker Compose and health-check issues.'
    ],
    icon: <FaBriefcase className="text-xl" />,
    color: 'text-blue-500'
  },
  {
    type: 'experience',
    title: 'Web Developer',
    organization: 'Electro Infinity Club',
    duration: 'Jun 2025 – Sep 2025',
    description: [
      'Improved website performance by 35% through engineering and optimizing the official club website with React.js.',
      'Increased event registrations by 55% by leading deployment and implementing real-time update features.'
    ],
    icon: <FaBriefcase className="text-xl" />,
    color: 'text-indigo-500'
  },
  {
    type: 'education',
    title: 'B.E. in Electronics & Telecommunication',
    organization: 'Wadia College of Engineering Pune | SPPU',
    duration: '2022 - 2026',
    description: ['Focusing on Core Engineering, Software Development, and Systems Design.'],
    icon: <FaGraduationCap className="text-xl" />,
    color: 'text-yellow-500'
  },
  {
    type: 'education',
    title: 'Higher Secondary (12th)',
    organization: 'Dayanand Science College Latur',
    duration: '2020 - 2022',
    description: ['Completed with a focus on Science and Mathematics.'],
    icon: <FaGraduationCap className="text-xl" />,
    color: 'text-slate-400'
  },
  {
    type: 'education',
    title: 'Secondary School (10th Standard)',
    organization: 'Parimal Vidyalaya Latur',
    duration: '2019 - 2020',
    description: ['Achieved 96% in the State Board Examinations.', 'Foundation in Science and Mathematics.'],
    icon: <FaGraduationCap className="text-xl" />,
    color: 'text-slate-400'
  }
];

function Journey() {
  return (
    <section id="education" className="bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-100 py-20 px-4 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-indigo-600 dark:text-yellow-400 mb-4 flex items-center justify-center gap-3">
            <FaGraduationCap />
            Experience & Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400">My professional journey and academic background</p>
        </motion.div>

        <div className="relative border-l-2 border-indigo-200 dark:border-slate-700 ml-4 md:ml-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot/Icon */}
              <div className={`absolute -left-[52px] mt-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 border-2 border-indigo-500 dark:border-yellow-400 shadow-lg ${item.color}`}>
                {item.icon}
              </div>

              {/* Card Content */}
              <div className="bg-white/80 dark:bg-slate-800/80 p-6 rounded-2xl border border-indigo-50 dark:border-slate-700 shadow-xl hover:shadow-2xl hover:border-indigo-200 dark:hover:border-yellow-400 transition-all group">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md mb-2 inline-block ${item.type === 'experience' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300' : 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300'}`}>
                      {item.type}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg font-medium text-indigo-500 dark:text-indigo-300">
                      {item.organization}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 px-3 py-1 rounded-full text-sm font-semibold border border-slate-100 dark:border-slate-700">
                    <FaCalendarAlt className="text-indigo-400 dark:text-yellow-400" />
                    {item.duration}
                  </div>
                </div>

                <ul className="space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex gap-2">
                      <span className="text-indigo-400 dark:text-yellow-500 font-bold">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;