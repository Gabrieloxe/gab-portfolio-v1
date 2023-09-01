import React from 'react';

type ResumeItemProps = {
  companyName: string;
  jobTitle: string;
  tenure: string;
  description: string;
};

export const ResumeItem = (props: ResumeItemProps) => {
  return (
    <div className='flex font-sans'>
      <div className='flex-none w-48 relative'>
        <img
          src='https://yt3.googleusercontent.com/py_b0-eqNosgAk3U2WsHNf_O2ijI1-qaxV3TfLlE_ux98S4iyuKR3hZZm1Cj-BnGCXs3WZ-Axqk=s900-c-k-c0x00ffffff-no-rj'
          alt=''
          className='absolute inset-0 w-full h-full object-cover'
          loading='lazy'
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
