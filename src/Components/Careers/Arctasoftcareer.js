import React, { useState } from 'react'
import { RiInformationFill } from 'react-icons/ri'
import Button from '@mui/material/Button';
import Careersdetails from './Careersdetails';

const Arctasoftcareer = () => {

    const [careerDetailsDom, setCareerDetailDom] = useState(false)
    const [careerName, setCareerName] = useState('')

    const careers = ["Software Engineer", "UI/UX Designer", "Mobile Developer", "Web Developer", "QA Tester", "Game Developer", "Data Analyts", "IT Consultant", "Database Manager", "Software Architecture"]

    const openCareerDetails = (career) => {
        setCareerName(career)
        setCareerDetailDom(true)
    }

  return (
    <article className='w-full h-auto flex justify-center mt-20'>

        {
            !careerDetailsDom 

            ?

            <div className='w-1100px h-auto screen250px:w-250px'>
                    <div className='w-full h-20 flex items-center'>
                        <p className='text-4xl text-blue_pal pl-3 font-bold screen500px:text-3xl'><strong className='text-green_pal'>Arctasoft </strong>Careers</p>
                    </div>

                    <div className='w-full h-auto flex flex-wrap justify-center'>
                        {careers.map(career => (
                            <div className='relative w-200px h-220px bg-white border-4 rounded-2xl border-green_pal m-2 screen670px:w-full screen670px:h-auto' key={career}>
                                <div className='w-full h-10 flex items-center'>
                                    <RiInformationFill className='text-green_pal w-6 h-6 ml-2'/>
                                </div>

                                <div className='w-full h-auto flex items-center'>
                                    <p className='text-xl font-bold text-green_pal px-2'>{career}</p>
                                </div>

                                <div className='w-full h-auto flex items-center'>
                                    <p className='text-base text-black px-2'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>

                                
                                <div className='absolute bottom-2 left-2 w-full h-auto flex items-center screen670px:mt-10 screen670px:relative'>
                                    <Button onClick={() => openCareerDetails(career)} variant="contained" style={{ backgroundColor: "#003152" }} className='h-5  w-30'>View Details</Button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            :

            <Careersdetails careerName={careerName} setCareerDetailDom={setCareerDetailDom}/>
        }
 
    </article>
  )
}

export default Arctasoftcareer