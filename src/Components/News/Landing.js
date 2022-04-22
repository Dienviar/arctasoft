import React, { useState } from 'react'
import Button from '@mui/material/Button';
import NewsDetails from './NewsDetails';

const Landing = () => {

    const images = ["img1", "img2", "img3", "img4", "img5", "img6"]

    const [newsDetailsDom, setNewsDetailsDom] = useState(false)
    const [selectedNews, setSelectedNews] = useState('')

    const viewNews = (image) => {        
        window.scrollTo({
          top: 0,
          left: 0,
        });

        setNewsDetailsDom(true)
        setSelectedNews(image)
    }

  return (
      <>
    <article className={`w-full h-auto justify-center mt-20 ${newsDetailsDom ? 'hidden' : 'flex'}`}>
        <div className='w-1100px h-auto screen250px:w-250px'>
            <div className='w-full h-20 flex justify-center items-center mb-5'>
                <p className='text-blue_pal text-3xl font-bold'><strong className='text-green_pal'>Arctasoft </strong>News</p>
            </div>

            <div className='w-full h-auto flex justify-center flex-wrap'>
                {images.map(image => (
                    <div className='w-300px h-auto bg-white m-3 shadow-xl rounded-lg screen670px:w-full' key={image}>
                        <div className='w-full h-auto flex screen670px:justify-center'>
                            <img src={require(`../../asset/News/${image}.png`)} alt={image} className='w-full h-auto' />
                        </div>
                        <div className='w-full h-auto'><p className='pt-2 pl-2 text-2xl font-bold text-green_pal'>New Title</p></div>
                        <div className='w-full h-auto'><p className='pl-2 text-sm text-blue_pal'>News Auth Date</p></div>
                        <div className='w-full h-auto mt-5'>
                            <p className='pl-2 text-base text-black'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi nec aliquam mauris nunc, turpis magna libero ultricies. Sed erat vestibulum volutpat eget at tristique leo. Eleifend sit sed arcu ut nisi orci. Tellus gravida leo, urna duis bibendum blandit....
                            </p>
                        </div>
                        <div className='w-full h-auto pb-2 pl-2 mt-5 mb-5'>
                            <Button variant="contained" onClick={() => viewNews(image)} className='w-15 h-5'><span className='text-xs'>Read more</span></Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </article>
    <NewsDetails open={newsDetailsDom} selectedNews={selectedNews} setNewsDetailsDom={setNewsDetailsDom}/>
    </>
  )
}

export default Landing