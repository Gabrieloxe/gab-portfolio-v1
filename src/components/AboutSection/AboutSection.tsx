import React from 'react';
import { userData } from '../../data/constants';
import { Title } from '../Common/Title';

const IntroSection = () => {
  return (
    <div className='md:w-1/2 px-12'>
      <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
        Get to know me!
      </h1>
      <p>
        Hi, my name is Gabriel and I am a{' '}
        <span className='font-bold'>{'curious'}</span>,
        <span className='font-bold'>{' self-motivated'}</span>, and
        <span className='font-bold'>{' budding'}</span> Software Engineer based
        in Singapore. I graduated from Singapore Management University in 2020
        with a BS in Information Systems and have been plowing my craft at
        Smartly.io since!
      </p>
      <br />
      <p>
        I have a wide range of hobbies and passions. They range from Dancing Hip
        Hop, playing Badminton, Traveling and of course coding, I am always
        seeking new experiences and love to keep myself engaged and learning new
        things.
      </p>
      <br />
      <p>
        I believe that you should{' '}
        <span className='font-bold text-teal-500'>never stop learning</span> and
        that&#39;s what I strive to do, I have a passion for building technology
        that is human centric. I am excited to see where my career takes me and
        am always open to new opportunities!
      </p>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className='text-center md:w-1/2 md:text-left px-12'>
      <h1 className='text-2xl font-bold mb-6'>My Skills</h1>
      <div className='flex flex-wrap flex-row justify-center z-10 md:justify-start'>
        {userData.skills.map((item) => {
          return (
            <p
              key={item.id}
              className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
            >
              {item.skill}
            </p>
          );
        })}
      </div>
      {/* room for fun image */}
    </div>
  );
};
const AboutSection = () => {
  return (
    <section id='about' className='top-1'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48 px-12'>
        <Title title='About'/>
        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <IntroSection />
          <SkillsSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
