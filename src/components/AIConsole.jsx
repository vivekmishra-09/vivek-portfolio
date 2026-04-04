import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const AIConsole = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const lines = [
      '> Initializing system...',
      '> Loading AI modules...',
      '> Developer: Vivek Mishra',
      '> Specialization: AI Systems, Local LLMs, Voice Interfaces',
      '> Status: Ready',
    ];
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    const fullText = lines.slice(0, currentLineIndex + 1).join('\n');

    let charIndex = displayedText.split('\n')[currentLineIndex]?.length || 0;

    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        const newText = lines
          .slice(0, currentLineIndex)
          .concat(currentLine.slice(0, charIndex + 1))
          .join('\n');
        setDisplayedText(newText);
      }, 50);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [displayedText, currentLineIndex]);

  return (
    <section className="py-20 md:py-32 px-6 border-b border-[#262626]">
      <div className="max-w-4xl mx-auto">
        <div className="border border-[#262626] bg-[#111111] rounded-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#262626] bg-[#0a0a0a]">
            <Terminal className="w-4 h-4 text-[#9ca3af]" />
            <span className="text-sm text-[#9ca3af] font-medium">system.ai</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base">
            <pre className="text-white whitespace-pre-wrap leading-relaxed">
              {displayedText}
              <span className="inline-block w-2 h-5 bg-white ml-1 animate-pulse" />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsole;
