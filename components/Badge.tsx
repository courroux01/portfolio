'use client';
import React from 'react';
import CountUp from 'react-countup';
import { RiBriefcase4Fill } from 'react-icons/ri';

const Badge = () => {
  return (
    <div
      className='
        absolute 
        top-[20%]
        right-[400px] 
        z-10 
        w-[200px] 
        h-[75px] 
        bg-white 
        dark:backdrop-blur-[44px]
        shadow-2xl
        p-4 rounded-[10px]
        flex
        items-center
        gap-x-4'
    >
      <div className='text-3xl text-primary'>
        <RiBriefcase4Fill />
      </div>
      <div className='flex items-center gap-x-2'>
        <div className='text-4xl leading-none font-bold text-primary'>
          <CountUp end={3} delay={1} duration={4} />
        </div>
        <div className='max-w-[70px] leading-none text-[15px] font-medium text-black'>
          Years of Experience
        </div>
      </div>
    </div>
  );
};

export default Badge;
