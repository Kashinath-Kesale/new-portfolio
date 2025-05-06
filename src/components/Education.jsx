import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  const educationData = [
    {
      degree: 'B.E. in Electronics & Telecommunication',
      university: 'Wadia College of Engineering Pune',
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
      duration: '2018 - 2020',
    //   grade: 'Percentage: 96%',
    },
  ];

  return (
    <section id="education" className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-orange-400 text-center mb-10 flex items-center justify-center gap-2">
        <FaGraduationCap className="text-orange-400" />
        Education
      </h2>

      <div className="flex flex-col items-center gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl w-full max-w-2xl border border-gray-700 hover:border-orange-400 transition-all duration-300 hover:shadow-orange-400/20 hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-orange-300">{edu.degree}</h3>
            <p className="text-gray-300 mt-1">{edu.university}</p>
            <p className="text-gray-400 text-sm">{edu.duration}</p>
            {edu.grade && (
              <p className="mt-2 text-green-400 font-medium">{edu.grade}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
