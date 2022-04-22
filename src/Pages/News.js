import React, {useEffect} from 'react'
import Landing from '../Components/News/Landing'

const News = () => {
    document.title = "News"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <section className='w-full h-auto mt-10'>
      <Landing/>
    </section>
  )
}

export default News