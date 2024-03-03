import React from 'react'

function Botton({btn}) {
  return (
    <div className='max630_buttonparent'>
     <button className={`max630_button dark-clr sm:rounded-r-[50px] sm:rounded-l-[20px] font-normal sm:text-[1.1vw] sm:overflow-hidden sm:w-fit sm:ml-7 bg-clr sm:px-7 sm:py-1 sm:mt-10`}>{btn.name}</button>
    </div>
  )
}

export default Botton