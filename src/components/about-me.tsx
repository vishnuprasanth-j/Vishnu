import { Rocket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Avatar } from '@/components/avatar';

const AboutMe = () => {
  return (
    <div>
      <p>
        Hello, I am Vishnu Prasanth J. I found my passion for coding during my
        school years, which led me to pursue a degree in Computer Science and
        Engineering. I graduated from Velalar College of Engineering and
        Technology in 2023 with a CGPA of 8.0.
      </p>

      <p>
        I currently work as a Software Engineer at Kaar Infotech. Previously, I
        did an internship at Thoughtle.
      </p>

      <div className='flex items-center gap-4 md:my-10'>
        <Avatar />
        <p>
          「Il faut un peu de pluie pour avoir un peu d'arc-en-ciel」
          <br />
          "You need a little bit of rain to have a little bit of rainbow."
          <br />
          <Link
            href='https://www.youtube.com/watch?v=nDutfsInUME'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='flex items-center'>
              ~ Félix Lengyel{' '}
              <Image
                src='/images/xqcL.png'
                alt='Picture of the author'
                width={30}
                height={30}
                className='m-1 grayscale'
              />
            </span>
          </Link>
        </p>
      </div>

      {/* <h2>Find Me / Contact</h2>

      <p>
        I believe in the value of documenting life and will continue to do so.
        If you enjoy my content, feel free to write me an{' '}
        <MyEmail>email</MyEmail>.
      </p> */}

      <h2>Miscellaneous</h2>

      <ul className='list-none'>
        <li className='flex items-center'>
          <Rocket strokeWidth={1.2} className='mr-2 shrink-0' />
          <span>
            This personal website is built with Next.js, Tailwind CSS, and
            deployed on Vercel.
          </span>
        </li>
        <li className='flex items-center mt-2'>
          <Rocket strokeWidth={1.2} className='mr-2 shrink-0' />
          <span>
            Recently, two things that have brought me joy are engaging in deep
            conversations and lifting weights.
          </span>
        </li>
        <li className='flex items-center mt-2'>
          <Rocket strokeWidth={1.2} className='mr-2 shrink-0' />
          <span>Inspirations for this website:</span>
          <ul className='ml-4 list-disc'>
            <li>
              <Link
                href='https://paco.me/'
                target='_blank'
                rel='noopener noreferrer'
              >
                paco.me
              </Link>
            </li>
            <li>
              <Link
                href='https://leerob.io/'
                target='_blank'
                rel='noopener noreferrer'
              >
                leerob.io
              </Link>
            </li>
            <li>
              <Link
                href='https://dailyminimal.tumblr.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                dailyminimal.tumblr.com
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
