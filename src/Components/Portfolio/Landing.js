import React from 'react'

const Landing = () => {

    const images = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9"]

  return (
    <article className='w-full h-auto flex justify-center mt-20'>
        <div className='w-1100px h-auto screen250px:w-250px'>
            <div className='w-full h-20 flex justify-center items-center'>
                <p className='text-blue_pal text-3xl font-bold'>Our <strong className='text-green_pal'>Portfolio </strong>Company</p>
            </div>

            <div className='w-full h-20 flex justify-center items-center mb-5 text-center'>
                <p className='text-blue_pal text-xl px-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis suspendisse sed eget quam donec mollis vitae scelerisque.
                </p>
            </div>

            <div className='w-full h-auto flex justify-center flex-wrap'>
                {images.map(image => (
                     <div className='relative w-300px h-200px m-3 screen700px:w-full screen700px:h-auto' key={image}>
                        <div className='w-full h-full rounded-xl'>
                            <img src={require(`../../asset/Portfolio/${image}.png`)} alt={image} className='w-full h-full screen700px:h-auto' />
                        </div>

                        <div className='absolute bottom-0 w-full bg-dark_green_pal bg-opacity-80 h-12 flex items-center rounded-b-xl'>
                            <p className='text-white text-xl font-bold pl-2'>Company Name</p>
                        </div>
                    </div>
                ))}
            </div>

{/* 
            <div className='w-full h-auto flex justify-center flex-wrap'>
                {images.map(image => (
                    <div className='w-300px h-auto bg-white m-3 shadow-xl rounded-lg'>
                        <div className='w-full h-200px'>
                            <img src={require(`../../asset/News/${image}.png`)} alt="" />
                        </div>
                        <div className='w-full h-auto'><p className='pt-2 pl-2 text-2xl font-bold text-green_pal'>New Title</p></div>
                        <div className='w-full h-auto'><p className='pl-2 text-sm text-blue_pal'>News Auth Date</p></div>
                        <div className='w-full h-auto mt-5'>
                            <p className='pl-2 text-base text-black'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi nec aliquam mauris nunc, turpis magna libero ultricies. Sed erat vestibulum volutpat eget at tristique leo. Eleifend sit sed arcu ut nisi orci. Tellus gravida leo, urna duis bibendum blandit....
                            </p>
                        </div>
                        <div className='w-full h-auto pb-2 pl-2 mt-5 mb-5'>
                            <Button variant="contained" className='w-15 h-5'><span className='text-xs'>Read more</span></Button>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    </article>
  )
}

export default Landing