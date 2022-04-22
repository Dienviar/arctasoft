import React, {useEffect} from 'react'
import Landing from '../Components/AboutUs/Landing'
import MissionVission from '../Components/AboutUs/MissionVission'
import OurTeam from '../Components/AboutUs/OurTeam'

const AboutUs = () => {
    document.title = "About us"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <section className='w-full h-auto mt-10'>
      <Landing/>
      <MissionVission/>
      <OurTeam/>
    </section>
  )
}

export default AboutUs