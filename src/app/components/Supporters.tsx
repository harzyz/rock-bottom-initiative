import React from 'react'
import Image from 'next/image'
import support from '../assets/images/Logo (2).png'
import support1 from '../assets/images/Logo (3).png'
import support2 from '../assets/images/Logo (4).png'
import support3 from '../assets/images/Logo (5).png'
import support4 from '../assets/images/Logo (6).png'
import support5 from '../assets/images/Logo (7).png'

const Supporters = () => {
  return (
    <section className='w-full flex flex-col gap-[30px] px-[15px] lg:px-[50px] py-[60px] '>
        <div className='flex items-center'>
        <h1 className='uppercase w-[150px] text-xs roboto font-bold lg:text-[16px]'>our Supporters</h1>
        <div className='border border-[#E5E5E5] flex-grow'></div>
        </div>

        <div className='w-full gap-[10px] grid grid-cols-2 md:grid-cols-6'>
        <Image src={support} alt='happy children' />
        <Image src={support1} alt='happy children' />
        <Image src={support2} alt='happy children' />
        <Image src={support3} alt='happy children' />
        <Image src={support4} alt='happy children' />
        <Image src={support5} alt='happy children' />
        </div>
    </section>
  )
}

export default Supporters
