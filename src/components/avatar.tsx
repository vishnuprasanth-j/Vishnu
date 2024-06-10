import Image from 'next/image';
import React from 'react';

export function Avatar() {
  return (
    <>
      <Image
        src='/images/MyAvatar.jpeg'
        alt='Picture of the author'
        width={100}
        height={100}
        className='m-0 grayscale '
      />
    </>
  );
}
