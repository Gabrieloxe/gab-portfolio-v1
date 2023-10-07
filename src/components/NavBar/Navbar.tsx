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
    page: '#about',
  },
  {
    label: 'Projects',
    page: '#projects',
  },
];

type NavbarComponentProps = {
  navbar: boolean;
  setNavbar?: (navbar: boolean) => void;
  children?: React.ReactNode;
};

type NavbarWrapperProps = {
  children?: React.ReactNode;
};

const NavbarTitle = () => {
  return (
    <div className='md:py-5 md:block px-6'>
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

const HamburgerMenu = (props: NavbarComponentProps) => {
  return (
    <div className='md:hidden px-4'>
      <button
        className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
        onClick={() => props.setNavbar?.(!props.navbar)}
      >
        {props.navbar ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
      </button>
    </div>
  );
};

const HiddenBlock = (props: NavbarComponentProps) => {
  return (
    <div
      className={`justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
        props.navbar ? 'block' : 'hidden'
      }`}
    >
      <div className='flex  flex-col gap-5'>
        <div className='flex flex-row items-center space-x-10'>
          {NAV_ITEMS.map((item) => {
            return (
              <a key={item.label} href={item.page}>
                {item.label}
              </a>
            );
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

const NavbarContentWrapper = (props: NavbarWrapperProps) => {
  return (
    <header className='w-full mx-auto px-2 sm:px-20 fixed top-0 z-30 bg-white dark:bg-stone-900 dark:border-stone-600"'>
      <div className='justify-between md:items-center md:flex w-full flex-row'>
        {props.children}
      </div>
    </header>
  );
};

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <NavbarContentWrapper>
      <div className='flex flex-row items-center justify-between py-3 md:py-5 md:block'>
        <NavbarTitle />
        <HamburgerMenu navbar={navbar} setNavbar={setNavbar} />
      </div>
      <HiddenBlock navbar={navbar} />
      <div className='flex-row space-x-4 items-center hidden md:flex'>
        <SocialMediaButtons />
        <ThemeButton />
      </div>
    </NavbarContentWrapper>
  );
};
