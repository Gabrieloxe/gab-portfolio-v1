import React from 'react';

const experienceData = [
  {
    position: 'Support Solutions Engineer',
    company: 'Smartly.io',
    companyLink: 'https://www.smartly.io',
    time: '2020 - Present',
    address: 'Singapore',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget lectus molestie aliquet. Some extra long paragaraph to test the overflow of the text.',
  },
  {
    position: 'Support Solutions Engineer',
    company: 'Smartly.io',
    companyLink: 'https://www.smartly.io',
    time: '2020 - Present',
    address: 'Singapore',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget lectus molestie aliquet. Some extra long paragaraph to test the overflow of the text.',
  },
  {
    position: 'Support Solutions Engineer',
    company: 'Smartly.io',
    companyLink: 'https://www.smartly.io',
    time: '2020 - Present',
    address: 'Singapore',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget lectus molestie aliquet. Some extra long paragaraph to test the overflow of the text.',
  },
];

type ExperienceItemType = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

const ExperienceItem = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: ExperienceItemType) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <div>
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;
          <a
            href={companyLink}
            target='_blank'
            className='text-primary capitalize'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>
      <div className='w-[75%] mx-auto relative'>
        <div className='absolute left-8 top-0 w-[4px] h-full bg-black dark:bg-white origin-top' />
        <ul className='w-full flex flex-col items-start justfiy-between ml-4'>
          {experienceData.map((item) => {
            return (
              <ExperienceItem
                key={item.position}
                position={item.position}
                company={item.company}
                companyLink={item.companyLink} 
                time={item.time}
                address={item.address}
                work={item.work}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
