import React from 'react';

const ToggleTheme = ({ darkMode, setDarkMode }) => {
  return (
    <button 
      className="theme-toggle" 
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleTheme;
