import React from 'react'
import BrownButton from './BrownButton'
import Image from 'next/image'
import video from '../assets/images/Video.png'

const ProvideAPlace = () => {
  return (
    <section className='w-full flex lg:flex-row flex-col gap-[30px] lg:items-center bg-[#FFF] lg:px-[100px] lg:justify-between px-[15px] lg:py-[60px] py-[30px]'>
      <div className='lg:w-[50%] flex flex-col gap-[20px] items-start'>
        <h1 className=' text-[30px] lg:text-[46px] lg:leading-[57px] font-[700]'>Empowerment</h1>
        <p className=''>We empower warriors by sharing knowledge, sharing stories, listening to stories, providing resources, embracing positivity and opportunities for personal and professional growth all by building a network/community.</p>
        <button className="lg:py-[16px] py-[8px] rounded-[5px] px-[16px] lg:px-[32px] bg-[#004832] text-[#fff] transform transition-transform hover:scale-110">
          Learn More
        </button>
      </div>
      <div id='govid' className='lg:w-[40%] h-[500px] rounded-[20px]'>
      <video className='w-full h-full rounded-[20px]' controls>
        <source src="https://res.cloudinary.com/dmvvb4t5w/video/upload/v1714502453/WhatsApp_Video_2024-04-30_at_7.31.23_PM_a1vok7.mp4" type="video/mp4" />
      </video>
       {/* <Image className='w-full h-full' src={video} alt='play video' />  */}
      </div>
    </section>
  )
}

export default ProvideAPlace
