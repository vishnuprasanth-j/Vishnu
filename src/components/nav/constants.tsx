import { File, Github, Instagram, Mail } from 'lucide-react';

import { MyEmail } from '../my-email';

export interface MyLink {
  node: React.ReactNode;
  href: string;
  ariaLabel?: string;
}

export const NAV_LINKS: MyLink[] = [
  { node: 'Work', href: '/work' },
  { node: 'Craft', href: '/craft' },
];

export const SOCIAL_LINKS: MyLink[] = [
  {
    node: <Instagram strokeWidth={1.2} />,
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
    node: <File strokeWidth={1.2} />,
    href: 'https://drive.google.com/file/d/11IcSFXJ6FwrjsMTKeb2GaN7114GTVr6T/view?usp=sharing',
    ariaLabel: 'My Resume',
  },
];
