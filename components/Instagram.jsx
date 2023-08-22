import React from 'react'
import IgImg1 from '../public/ig-img-1.jpg';
import InstagramImg from './InstagramImg';
import Link from 'next/link';



const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'><Link href="https://instagram.com/_mr.rc_200?igshid=MmIzYWVlNDQ5Yg==">@mr.rc_200</Link></p>
        {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'> */}
        <div>
            <InstagramImg socialImg={IgImg1} className='rounded-lg'/>
        </div>

    </div>
  )
}

export default Instagram