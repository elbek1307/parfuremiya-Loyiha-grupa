import React from 'react'
import Hero from './Components/Hero/Hero'
import SectionOne from './Components/SectionOne/SectionOne'
import SectionTwo from './Components/SectionTwo/SectionTwo'
import Seaction_six_farhod from './Components/Seaction_six_farhod/Seaction_six_farhod'
import Section_seven_farhod from './Components/Section_seven_farhod/Section_seven_farhod'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Nash } from './Components/Nash/Nash'



const App = () => {
  return (
    <>

     
    <header>
      <Navbar />
    </header>
    <Hero/>
    <SectionOne/>
    <SectionTwo/>
    <Nash />
    <Seaction_six_farhod/>
    <Section_seven_farhod/>

    <Footer />
    </>
  )
}

export default App