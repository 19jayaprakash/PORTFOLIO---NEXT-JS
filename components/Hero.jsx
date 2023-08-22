import Image from 'next/image';
import React from 'react';
import Styles from './hero.module.css';
import Link from 'next/link';
const Hero = ({ heading, message }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <div className='flex'>
          <div className='flex-1 flex items-center justify-center'>
            <div className='text-center'>
              <h2 className='text-5xl font-bold'>{heading}</h2>
              <p className='py-5 text-xl'>{message}</p>
              <button className='px-8 py-2 border'><Link href='https://www.linkedin.com/in/jayaprakash-r-276a18226/'>Direct Message</Link></button>
            </div>
          </div>
          <div id="wrap" class={Styles.imgwrap} className='flex-1 flex items-center justify-center pt-20'>
            <img src='./jp.jpg' className={Styles.img} alt='Image' width="360" height="360" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


