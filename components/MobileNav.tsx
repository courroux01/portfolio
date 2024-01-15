import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { AlignJustify } from 'lucide-react';
import Logo from './Logo';
import Nav from './Nav';
import Socials from './Socials';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav
              containerStyles='flex flex-col items-center gap-y-5'
              linkStyles='
                cursor-pointer
                text-2xl 
                capitalize 
                transition 
                duration-500 
                p-1 
                border-b-2 
                border-transparent
                hover:border-primary 
                hover:rounded-sm 
              '
              motionStyles=''
            />
            <Socials
              containerStyles='flex gap-x-4'
              iconStyles='text-foreground text-2xl hover:text-primary transition-all'
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
