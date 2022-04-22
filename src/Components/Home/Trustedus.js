import React from 'react'

const Trustedus = () => {

    const clients_arr = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8"]

  return (
    <article className='w-full h-auto mt-28 flex justify-center items-center'>
        <div className='w-1100px h-auto py-10 px-10'>
            <div className='w-full h-auto flex items-center justify-center'>
                <p className='text-4xl font-bold text-blue_pal screen550px:text-2xl'>Our Clients</p>
            </div>

            <div className='w-full h-auto flex items-center justify-center text-center'>
                <p className='text-4xl text-blue_pal screen550px:text-2xl'>Those who have <strong className='text-green_pal'>trusted</strong> us</p>
            </div>

            <div className='w-full h-auto flex justify-center flex-wrap items-center mt-5'>
                {clients_arr.map(client => (
                    <div className='m-5 w-150px h-150px screen900px:w-100px screen900px:h-100px screen550px:w-80px screen550px:h-80px' key={client}>
                        <img src={require(`../../asset/clients/${client}.png`)} alt={`${client}`} className='w-auto h-auto' />
                    </div>                      
                ))}
            </div>
        </div>
    </article>
  )
}

export default Trustedus