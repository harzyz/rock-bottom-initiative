import React from 'react'
import BrownButton from './BrownButton'
import Image from 'next/image'
import video from '../assets/images/Video.png'

const ProvideAPlace = () => {
  return (
    <section className='w-full flex lg:flex-row flex-col gap-[30px] lg:items-center bg-[#FFF] lg:px-[100px] lg:justify-between px-[15px] lg:py-[60px] py-[30px]'>
      <div className='lg:w-[50%] flex flex-col gap-[20px] items-start'>
        <h1 className=' text-[30px] lg:text-[46px] lg:leading-[57px] font-[700]'>We provide a place for <br/> children with special <br/> needs</h1>
        <p className=' text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        <BrownButton className='text-sm font-[600] px-[15px] bg-[#004832]' label='Learn more' />
      </div>
      <div className='lg:w-[40%]'>
       <Image className='w-full h-full' src={video} alt='play video' /> 
      </div>
    </section>
  )
}

export default ProvideAPlace
