import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCommandPalette } from '../../context/CommandPaletteContext';
import { useTheme } from '../../context/ThemeContext';
import { Search, FileText, Github, Mail, Download, Terminal, ExternalLink } from 'lucide-react';

interface Command {
  id: string;
  icon: React.ReactNode;
  label: string;
  action: () => void;
  keywords: string[];
}

const CommandPalette: React.FC = () => {
  const { isOpen, closePalette } = useCommandPalette();
  const { theme } = useTheme();
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Define available commands
  const commands: Command[] = [
    {
      id: 'resume',
      icon: <FileText size={16} />,
      label: 'View Resume',
      action: () => window.open('https://drive.google.com/file/d/1fnzYHuLijU3ZpWZKu1eR-nG7oD4_S9kR/view?usp=sharing'),
      keywords: ['cv', 'resume', 'download', 'pdf'],
    },
    {
      id: 'github',
      icon: <Github size={16} />,
      label: 'GitHub Profile',
      action: () => window.open('https://github.com/TanayP04', '_blank'),
      keywords: ['code', 'projects', 'git', 'repository'],
    },
    {
      id: 'leetcode',
      icon: <Terminal size={16} />,
      label: 'LeetCode Profile',
      action: () => window.open('https://leetcode.com/u/Tanay_Palkandwar/', '_blank'),
      keywords: ['coding', 'problems', 'algorithm', 'dsa'],
    },
    {
      id: 'linkedin',
      icon: <ExternalLink size={16} />,
      label: 'LinkedIn Profile',
      action: () => window.open('https://www.linkedin.com/in/tanay-palkandwar-334a26355/', '_blank'),
      keywords: ['social', 'network', 'professional', 'job'],
    },
    {
      id: 'contact',
      icon: <Mail size={16} />,
      label: 'Contact Me',
      action: () => {
        closePalette();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
      keywords: ['email', 'message', 'reach', 'connect'],
    },
    {
      id: 'download-cv',
      icon: <Download size={16} />,
      label: 'Download CV',
      action: () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Tanay_Palkandwar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      keywords: ['cv', 'resume', 'download', 'pdf'],
    },
  ];

  // Filter commands based on search
  const filteredCommands = commands.filter(command => 
    command.label.toLowerCase().includes(search.toLowerCase()) ||
    command.keywords.some(keyword => keyword.toLowerCase().includes(search.toLowerCase()))
  );

  // Focus input when palette opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setSearch('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-cyber-black/70 backdrop-blur-sm z-50"
            onClick={closePalette}
          />
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-md z-50"
            onClick={e => e.stopPropagation()}
          >
            <div className={`mx-4 rounded-lg overflow-hidden ${theme === 'cyber' ? 'border border-neon-blue shadow-neon-blue' : 'border border-matrix-green shadow-neon-green'}`}>
              <div className="bg-cyber-dark p-3 flex items-center gap-3">
                <Search 
                  size={16} 
                  className={theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'} 
                />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400"
                  autoComplete="off"
                />
                <div className="text-xs text-gray-400 px-2 py-1 border border-gray-700 rounded">ESC</div>
              </div>
              
              <div className="bg-cyber-black max-h-80 overflow-y-auto">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map(command => (
                    <button
                      key={command.id}
                      className="w-full px-3 py-3 text-left flex items-center gap-3 hover:bg-cyber-gray transition-colors duration-150"
                      onClick={() => {
                        command.action();
                        closePalette();
                      }}
                    >
                      <span className={theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'}>
                        {command.icon}
                      </span>
                      <span className="text-white">{command.label}</span>
                    </button>
                  ))
                ) : (
                  <div className="px-3 py-8 text-center text-gray-400">
                    No commands found for "{search}"
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;