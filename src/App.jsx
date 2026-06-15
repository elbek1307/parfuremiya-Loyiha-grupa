import React from 'react'
import Hero from './Components/Hero/Hero'
import { Navbar } from './Components/Navbar/Navbar'
import { Footer } from './Components/Footer/Footer'
import Seaction_six_farhod from './Components/Seaction_six_farhod/Seaction_six_farhod'
import Section_seven_farhod from './Components/Section_seven_farhod/Section_seven_farhod'


const App = () => {
  return (
    <>

      <Hero />
    <header>
      <Navbar />
    </header>
    <Seaction_six_farhod/>
    <Section_seven_farhod/>
    <Footer />
    </>
  )
}

export default App