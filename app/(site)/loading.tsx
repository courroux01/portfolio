'use client';

import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      <BounceLoader color='bg-green-500' size={40} />
    </div>
  );
};

export default Loading;
