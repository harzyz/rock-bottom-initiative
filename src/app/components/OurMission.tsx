import React from 'react'

const OurMission = () => {
  const Missions = [
    {
      id: 1,
      title: 'Our mission',
      subtitle: 'Empower - Support - Educate: Building Resilient Lives',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
    },
    {
      id: 2,
      title: 'Our vision',
      subtitle: 'A World Where Every Sickle  Cell Warrior Thrives',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
    },
  ]

  return (
    <section className='w-full flex lg:flex-row flex-col gap-[20px] lg:items-end bg-[#8B0000] lg:px-[100px] lg:justify-between px-[15px] lg:py-[60px] py-[30px] '>
      {Missions.map((item)=> (
        <div key={item.id} className='lg:w-[45%] flex flex-col gap-[10px] text-[#fff]'>
        <h1 className='font-[600] uppercase text-sm text-[#fff] '>{item.title}</h1>
        <p className=' font-[600] '>{item.subtitle}</p>
        <p>{item.content}</p>
      </div>
      ))}
    </section>
  )
}

export default OurMission
