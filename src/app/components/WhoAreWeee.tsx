import React from 'react'

const WhoAreWeee = () => {
  return (
    <section
      className="w-full flex lg:flex-row flex-col gap-[20px] lg:items-center bg-[#FAFAFA] lg:px-[100px] px-[15px] lg:py-[60px] py-[30px] ">
      <div className="lg:w-[60%] flex flex-col gap-[10px]">
        <div className="flex gap-[15px] items-center">
          <div className="w-[30px] border border-[#000]"></div>
          <h4 className="font-bold roboto test text-sm">WHO ARE WE</h4>
        </div>
        <h1 className="text-[30px] lg:text-[56px] lg:leading-[57px] font-[700]">
          We are a non-
          <br />
          governmental <br /> organization
        </h1>
      </div>
      <div className="lg:w-[35%] flex flex-col gap-[10px]">
        <b className="text-sm lg:text-[16px]">
          CORE VALUES:
        </b>
        <p className="text-sm lg:text-[16px] text-[#54577A]">
        Accuracy: We are committed to providing accurate and reliable information.
        </p>
        <p className="text-sm lg:text-[16px] text-[#54577A]">
        Integrity: We uphold the highest ethical standards in data assessment and reporting
        </p>
        <p className="text-sm lg:text-[16px] text-[#54577A]">
        Transparency: We are open and transparent about our methodologies and findings.
        </p>
        <p className="text-sm lg:text-[16px] text-[#54577A]">
        Trust: We build trust by delivering consistent and dependable data evaluations.
        </p>
      </div>
    </section>
  )
}

export default WhoAreWeee
