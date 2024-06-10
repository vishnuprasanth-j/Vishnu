// RootLayout component
import clsx from 'clsx';
import { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import React from 'react';

import '@/styles/globals.css';
import '@/styles/colors.css';

import { siteConfig } from '@/constant/config';

import { Providers } from './provider';

const roboto = Raleway({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/images/avatar.jpg',
    shortcut: '/images/avatar.jpg',
    apple: '/images/avatar.jpg',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/avatar.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/avatar.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
     <body className={clsx('bg-bg-color text-fg-color', roboto.className)}>
        <div
          aria-hidden
          className={clsx(
            'pointer-events-none fixed top-0 z-10 h-14 w-full select-none md:h-20',
            'bg-gradient-to-t from-transparent to-bg-color/80',
            'backdrop-blur',
            'gradient-mask-b-0'
          )}
        />
        <Providers>
          <div className='flex h-full flex-col items-center justify-start md:relative md:flex-row md:items-start md:justify-center md:pb-12 md:pt-32'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
