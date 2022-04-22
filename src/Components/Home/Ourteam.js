import React from 'react'

const Ourteam = () => {

    const teams = ["team1", "team2", "team3", "team4", "team5"]

  return (
    <article className='w-full h-auto mt-28 flex justify-center items-center'>
        <div className='w-1100px h-auto py-10'>
            <div className='w-full h-auto flex justify-center items-center'>
                <p className='text-4xl font-bold text-blue_pal screen550px:text-2xl'>Our Team</p>
            </div>

            <div className='w-full h-auto flex justify-center items-center'>
                <p className='text-xl text-blue_pal screen550px:text-lg'>Meet the Management Team</p>
            </div>

            <div className='w-full h-auto flex justify-center items-center flex-wrap-reverse mt-5'>
                {teams.map(team => (
                    <img src={require(`../../asset/our_team/${team}.png`)} key={team} alt={`${team}`} className='w-150px h-150px screen900px:w-100px screen900px:h-100px screen550px:w-80px screen550px:h-80px' />
                ))}
            </div>
        </div>
    </article>
  )
}

export default Ourteam