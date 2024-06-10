'use-client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import * as React from 'react';

import '../styles/globals.css';

export function Providers({
  children,
  attribute,
  defaultTheme,
  enableSystem,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </NextThemesProvider>
  );
}
