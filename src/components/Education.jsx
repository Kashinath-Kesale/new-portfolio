import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  const educationData = [
    {
      degree: 'B.E. in Electronics & Telecommunication',
      university: 'Wadia College of Engineering Pune | SPPU',
      duration: '2022 - 2026',
    },
    {
      degree: 'Higher Secondary (12th)',
      university: 'Dayanand Science College Latur',
      duration: '2020 - 2022',
    },
    {
      degree: 'Secondary (10th)',
      university: 'Parimal Vidyalaya Latur',
      duration: '2019 - 2020',
    //   grade: 'Percentage: 96%',
    },
  ];

  return (
    <section id="education" className="bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-100 py-12 px-4 transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-yellow-400 mb-12 flex items-center justify-center gap-2">
        <FaGraduationCap className="text-indigo-600 dark:text-yellow-400" />
        Education
      </h2>

      <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(49,70,178,0.13), 0 2px 8px 0 rgba(49,70,178,0.10)' }}
            className="bg-white/90 dark:bg-slate-800/90 border border-indigo-100 dark:border-slate-700 rounded-2xl shadow-lg p-6 w-full flex flex-col items-center transition-transform duration-300 transition-colors"
          >
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 text-center mb-2">{edu.degree}</h3>
            <p className="text-slate-700 dark:text-slate-100 text-center mb-1">{edu.university}</p>
            <p className="text-indigo-500 dark:text-yellow-400 text-sm text-center">{edu.duration}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
