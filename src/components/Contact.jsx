import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const contactLinks = [
    {
      label: 'Email',
      value: 'vivek@example.com',
      href: 'mailto:vivek@example.com',
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/vivekmishra',
      href: 'https://linkedin.com/in/vivekmishra',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'github.com/vivekmishra',
      href: 'https://github.com/vivekmishra',
      icon: Github,
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 border-b border-[#262626]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <p className="text-lg text-[#9ca3af] max-w-2xl mx-auto">
            Open to discussing AI systems, collaborations, or opportunities
          </p>
        </div>

        {/* Contact Links */}
        <div className="space-y-4">
          {contactLinks.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center justify-between p-6 border border-[#262626] bg-[#111111] rounded-lg hover:border-[#3a3a3a] transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 border border-[#262626] bg-[#0a0a0a] rounded-lg">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-[#9ca3af] mb-1">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[#6b7280] group-hover:text-white transition-colors duration-300" />
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            onClick={() => window.location.href = 'mailto:vivek@example.com'}
            className="bg-white text-black hover:bg-[#e5e5e5] px-8 py-6 text-base font-medium transition-colors duration-300"
            size="lg"
          >
            Send Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
