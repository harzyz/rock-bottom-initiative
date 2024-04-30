import React from "react";
import arrow from "../assets/images/Arrow.png";
import Image from "next/image";

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
      day: "23",
      month: "APR",
      event: "Seminar: A day with our wonderful  ",
    },
    {
      id: 3,
      day: "23",
      month: "APR",
      event: "Seminar: A day with our wonderful  ",
    },
  ];
  return (
    <section className="w-full flex flex-col gap-[40px] bg-[#FFF] lg:px-[100px] px-[15px] lg:py-[60px] py-[30px] ">
      <h1 className="text-[30px] lg:text-[48px] lg:leading-[48px] font-[700]">
        Upcoming Events
      </h1>
      <div className="w-full flex gap-[10px] lg:justify-between overflow-x-scroll lg:overflow-x-visible">
        {Events.map((item) => (
          <div key={item.id}>
            <div className="flex w-[250px] lg:w-[360px] items-center gap-[20px] text-[#fff] rounded-[20px] p-[30px] bg-[#004832]">
              <div className="w-[30px]">
                <p className="font-[500] text-[24px]">{item.day}</p>
                <p className="font-[500] text-sm">{item.month}</p>
              </div>
              <div className="flex-grow jus flex items-center">
                <div className="w-[206px]">
                  <p className="font-[500] uppercase">Next Events</p>
                  <p className="font-[700] text-[20px]">{item.event}</p>
                </div>
                <div>
                  <Image src={arrow} alt="arrow" />
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
