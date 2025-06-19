import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaLaptopCode, FaGraduationCap, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

function Header({ onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    const handleSetActive = (to) => setActiveSection(to);
    scrollSpy.update();
    window.addEventListener('hashchange', () => scrollSpy.update());
    return () => {
      window.removeEventListener('hashchange', () => scrollSpy.update());
    };
  }, []);

  // Width is always compact
  const navWidth = 'max-w-[4.5rem]';

  // Contact Modal Content
  const ContactModal = () => (
    <AnimatePresence>
      {showContactModal && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full text-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-orange-500 text-2xl font-bold focus:outline-none"
              onClick={() => setShowContactModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Contact</h2>
            <div className="flex flex-col gap-4 items-center">
              <a href="mailto:kashinathkesale1@gmail.com" className="text-gray-700 hover:text-orange-500 transition-colors">kashinathkesale1@gmail.com</a>
              <a href="tel:+917507186684" className="text-gray-700 hover:text-orange-500 transition-colors">+91 75071 86684</a>
              <a href="https://linkedin.com/in/kashinath-kesale" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-orange-500 transition-colors">LinkedIn</a>
              <a href="https://github.com/Kashinath-Kesale" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-orange-500 transition-colors">GitHub</a>
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
        className={`sticky top-0 left-0 w-full z-[200] flex justify-center transition-all duration-300 ${scrolled ? 'py-1' : 'py-3'}`}
        style={{ background: 'transparent' }}
      >
        <motion.nav
          layout
          className={`flex items-center justify-center px-0 py-0 transition-all duration-300 w-full`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ layout: { type: 'spring', stiffness: 300, damping: 30 }, duration: 0.7, delay: 0.1 }}
          style={{
            boxShadow: scrolled
              ? '0 8px 32px 0 rgba(49, 70, 178, 0.13)' : '0 4px 16px 0 rgba(49, 70, 178, 0.09)',
            fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
            minWidth: '4rem',
            background: 'transparent',
          }}
        >
          <div
            className={`flex items-center justify-center bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-indigo-100/60 px-3 py-2 transition-all duration-300`}
            style={{background: '#fff', opacity: 1, zIndex: 300, minWidth: '18rem', boxShadow: '0 8px 32px 0 rgba(49,70,178,0.10), 0 2px 8px 0 rgba(49,70,178,0.08)'}}
            onMouseEnter={e => e.currentTarget.classList.add('header-pop')}
            onMouseLeave={e => e.currentTarget.classList.remove('header-pop')}
          >
            <ul className="flex flex-row gap-2 md:gap-4 text-base font-medium flex-1 justify-center">
              {navItems.map(item => (
                <li key={item.id} className="relative flex items-center justify-center">
                  <button
                    className={`flex items-center px-2 py-2 rounded-md transition-all duration-200 w-full justify-center group ${activeSection === item.id ? 'text-indigo-600 font-semibold bg-indigo-50 shadow-[0_0_8px_2px_rgba(99,102,241,0.12)] scale-110' : 'text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/70 hover:scale-110 hover:shadow-[0_0_8px_2px_rgba(99,102,241,0.10)]'}`}
                    onMouseEnter={() => setHoveredNav(item.id)}
                    onMouseLeave={() => setHoveredNav(null)}
                    aria-label={item.label}
                    onClick={() => { setActiveSection(item.id); onNavigate && onNavigate(item.id); }}
                    style={{ transition: 'all 0.18s cubic-bezier(.4,0,.2,1)' }}
                  >
                    <span>{item.icon}</span>
                  </button>
                  <AnimatePresence>
                    {hoveredNav === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-slate-900 text-white text-xs shadow-lg z-50 whitespace-nowrap pointer-events-none"
                      >
                        {item.label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
          {/* Hamburger Button (show only when expanded on mobile) */}
          <div className="flex items-center">
            <AnimatePresence>
              {hoveredNav && (
                <motion.button
                  className="md:hidden text-3xl text-orange-500 focus:outline-none ml-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? '✕' : '☰'}
                </motion.button>
              )}
            </AnimatePresence>
          </div>
          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full flex flex-col gap-2 px-8 pb-4 pt-2 bg-white/95 backdrop-blur-lg rounded-b-2xl text-base font-medium shadow-xl border-x border-b border-gray-200/80 z-50"
              >
                {navItems.map(item => (
                  <li key={item.id} className="relative">
                    <ScrollLink
                      to={item.id}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      spy={true}
                      onSetActive={() => setActiveSection(item.id)}
                      className={`block px-2 py-2 rounded transition-colors duration-200 ${activeSection === item.id ? 'text-orange-600 bg-orange-50 font-semibold' : 'text-gray-700 hover:text-orange-400'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-2 align-middle">{item.icon}</span>
                      {item.label}
                    </ScrollLink>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.header>
      {/* Contact Modal */}
      <ContactModal />
    </>
  );
}

export default Header;
