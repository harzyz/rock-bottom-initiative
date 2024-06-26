import React from "react";
import Image from "next/image";
import box1 from "../assets/images/box1.png";
import box2 from "../assets/images/box2.png";
import box3 from "../assets/images/box3.png";
import spiral from "../assets/images/curvy.png";
import Link from "next/link";

const SupportRock = () => {
  const Gallery = [
    {
      id: 1,
      thumbnail: box1,
      title: "Foundation and Awareness",
      content:
        "Establish an online presence for Rock Bottom Sickle cell Initiative to increase awareness and reach a wider audience.",
    },
    {
      id: 2,
      thumbnail: box2,
      title: "Strengthening Support Systems ",
      content:
        "Conduct workshops on self-help techniques and play dates, including mental health support for sickle cell patients and their families.",
    },
    {
      id: 3,
      thumbnail: box3,
      title: "Blood Bank Initiation",
      content:
        "Collaborate with medical institutions to identify potential locations and feasibility for the blood bank.",
    },
  ];
  return (
    <section className="w-full flex flex-col gap-[25px] bg-[#FFF] lg:px-[100px] px-[15px] lg:py-[60px] py-[30px]">
      <h1 className="text-[25px] lg:text-[40px] text-center lg:leading-[57px] font-[700]">
        Support Rock Bottom Sickle Cell Initiative{" "}
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
      <div className="w-full flex h-[360px] gap-[10px] lg:justify-between overflow-x-scroll lg:overflow-x-visible">
        {Gallery.map((item) => (
          <div key={item.id}>
            <div className="w-[300px] lg:w-full lg:h-[350px] relative rounded-[10px] h-[300px]">
              <div className="w-full rounded-[10px] flex justify-center items-center bg-[#00000066] h-full absolute top-0 left-0 p-[25px]">
                <div className="flex justify-end items-start flex-col gap-[30px] ">
                  <div className="flex flex-col gap-[15px]">
                    <h1 className="text-[#fff] w-[230px] roboto font-[700] text-[26px] ">
                      {item.title}
                    </h1>
                    <p className="text-[#fff] text-[15px] ">{item.content}</p>
                  </div>
                  <Link href="/register">
                    <button className="py-[10px] rounded-[5px] px-[15px] bg-[#fff] text-[black] text-sm transform transition-transform hover:scale-110 ">
                      Learn More
                    </button>
                  </Link>
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
