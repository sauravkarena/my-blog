// components/ThemeWrapper.tsx
"use client";

import useTheme from '@/components/ui/theme';
import React from 'react';

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useTheme(); // Use the toggle function

  // Optional: A button to toggle the theme for testing
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <button onClick={toggleTheme} className="fixed top-4 right-4 p-2 bg-gray-200 rounded dark:bg-gray-800">
        Toggle Theme
      </button>
      {children}
    </div>
  );
};

export default ThemeWrapper;
