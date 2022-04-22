import React from 'react'

const Feedback = () => {
  return (
    <article className='w-full h-auto mt-24 flex justify-center items-center'>
        <div className='w-1100px h-auto py-10 px-10'>
            <div className='w-full h-auto flex items-center screen900px:justify-center screen900px:text-center'>
                <p className='text-4xl font-bold text-blue_pal screen550px:text-3xl'>What Our clients <strong className='text-green_pal'>say</strong></p>
            </div>

            <div className='w-full h-auto flex justify-center screen900px:grid'>
                <div className='w-full h-auto flex justify-center items-center mt-10'>
                    <img src={require('../../asset/Home/client_feedback.png')} alt="Client" className='w-300px h-auto' />
                </div>

                <div className='w-full h-auto'>
                    <div className='w-full h-auto flex justify-center items-center'>
                        <img src={require('../../asset/Home/client_feedback_text.png')} alt="Client FeedBack" className='w-500px h-auto'/>
                    </div> 

                    <div className='w-full h-20 flex items-center screen900px:justify-end'>
                        <div className='w-auto h-auto -ml-10 screen900px:ml-0'>
                            <p className='text-blue_pal font-bold text-xl'>Maria Calzoni</p>
                            <p className='text-blue_pal text-xl'>CEO of Marble</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Feedback