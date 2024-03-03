import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
     <div className='main_nav sticky w-full h-14 flex items-center px-7 justify-between sm:bg-yellow-400/0 md:bg-red-400 md:px-4 lg:bg-zinc-700/0'>
          <div className="logo max630_logo text-[1.8rem] font-bold w-12 break-words leading-[23px] sm:scale-[1.2] sm:mt-3">PLICK</div>
          <div className=' w-[70vw] max630_hide flex items-center gap-8 justify-end sm:gap-4 md:gap-4 lg:gap-8'>
          <div className="links w-[70%]">
               <ul className='flex gap-4 justify-end text-[1vw] sm:text-base sm:gap-2 md:text-base md:gap-2 lg:gap-4 lg:text-[1vw]'>
                    <li className='hvr-clr font-light '><Link to="/">Home</Link></li>
                    <li><Link to="Aboutus"> About us</Link></li>
                    <li className='hvr-clr font-light'><Link to="/Courses">Courses</Link></li>
                    <li><Link to="/Blog">Blog</Link></li>
                    <li><Link to="/Page">Page</Link></li>
               </ul>
          </div>
          <Link to="./Help">
          <button className='dark-clr py-1 px-3 text-[1.1vw] text-center bg-clr rounded-xl md:text-lg lg:text-[1.1vw]'>HELP</button></Link>
          </div>
     </div>
    </>
  )
}

export default Nav