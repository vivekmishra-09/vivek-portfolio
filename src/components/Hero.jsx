import React from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 border-b border-[#262626]">
      <div className="max-w-5xl mx-auto text-center">
        {/* System Status */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-[#262626] bg-[#111111] rounded-full text-sm text-[#9ca3af]">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          System Online
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          Vivek Mishra
        </h1>

        {/* Title */}
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#9ca3af] mb-6">
          AI Product Engineer
        </div>

        {/* Specialization */}
        <div className="text-base md:text-lg text-[#6b7280] mb-4">
          LLM Systems & Local AI
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto mb-12 leading-relaxed">
          Building AI systems that run locally with full control
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-white text-black hover:bg-[#e5e5e5] px-8 py-6 text-base font-medium transition-colors duration-300"
            size="lg"
          >
            View Projects
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-[#262626] bg-transparent hover:bg-[#1a1a1a] text-white px-8 py-6 text-base font-medium transition-colors duration-300"
            size="lg"
          >
            Contact
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#6b7280]" />
        </div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
