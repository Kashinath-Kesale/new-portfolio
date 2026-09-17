import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTasks, 
  FaExternalLinkAlt, 
  FaStore, 
  FaRobot, 
  FaChartBar, 
  FaWallet, 
  FaBroadcastTower, 
  FaGithub, 
  FaCheckCircle 
} from 'react-icons/fa';

const projects = [
  {
    title: 'Fleet Monitor',
    subtitle: 'Real-Time Telemetry & Fleet Tracking Platform',
    category: 'Real-Time / Distributed Systems',
    tech: ['NestJS', 'TypeScript', 'Socket.IO', 'React.js', 'Telemetry', 'State Recovery'],
    points: [
      'Engineered a high-throughput fleet telemetry platform that ingests live robot coordinates, battery levels, and status metrics with real-time streaming to a React dashboard via Socket.IO.',
      'Implemented sequence-based packet ordering and heartbeat timeout mechanisms to reject out-of-order telemetry and automatically detect stale robot nodes.',
      'Benchmarked and stress-tested the platform with up to 500 simulated robot streams operating across 250ms–2000ms intervals to guarantee fault tolerance.'
    ],
    link: 'https://github.com/Kashinath-Kesale/fleet',
    icon: <FaBroadcastTower className="text-2xl text-indigo-600 dark:text-sky-400" />,
    isFeatured: true,
  },
  {
    title: 'PayFlowX',
    subtitle: 'Transactional Payment & Ledger Engine',
    category: 'Backend & Financial Systems',
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Prisma', 'Distributed Locks'],
    points: [
      'Built a transactional payment engine with database-level idempotency and ACID-compliant operations to ensure safe retries and eliminate duplicate charges.',
      'Designed an asynchronous settlement pipeline using a 1-to-1 Payment–Settlement model along with an automated reconciliation module to audit ledger consistency.',
      'Optimized read latency with Redis cache-aside caching, implemented distributed rate limiting, and enforced Redis distributed locks to guard concurrent payment workflows.'
    ],
    link: 'https://github.com/Kashinath-Kesale/PayFlowX',
    icon: <FaWallet className="text-2xl text-indigo-600 dark:text-sky-400" />,
    isFeatured: true,
  },
  {
    title: 'Resilient Real-Time Live Polling System',
    subtitle: 'Fault-Tolerant Multi-User Polling Platform',
    category: 'WebSocket & Concurrency',
    tech: ['Socket.io', 'React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    points: [
      'Engineered a multi-user polling platform featuring server-synchronized countdown timers and low-latency live vote aggregation.',
      'Architected state recovery mechanisms across client reconnects, browser refreshes, and late joins without data loss or corruption.',
      'Eliminated race conditions and duplicate voting attempts through strict server-side validation and database-level unique constraints.'
    ],
    link: 'https://github.com/Kashinath-Kesale/intervue-live-poll',
    icon: <FaChartBar className="text-2xl text-indigo-600 dark:text-sky-400" />,
    isFeatured: false,
  },
  {
    title: 'CodeGuardian',
    subtitle: 'AI-Powered Code Reviewer & Feedback System',
    category: 'Developer Tools & AI',
    tech: ['React.js', 'Node.js', 'Express.js', 'Gemini API', 'Markdown'],
    points: [
      'Developed a full-stack code review tool with a responsive React UI and Node.js/Express REST API delivering instant, automated code analysis.',
      'Integrated Google Gemini API with engineered system prompts to output structured markdown critiques, security alerts, and actionable code fixes.',
      'Boosted review suggestion relevance by 40% using context-aware prompt parsing and syntax error detection.'
    ],
    link: 'https://github.com/Kashinath-Kesale/CodeGuardian',
    icon: <FaRobot className="text-2xl text-indigo-600 dark:text-sky-400" />,
    isFeatured: false,
  },
  {
    title: 'RetailEdge',
    subtitle: 'Retail Management & Point-of-Sale System',
    category: 'Full-Stack Management',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Chart.js'],
    points: [
      'Built an end-to-end retail platform featuring Role-Based Access Control (Admin, Cashier, Viewer) and real-time inventory tracking.',
      'Developed secure REST APIs with JWT authentication, token rotation, transaction processing, and automated PDF invoice generation.',
      'Integrated interactive analytics dashboards using Chart.js to track revenue growth and inventory stock levels in real time.'
    ],
    link: 'https://github.com/Kashinath-Kesale/RetailEdge',
    icon: <FaStore className="text-2xl text-indigo-600 dark:text-sky-400" />,
    isFeatured: false,
  },
];

function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-br from-slate-50 via-indigo-50/20 to-sky-50/30 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-slate-800 dark:text-zinc-100 py-16 px-4 sm:px-6 md:px-8 transition-colors duration-500 overflow-hidden">
      {/* Ambient Floating Glow Orbs */}
      <div aria-hidden className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -right-16 w-[480px] h-[480px] bg-gradient-to-br from-indigo-300/20 via-sky-200/20 to-blue-300/15 dark:from-indigo-950/30 dark:via-sky-950/20 dark:to-zinc-950/20 blur-3xl rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/3 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-blue-300/20 to-indigo-300/15 dark:from-zinc-900/40 dark:to-cyan-950/25 blur-3xl rounded-full"
        />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-sky-400 mb-3 flex items-center justify-center gap-3">
            <FaTasks className="text-indigo-600 dark:text-sky-400" />
            Projects
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
            Scalable backend architectures, real-time distributed systems, and full-stack web applications.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/80 dark:border-zinc-800 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-xl hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)] hover:border-indigo-300 dark:hover:border-sky-400/60 transition-all duration-300 overflow-hidden"
            >
              {/* Top Accent Line for Featured Projects */}
              {proj.isFeatured && (
                <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 dark:from-sky-400 dark:via-cyan-400 dark:to-indigo-500" />
              )}

              <div className="p-6 sm:p-8">
                {/* Header Row: Title, Tag, and Links */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-zinc-800">
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="p-3.5 rounded-2xl bg-indigo-50/80 dark:bg-zinc-800 shadow-inner flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {proj.icon}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-sky-400 transition-colors">
                          {proj.title}
                        </h3>
                        {proj.isFeatured && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-sky-500 dark:to-blue-600 text-white shadow-xs">
                            Featured
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                          {proj.category}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-indigo-600 dark:text-sky-300">
                        {proj.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* GitHub Action Button */}
                  <div className="flex items-center gap-3 self-start sm:self-center">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-zinc-800 text-white text-xs font-semibold hover:bg-indigo-600 dark:hover:bg-sky-400 dark:hover:text-zinc-950 shadow-sm hover:scale-105 transition-all duration-200"
                    >
                      <FaGithub className="text-base" />
                      <span>Source Code</span>
                      <FaExternalLinkAlt className="text-[10px] opacity-70" />
                    </a>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6 text-left">
                  {proj.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-zinc-200 text-sm md:text-base leading-relaxed">
                      <FaCheckCircle className="text-indigo-500 dark:text-sky-400 mt-1 flex-shrink-0 text-xs md:text-sm" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2 items-center">
                  <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mr-1">
                    Tech:
                  </span>
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-100/80 dark:bg-zinc-800/80 border border-slate-200/70 dark:border-zinc-700 text-slate-700 dark:text-sky-300 text-xs font-medium shadow-2xs hover:bg-white hover:border-indigo-300 dark:hover:border-sky-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;