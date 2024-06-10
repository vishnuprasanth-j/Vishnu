
'use client';
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </ThemeProvider>
  );
}



