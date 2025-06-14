import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'cyber' | 'hacker';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('cyber');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'cyber' ? 'hacker' : 'cyber'));
  };

  useEffect(() => {
    // Apply theme classes to body
    document.body.classList.remove('theme-cyber', 'theme-hacker');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};