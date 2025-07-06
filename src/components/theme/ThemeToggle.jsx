import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './themeToggle.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-container">
      <button 
        className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        title={`Currently: ${isDark ? 'Dark' : 'Light'} mode - Click to switch`}
      >
        <div className="toggle-track">
          <div className="toggle-thumb">
            {isDark ? (
              <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="5" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle; 