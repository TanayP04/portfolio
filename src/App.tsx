import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CommandPaletteProvider } from './context/CommandPaletteContext';
import Header from './components/layout/Header';
import CommandPalette from './components/layout/CommandPalette';
import IntroTerminal from './components/sections/IntroTerminal';
import CoreMemory from './components/sections/CoreMemory';
import ProjectLab from './components/sections/ProjectLab';
import SkillMatrix from './components/sections/SkillMatrix';
import ChronoMap from './components/sections/ChronoMap';
import SideQuests from './components/sections/SideQuests';
import ContactTerminal from './components/sections/ContactTerminal';
import Footer from './components/sections/Footer';
import KonamiEasterEgg from './components/KonamiEasterEgg';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <CommandPaletteProvider>
        {loading ? (
          <div className="min-h-screen bg-cyber-black flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-t-2 border-neon-blue rounded-full animate-spin mb-4"></div>
            <p className="text-neon-blue font-mono text-center">
              Initializing Portfolio<br />
              <span className="text-sm text-gray-500">Please wait...</span>
            </p>
          </div>
        ) : (
          <>
            <Header />
            <CommandPalette />
            <main>
              <IntroTerminal />
              <CoreMemory />
              <ProjectLab />
              <SkillMatrix />
              <ChronoMap />
              <SideQuests />
              <ContactTerminal />
            </main>
            <Footer />
            <KonamiEasterEgg />
          </>
        )}
      </CommandPaletteProvider>
    </ThemeProvider>
  );
}

export default App;