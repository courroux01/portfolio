'use client';
import React, { useEffect, useState } from 'react';
import ThemeToggler from './ThemeToggler';
import Logo from './Logo';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Header = () => {
  const pathname = usePathname();
  const [header, setHeader] = useState<boolean>(false);

  useEffect(() => {
    const updateHeader = () => {
      if (window.scrollY == 50) {
        setHeader(true);
        window.scrollBy(0, 5);
      } else if (window.scrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener('scroll', updateHeader);
    console.log(window.scrollY);
    // remove event

    return () => window.removeEventListener('scroll', updateHeader);
  });
  return (
    <header
      className={cn(
        'sticky top-0 z-30 duration-200 py-6 ',
        header ? 'bg-white shadow-lg dark:bg-accent' : 'dark:bg-transparent',
        pathname === '/' && 'bg-[#fef9f5]'
      )}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              motionStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
