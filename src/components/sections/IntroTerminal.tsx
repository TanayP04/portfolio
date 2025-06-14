import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Terminal, Mail } from 'lucide-react';
import TerminalText from '../ui/TerminalText';
import NeonButton from '../ui/NeonButton';
import { useTheme } from '../../context/ThemeContext';
import { Particles } from './Particles';

const IntroTerminal: React.FC = () => {
  const { theme } = useTheme();
  const [showButtons, setShowButtons] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleTypingComplete = () => {
    setShowButtons(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles background */}
      <Particles />
      
      {/* Content container */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center p-8"
            >
              <div className="inline-block w-12 h-12 border-t-2 border-neon-blue rounded-full animate-spin"></div>
              <p className="mt-4 text-neon-blue font-mono">Initializing terminal...</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${theme === 'cyber' ? 'border-neon-blue shadow-neon-blue' : 'border-matrix-green shadow-neon-green'} border rounded-lg overflow-hidden bg-cyber-black/70 backdrop-blur-md p-6 md:p-8`}
            >
              <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-gray-400 text-sm font-mono">tanay@terminal:~</span>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex">
                  <span className={`${theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'} mr-2 font-mono`}>$</span>
                  <TerminalText 
                    text="whoami" 
                    className="text-white" 
                    speed={100} 
                  />
                </div>
                
                <div className="pl-4">
                  <TerminalText 
                    text={[
                      "Hello, I'm Tanay Palkandwar",
                      "Software Developer | Web Alchemist"
                    ]} 
                    className={`text-2xl md:text-4xl font-orbitron font-bold ${theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'}`}
                    delay={1000}
                    speed={60}
                    onComplete={handleTypingComplete}
                  />
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 1 }}
                    className="mt-4 text-gray-300 max-w-2xl"
                  >
                    Building the digital future with clean code and innovative solutions.
                    Full-stack developer specializing in MERN stack with a passion for solving 
                    complex problems and creating user-centered experiences.
                  </motion.p>
                </div>
              </div>
              
              {showButtons && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-wrap gap-4 mt-6"
                >
                  <NeonButton 
                    href="https://drive.google.com/file/d/1fnzYHuLijU3ZpWZKu1eR-nG7oD4_S9kR/view?usp=sharing" 
                    target="_blank"
                    icon={<FileText size={16} />}
                    color="blue"
                  >
                    Resume
                  </NeonButton>
                  
                  <NeonButton 
                    href="https://github.com/TanayP04" 
                    target="_blank"
                    icon={<Github size={16} />}
                    color="purple"
                  >
                    GitHub
                  </NeonButton>
                  
                  <NeonButton 
                    href="https://leetcode.com/u/Tanay_Palkandwar/" 
                    target="_blank"
                    icon={<Terminal size={16} />}
                    color="green"
                  >
                    LeetCode
                  </NeonButton>
                  
                  <NeonButton 
                    href="#contact"
                    icon={<Mail size={16} />}
                    color="pink"
                  >
                    Contact
                  </NeonButton>
                </motion.div>
              )}
              
              {/* Terminal prompt blinking cursor */}
              <div className="flex mt-8">
                <span className={`${theme === 'cyber' ? 'text-neon-blue' : 'text-matrix-green'} mr-2 font-mono`}>$</span>
                <span className="h-5 w-2 bg-white animate-terminal"></span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroTerminal;