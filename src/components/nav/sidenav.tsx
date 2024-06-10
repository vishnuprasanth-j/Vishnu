import clsx from 'clsx';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { Moon } from '@/components/moon.tsx';
import ThemeToggle from '@/components/ThemeToggle.tsx';

import { NAV_LINKS, SOCIAL_LINKS } from './constants.tsx';
import { Link } from '../link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
export function SideNav() {
  const currentRoute = usePathname();
  const { theme } = useTheme();
  return (
    <nav className='top-32 -ml-32 hidden w-32 md:sticky md:block'>
      <ul className='flex flex-col justify-between'>
        <li className='flex'>
          <NextLink href='/' aria-label='home' className='m-auto'>
            {theme === 'light' ? (
              <Moon />
            ) : (
              <Image
                src='/images/rednoise.gif'
                alt='Example GIF'
                width={56}
                height={56}
                className='rounded-full'
              />
            )}
          </NextLink>
        </li>
        <div className='group mt-4 flex flex-col items-center gap-1'>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
                className={clsx(
                  currentRoute !== '/' &&
                    (currentRoute.startsWith(link.href)
                      ? 'shadow-current drop-shadow'
                      : '[&:not(:hover)]:opacity-50')
                )}
              >
                {link.node}
              </Link>
            </li>
          ))}
        </div>
        <div className='group mt-6 flex flex-col items-center gap-2'>
          {SOCIAL_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target='_blank'
                {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
              >
                {link.node}
              </Link>
            </li>
          ))}
          <li key='mode'>
            <ThemeToggle />
          </li>
        </div>
      </ul>
    </nav>
  );
}
