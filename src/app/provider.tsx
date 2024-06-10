'use client';
import { ThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types'
import '../styles/globals.css';

export const Providers: React.FC<{ children:ThemeProviderProps }> = ({ children }) => {
  return (
    <>
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </ThemeProvider>
    </>
    
  );
};
