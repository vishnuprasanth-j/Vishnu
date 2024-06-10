'use client';

import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

export function Providers({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </ThemeProvider>
  );
}
