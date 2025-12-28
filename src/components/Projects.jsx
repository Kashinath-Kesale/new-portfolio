import React from 'react';
import { motion } from 'framer-motion';
import { FaPlaneDeparture, FaServer, FaTasks, FaExternalLinkAlt, FaStore, FaRobot } from 'react-icons/fa';

const projects = [
  {
    title: 'CodeGuardian – AI-Powered Code Reviewer',
    tech: ['React.js', 'Node.js', 'Express.js', 'Gemini API', 'Markdown'],
    description:
      'Engineered a full-stack application with a responsive React UI and a Node.js/Express RESTful API to provide developers with real-time, AI-driven code analysis. Integrated the Google Gemini API, crafting advanced system prompts to deliver structured Markdown feedback, which improved the relevance of suggestions by 40%.',
    link: 'https://github.com/Kashinath-Kesale/CodeGuardian',
    icon: <FaRobot className="text-4xl text-indigo-500" />,
  },
  {
    title: 'RetailEdge – Retail Management Platform',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Chart.js'],
    description:
      'Designed and built a scalable full-stack retail management system with secure authentication, role-based access control (Admin, Cashier, Viewer), and real-time inventory tracking. Developed RESTful APIs with JWT authentication and efficient state management; implemented token refresh, sales processing, and PDF receipt generation. Engineered an interactive React.js dashboard with Tailwind CSS and Chart.js for advanced analytics (revenue, sales trends, top products).',
    link: 'https://github.com/Kashinath-Kesale/RetailEdge',
    icon: <FaStore className="text-4xl text-indigo-500" />,
  },
  {
    title: 'Log Monitoring System',
    tech: ['Docker', 'Grafana', 'Loki', 'Promtail'],
    description:
      'A real-time centralized logging solution using Grafana, Loki, and Promtail inside Docker. Helps visualize and monitor logs from multiple sources with an interactive dashboard.',
    link: 'https://github.com/Kashinath-Kesale/log-monitoring',
    icon: <FaServer className="text-4xl text-indigo-400" />,
    image: '/preview2.png',
  },
  {
    title: 'SkyFlights',
    tech: ['Python', 'Machine Learning', 'Flask'],
    description:
      'A machine learning-powered flight fare prediction system that estimates airline ticket prices using features like airline, route, stops, and travel duration. Built with Python and Flask, and deployed with an intuitive web interface for real-time predictions.',
    link: 'https://github.com/Kashinath-Kesale/Flight-Price-Prediction---Data-Science',
    icon: <FaPlaneDeparture className="text-4xl text-indigo-400" />,
    image: '/preview.png',
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-yellow-400 mb-12 flex items-center justify-center gap-2">
        <FaTasks className="text-indigo-600 dark:text-yellow-400" />
        Projects
      </h2>

      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {projects.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.035, boxShadow: '0 12px 36px 0 rgba(49,70,178,0.16), 0 2px 8px 0 rgba(49,70,178,0.13)' }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group bg-white/90 dark:bg-slate-800/90 border border-indigo-100 dark:border-slate-700 rounded-2xl shadow-lg p-0 flex flex-col items-center overflow-hidden transition-transform duration-300 hover:shadow-indigo-200/60 dark:hover:shadow-yellow-200/20 hover:border-indigo-300 dark:hover:border-yellow-400 relative transition-colors"
          >
            <div className="flex items-center justify-center mt-6 mb-2 relative">
              <div className="bg-white/80 dark:bg-slate-900/80 rounded-full p-3 shadow group-hover:shadow-indigo-200/60 dark:group-hover:shadow-yellow-200/20 relative transition-colors">
                <span className="group relative">
                  {proj.icon}
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-slate-900 dark:bg-slate-800 text-white text-xs shadow-lg z-50 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200">
                    {proj.tech.join(', ')}
                  </span>
                </span>
              </div>
              {i === 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-500 to-blue-400 dark:from-yellow-400 dark:to-yellow-300 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">New</span>
              )}
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-between p-6 w-full">
              <div className="w-full flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 group-hover:text-indigo-800 dark:group-hover:text-yellow-400 transition-colors text-center">
                    {proj.title}
                  </h3>
                  <FaExternalLinkAlt className="text-indigo-400 dark:text-indigo-400 text-base ml-1 group-hover:text-indigo-600 dark:group-hover:text-yellow-300 transition-colors" />
                </div>
                <p className="text-slate-700 dark:text-slate-100 mb-4 text-base leading-relaxed text-center">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2 justify-center">
                  {proj.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.07 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 text-xs font-semibold shadow hover:bg-indigo-100 dark:hover:bg-yellow-900 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Projects;