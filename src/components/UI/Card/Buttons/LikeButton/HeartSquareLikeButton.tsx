import React from 'react';

export const HeartSquareLikeButton = () => {
  return (
    <button
      className='flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200'
      type='button'
      aria-label='Like'
    >
      <svg width='20' height='20' fill='currentColor' aria-hidden='true'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
        />
      </svg>
    </button>
  );
};
