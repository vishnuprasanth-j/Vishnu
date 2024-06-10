
'use client'

import { ThemeProvider } from 'next-themes'
import '../styles/globals.css';

export function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider attribute="class" defaultTheme='system' enableSystem>{children}</ThemeProvider>
}