'use client';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider attribute='class' >
      {children}
    </ThemeProvider>
  );
};
