import React from 'react';
import { ArrowRight, User, Cpu, Radio, CheckCircle } from 'lucide-react';

const SystemArchitecture = () => {
  const flowSteps = [
    { label: 'User', icon: User },
    { label: 'Interface', icon: Radio },
    { label: 'LLM', icon: Cpu },
    { label: 'Response', icon: CheckCircle },
  ];

  return (
    <section className="py-20 md:py-32 px-6 border-b border-[#262626]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">System Architecture</h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">
            How AI systems process information locally
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {flowSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <React.Fragment key={index}>
                {/* Step Node */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 border-2 border-[#262626] bg-[#111111] rounded-lg flex items-center justify-center hover:border-[#3a3a3a] transition-all duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-[#9ca3af]">{step.label}</span>
                </div>

                {/* Arrow */}
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:block">
                    <ArrowRight className="w-6 h-6 text-[#6b7280]" />
                  </div>
                )}
                {index < flowSteps.length - 1 && (
                  <div className="md:hidden rotate-90">
                    <ArrowRight className="w-6 h-6 text-[#6b7280]" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="border border-[#262626] bg-[#111111] rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4">Key Principles</h3>
            <ul className="space-y-3 text-[#9ca3af]">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                <span>Local processing ensures data privacy and control</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                <span>No cloud dependency for sensitive operations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                <span>Optimized for performance and reliability</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
