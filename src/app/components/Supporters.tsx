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
    <section className='w-full flex flex-col gap-[30px] px-[15px] lg:px-[100px] py-[60px] '>
        <div className='flex justify-between items-center'>
        <h1 className='uppercase text-xs lg:text-sm'>our Supporters</h1>
        <div className='border border-[#666] w-[50%] lg:w-[80%]'></div>
        </div>

        <div className='w-full flex items-center gap-[20px] flex-col lg:flex-row lg:justify-between'>
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
