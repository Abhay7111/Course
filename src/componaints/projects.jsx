import React from 'react'
import { Link } from "react-router-dom";
import Video from '../video';

function Projects() {
  return (
    <div className=' w-full h-[70vh] mt-10 flex items-center flex-col justify-center'>
     <div className=' w-full h-96 flex items-center justify-center'>
          <Link className='w-[25%] h-96' to="./Projects">
          <div className='w-full h-full rounded-xl scale-[0.8] overflow-hidden relative left-7 top-5 object-top'>
               <img className='w-full h-full object-cover z-0 object-top' src="https://cdn.dribbble.com/userupload/7948637/file/original-3fb2c301c68de8db8664f58db5142acb.png?resize=1024x768"/>
               <div className=' w-full h-full absolute top-0 left-0 z-10'>
                    <div className=' w-full h-1/2 bg-gradient-to-t from-zinc-900/30 to-zinc-900/60'>
                         <a href="#" target='blank' className='absolute right-2 top-1 scale-[1.4] opacity-85'><i class="ri-logout-circle-r-fill"></i></a>
                    </div>
                    <div className=' w-full h-1/2 flex items-center justify-center bg-gradient-to-b from-zinc-900/30 to-zinc-900'>
                         <h3 className=' w-full text-wrap text-center font-medium text-[2.8rem] leading-none tracking-tighter'>Lets clone this <br /> UI-Designe</h3>
                    </div>
               </div>
          </div></Link>
          <Link className='w-[25%] h-full ' to="./Projects">
          <div className='w-full h-full rounded-xl overflow-hidden relative'>
               <img className='w-full h-full object-cover z-0 object-top' src="https://i.pinimg.com/564x/23/8d/84/238d8472957ba49839e1f2cf29e8a31a.jpg"/>
               <div className=' w-full h-full absolute top-0 left-0 z-10'>
                    <div className=' w-full h-1/2 bg-gradient-to-t from-zinc-900/30 to-zinc-900/60'>
                         <a href="#" target='blank' className='absolute right-2 top-1 scale-[1.4] opacity-85'><i class="ri-logout-circle-r-fill"></i></a>
                    </div>
                    <div className=' w-full h-1/2 flex items-center justify-center bg-gradient-to-b from-zinc-900/30 to-zinc-900'>
                    <h3 className=' w-full text-wrap text-center font-medium text-[2.8rem] leading-none tracking-tighter'>Lets clone this <br /> UI-Designe</h3>
                    </div>
               </div>
          </div></Link>
          <Link className='w-[25%] h-full' to="./Projects">
          <div className='w-full h-full rounded-xl scale-[0.8] overflow-hidden relative -left-7 top-5 object-top'>
               <img className='w-full h-full object-cover z-0 object-top' src="https://cdn.dribbble.com/userupload/10696715/file/original-8c88c4f161cf1a1419c1053af3fb37cd.png?resize=1024x768"/>
               <div className=' w-full h-full absolute top-0 left-0 z-10'>
                    <div className=' w-full h-1/2 bg-gradient-to-t from-zinc-900/30 to-zinc-900/60'>
                         <a href="#" target='blank' className='absolute right-2 top-1 scale-[1.4] opacity-85'><i class="ri-logout-circle-r-fill"></i></a>
                    </div>
                    <div className=' w-full h-1/2 flex items-center justify-center bg-gradient-to-b from-zinc-900/30 to-zinc-900'>
                    <h3 className=' w-full text-wrap text-center font-medium text-[2.8rem] leading-none tracking-tighter'>Lets clone this <br /> UI-Designe</h3>
                    </div>
               </div>
          </div></Link>
     </div>
    </div>
  )
}
export default Projects