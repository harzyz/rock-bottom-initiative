import React from "react";
import arrow from "../assets/images/Arrow.png";
import Image from "next/image";
import event1 from "../assets/images/event1.jpeg";
import event2 from "../assets/images/event2.jpeg";
import event3 from "../assets/images/event3.jpeg";

const UpComingEvents = () => {
  const Events = [
    {
      id: 1,
      day: "20",
      month: "APR",
      event: "Talk Series",
      thumbnail: event2,
    },
    {
      id: 2,
      day: "27",
      month: "APR",
      event: "Pre Launch Dinner",
      thumbnail: event3,
    },
    {
      id: 3,
      day: "10",
      month: "MAY",
      event: "Launch Event",
      thumbnail: event1,
    },
  ];
  return (
    <section className="w-full h-full flex flex-col gap-[40px] bg-[#FFF] lg:px-[100px] px-[15px] lg:py-[60px] py-[30px] ">
      <h1 className="text-[30px] lg:text-[48px] lg:leading-[48px] font-[700]">
        Upcoming Events
      </h1>
      <div className="w-full flex gap-[10px] lg:justify-between overflow-x-scroll lg:overflow-x-visible">
        {Events.map((item) => (
          <div className='lg:w-[30%]' key={item.id}>
            <div className='h-[500px]'>
              <div className="flex w-[270px] lg:w-full items-center gap-[20px] text-[#fff] rounded-tl-[20px] rounded-tr-[20px]  p-[30px] bg-[#004832]">
                <div className="w-[30px]">
                  <p className="font-[500] text-[24px]">{item.day}</p>
                  <p className="font-[500] text-sm">{item.month}</p>
                </div>
                <div className="flex-grow flex items-center">
                  <div className="lg:w-full w-[180px]">
                    <p className="font-[500] uppercase">Next Events</p>
                    <p className="font-[700] text-[20px]">{item.event}</p>
                  </div>
                </div>
              </div>
              <div className='h-[300px]'>
              <Image className='w-full rounded-bl-[20px] rounded-br-[20px] h-full' src={item.thumbnail} alt={item.event} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpComingEvents;
