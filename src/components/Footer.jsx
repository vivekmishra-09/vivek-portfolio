import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo/Name */}
          <div className="flex items-center gap-3">
            <div className="p-2 border border-[#262626] bg-[#111111] rounded-lg">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="text-xl font-semibold">Vivek Mishra</span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-4 py-2 border border-[#262626] bg-[#111111] rounded-full text-sm text-[#9ca3af]">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Building AI Systems
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#262626] mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#6b7280]">
          <div>&copy; {currentYear} Vivek Mishra. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>AI Product Engineer</span>
            <span>•</span>
            <span>Local LLM Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
