import React from 'react';
import Typewriter from 'typewriter-effect';

interface TerminalTextProps {
  text: string | string[];
  className?: string;
  cursor?: boolean;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
}

const TerminalText: React.FC<TerminalTextProps> = ({ 
  text, 
  className = '', 
  cursor = true,
  delay = 0,
  speed = 50,
  onComplete 
}) => {
  return (
    <div className={`font-mono ${className}`}>
      <Typewriter
        options={{
          strings: Array.isArray(text) ? text : [text],
          autoStart: true,
          loop: false,
          delay: speed,
          cursor: cursor ? '|' : '',
          wrapperClassName: 'terminal-text-wrapper',
          cursorClassName: 'terminal-text-cursor text-neon-blue',
        }}
        onInit={(typewriter) => {
          if (delay > 0) {
            typewriter.pauseFor(delay);
          }
          
          if (onComplete) {
            typewriter.callFunction(() => {
              onComplete();
            });
          }
        }}
      />
    </div>
  );
};

export default TerminalText;