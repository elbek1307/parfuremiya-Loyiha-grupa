import React from 'react'
import Hero from './Components/Hero/Hero'
import SectionOne from './Components/SectionOne/SectionOne'
import SectionTwo from './Components/SectionTwo/SectionTwo'


import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Nash } from './Components/Nash/Nash'
import Polu from './Components/Polu/Polu'
import Team from './Components/Seaction_six_farhod/Team'
import News from './Components/Section_seven_farhod/News'




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
    <Team />
    <News/>
     </main>

    <Footer />
    </>
  )
}

export default App