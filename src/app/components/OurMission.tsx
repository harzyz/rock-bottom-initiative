import React from 'react'

const OurMission = () => {
  const Missions = [
    {
      id: 1,
      title: 'Our mission',
      subtitle: 'Empower - Support - Educate: Building Resilient Lives',
      content: 'Our mission is to make a meaningful impact in the lives of people affected by sickle cell disease. Our organization, the Rock Bottom Sickle Cell Initiative, has been tirelessly working to raise awareness about sickle cell disease and provide support to individuals and families affected by this condition.'
    },
    {
      id: 2,
      title: 'Our vision',
      subtitle: 'A World Where Every Sickle  Cell Warrior Thrives',
      content: 'We are dedicated to raising awareness and providing comprehensive education about SCD to the public. Educate warriors on the need for frequent lab test. Blood test can detect other problems such as anaemia or organ damage so it can be treated early. Urine testing can also detect early kidney problems or infections.'
    },
  ]

  return (
    <section className='w-full flex lg:flex-row flex-col gap-[20px] lg:items-end bg-[#8B0000] lg:px-[100px] lg:justify-between px-[15px] lg:py-[60px] py-[30px] '>
      {Missions.map((item)=> (
        <div key={item.id} className='lg:w-[45%] flex flex-col gap-[10px] text-[#fff]'>
        <h1 className='font-[600] uppercase text-[#fff] '>{item.title}</h1>
        <p className='font-[700] text-[28px]'>{item.subtitle}</p>
        <p className='font-[400]'>{item.content}</p>
      </div>
      ))}
    </section>
  )
}

export default OurMission
