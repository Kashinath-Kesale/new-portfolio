import React from 'react';
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaTasks } from 'react-icons/fa';

const projects = [
  {
    title: 'SkyFlights',
    tech: ['Python', 'Machine Learning', 'Flask'],
    description:
      'A machine learning-powered flight fare prediction system that estimates airline ticket prices using features like airline, route, stops, and travel duration. Built with Python and Flask, and deployed with an intuitive web interface for real-time predictions.',
    link: 'https://github.com/Kashinath-Kesale/Flight-Price-Prediction---Data-Science',
    icon: <FaPlaneDeparture className="text-4xl text-blue-400" />,
  },
  {
    title: 'Log Monitoring System',
    tech: ['Docker', 'Grafana', 'Loki', 'Promtail'],
    description:
      'A real-time centralized logging solution using Grafana, Loki, and Promtail inside Docker. Helps visualize and monitor logs from multiple sources with an interactive dashboard.',
    link: 'https://github.com/Kashinath-Kesale/log-monitoring',
    icon: <FaServer className="text-4xl text-green-400" />,
  },
];

function Projects() {
  return (
    // <section id="projects" className="bg-gray-900 text-white py-12 px-6">
    // <section id="projects" className="bg-gray-100 text-gray-800 py-20 px-6">
    <section id="projects" className="bg-blue-50 text-gray-800 py-20 px-6">
      {/* <h2 className="text-4xl font-bold text-center text-white-400 mb-10">Projects</h2> */}
      <h2 className="text-4xl font-bold text-center text-white-400 mb-10 flex items-center justify-center gap-2">
  <FaTasks className="text-white-400" />
  Projects
</h2>


      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {projects.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              {proj.icon && proj.icon}
              <h3 className="text-xl font-semibold text-orange-300">{proj.title}</h3>
            </div>
            <p className="text-gray-300 mb-3">{proj.description}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {proj.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
