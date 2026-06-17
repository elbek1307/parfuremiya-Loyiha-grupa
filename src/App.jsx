import React from 'react'
import Hero from './Components/Hero/Hero'
import SectionOne from './Components/SectionOne/SectionOne'
import SectionTwo from './Components/SectionTwo/SectionTwo'
import Seaction_six_farhod from './Components/Seaction_six_farhod/Seaction_six_farhod'
import Section_seven_farhod from './Components/Section_seven_farhod/Section_seven_farhod'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Nash } from './Components/Nash/Nash'
import Polu from './Components/Polu/Polu'



const App = () => {
  return (
    <>

     
    <header>
      <Navbar />
    </header>
     <main>
       <Hero/>
    <SectionOne/>
    <SectionTwo/>
    <Nash />
    <Polu />
    <Seaction_six_farhod/>
    <Section_seven_farhod/>
     </main>

    <Footer />
    </>
  )
}

export default App