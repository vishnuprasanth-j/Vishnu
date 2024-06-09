import Image from 'next/image';

import { Avatar } from '@/components/avatar';
import { MyEmail } from '@/components/my-email';

const AboutMe = () => {
  return (
    <div>
      <p>
        Hello, I am Vishnu Prasanth J. I found my passion for coding during my
        college years, and now I'm a dedicated front-end developer. When I'm not
        coding, I enjoy exploring new technologies and working on innovative
        projects.
      </p>

      <p>
        Recently, three things that have brought me joy are engaging in deep
        conversations, swimming in the pool after sunset, and making miso soup.
      </p>

      <div className='flex items-center gap-4 md:my-10'>
        {/* <div style={{ position: 'relative', width: '100px', height: '200px' }}>
          <img
            src='/images/clip.png'
            alt='Clip'
            style={{
              width: '100px',
              height: '100px',
              position: 'absolute',
              top: '-87px',
              zIndex: '10',
            }}
          />
          <div style={{ width: '100px', height: '100px' }}>
            <Avatar />
          </div>
        </div> */}
          <Avatar />
        <p>
          "Han kan ikke blive gammel, for han har aldrig været ung; han kan ikke
          blive ung, for han er allerede blevet gammel; på en måde kan han ikke
          dø, for han har aldrig levet; på en måde kan han ikke leve, for han er
          allerede død."
          <br />
          "He cannot become old, for he has never been young; he cannot become
          young, for he has already become old; in a way he cannot die, for he
          has never lived; in a way he cannot live, for he is already dead."
        </p>
      </div>

      <h2>Find Me / Contact</h2>

      <p>
        I believe in the value of documenting life and will continue to do so.
        If you enjoy my content, feel free to write me an{' '}
        <MyEmail>email</MyEmail>.
      </p>
    </div>
  );
};

export default AboutMe;
