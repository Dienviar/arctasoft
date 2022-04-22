import React from 'react'
import { FaSuitcase, FaWallet, FaClock } from 'react-icons/fa'

const Jobdetails1 = () => {
  return (
    <div className='w-full h-auto bg-green_pal -mt-10'>
        <div className='w-full h-20 flex justify-center items-center'>
            <p className='text-white text-4xl font-bold screen550px:text-3xl screen550px:mt-10'>Key Information</p>
        </div>

        <div className='w-full h-auto flex justify-center pb-14 screen950px:grid'>
            <div className='w-300px h-200px flex items-center'>
                <div className='w-full h-auto'>
                    <div className='w-full h-auto flex justify-center'>
                        <FaSuitcase className='text-white w-20 h-20'/>
                    </div>

                    <div className='w-full h-auto text-center'>
                        <p className='text-white font-semibold text-sm'>Job Type</p>
                        <p className='text-white font-bold text-2xl'>Internship</p>
                    </div>
                </div>
            </div>

            <div className='w-300px h-200px flex items-center'>
                <div className='w-full h-auto'>
                    <div className='w-full h-auto flex justify-center'>
                        <FaWallet className='text-white w-20 h-20'/>
                    </div>

                    <div className='w-full h-auto text-center'>
                        <p className='text-white font-semibold text-sm'>Salary</p>
                        <p className='text-white font-bold text-2xl'>$400/mo</p>
                    </div>
                </div>
            </div>


            <div className='w-300px h-200px flex items-center'>
                <div className='w-full h-auto'>
                    <div className='w-full h-auto flex justify-center'>
                        <FaClock className='text-white w-20 h-20'/>
                    </div>

                    <div className='w-full h-auto text-center'>
                        <p className='text-white font-semibold text-sm'>Duration</p>
                        <p className='text-white font-bold text-2xl'>3 months</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Jobdetails1