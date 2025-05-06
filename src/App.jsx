import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main className="pt-20"> {/* Add top padding to avoid overlap with fixed header */}
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
