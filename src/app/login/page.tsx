import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import BrownButton from '../components/BrownButton'
import loginImg from '../assets/images/loginImg.png'

const page = () => {
  return (
    <div className="bg-[#FAFAFA] flex flex-col  w-full h-full">
      <Navbar />
      <div className="flex h-full ">
        <div className="w-[45%] h-[700px]">
          <Image
            className="w-full h-full object-cover"
            src={loginImg}
            alt="Group of people smiling"
          />
        </div>
        <div className="w-[55%] pt-[50px] flex justify-center">
          <form className="w-[60%] gap-[20px] flex flex-col">
            
            <h1 className="font-bold text-[36px] ">Log In</h1>
            <p className="text-[#525560] text-xs">
            Don’t have an account? <span className='text-[#8B0000] '>Sign Up</span>
            </p>
            <input className="h-[50px] ps-[30px] rounded-[8px] bg-[#F2F2F2]" placeholder='Email Address' type="text" />
            <input className="h-[50px] ps-[30px] rounded-[8px] bg-[#F2F2F2]" placeholder='Password' type="password" />
            <div className='w-full flex justify-center'>
            <BrownButton className="w-[80%] h-[50px] text-sm px-[15px]" label="Log In" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page