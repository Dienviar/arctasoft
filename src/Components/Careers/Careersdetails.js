import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Jobdetails1 from './Jobdetails1'
import Jobdetails2 from './Jobdetails2'
import { MdOutlineArrowBack } from 'react-icons/md'
import CareerRegistration from './CareerRegistration'

const Careersdetails = ({careerName, setCareerDetailDom}) => {

    const [registrationDom, setRegistrationDom] = useState(false)

    const closeActiveDom = () => {
        if(registrationDom){
            setRegistrationDom(false)
            return
        }

        setCareerDetailDom(false)
        return
    }

  return (
    <article className='w-full h-auto flex justify-center mt-20'>
        <div className='w-1100px h-auto screen250px:w-250px'>
            <div className='w-full h-auto flex justify-center screen950px:grid'>
                <div className='w-full h-full flex justify-center items-center mt-16 screen950px:mt-5'>
                    <div className='w-full h-auto px-5'>

                        <div className='w-full h-auto mb-10'>
                            <p className='text-lg text-blue_pal hover:underline cursor-pointer' onClick={closeActiveDom}><MdOutlineArrowBack className='inline'/> {!registrationDom ? 'Back to Careers List' : 'Back to Job Details'}</p>
                        </div>

                        <div className='w-full h-auto text-center'>
                            <p className='text-xl text-blue_pal'>We are currently looking for a</p>
                        </div>

                        <div className='w-full h-auto text-center mt-1'>
                            <p className='text-4xl text-green_pal font-bold'>{careerName}</p>
                        </div>

                        {
                            !registrationDom 

                            &&
                      
                            <div className='w-full h-auto mt-5 flex justify-center'>
                                <Button onClick={() => setRegistrationDom(true)} variant="contained" style={{ backgroundColor: "#003152" }} className='w-36 h-16'>Apply Now</Button>
                            </div>
                        }
                    </div>
                </div>

                <div className='w-full h-full flex justify-center items-center screen950px:mt-5'>
                    <img src={require('../../asset/Careers/career_details_pic.png')} alt="" className='w-auto h-auto'/>
                </div>
            </div>

            {
                !registrationDom

                ?
                
                <div>
                    <Jobdetails1/>
                    <Jobdetails2/>
                </div>

                :

                <CareerRegistration careerName={careerName}/>
            }
        </div>
    </article>
  )
}

export default Careersdetails