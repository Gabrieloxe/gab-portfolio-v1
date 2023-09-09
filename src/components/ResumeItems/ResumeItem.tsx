import React from 'react';
import Image from 'next/image';

type ResumeItemProps = {
  key: string;
  companyName: string;
  jobTitle: string;
  tenure: string;
  description: string;
  imageURL: string;
};

export const ResumeItem = (props: ResumeItemProps) => {
  return (
    <div className='flex font-sans'>
      <div className='flex-none w-48'>
        <Image
          src={props.imageURL}
          alt=''
          className='inset-0 w-full h-full object-cover relative'
          loading='lazy'
          width={100}
          height={100}
        />
      </div>
      <form className='flex-auto p-6'>
        <div className='flex flex-wrap'>
          <h1 className='flex-auto text-lg font-semibold text-slate-900'>
            {props.companyName}
          </h1>
          <div className='text-lg font-semibold text-slate-500'>
            {props.tenure}
          </div>
          <div className='w-full flex-none text-sm font-medium text-slate-700 mt-2'>
            {props.jobTitle}
          </div>
        </div>
        <div className='flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200'></div>
        <div className='flex space-x-4 mb-6 text-sm font-medium'></div>
        <p className='text-sm text-slate-700'>{props.description}</p>
      </form>
    </div>
  );
};
