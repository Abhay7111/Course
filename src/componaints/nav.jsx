import React from 'react'
import { Link } from "react-router-dom";
import Features from './features';

function Nav() {
  return (
    <div>
    <div className=' max630_bgclr absolute top-0 left-0 h-screen sm:hidden sm:z-10'></div>
     <div className='main_nav w-full h-14 flex items-center px-7 justify-between sm:bg-yellow-400/0 md:bg-red-400 md:px-4 lg:bg-zinc-700/0'>
          <div className="sm:logo max630_logo text-[1.8rem] font-bold w-12 break-words leading-[23px] sm:scale-[1.2] sm:mt-3">PLICK</div>
          <div className=' sm:w-[70vw] max630_hide sm:flex items-center gap-8 justify-end sm:gap-4 md:gap-4 lg:gap-8'>
          <div className="links sm:w-[70%] max630_links">
               <ul className='max630_ul sm:flex sm:gap-4 justify-end text-[1vw] sm:text-base md:text-base md:gap-2 lg:gap-4 lg:text-[1vw]'>
                    <li className='hvr-clr font-light '><Link to="/">Home</Link></li>
                    <li><Link to="Aboutus"> About us</Link></li>
                    <li className='hvr-clr font-light'><Link to="/Courses">Courses</Link></li>
                    <li><Link to="/Blog">Blog</Link></li>
                    <li><Link to="/Page">Page</Link></li>
               </ul>
          </div>
          <Link to="./Help">
          <button className='max630_helpdv dark-clr py-1 px-3 text-[1.1vw] text-center bg-clr rounded-xl md:text-lg lg:text-[1.1vw]'>HELP</button></Link>
          </div>
          <div className=' sm:hidden menu_bar3line'>
               <i class="ri-close-fill open_icon"></i>
               <i class="ri-menu-4-line close_icon"></i>
          </div>
     </div>
     <Features/>
    </div>
  )
}

export default Nav