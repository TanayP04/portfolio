import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Terminal, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-cyber-dark relative overflow-hidden border-t border-gray-800">
      <div 
        className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: `radial-gradient(${theme === 'cyber' ? '#00f0ff' : '#00ff41'} 1px, transparent 1px)`,
          backgroundSize: '20px 20px' 
        }}
      />

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#home" 
              className="flex items-center space-x-2 text-xl font-orbitron font-semibold"
            >
              <Terminal 
                className={`${theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'} animate-slow-flicker`} 
              />
              <span className={theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'}>Tanay.dev</span>
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              Building the digital future one line of code at a time.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <button
              onClick={scrollToTop}
              className={`
                p-3 rounded-full mb-4 transition-colors duration-300
                ${theme === 'cyber' ? 'bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20' : 'bg-matrix-green/10 text-matrix-green hover:bg-matrix-green/20'}
              `}
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
            
            <p className="text-gray-500 text-sm font-mono">
              © {new Date().getFullYear()} Tanay Palkandwar. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Easter Egg: Konami Code hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 5 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-600 text-xs font-mono">
            Try ↑ ↑ ↓ ↓ ← → ← → B A for a surprise
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;