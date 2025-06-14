import React, { useCallback } from 'react';
import TSParticles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useTheme } from '../../context/ThemeContext';

export const Particles: React.FC = () => {
  const { theme } = useTheme();
  
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <TSParticles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: theme === 'cyber' ? '#00f0ff' : '#00ff41',
          },
          links: {
            color: theme === 'cyber' ? '#00f0ff' : '#00ff41',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};