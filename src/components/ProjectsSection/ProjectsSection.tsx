import React from 'react';
import { Title } from '@/components/Common/Title';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { type } from 'os';

const projects = [
  {
    name: 'Project 1',
    description: 'This is a project',
    image: '/project.png',
    link: 'https://www.google.com',
    github: 'https://www.github.com',
  },
  {
    name: 'Project 2',
    description: 'This is a project',
    image: '/project.png',
    link: 'https://www.google.com',
    github: 'https://www.github.com',
  },
];

const ProjectCardImage = ({ image }: { image: string }) => {
  return (
    <Image
      src={image}
      alt=''
      width={5000}
      height={300}
      className='rounded-xl shadow-xl hover:opacity-70'
    />
  );
};

const ProjectGithubLink = ({ github }: { github: string }) => {
  return (
    <Link href={github} target='_blank'>
      <BsGithub
        size={30}
        className='hover:-translate-y-1 transition-transform cursor-pointer'
      />
    </Link>
  );
};

type ProjectCardProps = {
  project: {
    name: string;
    description: string;
    image: string;
    link: string;
    github: string;
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div key={project.name}>
      <div className='flex flex-col md:flex-row md:space-x-12'>
        <div className='md w-1/2'>
          <Link href={project.link}>
            <ProjectCardImage image={project.image} />
          </Link>
        </div>
        <div className='mt-8 md w-1/2'>
          <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
          <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
            {project.description}
          </p>
          <div className='flex flex-row align-bottom space-x-4'>
            <ProjectGithubLink github={project.github} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id='projects'>
      <Title title='Projects' />
      <div className='flex flex-col space-y-28'>
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.name} />;
        })}
      </div>
    </section>
  );
};
