import React from "react";
import Image from "next/image";
import box1 from "../assets/images/box1.png";
import box2 from "../assets/images/box2.png";
import box3 from "../assets/images/box3.png";
import spiral from "../assets/images/curvy.png";

const SupportRock = () => {
  const Gallery = [
    {
      id: 1,
      thumbnail: box1,
      title: "Mission smile 1k: Outdoor charity",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 2,
      thumbnail: box2,
      title: "Weekly excursions",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 3,
      thumbnail: box3,
      title: "Monthly public awareness",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];
  return (
    <section className="w-full flex flex-col gap-[25px] bg-[#FFF] lg:px-[100px] px-[15px] lg:py-[60px] py-[30px]">
      <h1 className="text-[25px] lg:text-[40px] text-center lg:leading-[57px] font-[700]">
        Support Rock Bottom Initiative{' '}
        <span className="relative">
          today
          <Image
            className="absolute top-0 right-[-20px]"
            src={spiral}
            alt="curve"
          />
        </span>
      </h1>
      <p className="text-center poppins">
        Help make our community a better place for all.
      </p>
      <div className="w-full flex h-[300px] gap-[10px] lg:justify-between overflow-x-scroll lg:overflow-x-visible">
        {Gallery.map((item) => (
          <div key={item.id}>
            <div className="w-[300px] lg:w-[350px] lg:h-[350px] relative rounded-[10px] h-[300px]">
              <div className="w-full rounded-[10px] flex justify-center items-center bg-[#00000066] h-full absolute top-0 left-0 p-[25px]">
                <div className="flex justify-end items-start flex-col gap-[50px] ">
                  <div className='flex flex-col gap-[30px]'>
                    <h1 className="text-[#fff] w-[230px] roboto font-[700] text-[26px] ">
                      {item.title}
                    </h1>
                    <p className="text-[#fff] text-[15px] ">
                      {item.content}
                    </p>
                  </div>
                  <button className="py-[10px] rounded-[5px] px-[15px] bg-[#fff] text-[black] text-sm ">
                    Learn More
                  </button>
                </div>
              </div>
              <Image
                className="w-full h-full"
                src={item.thumbnail}
                alt="gallery"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportRock;
