import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const timelineData = [
  {
    type: 'experience',
    title: 'Software Engineering Intern',
    organization: 'GoBasera',
    duration: 'Oct 2025 – Dec 2025',
    description: [
      'Contributed to the Community Onboarding Wizard, implementing backend APIs to capture and persist housing society details during signup and support the multi-step onboarding workflow.',
      'Reduced Docker Compose setup time from 1+ hour to under 30 minutes by fixing health-check timing and startup configuration.',
    ],
    icon: <FaBriefcase className="text-xl" />,
    color: 'text-blue-500 dark:text-sky-400',
  },
  {
    type: 'experience',
    title: 'Web Developer',
    organization: 'Electro Infinity Club',
    duration: 'Jun 2025 – Sep 2025',
    description: [
      'Optimized the official club website using React.js, improving page performance and cross-device accessibility.',
      'Implemented UI and performance improvements that increased event registrations by approximately 40% across club events.',
    ],
    icon: <FaBriefcase className="text-xl" />,
    color: 'text-indigo-500 dark:text-indigo-400',
  },
  {
    type: 'education',
    title: 'B.E. in Electronics & Telecommunication',
    organization: 'Wadia College of Engineering Pune | SPPU',
    duration: '2022 – 2026',
    description: ['Focusing on Core Engineering, Software Development, and Systems Design.'],
    icon: <FaGraduationCap className="text-xl" />,
    color: 'text-sky-600 dark:text-sky-400',
  },
  {
    type: 'education',
    title: 'Higher Secondary (12th)',
    organization: 'Dayanand Science College Latur',
    duration: '2020 – 2022',
    description: ['Completed with a focus on Science and Mathematics.'],
    icon: <FaGraduationCap className="text-xl" />,
    color: 'text-slate-400 dark:text-zinc-400',
  },
  {
    type: 'education',
    title: 'Secondary School (10th Standard)',
    organization: 'Parimal Vidyalaya Latur',
    duration: '2019 – 2020',
    description: ['Achieved 96% in the State Board Examinations.', 'Foundation in Science and Mathematics.'],
    icon: <FaGraduationCap className="text-xl" />,
    color: 'text-slate-400 dark:text-zinc-400',
  },
];

function Journey() {
  return (
    <section id="education" className="relative bg-gradient-to-br from-slate-50 via-indigo-50/20 to-sky-50/30 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-slate-800 dark:text-zinc-100 py-16 px-4 sm:px-6 md:px-8 transition-colors duration-500 overflow-hidden">
      {/* Ambient Floating Glow Orbs */}
      <div aria-hidden className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -right-20 w-[420px] h-[420px] bg-gradient-to-br from-indigo-300/20 to-blue-300/20 dark:from-indigo-950/30 dark:to-sky-950/20 blur-3xl rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-blue-200/25 to-indigo-200/25 dark:from-zinc-900/40 dark:to-cyan-950/25 blur-3xl rounded-full"
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-sky-400 mb-3 flex items-center justify-center gap-3">
            <FaGraduationCap />
            Experience & Education
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative border-l-2 border-indigo-200/70 dark:border-zinc-800 ml-4 md:ml-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-10 ml-8 relative"
            >
              {/* Timeline Dot/Icon */}
              <div className={`absolute -left-[52px] mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 dark:bg-zinc-900 border-2 border-indigo-500 dark:border-sky-400 shadow-md backdrop-blur-sm ${item.color}`}>
                {item.icon}
              </div>

              {/* Card Content (Frosted Glassmorphism) */}
              <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-6 sm:p-7 rounded-2xl border border-white/80 dark:border-zinc-800 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-xl hover:shadow-[0_16px_36px_rgba(79,70,229,0.1)] hover:border-indigo-300 dark:hover:border-sky-400/60 transition-all duration-300 group">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 inline-block border ${
                      item.type === 'experience'
                        ? 'bg-blue-50 text-blue-700 dark:bg-sky-950/40 dark:text-sky-300 border-blue-200/60 dark:border-sky-800/60'
                        : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/60'
                    }`}>
                      {item.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-base font-semibold text-indigo-600 dark:text-sky-300 mt-0.5">
                      {item.organization}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-zinc-400 bg-slate-50/90 dark:bg-zinc-800/80 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200/60 dark:border-zinc-700 backdrop-blur-xs">
                    <FaCalendarAlt className="text-indigo-500 dark:text-sky-400" />
                    {item.duration}
                  </div>
                </div>

                <ul className="space-y-2 mt-3.5">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-slate-700 dark:text-zinc-300 text-sm md:text-[15px] leading-relaxed flex items-start gap-2.5">
                      <span className="text-indigo-500 dark:text-sky-400 font-bold mt-0.5">•</span>
                      <span>{desc}</span>
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