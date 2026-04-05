import React from 'react';

const About = () => {
  return (
    <section className="py-20 md:py-32 px-6 border-b border-[#262626]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About</h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-lg text-[#9ca3af] leading-relaxed">
          <p>
            I'm an <span className="text-white font-medium">AI Product Engineer</span> focused on
            building real, production-ready AI systems—not just experiments.
          </p>

          <p>
            My work centers on <span className="text-white font-medium">local LLM systems</span> that
            give users complete control over their data and AI operations. No cloud dependencies, no
            privacy compromises.
          </p>

          <p>
            From voice-controlled AI assistants to advanced AI systems,I create tools that solve actual
            problems using technologies like{' '}
            <span className="text-white font-medium">Phi-3, Three.js, and modern Python frameworks</span>.
          </p>

          <p className="text-white font-medium">
            Building the future of AI, one local system at a time.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="border border-[#262626] bg-[#111111] rounded-lg p-6 text-center">
            <div className="text-3xl font-bold mb-2">4+</div>
            <div className="text-sm text-[#9ca3af]">Projects</div>
          </div>
          <div className="border border-[#262626] bg-[#111111] rounded-lg p-6 text-center">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm text-[#9ca3af]">Local AI</div>
          </div>
          <div className="border border-[#262626] bg-[#111111] rounded-lg p-6 text-center">
            <div className="text-3xl font-bold mb-2">0</div>
            <div className="text-sm text-[#9ca3af]">Cloud Deps</div>
          </div>
          <div className="border border-[#262626] bg-[#111111] rounded-lg p-6 text-center">
            <div className="text-3xl font-bold mb-2">∞</div>
            <div className="text-sm text-[#9ca3af]">Privacy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
