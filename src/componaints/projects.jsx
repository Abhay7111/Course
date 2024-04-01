import React from 'react'
import { Link } from "react-router-dom";
import Video from '../video';
import bizimg from '/biz-growth.svg'

function Projects({projectsdata}) {
  return (
    <>
     <div className={`${projectsdata.style.posi} sm:flex w-[100vw] sm:items-center max630_posi`}>
      <div className=' relative sm:w-1/2 flex flex-col items-start justify-center sm:px-10 max630_textcont'>
        <h1 className='sm:text-8xl max630_projecttitle text-zinc-100 sm:tracking-tighte leading-9 mb-3'>{projectsdata.user_data.title}</h1>
        <p className='sm:text-[0.8rem] text-[0.7rem] leading-4 sm:leading-5 line-clamp-4 text-zinc-400'>{projectsdata.user_data.dis}</p>
        <a href={projectsdata.link} className=' py-2 px-7 mt-5 rounded-md bg-green-400'>Visit this</a>
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