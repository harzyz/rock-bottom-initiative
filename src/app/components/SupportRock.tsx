import React from 'react'
import Image from 'next/image'
import box1 from '../assets/images/box1.png'
import box2 from '../assets/images/box2.png'
import box3 from '../assets/images/box3.png'

const SupportRock = () => {
  return (
    <section className='w-full flex flex-col gap-[20px] bg-[#FFF] lg:px-[100px] px-[15px] lg:py-[60px] py-[30px]'>
      <h1 className='text-[30px] lg:text-[40px] text-center lg:leading-[57px] font-[700]'>Support Rock Bottom Initiative today</h1>
      <p className='text-center text-xs'>Help make our community a better place for all.</p>
      <div className='flex justify-between'>
        <div>
          <Image src={box1} alt='wwww' />
        </div>
        <div>
          <Image src={box2} alt='vvv' />
        </div>
        <div>
          <Image src={box3} alt='ggg' />
        </div>
      </div>
    </section>
  )
}

export default SupportRock
