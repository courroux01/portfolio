import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GiLightningFrequency } from 'react-icons/gi';

const Logo = () => {
  return (
    <Link href='/'>
      <GiLightningFrequency className='text-primary w-[54px] h-[54px] hover:text-primary/90' />
    </Link>
  );
};

export default Logo;
