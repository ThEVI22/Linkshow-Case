import React from 'react';
import { Linkedin, Github, Globe } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

export const SocialLinks: React.FC = () => {
  const links: SocialLink[] = [
    {
      icon: <Globe size={20} strokeWidth={1.5} />,
      url: 'https://thevindu-portfolio-site.vercel.app/',
      label: 'My Portfolio',
    },
    {
      icon: <Linkedin size={20} strokeWidth={1.5} />,
      url: 'https://www.linkedin.com/in/thevindu-dilmith-b39790242',
      label: 'LinkedIn',
    },
    {
      icon: <Github size={20} strokeWidth={1.5} />,
      url: 'https://github.com/ThEVI22',
      label: 'GitHub',
    },
  ];

  return (
    <div className="social-links-container flex-row-center">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn shadow-sm"
          aria-label={link.label}
        >
          {link.icon}
          <span className="social-label">{link.label}</span>
        </a>
      ))}
    </div>
  );
};
