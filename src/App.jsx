import React, { useState } from 'react';
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

  // Handler for header navigation
  const handleNav = (section) => setVisibleSection(section);

  return (
    <>
      <Header onNavigate={handleNav} />
      <main className="pt-10">
        {visibleSection === 'home' && <Hero />}
        {visibleSection === 'skills' && <Skills />}
        {visibleSection === 'education' && <Education />}
        {visibleSection === 'projects' && <Projects />}
        {visibleSection === 'contact' && <Contact />}
      </main>
    </>
  );
}

export default App;
