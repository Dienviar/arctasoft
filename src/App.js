import { Routes, Route, NavLink, useLocation  } from 'react-router-dom'
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import AboutUs from './Pages/AboutUs';
import News from './Pages/News';
import Careers from './Pages/Careers';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
import { useState } from 'react';
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { useEffect } from 'react'


function App() {
  const [hamburger, setHamburger] = useState(false)

  const location = useLocation()

  useEffect(() => {
    // runs on location, i.e. route, change
    setHamburger(false)
  }, [location])

  return (
    <main className="w-full screen250px:w-250px">
      <nav className='sticky top-0 z-50 w-full h-20 bg-white shadow-xl'>

        <article className='absolute z-20 flex items-center justify-center w-auto h-full screen550px:w-full'>
          <img src={require('./asset/logo/logo.png')} alt="Logo"  className='left-0 w-auto h-20 screen550px:h-70px screen400px:h-50px'/>
        </article>

        <article className='absolute z-30 flex items-center h-full mr-5 right-2 screen550px:left-5'>
          <NavLink to="/" activeclassname='active' onClick={() => setHamburger(false)} className='px-5 text-lg font-semibold duration-300 hover:text-green_pal screen950px:hidden'>Home</NavLink>
          <NavLink to="/portfolio" activeclassname='active' className='px-5 text-lg font-semibold duration-300 hover:text-green_pal screen950px:hidden'>Portfolio</NavLink>
          <NavLink to="/news" activeclassname='active' className='px-5 text-lg font-semibold duration-300 hover:text-green_pal screen950px:hidden'>News</NavLink>
          <NavLink to="/careers" activeclassname='active' className='px-5 text-lg font-semibold duration-300 hover:text-green_pal screen950px:hidden'>Careers</NavLink>
          <NavLink to="/aboutus" activeclassname='active' className='px-5 text-lg font-semibold duration-300 hover:text-green_pal screen950px:hidden'>About Us</NavLink>

          <div className='hidden screen950px:block'>
            <GiHamburgerMenu className={`w-8 h-8 cursor-pointer ${hamburger && 'hidden'} hover:text-green_pal duration-300`} onClick={() => setHamburger(true)}/>
            <MdOutlineClose className={`w-8 h-8 cursor-pointer ${!hamburger && 'hidden'} hover:text-red-500 duration-300`} onClick={() => setHamburger(false)}/>
          </div>
        </article>

        <article className={`duration-300 fixed flex justify-center items-center w-full h-auto screen250px:w-250px max-w-500px bg-white ${hamburger ? 'top-0' : '-top-500px'} z-10 shadow-md hidden screen950px:block`}>
          <div className='w-full h-auto mt-24 mb-5 noselect'>
            <NavLink to="/" activeclassname='active' className='relative flex items-center justify-center w-full h-16 font-semibold duration-300 hover:text-green_pal'>
              <p className='text-xl'>Home</p>
            </NavLink>

            <NavLink to="/portfolio" activeclassname='active' className='relative flex items-center justify-center w-full h-16 font-semibold duration-300 hover:text-green_pal'>
              <p className='text-xl'>Portfolio</p>
            </NavLink>

            <NavLink to="/news" activeclassname='active' className='relative flex items-center justify-center w-full h-16 font-semibold duration-300 hover:text-green_pal'>
              <p className='text-xl'>News</p>
            </NavLink>
      
            <NavLink to="/careers" activeclassname='active' className='relative flex items-center justify-center w-full h-16 font-semibold duration-300 hover:text-green_pal'>
              <p className='text-xl'>Careers</p>
            </NavLink>

            <NavLink to="/aboutus" activeclassname='active' className='relative flex items-center justify-center w-full h-16 font-semibold duration-300 hover:text-green_pal'>
              <p className='text-xl'>About Us</p>
            </NavLink>          
          </div>
        </article>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/careers" element={<Careers/>}/>
      </Routes>


      <footer className='flex justify-center w-full mt-32 h-300px bg-green_pal screen550px:h-auto'>
        <div className='flex justify-center h-auto w-1100px screen550px:grid'>
          <div className='flex items-end justify-center w-full h-auto mb-5 screen550px:order-last'>
            <div className='w-full h-auto px-3 screen550px:grid screen550px:justify-center screen550px:text-center'>
              <p className='text-xl text-white screen550px:text-lg'>You can reach us here</p>
              <p className='text-xl text-white screen550px:text-lg'>123-4561-897</p>

              <div className='flex w-auto h-20 mt-2 -mb-5 screen550px:justify-center'>
                <AiFillFacebook className='w-10 h-10 text-white duration-300 cursor-pointer hover:text-blue_pal'/>
                <AiFillLinkedin className='w-10 h-10 text-white duration-300 cursor-pointer hover:text-blue_pal'/>
                <MdEmail className='w-10 h-10 text-white duration-300 cursor-pointer hover:text-blue_pal'/>
              </div>

              <p className='text-sm text-white'>© 2021 Arctasoft, Inc. All rights reserved.</p>
            </div>
          </div>

          <div className='flex items-start justify-center w-full h-auto mt-10 screen550px:mb-10'>
            <div className='grid justify-end w-full h-auto px-3'>
              <img src={require("./asset/logo/arctasoft_white.png")} alt="" className='h-auto w-300px' />

              <div className='grid justify-end w-full mt-2 text-right auto screen550px:justify-center screen550px:text-center'>
                <p className='text-base font-semibold text-white duration-300 cursor-pointer hover:text-blue_pal'>About Us</p>
                <p className='text-base font-semibold text-white duration-300 cursor-pointer hover:text-blue_pal'>Privacy Policy</p>
                <p className='text-base font-semibold text-white duration-300 cursor-pointer hover:text-blue_pal'>Terms and Conditions</p>
              </div>
            </div>
          </div> 
        </div>
      </footer>
    </main>
  );
}

export default App;
