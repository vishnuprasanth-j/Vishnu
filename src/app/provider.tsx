'use-client';
import '../styles/globals.css';
import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export function Providers({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>{children}</NextThemesProvider>;
}
