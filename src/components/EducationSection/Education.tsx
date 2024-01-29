import React from 'react';
import { motion, useScroll } from 'framer-motion';

const experienceData = [
  {
    type: 'Bachelor of Science Information Systems',
    time: '2016 - 2020',
    place: 'Singapore Management University',
    info: '2020 - Present',
  },
  {
    type: 'Bachelor of Science Information Systems',
    time: '2016 - 2020',
    place: 'Singapore Management University',
    info: '2020 - Present',
  },
  {
    type: 'Bachelor of Science Information Systems',
    time: '2016 - 2020',
    place: 'Singapore Management University',
    info: '2020 - Present',
  }, 
];

type ExperienceItemType = {
  type: string;
  time: string;
  place: string;
  info: string;
};

const EducationItem = ({ type, time, place, info }: ExperienceItemType) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <div>
        <h3 className='capitalize font-bold text-2xl'>{type}</h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {place}
        </span>
        <p className='font-medium w-full'>{info}</p>
      </div>
    </li>
  );
};

export const Education = () => {
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Education
      </h2>
      <div className='w-[75%] mx-auto relative'>
        <div className='absolute left-8 top-0 w-[4px] h-full bg-black dark:bg-white origin-top' />
        <ul className='w-full flex flex-col items-start justfiy-between ml-30'>
          {experienceData.map((item) => {
            return (
              <EducationItem
                key={item.type}
                type={item.type}
                time={item.time}
                place={item.place}
                info={item.info}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
