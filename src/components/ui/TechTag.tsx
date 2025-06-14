import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface TechTagProps {
  name: string;
  color?: 'blue' | 'purple' | 'green' | 'pink';
}

const TechTag: React.FC<TechTagProps> = ({ name, color = 'blue' }) => {
  const { theme } = useTheme();
  
  // Color mappings
  const colorClasses = {
    blue: 'border-neon-blue text-neon-blue',
    purple: 'border-neon-purple text-neon-purple',
    green: 'border-neon-green text-neon-green',
    pink: 'border-neon-pink text-neon-pink',
  };

  // Apply theme-specific colors
  const themeColor = theme === 'hacker' ? 'green' : color;
  
  // Shadow effect for the tag
  const shadowClass = `shadow-${themeColor === 'blue' ? 'neon-blue' : 
                        themeColor === 'purple' ? 'neon-purple' : 
                        themeColor === 'green' ? 'neon-green' : 'neon-pink'}`;

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className={`
        inline-block px-3 py-1 rounded-md text-xs font-mono
        border bg-cyber-dark/50 backdrop-blur-sm
        ${colorClasses[themeColor]}
        ${shadowClass}
        m-1
      `}
    >
      {name}
    </motion.span>
  );
};

export default TechTag;