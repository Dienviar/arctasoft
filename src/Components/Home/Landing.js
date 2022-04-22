import React from 'react'

const Landing = () => {
  return (
    <article className='w-full h-auto flex justify-center mt-20'>
        <div className='w-1100px h-auto flex screen800px:grid screen500px:w-full'>
            <div className='w-full h-full'>
                <div className='w-full h-auto pt-16 screen800px:pt-0'>
                    <div className='w-full h-auto flex items-center px-8 screen500px:justify-center'>
                        <p className='text-4xl font-bold screen500px:text-3xl screen500px:text-center'>We build <strong className='text-green_pal'>Enterprise Software</strong></p>
                    </div>

                    <div className='w-full h-auto flex justify-center items-center mt-5 px-8 screen500px:text-center'>
                        <p className='text-2xl screen500px:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>  
                </div>              
            </div>
            
            <div className='relative w-full h-full flex items-center px-5 screen800px:mt-10 screen800px:justify-center'>
                {/* <div className='relative w-400px h-400px bg-red-500 screen500px:w-300px screen500px:h-300px screen300px:w-full screen300px:h-full'>
                    
                </div> */}
                <img src={require('../../asset/Home/homepage_landing.png')} alt="" />
            </div>
        </div>
    </article>
  )
}

export default Landing