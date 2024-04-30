import React from 'react'
import Navbar from '../components/Navbar'
import WhoAreWe from '../components/WhoAreWe'
import OurGoal from '../components/OurGoal'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <WhoAreWe bgColor='' />
      <OurGoal />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default page
