import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import './App.css';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <ThemeSwitcher />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
