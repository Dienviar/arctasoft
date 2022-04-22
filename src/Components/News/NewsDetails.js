import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'

const NewsDetails = ({open, selectedNews, setNewsDetailsDom}) => {
  return (
    <div className={`${open ? 'left-0 duration-300 visible relative' : '-left-1500px duration-0 invisible absolute'} top-0 bg-white w-full h-full -mt-10 flex justify-center`}>
      <div className='w-1100px h-auto'>
        <div className='w-full h-auto flex bg-green_pal screen950px:grid'>
          <div className='w-full h-full flex justify-center items-center mt-16 screen950px:mt-5 screen950px:order-last'>
            <div className='w-full h-auto px-5 py-5 mb-10'>

              <div className='w-full h-auto mb-10'>
                <p className='text-lg text-white hover:underline cursor-pointer' onClick={() => setNewsDetailsDom(false)}><MdOutlineArrowBack className='inline'/>Back to News</p>
              </div>

              <div className='w-full h-auto'>
                <p className='text-4xl text-white font-bold screen550px:text-3xl'>News/Article Title</p>
              </div>

              <div className='w-full h-auto'>
                <p className='text-xl text-white'>News Author</p>
              </div>

              <div className='w-full h-auto'>
                <p className='text-base text-white'>Date</p>
              </div>

              <div className='w-full h-auto text-center mt-1'>
                <p className='text-4xl text-green_pal font-bold'></p>
              </div>
            </div>
          </div>

          <div className='w-full h-auto'>
            {
              open

              &&

              <img src={require(`../../asset/News/${selectedNews}.png`)} alt={selectedNews} className='w-full h-auto' />
            }
          </div>
        </div>

        <div className='w-full h-auto px-3 mt-5 mb-16'>
            <p className='text-xl text-justify screen550px:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at massa amet quis. Arcu, mauris risus faucibus mattis ac turpis. Porttitor ipsum ut ut viverra ut eu elementum. Quisque gravida sit turpis netus ultrices ultricies. Gravida sed euismod nulla accumsan mauris, interdum magna. Fames et elit diam elementum scelerisque turpis lectus pretium. Cras dolor morbi neque purus neque.
            </p>
            <br/>
            <p className='text-xl text-justify screen550px:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at massa amet quis. Arcu, mauris risus faucibus mattis ac turpis. Porttitor ipsum ut ut viverra ut eu elementum. Quisque gravida sit turpis netus ultrices ultricies. Gravida sed euismod nulla accumsan mauris, interdum magna. Fames et elit diam elementum scelerisque turpis lectus pretium. Cras dolor morbi neque purus neque.
            </p>     
            <br/>
            <p className='text-xl text-justify screen550px:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at massa amet quis. Arcu, mauris risus faucibus mattis ac turpis. Porttitor ipsum ut ut viverra ut eu elementum. Quisque gravida sit turpis netus ultrices ultricies. Gravida sed euismod nulla accumsan mauris, interdum magna. Fames et elit diam elementum scelerisque turpis lectus pretium. Cras dolor morbi neque purus neque.
            </p>                  
        </div>
      </div>
    </div>
  )
}

export default NewsDetails