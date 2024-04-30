import React from 'react'
import Image from 'next/image'
import DonationsImage from '../assets/images/donationsImg.png'

const Donations = () => {
  return (
    <section className='w-full h-[400px] px-[10px] lg:px-[100px] py-[60px]'>
      <Image className='w-full h-full' src={DonationsImage} alt='happy children' />
    </section>
  )
}

export default Donations
