import React from 'react'
import { TiChevronRightOutline } from 'react-icons/ti'

const Jobdetails2 = () => {
  return (
    <div className='w-full h-auto mt-10'>
        <div className='w-full h-auto'>
            <div className='w-full h-20 flex items-center pl-3'>
                <p className='text-green_pal font-bold text-4xl'>Job Description</p>
            </div>

            <div className='w-full h-auto pl-3'>
                <p className='text-black text-xl'><TiChevronRightOutline className='inline text-green_pal'/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className='text-black text-xl'><TiChevronRightOutline className='inline text-green_pal'/>Vitae dui volutpat urna, nisl, tempus egestas nunc, est.</p>
                <p className='text-black text-xl'><TiChevronRightOutline className='inline text-green_pal'/>Accumsan purus aenean venenatis pretium venenatis. </p>
                <p className='text-black text-xl'><TiChevronRightOutline className='inline text-green_pal'/>Nunc proin arcu cum faucibus gravida viverra. </p>
                <p className='text-black text-xl'><TiChevronRightOutline className='inline text-green_pal'/>Rhoncus lacus, dictum facilisis vel bibendum volutpat scelerisque leo.</p>
            </div>
        </div>

        <div className='w-full h-auto mt-10'>
            <div className='w-full h-20 flex items-center pl-3'>
                <p className='text-green_pal font-bold text-4xl'>Requirements</p>
            </div>

            <div className='w-full h-auto pl-3'>
                <p className='text-black text-xl'><TiChevronRightOutline className='inline text-green_pal'/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className='text-black text-xl'><TiChevronRightOutline className='inline text-green_pal'/>Vitae dui volutpat urna, nisl, tempus egestas nunc, est.</p>
                <p className='text-black text-xl'><TiChevronRightOutline className='inline text-green_pal'/>Accumsan purus aenean venenatis pretium venenatis. </p>
                <p className='text-black text-xl'><TiChevronRightOutline className='inline text-green_pal'/>Nunc proin arcu cum faucibus gravida viverra. </p>
                <p className='text-black text-xl'><TiChevronRightOutline className='inline text-green_pal'/>Rhoncus lacus, dictum facilisis vel bibendum volutpat scelerisque leo.</p>
            </div>
        </div>
    </div>
  )
}

export default Jobdetails2