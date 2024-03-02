import React from 'react'

function Links({links}) {
  return (
    <div className='hvr_bg z-0 relative'>
     <div className='maindv_1 z-10 border-t-[1px] items-center justify-between border-b-[1px] py-3 px-3 flex gap-2 relative '>
     <div className='ml-2 scale-[1.5] z-10'>{links.icon.numbering}</div>
     <div className=' px-3 font-normal text-start tracking-tighter w-11/12 text-3xl z-10'>{links.name}</div>
     <div className='mr-3 scale-[1.5] z-10'><a href={links.url} target='blank'>{links.icon.goto}</a></div>
    </div>
    </div>
  )
}

export default Links