import React from 'react';
import { Card } from './ui/card';
import { ExternalLink, Cpu, Mic, FileText, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ΔSYS',
      description: 'Advanced local AI system with full control and privacy. Built for running LLMs locally without cloud dependencies.',
      tech: ['Phi-3', 'JavaScript', 'Local LLM', 'System Integration'],
      featured: true,
      icon: Cpu,
    },
    {
      id: 2,
      title: 'Jarvis',
      description: 'AI-powered voice assistant with system control capabilities. Natural language processing for seamless interaction.',
      tech: ['Voice Recognition', 'NLP', 'System Control', 'JavaScript'],
      featured: false,
      icon: Mic,
    },
    {
      id: 4,
      title: '3D Interactive World',
      description: 'Immersive 3D environment built with Three.js. Interactive visualization and real-time rendering.',
      tech: ['Three.js', 'WebGL', 'React', 'JavaScript'],
      featured: false,
      icon: Globe,
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 border-b border-[#262626]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl">Real AI systems built for production, not just demos</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={project.id}
                className={`bg-[#111111] border-[#262626] hover:border-[#3a3a3a] transition-all duration-300 hover:scale-[1.02] ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="p-6 md:p-8">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-[#262626] bg-[#0a0a0a] rounded-lg">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      {project.featured && (
                        <span className="px-3 py-1 text-xs border border-[#262626] bg-[#0a0a0a] rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#6b7280] hover:text-white transition-colors duration-300 cursor-pointer" />
                  </div>

                  {/* Description */}
                  <p className="text-[#9ca3af] mb-6 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm border border-[#262626] bg-[#0a0a0a] rounded-md text-[#9ca3af]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
