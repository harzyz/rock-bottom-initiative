import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className='w-full flex lg:flex-row flex-col gap-[20px] lg:items-center bg-[#FAFAFA] lg:px-[100px] lg:justify-between gap-[30px] px-[15px] lg:py-[60px] py-[30px] '>
      <div className="lg:w-[40%] gap-[20px] flex flex-col">
        <h1 className='text-[30px] lg:text-[56px] lg:leading-[57px] font-[700]'>We love to hear from you</h1>
        <p className='text-xs '>
          Have any question in mind or want to enquire? Please feel free to <br className="hidden lg:block"/>
          contact us through the form or the following details.
        </p>
      </div>
      <div className="lg:w-[50%] flex lg:justify-center">
        <div className='lg:w-[40%] flex flex-col gap-[15px]'>
        <h5 className="text-xs font-[700]">CONTACT US</h5>
        <b>Let&apos;s talk!</b>
        <div className='text-sm'>
        <a href="mailto:rockbottom.ceo@outlook.com">rockbottom.ceo@outlook.com</a>
        {/* <p>rockbottom.ceo@outlook.com</p> */}
        <p>+44 7440 755287</p>
        </div>
        <div className='w-full border border-[#54577A]'></div>
        <div className='text-sm'>
        <b>Volunteer Office</b>
        <p>BENIN GRA, Benin, Edo State</p>
        </div>

        <div className='flex gap-[15px]'>
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
