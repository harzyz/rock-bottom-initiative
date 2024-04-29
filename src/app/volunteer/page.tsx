import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import VolunteerImg from "../assets/images/volunteerImage.png";
import BrownButton from "../components/BrownButton";

const Volunteer = () => {
  return (
    <div className="bg-[#FAFAFA] flex flex-col  w-full h-full">
      <Navbar />
      <div className="flex h-full ">
        <div className="w-[45%] h-[700px]">
          <Image
            className="w-full h-full object-cover"
            src={VolunteerImg}
            alt="Group of people smiling"
          />
        </div>
        <div className="w-[55%] pt-[50px] flex justify-center">
          <form className="w-[60%] gap-[20px] flex flex-col">
            
            <h1 className="font-bold text-[36px] ">Volunteer Today!</h1>
            <p className="text-[#525560] text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen
              varius enim in eros elementum tristique.{" "}
            </p>
            <div className="w-full justify-between flex ">
              <div className="flex w-[45%] gap-[10px] flex-col">
                <label className="text-[#9B9B9B] text-[18px]">First Name</label>
                <input className="h-[50px] rounded-[8px] bg-[#F2F2F2]" type="text" />
              </div>
              <div className="flex w-[45%] gap-[10px] flex-col">
                <label className="text-[#9B9B9B] text-[18px]">Last Name</label>
                <input className="h-[50px] rounded-[8px] bg-[#F2F2F2]" type="text" />
              </div>
            </div>
            <div className="flex ">
              <div className="flex w-[45%] gap-[10px] flex-col">
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
            <BrownButton className="w-[130px] text-xs px-[15px]" label="Send a message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;