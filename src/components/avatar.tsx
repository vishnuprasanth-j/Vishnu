import Image from 'next/image';
import React from 'react';

export function Avatar() {
  return (
    <Image
      src='/images/MyAvatar.jpeg'
      alt='Picture of the author'
      width={120}
      height={120}
      className='m-0  grayscale'
    />
  );
}
