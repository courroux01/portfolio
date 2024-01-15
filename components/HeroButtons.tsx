'use client';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

const HeroButtons = () => {
  return (
    <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
      <Link href='/contact'>
        <Button className='gap-x-6'>
          Contact Me <Send size={18} />
        </Button>
      </Link>
      <Button
        variant='secondary'
        className='gap-x-2 transition-300 hover:border-primary hover:border-2'
      >
        Download CV <Download size={18} />
      </Button>
    </div>
  );
};

export default HeroButtons;
