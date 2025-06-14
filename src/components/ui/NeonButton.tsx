import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string;
  color?: 'blue' | 'purple' | 'green' | 'pink';
  variant?: 'filled' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  glitchEffect?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  href,
  target,
  className = '',
  color = 'blue',
  variant = 'outline',
  size = 'md',
  icon,
  glitchEffect = false,
}) => {
  const { theme } = useTheme();
  
  // Color mappings
  const colorClasses = {
    blue: {
      outline: 'border-neon-blue text-neon-blue hover:bg-neon-blue/10',
      filled: 'bg-neon-blue text-cyber-black hover:bg-neon-blue/90',
    },
    purple: {
      outline: 'border-neon-purple text-neon-purple hover:bg-neon-purple/10',
      filled: 'bg-neon-purple text-cyber-black hover:bg-neon-purple/90',
    },
    green: {
      outline: 'border-neon-green text-neon-green hover:bg-neon-green/10',
      filled: 'bg-neon-green text-cyber-black hover:bg-neon-green/90',
    },
    pink: {
      outline: 'border-neon-pink text-neon-pink hover:bg-neon-pink/10',
      filled: 'bg-neon-pink text-cyber-black hover:bg-neon-pink/90',
    },
  };

  // Size mappings
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  // Apply theme-specific colors
  const themeColor = theme === 'hacker' && color === 'blue' ? 'green' : color;
  
  // Shadow effect for the button
  const shadowClass = `shadow-${themeColor === 'blue' ? 'neon-blue' : 
                        themeColor === 'purple' ? 'neon-purple' : 
                        themeColor === 'green' ? 'neon-green' : 'neon-pink'}`;

  const buttonClasses = `
    ${colorClasses[themeColor][variant]}
    ${sizeClasses[size]}
    ${shadowClass}
    ${glitchEffect ? 'glitch-effect' : ''}
    font-orbitron border rounded-md transition-all duration-300 
    flex items-center justify-center gap-2
    ${className}
  `;

  const buttonContent = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  );

  // Button animation
  const buttonAnimation = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        className={buttonClasses}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={buttonAnimation}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonAnimation}
    >
      {buttonContent}
    </motion.button>
  );
};

export default NeonButton;