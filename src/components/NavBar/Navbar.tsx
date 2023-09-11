'use client';

import { userData } from '@/data/constants';
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { ThemeButton } from '../UI/Card/Buttons/ThemeButton';
import { SocialMediaButtons } from '../UI/Card/Buttons/SocialMediaButtons';
import Link from 'next/link';

type NavItem = {
  label: string;
  page: string;
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: '/',
  },
  {
    label: 'About',
    page: '/about',
  },
  {
    label: 'Projects',
    page: '/projects',
  },
];

const NavbarTitle = () => {
  return (
    <div className='md:py-5 md:block'>
      <div className='flex flex-col'>
        <Link href='/'>
          <h1 className='font-semibold text-xl dark:text-gray-100'>
            {userData.name}
          </h1>
          <p className='text-base font-light text-gray-500 dark:text-gray-300'>
            {userData.designation}
          </p>
        </Link>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const HamburgerMenu = () => {
    return (
      <div className='md:hidden'>
        <button
          className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
        </button>
      </div>
    );
  };

  const HiddenBlock = () => {
    return (
      <div
        className={`justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          navbar ? 'block' : 'hidden'
        }`}
      >
        <div className='flex  flex-col gap-5'>
          <div className='flex flex-row items-center space-x-10'>
            {NAV_ITEMS.map((item) => {
              return <a key={item.label}>{item.label}</a>;
            })}
          </div>
          <div className='flex-row space-x-4 items-center md:hidden flex'>
            <SocialMediaButtons />
            <ThemeButton />
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className='max-w-6xl  mx-auto px-4 sm:px-20 py-10 md:py-2 bg-gray-50 dark:bg-stone-900'>
      <div className='justify-between md:items-center md:flex w-full flex-row '>
        <div className='flex flex-row items-center justify-between py-3 md:py-5 md:block'>
          <NavbarTitle />
          <HamburgerMenu />
        </div>
        <HiddenBlock />
        <div className='flex-row space-x-4 items-center hidden md:flex'>
          <SocialMediaButtons />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
