import React from 'react'

const OurTeam = () => {

    const teams = ["team1", "team2", "team3", "team4", "team5", "team6", "team7"]

  return (
    <article className='w-full h-auto mt-28 flex justify-center items-center'>
        <div className='w-1100px h-auto py-10'>
            <div className='w-full h-auto flex justify-center items-center'>
                <p className='text-4xl font-bold text-blue_pal screen550px:text-2xl'><span className='text-green_pal'>Our</span> Team</p>
            </div>

            <div className='w-full h-auto flex justify-center items-center'>
                <p className='text-xl text-blue_pal screen550px:text-lg'>Meet the Management Team</p>
            </div>

            <div className='w-full h-auto flex justify-center items-center flex-wrap-reverse mt-5'>
                {teams.map(team => (
                    <div className='w-150px h-200px m-10 screen550px:w-100px screen550px:m-5 screen450px:w-80px' key={team} >
                        <div className='w-full h-150px screen550px:h-100px screen450px:h-80px'>
                            <img src={require(`../../asset/our_team/${team}.png`)} alt={team}className='w-full h-full' />
                        </div>

                        <div className='w-full h-50px'>
                            <p className='text-center text-lg text-blue_pal font-semibold'>Name</p>
                            <p className='text-center text-lg text-blue_pal'>Position</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </article>
  )
}

export default OurTeam