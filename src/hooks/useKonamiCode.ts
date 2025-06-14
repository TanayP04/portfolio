import { useState, useEffect } from 'react';

// Konami Code sequence: up, up, down, down, left, right, left, right, b, a
const konamiCode = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'KeyB', 'KeyA'
];

export const useKonamiCode = (): boolean => {
  const [keysPressed, setKeysPressed] = useState<string[]>([]);
  const [konamiActivated, setKonamiActivated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Get the key code
      const key = e.code;
      
      // Add the key to the sequence
      const updatedKeys = [...keysPressed, key];
      
      // Only keep the last N keys where N is the length of the Konami code
      if (updatedKeys.length > konamiCode.length) {
        updatedKeys.shift();
      }
      
      setKeysPressed(updatedKeys);
      
      // Check if the Konami code has been entered
      const isKonamiCode = updatedKeys.join(',') === konamiCode.join(',');
      
      if (isKonamiCode && !konamiActivated) {
        setKonamiActivated(true);
        // Play a sound or show an animation
        console.log('Konami Code activated!');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keysPressed, konamiActivated]);

  return konamiActivated;
};