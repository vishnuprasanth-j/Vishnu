import Image from 'next/image';
import NextLink from 'next/link';
export const metadata = {
  title: 'Craft',
  description: 'Creative explorations',
};

export default function Craft() {
  const years = ['2022', '2023', '2024'];
  const itemsByYear = {
    '2022': [
      {
        slug: 'points',
        url: 'https://www.points44.vercel.com',
        title: 'Points',
        date: '2022-07-30T00:00:00.000Z',
      },
    ],
    '2023': [
      {
        slug: 'linklist',
        url: 'https://link-list-vishnuprasanthjs-projects.vercel.app/',
        title: 'Link List',
        date: '2023-10-30T00:00:00.000Z',
      },
      {
        slug: 'VEats',
        url: 'https://food-app-frontend-8o9d.onrender.com/',
        title: 'VEats',
        date: '2023-12-30T00:00:00.000Z',
      },
    ],
    '2024': [
      {
        slug: 'matrix',
        url: 'https://www.points44.vercel.com',
        title: 'Matrix Gym',
        date: '2024-03-01T00:00:00.000Z',
      },
    ],
  };
  const title = 'Crafts';

  return (
    <>
      <h1 className='mobile-header'>Crafts</h1>
      {/* <div className='item'>
        <div className='polaroid'>
          <img src='/images/image.png'></img>
          <div className='caption'>I Miss London</div>
        </div>
      </div> */}
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
                    <time
                      dateTime={item.date}
                      className='shrink-0 text-fg-secondary-color transition-colors group-hover:text-fg-secondary-hover-color'
                    >
                      {new Date(item.date).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </NextLink>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
