import React from 'react';
import { Brain, Code, Layers, Terminal, Zap, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI Systems',
      skills: [
        { name: 'Phi-3', icon: Brain },
        { name: 'LLM Integration', icon: Layers },
        { name: 'Local AI', icon: Zap },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', icon: Code },
        { name: 'React', icon: Layers },
        { name: 'Three.js', icon: Terminal },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node js', icon: Terminal },
        { name: 'FastAPI', icon: Zap },
        { name: 'MongoDB', icon: Database },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 border-b border-[#262626]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Skills</h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl">Technologies and frameworks I work with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-xl font-semibold text-[#9ca3af] mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skillIdx}
                      className="flex items-center gap-4 p-4 border border-[#262626] bg-[#111111] rounded-lg hover:border-[#3a3a3a] transition-all duration-300"
                    >
                      <div className="p-2 border border-[#262626] bg-[#0a0a0a] rounded-lg">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
