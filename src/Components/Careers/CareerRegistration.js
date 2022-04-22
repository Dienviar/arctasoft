import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

const CareerRegistration = ({careerName}) => {
  return (
     <div className='w-full h-auto mt-10'>
        <div className='w-full h-20 flex justify-center items-center'>
            <p className='text-3xl text-green_pal font-bold'>Apply Now!</p>
        </div>

        <div className='w-fullh-auto px-3 flex justify-center'>
            <div className='w-800px h-auto screen900px:w-full screen900px:px-3'>
                <div className='relative w-full h-auto flex screen550px:grid'>
                    <TextField id="standard-basic" label="Firstname" variant="standard" className='w-full' autoComplete='off'/>
                    <TextField id="standard-basic" label="Lastname" variant="standard" className='w-full' autoComplete='off'/>
                </div>

                <div className='relative w-full h-auto flex mt-5 screen550px:grid'>
                    <TextField id="standard-basic" label="Email" variant="standard" className='w-full' autoComplete='off'/>
                    <TextField id="standard-basic" label="Phone Number" variant="standard" className='w-full screen550px:mt-5' autoComplete='off'/>
                </div>

                <div className='relative w-full h-auto flex mt-5'>
                    <TextField id="standard-basic" label="Address" variant="standard" className='w-full' autoComplete='off' />
                </div>

                <div className='relative w-full h-auto flex mt-5'>
                    <TextField id="standard-basic" label="Position Applying" value={careerName} variant="standard" className='w-full' autoComplete='off'/>
                </div>

                <div className='relative w-full h-auto flex mt-5'>
                    <TextField id="standard-basic" multiline row={10} label="Describe yourself" variant="standard" className='w-full' autoComplete='off'/>
                </div>


                <div className='relative w-full h-auto flex mt-5'>
                    <TextField id="standard-basic" label="Salary Expectation" variant="standard" className='w-full' autoComplete='off'/>
                </div>

                <div className='relative w-full h-auto flex mt-5'>
                    <Button
                        style={{ backgroundColor: "transparent", border: '3px solid #017F7F', color: "#017F7F"}}
                        variant="contained"
                        component="label"
                        >
                        Upload File
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                </div>

                <div className='relative w-full h-auto flex justify-center mt-5'>
                    <Button variant="contained" style={{ backgroundColor: "#017F7F" }} className='w-36'>Submit</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CareerRegistration