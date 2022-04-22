import React, {useEffect} from 'react'
import Landing from '../Components/Careers/Landing'
import Arctasoftcareer from '../Components/Careers/Arctasoftcareer'

const Careers = () => {
    document.title = "Careers"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <section className='w-full h-auto mt-10'>
      <Landing/>
      <Arctasoftcareer/>
    </section>
  )
}

export default Careers