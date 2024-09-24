import Image from 'next/image';
import React from 'react';

export function Avatar() {
  return (
    <>
      <Image
        src='/images/Me.jpg'
        alt='Picture of the author'
        width={200}
        height={200}
        className='m-0  '
      />
    </>
  );
}
