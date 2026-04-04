import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import AIConsole from '../components/AIConsole';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SystemArchitecture from '../components/SystemArchitecture';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Hero />
      <div id="console" data-section className={`transition-opacity duration-700 ${isVisible.console ? 'opacity-100' : 'opacity-0'}`}>
        <AIConsole />
      </div>
      <div id="projects" data-section className={`transition-opacity duration-700 ${isVisible.projects ? 'opacity-100' : 'opacity-0'}`}>
        <Projects />
      </div>
      <div id="skills" data-section className={`transition-opacity duration-700 ${isVisible.skills ? 'opacity-100' : 'opacity-0'}`}>
        <Skills />
      </div>
      <div id="architecture" data-section className={`transition-opacity duration-700 ${isVisible.architecture ? 'opacity-100' : 'opacity-0'}`}>
        <SystemArchitecture />
      </div>
      <div id="about" data-section className={`transition-opacity duration-700 ${isVisible.about ? 'opacity-100' : 'opacity-0'}`}>
        <About />
      </div>
      <div id="contact" data-section className={`transition-opacity duration-700 ${isVisible.contact ? 'opacity-100' : 'opacity-0'}`}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
