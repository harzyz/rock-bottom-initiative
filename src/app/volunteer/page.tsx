import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import VolunteerImg from "../assets/images/volunteerImage.png";
import BrownButton from "../components/BrownButton";

const Volunteer = () => {
  return (
    <div className="bg-[#FAFAFA] flex flex-col  w-full h-full">
      <Navbar />
      <div className="flex flex-col lg:flex-row h-full ">
        <div className="lg:w-[45%] lg:p-0 p-[10px] h-[200px] lg:h-[700px]">
          <Image
            className="w-full h-full object-cover"
            src={VolunteerImg}
            alt="Group of people smiling"
          />
        </div>
        <div className="lg:w-[55%] px-[15px] pt-[50px] flex justify-center">
          <form className="lg:w-[60%] gap-[20px] flex flex-col">
            
            <h1 className="font-bold text-[20px] lg:text-[36px] ">Volunteer Today!</h1>
            <p className="text-[#525560] text-xs">
            You are one step away from making an impact on the lives of people that need it every day
            </p>
            <div className="w-full flex-col lg:flex-row justify-between flex ">
              <div className="flex lg:w-[45%] gap-[10px] flex-col">
                <label className="text-[#9B9B9B] text-[18px]">First Name</label>
                <input className="h-[50px] rounded-[8px] bg-[#F2F2F2]" type="text" />
              </div>
              <div className="flex lg:w-[45%] gap-[10px] flex-col">
                <label className="text-[#9B9B9B] text-[18px]">Last Name</label>
                <input className="h-[50px] rounded-[8px] bg-[#F2F2F2]" type="text" />
              </div>
            </div>
            <div className="w-full ">
              <div className="flex lg:w-[45%] gap-[10px] flex-col">
                <label className="text-[#9B9B9B] text-[18px]">Email Address</label>
                <input className="h-[50px] rounded-[8px] bg-[#F2F2F2]" type="text" />
              </div>
            </div>
            <div className="w-full gap-[10px] flex flex-col">
              <label className="text-[#9B9B9B] text-[18px]">Message</label>
              <textarea
                className="p-[10px] h-[130px] bg-[#F2F2F2]"
                placeholder="Type your Message"></textarea>
            </div>
            <BrownButton className="w-[130px] bg-[#8B0000] text-xs px-[15px]" label="Send a message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
