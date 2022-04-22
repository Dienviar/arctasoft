import React from 'react'
import { BsFlag } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'

const MissionVission = () => {
  return (
    <article className='w-full h-auto flex justify-center flex justify-center screen950px:grid my-36 screen650px:px-5'>
        <div className='w-1100px h-auto screen950px:w-full flex screen650px:grid'>
            <div className='w-full h-300px bg-green_pal flex justify-center items-center rounded-2xl mx-10 shadow-xl screen650px:mx-0'>
                <div className='w-full h-auto'>
                    <div className='w-full h-auto flex justify-center items-center'>
                        <BsFlag className='text-white w-20 h-20'/>
                    </div>

                    <div className='w-full h-auto flex justify-center items-center mt-5'>
                        <p className='text-3xl text-white font-bold'>Mission</p>
                    </div>

                    <div className='w-full h-auto flex justify-center items-center mt-5 px-5 text-center'>
                        <p className='text-white text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>

            <div className='w-full h-300px bg-green_pal flex justify-center items-center rounded-2xl mx-10 shadow-xl screen650px:mx-0 screen650px:mt-10'>
                <div className='w-full h-auto'>
                    <div className='w-full h-auto flex justify-center items-center'>
                        <AiOutlineEye className='text-white w-20 h-20'/>
                    </div>

                    <div className='w-full h-auto flex justify-center items-center mt-5'>
                        <p className='text-3xl text-white font-bold'>Vission</p>
                    </div>

                    <div className='w-full h-auto flex justify-center items-center mt-5 px-5 text-center'>
                        <p className='text-white text-xl'>Tempus dignissim metus maecenas velit viverra..</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default MissionVission