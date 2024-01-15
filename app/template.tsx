'use client';

import useScrollProgression from '@/hooks/useScrollProgression';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }: { children: React.ReactNode }) => {
  const completion = useScrollProgression() as number;
  return (
    <>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        transition={{
          type: 'linear',
          delay: 0.2,
          duration: 0.4,
        }}
      >
        {children}
      </motion.main>
      <span
        className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700'
        style={{ transform: `translateY(${completion * 100 - 100}%)` }}
      ></span>
      <div className='h-[4000px] '></div>
    </>
  );
};

export default Template;
