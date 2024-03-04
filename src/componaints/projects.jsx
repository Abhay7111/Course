import React from 'react'
import { Link } from "react-router-dom";
import Video from '../video';

function Projects({projectsdata}) {
  return (
    <>
     <div className=' sm:w-1/3 h-fit overflow-hidden rounded-2xl max630_projectimage bg-green-400 relative'>
          <div className='w-full max630_projectsimage '><img className='w-full' src={projectsdata.image}/></div>
          <div className=' absolute top-0 left-0 w-full h-full max630_bg_zinc'>
               <Link to="/Projects"><p className=' absolute top-1 right-2'>{projectsdata.icon}</p></Link>
               <h1 className='ml-4 mt-1'>{projectsdata.project_name}</h1>
          </div>
     </div>
    </>
  )
}
export default Projects