import React from 'react';
import { motion, useScroll } from 'framer-motion';

const experienceData = [
  {
    position: 'Support Solutions Engineer',
    company: 'Smartly.io',
    companyLink: 'https://www.smartly.io',
    time: '2021 - Present',
    address: 'Singapore',
    work: `some very very long text to test the behaviour and find out why the text
    is not overflowing as it should be. I'm not sure why it's not working.`,
  },
  {
    position: 'Service Operations Engineer',
    company: 'Smartly.io',
    companyLink: 'https://www.smartly.io',
    time: '2020 - 2021',
    address: 'Singapore',
    work: `some very very long text to test the behaviour and find out why the text
    is not overflowing as it should be. Im not sure why it is not working.`,
  },
  {
    position: 'Instructor (Part Time)',
    company: 'Witty Mitty',
    companyLink: 'https://wittymitty.education/',
    time: 'Jan 2019 - August 2019',
    address: 'Singapore',
    work: `Taught kids between the ages of 4-12 about race car engineering through the construction of Tamiya cars. 
    Sessions range from 8-10 weeks and the average class size is 10 students.
    Taught at Canadian International School.
    Taught entrepreneurship to special needs kids between the ages of 7-12 . 7 sessions with a class size of 6 at The Winstead School.`,
  },
  {
    position: 'Strategy Intern',
    company: 'R/GA',
    companyLink: 'https://rga.com/',
    time: '2020 - Present',
    address: 'Singapore',
    work: `Conduct research on client briefs and provide analysis on them.
    Research on new technologies that can help to answer our client briefs.
    Compile information into strategic narratives.
    Participated in a make day event.`,
  },
  {
    position: 'Teaching Assistant',
    company: 'Singapore Management University',
    companyLink: 'https://www.smu.edu.sg/',
    time: '2020 - Present',
    address: 'Singapore',
    work: 'some very very long text to test the behaviour and find out why the text is not overflowing as it should be. Im not sure why it is not working..',
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
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-start'>
      <div>
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;
          <a
            href={companyLink}
            target='_blank'
            className='capitalize text-teal-400'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-[75%]'>{work}</p>
      </div>
    </li>
  );
};

export const Experience = () => {
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>
      <div className='relative w-[75%] mx-auto'>
        <div className='absolute left-8 top-0 w-[4px] h-full bg-black dark:bg-white origin-top' />
        <ul className='w-full flex flex-col justfiy-start ml-48'>
          {experienceData.map(item => {
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
