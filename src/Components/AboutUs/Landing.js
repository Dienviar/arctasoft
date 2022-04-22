import React from 'react'

const Landing = () => {
  return (
    <article className='w-full h-auto flex justify-center flex justify-center screen950px:grid'>
        <div className='w-1100px h-auto screen950px:w-full'>
            <div className='w-full h-auto flex screen950px:grid'>
                <div className='w-full h-full p-10'>
                    <div className='w-full h-auto'>
                        <p className='text-3xl text-blue_pal'>We design world-class</p>

                        <p className='text-4xl text-blue_pal font-bold'><span className='text-green_pal'>Software</span> Products</p>
                    </div>

                    <div className='w-full h-auto mt-10'>
                        <p className='text-xl text-blue_pal screen950px:text-justify'>
                            Arctasoft is Globe’s corporate venture builder that ideates, launches, accelerates, and scales new business ideas that have the potential to grow.
                        </p>

                        <br/>

                        <p className='text-xl text-blue_pal screen950px:text-justify'>
                            We act like a startup factory and have teams, frameworks, infrastructures, and strategies already in place, proven, tested, and backed by Globe, Ayala, and other partner networks, to accelerate the growth of ventures.
                        </p>
                    </div>                    
                </div>
                <div className='w-full h-full flex justify-center items-center'>
                    <img src={require('../../asset/Aboutus/aboutus_img1.png')} alt="About1" />
                </div>
            </div>
            <div className='w-full h-auto flex screen950px:grid'>
                <div className='w-full h-full flex justify-center items-center screen950px:order-last'>
                    <img src={require('../../asset/Aboutus/aboutus_img2.png')} alt="About2" />
                </div>
                <div className='w-full h-full p-10'>
                    <div className='w-full h-auto mt-10'>
                        <p className='text-xl text-blue_pal text-right screen950px:text-justify'>
                            Arctasoft is Globe’s corporate venture builder that ideates, launches, accelerates, and scales new business ideas that have the potential to grow.
                        </p>

                        <br/>

                        <p className='text-xl text-blue_pal text-right screen950px:text-justify'>
                            We act like a startup factory and have teams, frameworks, infrastructures, and strategies already in place, proven, tested, and backed by Globe, Ayala, and other partner networks, to accelerate the growth of ventures.
                        </p>
                    </div>                    
                </div>
            </div>
        </div>
    </article>
  )
}

export default Landing