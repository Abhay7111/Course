import React from 'react'

function Botton({btn}) {
  return (
    <div>
     <button className={`dark-clr rounded-r-[50px] rounded-l-[20px] font-normal text-[1.1vw] overflow-hidden w-fit ml-7 bg-clr px-7 py-1 mt-10`}>{btn.name}</button>
    </div>
  )
}

export default Botton