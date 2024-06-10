import { Icon } from '@iconify/react';
import { Briefcase } from 'lucide-react';
import React from 'react';

const experiences = [
  {
    company: 'Kaar Infotech',
    position: 'Software Engineer',
    duration: 'June 2023 - Present',
    details: [
      'Developed, enhanced, and maintained a website utilizing ASP.NET Core',
      'Utilized Entity Framework Core ORM to handle database operations against a MS SQL Server Database and efficiently manage backend APIs',
      'Followed Agile methodology with daily standup meetings',
      // 'Technologies utilized: ASP.NET Core, Entity Framework, jQuery, JavaScript, Azure DevOps, HTML/CSS, MS SQL Server, C#',
    ],
    stack: [
      'teenyicons:javascript-solid',
      'tabler:brand-mysql',
      'mdi:dot-net',
      'mdi:jquery',
      'teenyicons:c-sharp-solid',
      'codicon:azure',
    ],
  },
  {
    company: 'Thoughtle',
    position: 'Software Engineer Intern',
    duration: 'December 2022 - March 2023',
    details: [
      'Made a significant contribution in building the product landing page',
      'Developed multiple UI components with a specific emphasis on the file upload component, integrating with backend APIs for file transformation necessary for further reconciliation',
      // 'Technologies utilized: Next.js, Firebase, TypeScript, MongoDB, Material-UI, Tailwind CSS',
    ],
    stack: [
      'ri:nextjs-fill',
      'logos:reactjs',
      'ri:reactjs-line',
      'teenyicons:firebase-solid',
      'ri:tailwind-css-fill',
      'teenyicons:typescript-solid',
      'mdi:material-ui',
    ],
  },
];

const Experience = () => {
  return (
    <div className='flex flex-col gap-3'>
      <ol className='relative border-l border-gray-200 dark:border-gray-700'>
        {experiences.map((exp, index) => (
          <li key={index} className='mb-10 ml-6'>
            <span className='absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white'>
              <Briefcase width={20} />
            </span>
            <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
              {exp.company}{' '}
            </h3>
            <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              {exp.duration}
            </time>
            <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
              <strong>{exp.position}</strong>
            </p>
            <ul className='list-disc pl-5 space-y-2'>
              {exp.details.map((detail, i) => (
                <li
                  key={i}
                  className='text-base font-normal text-gray-500 dark:text-gray-400'
                >
                  {detail}
                </li>
              ))}
              <div className='flex'>
                {exp.stack.map((logo, i) => (
                  <>
                    <Icon
                      icon={logo}
                      width='2em'
                      height='2em'
                      className='m-2'
                    />
                  </>
                ))}
              </div>
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
