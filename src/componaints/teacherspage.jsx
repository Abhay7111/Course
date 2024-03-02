import React from 'react'

function Teacherspage({teacher}) {
  return (
    <div>
     <div className='w-44 h-44 rounded-full flex items-center justify-center border-[3px] shadow-[#F870C2] shadow-lg'><div className='w-[90%] h-[90%] bg-[#F870C2] rounded-full overflow-hidden'><img className=' w-full h-full object-cover' src={teacher.links.profile} /></div></div>
     <div className='w-44 flex items-center justify-center mt-4 text-nowrap overflow-hidden'>{teacher.name}</div>
     <div className='text-[80%] w-full text-center opacity-60'>{teacher.courses}</div>
    </div>
  )
}

export default Teacherspage