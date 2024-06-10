import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="focus:outline-none">
      {theme === 'dark' ? (
        <Icon icon="mynaui:sun" width="24" height="24" className="rotate-180 transition-transform duration-500" />
      ) : (
        <Icon icon="mynaui:moon" width="24" height="24" className="transition-transform duration-500" />
      )}
    </button>
  );
};

export default ThemeToggle;

