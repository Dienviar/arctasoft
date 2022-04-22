import React from 'react'

const Landing = () => {
  return (
    <article className='w-full h-auto flex justify-center mt-20'>
        <div className='w-1100px h-auto screen250px:w-250px flex justify-center screen950px:grid'>
            <div className='w-full h-full flex justify-center items-center screen950px:mt-5'>
                <div className='w-full h-auto px-5'>
                    <div className='w-full h-auto'>
                        <p className='text-4xl text-blue_pal font-bold'><strong className='text-green_pal'>Are you </strong>one of us?</p>
                    </div>

                    <div className='w-full h-auto mt-2'>
                        <p className='text-xl text-blck'>
                            Help us build the next great startup. Check out the available roles below and submit your cover letter and resume
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full h-full flex justify-center items-center screen950px:mt-5'>
                <img src={require('../../asset/Careers/landing_pic.png')} alt="" className='w-auto h-auto'/>
            </div>
        </div>
    </article>
  )
}

export default Landing