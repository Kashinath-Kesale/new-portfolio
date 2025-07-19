import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Track which section is visible
  const [visibleSection, setVisibleSection] = useState('home');

  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      return stored === 'dark'; // default to false (light mode) if nothing stored
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Handler for header navigation
  const handleNav = (section) => setVisibleSection(section);

  // Handler for dark mode toggle
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header onNavigate={handleNav} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-0">
        {visibleSection === 'home' && <Hero />}
        {visibleSection === 'skills' && <Skills />}
        {visibleSection === 'education' && <Education />}
        {visibleSection === 'projects' && <Projects />}
        {visibleSection === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
