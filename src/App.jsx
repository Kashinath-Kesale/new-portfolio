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

  // Dark mode state (defaults to true for sleek dark theme)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return true; // Default to dark mode on first visit
    }
    return true;
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
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-indigo-50/25 to-sky-50/35 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors duration-500">
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
