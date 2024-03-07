import React from 'react'
import { Link } from 'react-router-dom'

function Teacherspage({teacher}) {
  return (
    <div className='max630_teachersscrollsnap bg-red-400'>
     <div className='sm:w-44 sm:h-44 max630_teacherspage rounded-full flex items-center justify-center border-[3px] shadow-[#F870C2] shadow-lg'><div className='w-[90%] h-[90%] bg-[#F870C2] rounded-full overflow-hidden'><Link to={teacher.links.goto}><img className=' w-full h-full object-cover' src={teacher.links.profile} /></Link></div></div>
     <div className='sm:w-44 flex items-center justify-center mt-4 sm:text-nowrap sm:overflow-hidden max630_teachersname'>{teacher.name}</div>
     <div className='text-[80%] w-full text-center opacity-60 max630_teachercourses'>{teacher.courses}</div>
    </div>
  )
}

export default Teacherspage