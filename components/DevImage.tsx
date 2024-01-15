import Image from 'next/image';
import React from 'react';

const DevImage = () => {
  return (
    <div className='bg-hero_shape w-[510px] h-[465px] bg-no-repeat relative bg-bottom'>
      <Image
        src='/assets/assets/hero/developer.png'
        alt='image'
        fill
        priority
      />
    </div>
  );
};

export default DevImage;
