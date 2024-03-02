import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
     <div className=' sticky w-full h-14 flex items-center px-7 justify-between'>
          <div className="logo text-[1.8rem] font-bold w-12 break-words leading-[23px]">PLICK</div>
          <div className=' w-[70vw] flex items-center gap-8 justify-end'>
          <div className="links w-[70%]">
               <ul className='flex gap-4 justify-end text-[1vw]'>
                    <li className='hvr-clr font-light'><Link to="/">Home</Link></li>
                    <li><Link to="Aboutus"> About us</Link></li>
                    <li className='hvr-clr font-light'><Link to="/Courses">Courses</Link></li>
                    <li><Link to="/Blog">Blog</Link></li>
                    <li><Link to="/Page">Page</Link></li>
               </ul>
          </div>
          <Link to="./Help">
          <button className='dark-clr py-1 px-3 text-[1.1vw] text-center bg-clr rounded-xl'>HELP</button></Link>
          </div>
     </div>
    </>
  )
}

export default Nav