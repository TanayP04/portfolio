import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useCommandPalette } from '../../context/CommandPaletteContext';
import { Terminal, Zap, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { openPalette } = useCommandPalette();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-cyber-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#home" 
            className="flex items-center space-x-2 text-xl font-orbitron font-semibold"
          >
            <Terminal 
              className={`${theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'} animate-slow-flicker`} 
            />
            <span className={theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'}>Tanay.dev</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-neon-blue transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            
            <button
              onClick={openPalette}
              className="px-3 py-1 border border-white/20 rounded text-sm hover:border-neon-blue hover:text-neon-blue transition-colors duration-300"
            >
              Ctrl+K
            </button>
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                theme === 'cyber' 
                  ? 'bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20' 
                  : 'bg-matrix-green/10 text-matrix-green hover:bg-matrix-green/20'
              }`}
              aria-label="Toggle theme"
            >
              <Zap size={18} />
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-cyber-dark/90 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-neon-blue py-2 transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex space-x-4 pt-2">
                <button
                  onClick={() => {
                    openPalette();
                    setMenuOpen(false);
                  }}
                  className="flex-1 px-3 py-2 border border-white/20 rounded text-sm hover:border-neon-blue hover:text-neon-blue transition-colors duration-300"
                >
                  Command (Ctrl+K)
                </button>
                
                <button
                  onClick={() => {
                    toggleTheme();
                    setMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded transition-colors duration-300 ${
                    theme === 'cyber' 
                      ? 'bg-neon-blue/10 text-neon-blue' 
                      : 'bg-matrix-green/10 text-matrix-green'
                  }`}
                  aria-label="Toggle theme"
                >
                  <Zap size={18} />
                </button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;