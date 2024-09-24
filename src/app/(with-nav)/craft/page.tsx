import NextLink from 'next/link';
import { FC } from 'react';

export const metadata = {
  title: 'Craft',
  description: 'Creative explorations',
};

interface Item {
  slug: string;
  url: string;
  title: string;
  date: string;
}

interface ItemsByYear {
  [year: string]: Item[];
}

const Craft: FC = () => {
  const years = ['2024', '2023', '2022'];
  const itemsByYear: ItemsByYear = {
    '2022': [
      {
        slug: 'points',
        url: 'https://www.points44.vercel.com',
        title: 'Points',
        date: '30 JUL',
      },
    ],
    '2023': [
      {
        slug: 'linklist',
        url: 'https://link-list-vishnuprasanthjs-projects.vercel.app/',
        title: 'Link List',
        date: '10 OCT',
      },
      {
        slug: 'VEats',
        url: 'https://food-app-frontend-8o9d.onrender.com/',
        title: 'VEats',
        date: '20 DEC',
      },
    ],
    '2024': [
      {
        slug: 'matrix',
        url: 'https://www.points44.vercel.com',
        title: 'Matrix Gym',
        date: '1 APR',
      },
      {
        slug: 'fontscout',
        url: 'https://github.com/vishnuprasanth-j/FontScout',
        title: 'FontScout',
        date: '21 AUG',
      },
    ],
  };
  const title = 'Crafts';

  return (
    <>
      <h1 className='mobile-header'>Crafts</h1>
      <div className='flex flex-col gap-3'>
        {years.map((year) => (
          <section key={year} className='border-b border-b-zinc-200 pb-4'>
            <h2 className='mb-3 text-3xl'>{year}</h2>

            <div className='flex flex-col gap-2'>
              {itemsByYear[year].map((item) => (
                <NextLink
                  key={item.slug}
                  href={item.url ?? `/${title.toLowerCase()}/${item.slug}`}
                  aria-label={item.title}
                >
                  <div className='group flex flex-row justify-between gap-2'>
                    <h3 className='transition-colors group-hover:text-fg-hover-color'>
                      {item.title}
                    </h3>
                    <p className='shrink-0 text-fg-secondary-color transition-colors group-hover:text-fg-secondary-hover-color'>
                      {item.date}
                    </p>
                  </div>
                </NextLink>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Craft;
