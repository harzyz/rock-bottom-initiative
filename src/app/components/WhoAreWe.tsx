import React, { FC } from 'react'

export interface WhoProps {
  bgColor: string
}

const WhoAreWe:FC<WhoProps> = ({bgColor}) => {
  return (
    <section style={{backgroundColor: bgColor}} className='w-full flex lg:flex-row flex-col gap-[20px] lg:items-end bg-[#FAFAFA] lg:px-[100px] px-[15px] lg:py-[60px] py-[30px] '>
      <div className='lg:w-[60%] flex flex-col gap-[10px]'>
        <div className='flex gap-[15px] items-center'>
          <div className='w-[30px] border border-[#000]'></div>
          <h4 className='font-bold text-sm'>WHO ARE WE</h4>
        </div>
        <h1 className='text-[30px] lg:text-[56px] lg:leading-[57px] font-[700]'>We are a non-<br/>governmental <br/> organization</h1>
      </div>
      <div className='lg:w-[35%] flex flex-col gap-[10px]'>
        <b className='text-sm lg:text-[16px]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</b>
        <p className='text-sm lg:text-[16px] text-[#54577A]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p>
      </div>
    </section>
  )
}

export default WhoAreWe
