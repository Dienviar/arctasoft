import React from 'react'
import Button from '@mui/material/Button';
import { AiOutlineMail } from 'react-icons/ai'

const Letstalk = () => {
  return (
    <article className='w-full h-auto mt-24 flex justify-center items-center'>
        <div className='w-1100px h-auto py-10 px-10'>
            <div className='w-full h-auto flex items-center justify-center text-center'>
                <p className='text-3xl text-blue_pal screen550px:text-xl'>Need help with a project?</p>
            </div>

            <div className='w-full h-auto flex items-center justify-center mt-4 text-center'>
                <p className='text-6xl font-bold text-green_pal custom-shadow'>Let’s talk!</p>
            </div>

            <div className='w-full h-auto flex items-center justify-center mt-7 text-center'>
                <p className='text-xl text-dark_green_pal'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla porttitor diam fermentum viverra a sem lacus. Leo donec non felis amet, proin mauris diam. Adipiscing dui netus dui mi vitae. Adipiscing duis ut urna ut vivamus enim sit auctor. Neque vitae cursus amet, laoreet.                
                </p>
            </div>

            <div className='w-full h-auto flex items-center justify-center mt-10 text-center'>
                <Button variant="contained" style={{ backgroundColor: "#017F7F"}} className="h-16 w-60"><span className='text-xl'>Contact Us &nbsp; </span><AiOutlineMail className='inline w-7 h-7'/></Button>
            </div>
        </div>
    </article>
  )
}

export default Letstalk