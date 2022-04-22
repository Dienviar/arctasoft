import React, {useEffect} from 'react'
import Landing from '../Components/Portfolio/Landing'

const Portfolio = () => {
    document.title = "Portfolio"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <section className='w-full h-auto mt-10'>
      <Landing/>
    </section>
  )
}

export default Portfolio