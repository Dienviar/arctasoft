import React, {useEffect} from 'react'
import Landing from '../Components/Home/Landing'
import Whatweoffer from '../Components/Home/Whatweoffer'
import Ourteam from '../Components/Home/Ourteam'
import Trustedus from '../Components/Home/Trustedus'
import Feedback from '../Components/Home/Feedback'
import Letstalk from '../Components/Home/Letstalk'

const Home = () => {
    document.title = "Home"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <section className='w-full h-auto mt-10'>
      <Landing/>
      <Whatweoffer/>
      <Ourteam/>
      <Trustedus/>
      <Feedback/>
      <Letstalk/>
    </section>
  )
}

export default Home