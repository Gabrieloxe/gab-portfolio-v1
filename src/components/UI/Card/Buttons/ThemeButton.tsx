'use client';

import React, { useState, useEffect } from 'react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { useTheme } from 'next-themes';

export const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div>
      <button
        type='button'
        aria-label='Toggle Light Mode'
        onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
        className='bg-slate-100 p-2 rounded-xl transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700'
      >
        {currentTheme === 'dark' ? (
          <RiSunLine size={25} color='white' />
        ) : (
          <RiMoonFill size={25} />
        )}
      </button>
    </div>
  );
};
