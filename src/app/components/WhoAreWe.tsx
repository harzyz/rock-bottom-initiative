import React, { FC } from "react";

export interface WhoProps {
  bgColor: string;
}

const WhoAreWe: FC<WhoProps> = ({ bgColor }) => {
  return (
    <section
      style={{ backgroundColor: bgColor }}
      className="w-full flex lg:flex-row flex-col gap-[20px] lg:items-center bg-[#FAFAFA] lg:px-[100px] px-[15px] lg:py-[60px] py-[30px] ">
      <div className="lg:w-[60%] flex flex-col gap-[10px]">
        <div className="flex gap-[15px] items-center">
          <div className="w-[30px] border border-[#000]"></div>
          <h4 className="font-bold text-sm">WHO ARE WE</h4>
        </div>
        <h1 className="text-[30px] lg:text-[56px] lg:leading-[57px] font-[700]">
          We are a non-
          <br />
          governmental <br /> organization
        </h1>
      </div>
      <div className="lg:w-[35%] flex flex-col gap-[10px]">
        <b className="text-sm lg:text-[16px]">
          Why Rock Bottom Sickle Cell Initiative
        </b>
        <p className="text-sm lg:text-[16px] text-[#525560]">
          <b>OUR MISSION:</b> Empower, Support, Educate
        </p>
        <p className="text-sm lg:text-[16px] text-[#525560]">
          <b>VISION STATEMENT:</b> A world where every sickle cell warrior thrives.
        </p>
      </div>
    </section>
  );
};

export default WhoAreWe;
