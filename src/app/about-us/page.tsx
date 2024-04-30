import React from 'react'
import Navbar from '../components/Navbar'
import OurGoal from '../components/OurGoal'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import WhoAreWeee from '../components/WhoAreWeee'

const page = () => {
  return (
    <div className='set'>
      <Navbar />
      <WhoAreWeee />
      <OurGoal />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default page
