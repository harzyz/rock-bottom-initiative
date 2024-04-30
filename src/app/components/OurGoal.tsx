import React from 'react'
import BrownButton from './BrownButton'
import Image from "next/image";
import sickleCellImg from '../assets/images/sicklecell1.png'
import sickleCellImg1 from '../assets/images/sicklecell2.png'
import sickleCellImg2 from '../assets/images/sicklecell3.png'

const OurGoal = () => {

  const SicklecellInfo = [
    {
      id: 1,
      thumbnail: sickleCellImg,
      title: 'Sickle Cell Awareness Month',
      date: '10TH SEPTEMBER 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'
    },
    {
      id: 2,
      thumbnail: sickleCellImg1,
      title: 'Sickle Cell Awareness Month',
      date: '10TH SEPTEMBER 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'
    },
    {
      id: 3,
      thumbnail: sickleCellImg2,
      title: 'Sickle Cell Awareness Month',
      date: '10TH SEPTEMBER 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'
    },
  ]
  return (
    <section className='w-full items-center lg:justify-between flex flex-col lg:flex-row bg-[#004832] p-[15px] lg:px-[100px] gap-[30px] lg:py-[60px] '>
      <div className='lg:w-[50%] flex flex-col gap-[20px] items-start'>
        <h1 className='text-[#fff] text-[30px] lg:text-[56px] lg:leading-[57px] font-[700]'>Our goal is to <br/> provide inclusive <br/> care for people with <br/> special needs</h1>
        <p className='text-[#fff] text-sm'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. <br/> Nunc ut sem vitae risus tristique posuere.</p>
        <BrownButton className='text-sm font-[600] px-[15px] text-[black] bg-[#fff]' label='See More' />
      </div>
      <div className='lg:w-[40%] flex flex-col gap-[10px] rounded-[10px] p-[20px] bg-[#fff] h-full'>
        {SicklecellInfo.map((item)=> (
          <div key={item.id} className='flex items-center gap-[10px]'>
            <div className='w-[180px] h-[120px]'>
              <Image className='w-full h-full' src={item.thumbnail} alt='' />
            </div>
            <div className='w-[70%] flex flex-col gap-[8px]'>
              <b className='text-sm'>{item.title}</b>
              <p className='text-xs'>{item.date}</p>
              <p className='text-xs'>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurGoal
