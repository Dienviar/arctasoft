import React from 'react'
import { MdDesignServices } from 'react-icons/md'
import { HiDesktopComputer } from 'react-icons/hi'
import { BiBuilding } from 'react-icons/bi'
import { GoDeviceMobile } from 'react-icons/go'

const Whatweoffer = () => {
  return (
    <article className='w-full h-auto mt-28 bg-green_pal flex justify-center'>
        <div className='w-1100px h-auto screen1160px:w-full'>
            <div className='w-full h-20 flex items-center px-5 my-10 screen900px:justify-center screen550px:my-5'>
                <p className='text-5xl text-white font-bold screen550px:text-3xl'>What we offer</p>
            </div>

            <div className='w-full h-auto flex flex-wrap'>
                <div className='w-400px h-auto m-5 screen900px:w-full'>
                    <div className='w-full h-20 flex items-center screen550px:h-16'>
                        <div className='w-20 h-full bg-dark_green_pal screen550px:w-16 rounded-xl'>
                            <MdDesignServices className='text-white w-full h-full p-2'/>
                        </div>

                        <div className='w-auto h-full flex items-center'>
                            <p className='px-3 text-2xl font-bold text-white screen550px:text-xl'>UI/UX Design</p>
                        </div>
                    </div>

                    <div className='w-full h-auto mt-5 pb-10'>
                        <p className='text-xl text-white screen550px:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lorem nec eu, id at vestibulum tellus sit. Aliquet sagittis morbi facilisis tristique laoreet nisi, molestie. Malesuada quis vel enim, pulvinar.</p>
                    </div>
                </div>

                <div className='w-400px h-auto m-5 screen900px:w-full'>
                    <div className='w-full h-20 flex items-center screen550px:h-16'>
                        <div className='w-20 h-full bg-dark_green_pal screen550px:w-16 rounded-xl'>
                            <HiDesktopComputer className='text-white w-full h-full p-2'/>
                        </div>
                        <div className='w-auto h-full flex items-center'>
                            <p className='px-3 text-2xl font-bold text-white screen550px:text-xl'>Web Development</p>
                        </div>
                    </div>

                    <div className='w-full h-auto mt-5 pb-10'>
                        <p className='text-xl text-white screen550px:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lorem nec eu, id at vestibulum tellus sit. Aliquet sagittis morbi facilisis tristique laoreet nisi, molestie. Malesuada quis vel enim, pulvinar.</p>
                    </div>                  
                </div>

                <div className='w-400px h-auto m-5 screen900px:w-full'>
                    <div className='w-full h-20 flex items-center screen550px:h-16'>
                        <div className='w-20 h-full bg-dark_green_pal screen550px:w-16 rounded-xl'>
                            <BiBuilding className='text-white w-full h-full p-2'/>
                        </div>
                        <div className='w-auto h-full flex items-center'>
                            <p className='px-3 text-2xl font-bold text-white screen550px:text-xl'>Enterprise Software Development</p>
                        </div>
                    </div>

                    <div className='w-full h-auto mt-5 pb-10'>
                        <p className='text-xl text-white screen550px:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lorem nec eu, id at vestibulum tellus sit. Aliquet sagittis morbi facilisis tristique laoreet nisi, molestie. Malesuada quis vel enim, pulvinar.</p>
                    </div>
                </div>

                <div className='w-400px h-auto m-5 screen900px:w-full'>
                    <div className='w-full h-20 flex items-center screen550px:h-16'>
                        <div className='w-20 h-full bg-dark_green_pal screen550px:w-16 rounded-xl'>
                            <GoDeviceMobile className='text-white w-full h-full p-3'/>
                        </div>
                        <div className='w-auto h-full flex items-center'>
                            <p className='px-3 text-2xl font-bold text-white screen550px:text-xl'>Mobile Application</p>
                        </div>
                    </div>

                    <div className='w-full h-auto mt-5 pb-10'>
                        <p className='text-xl text-white screen550px:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lorem nec eu, id at vestibulum tellus sit. Aliquet sagittis morbi facilisis tristique laoreet nisi, molestie. Malesuada quis vel enim, pulvinar.</p>
                    </div>                
                </div>
            </div>


            <div className='-mt-780px w-auto h-auto block float-right screen900px:hidden -z-50'>
                <div className='rotated-text'>W</div>
                <div className='rotated-text'>h</div>
                <div className='rotated-text -mt-5'>a</div>
                <div className='rotated-text -mt-6'>t</div>
                <div className='rotated-text -mt-5'></div>
                <div className='rotated-text -mt-5'>W</div>
                <div className='rotated-text'>e</div>
                <div className='rotated-text'>O</div>
                <div className='rotated-text -mt-4'>f</div>
                <div className='rotated-text -mt-8'>f</div>
                <div className='rotated-text -mt-8'>e</div>
                <div className='rotated-text -mt-5'>r</div>
            </div>
        </div>

        {/* <div className='w-full h-auto flex justify-center'>
            <div className='w-full h-auto mt-5 flex justify-center flex-wrap screen350px:w-500px'>
                <div className='w-full h-auto screen600px:mt-16 screen600px:w-250px'>
                    <div className='w-full h-auto flex justify-center items-center'>
                        <div className='w-32 h-32 bg-red-500'></div>
                    </div>

                    <div className='w-full h-auto flex justify-center items-center text-center px-5'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>  
                
                <div className='w-full h-auto mt-16 screen600px:w-250px'>
                    <div className='w-full h-auto flex justify-center items-center'>
                        <div className='w-32 h-32 bg-red-500'></div>
                    </div>

                    <div className='w-full h-auto flex justify-center items-center text-center px-5'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>  

                <div className='w-full h-auto mt-16 screen600px:w-250px'>
                    <div className='w-full h-auto flex justify-center items-center'>
                        <div className='w-32 h-32 bg-red-500'></div>
                    </div>

                    <div className='w-full h-auto flex justify-center items-center text-center px-5'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>  

                <div className='w-full h-auto mt-16 screen600px:w-250px'>
                    <div className='w-full h-auto flex justify-center items-center'>
                        <div className='w-32 h-32 bg-red-500'></div>
                    </div>

                    <div className='w-full h-auto flex justify-center items-center text-center px-5'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>  
            </div>
        </div> */}
    </article>
  )
}

export default Whatweoffer