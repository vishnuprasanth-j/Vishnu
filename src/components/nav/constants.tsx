import { Github, Mail,Instagram,File } from 'lucide-react';
import { MyEmail } from '../my-email';
import { Icon } from '@iconify/react';


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
    node: <Instagram  strokeWidth={1.2}/>,
    href: 'https://instagram.com/vishzznu',
    ariaLabel: 'My instagram',
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
    node: (
        <File strokeWidth={1.2} />
    ),
    href: 'https://drive.google.com/file/d/1JIzn2TBkZHdRJQmdEBONiBANAP_9YSdk/view',
    ariaLabel: 'My Resume',
  }
];
