import { Github, Mail, Rss, Twitter, Youtube } from 'lucide-react';

import { MyEmail } from '../my-email';

export interface Link {
  node: React.ReactNode;
  href: string;
  ariaLabel?: string;
}

export const NAV_LINKS: Link[] = [
  { node: 'Work', href: '/work' },
  { node: 'Craft', href: '/craft' },
];

export const SOCIAL_LINKS: Link[] = [
  {
    node: <Twitter strokeWidth={1.2} />,
    href: 'https://twitter.com/noworkforsixian',
    ariaLabel: 'My Twitter',
  },
  {
    node: <Github strokeWidth={1.2} />,
    href: 'https://github.com/vishnuprasanth-j',
    ariaLabel: 'GitHub',
  },
  {
    node: (
      <MyEmail>
        <Mail strokeWidth={1.2} />
      </MyEmail>
    ),
    href: '',
    ariaLabel: 'My Email',
  },
  {
    node: <Rss strokeWidth={1.2} />,
    href: '/feed.xml',
    ariaLabel: 'RSS',
  },
];
