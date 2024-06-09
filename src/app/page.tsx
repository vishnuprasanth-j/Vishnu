'use client';

import * as React from 'react';
import '@/lib/env';

import AboutMe from '@/components/about-me';
import { Nav } from '@/components/nav/Nav';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className='mb-5 w-full px-6 md:flex md:max-w-xl'>
        <article className='prose prose-zinc m-auto dark:prose-invert prose-h1:mb-5'>
          <h1 className='mobile-header md:static md:my-0 md:block'>
            Vishnu Prasanth J
          </h1>
          <AboutMe />
          <p className='mb-5 text-sm text-fg-secondary-color'>
            2019-PRESENT © Sixian Li
          </p>
        </article>
      </main>
    </>
  );
}
