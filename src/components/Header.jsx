import React, { useState, useEffect } from 'react';
import { Events, scrollSpy } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaLaptopCode, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaMoon, FaSun, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

function Header({ onNavigate, darkMode, toggleDarkMode }) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome size={22} /> },
    { id: 'skills', label: 'Skills', icon: <FaLaptopCode size={22} /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap size={22} /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram size={22} /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope size={22} /> },
  ];

  // Listen to scroll for shadow and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // react-scroll events for active link
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Listen to hash changes for active section
  useEffect(() => {
    scrollSpy.update();
    window.addEventListener('hashchange', () => scrollSpy.update());
    return () => {
      window.removeEventListener('hashchange', () => scrollSpy.update());
    };
  }, []);

  // Contact Modal Content
  const ContactModal = () => (
    <AnimatePresence>
      {showContactModal && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-zinc-900 dark:border dark:border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-sm w-full text-center relative text-slate-800 dark:text-zinc-100"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-indigo-500 dark:hover:text-sky-400 text-2xl font-bold focus:outline-none"
              onClick={() => setShowContactModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-sky-400 mb-5 flex items-center justify-center gap-2">
              <FaEnvelope /> Get in Touch
            </h2>
            <div className="flex flex-col gap-3 w-full">
              <a
                href="mailto:kashinathkesale1@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/80 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-[#EA4335] dark:hover:text-[#EA4335] border border-slate-200/70 dark:border-zinc-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 transition-all group"
              >
                <FaEnvelope className="text-base flex-shrink-0 group-hover:text-[#EA4335] transition-colors" />
                <span className="truncate">kashinathkesale1@gmail.com</span>
              </a>
              <a
                href="tel:+917507186684"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-[#25D366] dark:hover:text-[#22c55e] border border-slate-200/70 dark:border-zinc-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 transition-all group"
              >
                <FaPhone className="text-base flex-shrink-0 group-hover:text-[#25D366] transition-colors" />
                <span>+91 75071 86684</span>
              </a>
              <a
                href="https://linkedin.com/in/kashinath-kesale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] border border-slate-200/70 dark:border-zinc-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 transition-all group"
              >
                <FaLinkedin className="text-base flex-shrink-0 group-hover:text-[#0A66C2] transition-colors" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/Kashinath-Kesale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/80 hover:bg-slate-900 hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white border border-slate-200/70 dark:border-zinc-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 transition-all group"
              >
                <FaGithub className="text-base flex-shrink-0" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`sticky top-0 left-0 w-full z-[200] flex justify-center transition-all duration-300 ${scrolled ? 'py-1.5' : 'py-3.5'}`}
      >
        <motion.nav
          layout
          className="flex items-center justify-center px-2 py-0 transition-all duration-300 w-full max-w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ layout: { type: 'spring', stiffness: 300, damping: 30 }, duration: 0.7, delay: 0.1 }}
        >
          <div
            className="flex items-center justify-center bg-white/65 dark:bg-zinc-950/60 backdrop-blur-xl rounded-2xl shadow-xl dark:shadow-2xl border border-white/60 dark:border-white/10 px-2 sm:px-3.5 py-1.5 sm:py-2 transition-all duration-300 max-w-[calc(100vw-1rem)] w-auto"
            onMouseEnter={e => e.currentTarget.classList.add('header-pop')}
            onMouseLeave={e => e.currentTarget.classList.remove('header-pop')}
          >
            <ul className="flex flex-row gap-1 sm:gap-3 text-base font-medium flex-1 justify-center items-center">
              {navItems.map(item => (
                <li key={item.id} className="relative flex items-center justify-center">
                  <button
                    className={`flex items-center justify-center p-2 sm:px-2.5 sm:py-2 rounded-xl transition-all duration-200 group ${
                      activeSection === item.id
                        ? 'text-indigo-600 dark:text-sky-400 font-semibold bg-indigo-50/90 dark:bg-sky-500/15 border border-indigo-100 dark:border-sky-500/30 shadow-xs dark:shadow-[0_0_12px_rgba(56,189,248,0.2)] scale-105'
                        : 'text-slate-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-sky-400 hover:bg-slate-100/60 dark:hover:bg-zinc-800/60 hover:scale-105 border border-transparent'
                    }`}
                    onMouseEnter={() => setHoveredNav(item.id)}
                    onMouseLeave={() => setHoveredNav(null)}
                    aria-label={item.label}
                    onClick={() => { setActiveSection(item.id); onNavigate && onNavigate(item.id); }}
                    style={{ transition: 'all 0.18s cubic-bezier(.4,0,.2,1)' }}
                  >
                    <span className="text-lg sm:text-xl">{item.icon}</span>
                  </button>
                  <AnimatePresence>
                    {hoveredNav === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 px-3 py-1 rounded-lg bg-slate-900/90 dark:bg-zinc-800/95 backdrop-blur-md border border-slate-700/50 dark:border-zinc-700 text-white dark:text-zinc-200 text-xs shadow-xl z-50 whitespace-nowrap pointer-events-none"
                      >
                        {item.label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
            {/* Dark mode toggle button */}
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="ml-2 sm:ml-3 p-2 rounded-xl transition-all duration-300 focus:outline-none bg-slate-100/70 dark:bg-zinc-900/70 hover:bg-slate-200/80 dark:hover:bg-zinc-800/80 border border-slate-200/50 dark:border-zinc-800 text-indigo-600 dark:text-sky-400 shadow-2xs hover:scale-105 flex-shrink-0"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <motion.span
                key={darkMode ? 'moon' : 'sun'}
                initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex items-center justify-center text-lg sm:text-xl"
              >
                {darkMode ? <FaMoon size={18} /> : <FaSun size={18} />}
              </motion.span>
            </button>
          </div>
        </motion.nav>
      </motion.header>
      {/* Contact Modal */}
      <ContactModal />
    </>
  );
}

export default Header;
