import Image from 'next/image';
import React from 'react';
import Reposi from './reposi';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Github Repositories</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        </div>
        <Reposi/>
    </div>
  );
};

export default Portfolio;
