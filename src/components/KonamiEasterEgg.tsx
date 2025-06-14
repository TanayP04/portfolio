import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKonamiCode } from '../hooks/useKonamiCode';

const KonamiEasterEgg: React.FC = () => {
  const konamiActivated = useKonamiCode();

  useEffect(() => {
    if (konamiActivated) {
      // You can add additional effects here, like playing a sound
    }
  }, [konamiActivated]);

  return (
    <AnimatePresence>
      {konamiActivated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm"
          onClick={() => window.location.reload()}
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              transition: { type: "spring", stiffness: 300, damping: 15 }
            }}
            className="relative p-8 max-w-lg text-center"
          >
            <div className="glitch-effect">
              <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-neon-blue mb-4">
                HACKER MODE
              </h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-neon-green text-xl mb-6 font-mono"
            >
              You've unlocked the secret code!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-gray-300 mb-8"
            >
              <p>In a parallel universe, Tanay is not just a developer...</p>
              <p className="mt-2">He's a coding superhero who can debug any problem and solve any algorithm while blindfolded!</p>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-neon-green text-black font-bold rounded-md shadow-neon-green hover:bg-neon-green/90 transition-colors duration-300"
            >
              Continue the mission
            </motion.button>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-4 text-gray-500 text-sm"
            >
              Click anywhere to return
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KonamiEasterEgg;