import React from "react";
import arrow from '../assets/images/Arrow.png'
import Image from 'next/image'

const UpComingEvents = () => {
  const Events = [
    {
      id: 1,
      day: "13",
      month: "APR",
      event: "A day with our wonderful children",
    },
    {
      id: 2,
      day: "13",
      month: "APR",
      event: "A day with our wonderful children",
    },
    {
      id: 3,
      day: "13",
      month: "APR",
      event: "A day with our wonderful children",
    },
  ];
  return (
    <section className="w-full flex flex-col gap-[30px] bg-[#FFF] lg:px-[100px] px-[15px] lg:py-[60px] py-[30px] ">
      <h1 className="text-[30px] lg:text-[56px] lg:leading-[57px] font-[700]">
        Upcoming Events
      </h1>
      <div className="w-full flex gap-[10px] lg:justify-between overflow-x-scroll lg:overflow-x-visible">
        {Events.map((item) => (
          <div key={item.id}>
            <div
            
            className="flex w-[250px] lg:w-[320px] items-center gap-[10px] text-[#fff] rounded-[10px] p-[15px] bg-[#004832]">
            <div>
              <p className="text-[20px]">{item.day}</p>
              <p className="text-xs">{item.month}</p>
            </div>
            <div className='flex gap-[15px] items-center'>
              <div>
              <p className="text-sm uppercase">Next Events</p>
              <p className="text-sm">{item.event}</p>
              </div>
              <div>
              <Image src={arrow} alt='arrow' />
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpComingEvents;
