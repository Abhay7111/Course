import React from 'react'
import { Link } from "react-router-dom";
import Video from '../video';
import bizimg from '/biz-growth.svg'

function Projects({projectsdata}) {
  return (
    <>
     <div className={`${projectsdata.style.posi} sm:mt-20 sm:flex w-[100vw] sm:items-center max630_posi`}>
      <div className=' relative sm:w-1/2 flex flex-col items-start justify-center sm:px-10 max630_textcont'>
        <h1 className='sm:text-6xl sm:font-semibold max630_projecttitle text-zinc-100 sm:tracking-tighte sm:leading-[3.6rem] mb-3'>{projectsdata.user_data.title}</h1>
        <p className='sm:text-[0.8rem] text-[0.7rem] leading-4 sm:leading-5 line-clamp-4 text-zinc-400'>{projectsdata.user_data.dis}</p>
        <a href={projectsdata.link} className=' overflow-hidden z-20 mt-5 relative rounded-md bg-green-400 after:hover:top-[-50%] after:hover:left-[-50%] after:hover:w-[200%] after:hover:h-[600%] after:hover:rounded-full after:absolute transition_abhay after:size-5 after:top-full after:left-0 after:z-0 after:rounded-full after:bg-zinc-700'><p className='relative text-white z-10 before:w-3 before:h-3 before:absolute before:rounded-full before:top-10 before:hover:top-[-20vh] before:hover:size-40 before:right-10 transition_before py-2 px-7 w-full h-full before:bg-[#ff8c4a]'>Visit this</p></a>
      </div>
      <div className='sm:w-1/2 relative max630_mainimgrapper'>
        <img className='sm:w-full max630_projectimage' src={projectsdata.image} />
        <a className={`absolute sm:top-2 -top-3 ${projectsdata.style.btn_posi}`} href={projectsdata.link}><i class={`${projectsdata.icon}`}></i></a>
      </div>
     </div>
    </>
  )
}
export default Projects