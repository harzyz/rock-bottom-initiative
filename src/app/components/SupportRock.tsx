import React from "react";
import Image from "next/image";
import box1 from "../assets/images/box1.png";
import box2 from "../assets/images/box2.png";
import box3 from "../assets/images/box3.png";

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
    <section className="w-full flex flex-col gap-[20px] bg-[#FFF] lg:px-[100px] px-[15px] lg:py-[60px] py-[30px]">
      <h1 className="text-[30px] lg:text-[40px] text-center lg:leading-[57px] font-[700]">
        Support Rock Bottom Initiative today
      </h1>
      <p className="text-center text-xs">
        Help make our community a better place for all.
      </p>
      <div className="w-full flex h-[300px] gap-[10px] lg:justify-between overflow-x-scroll lg:overflow-x-visible">
        {Gallery.map((item) => (
          <div key={item.id}>
            <div
              className="w-[300px] relative rounded-[10px] h-[300px]"
              >
              <div className="w-full rounded-[10px] flex justify-center items-center bg-[#00000066] h-full absolute top-0 left-0 p-[25px]">
                <div className="flex items-start flex-col gap-[10px] ">
                  <h1 className="text-[#fff] font-bold text-[18px] ">
                    {item.title}
                  </h1>
                  <p className="text-[#fff] font-bold text-xs ">
                    {item.content}
                  </p>
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
