import React from 'react'
import Botton from './button'
import Photos from './photos'

function Home({homepage}) {
  const btn = [
    {
      name:'Contact us',
      style:{
        border:`20px`,
      },
    },
    {
      name:'Start Now!',
    },
  ]
  return (
    <>
      <div className="main w-full h-[98vh]  flex">
        <div className="left w-1/2 h-screen">
          <div className="top w-full h-1/2 flex items-center justify-center border-b-[1px] border-zinc-500">
            <h1 className='text-[10vw] leading-[17vh] w-fit h-fit text-center font-[500]'>Mastring the web</h1>
          </div>
          <div className="bottom w-full h-1/2">
            <div className='w-full h-20 pt-4 px-4 overflow-hidden'><p className='text-[1.2vw] tracking-tighte leading-none'>{homepage.dis}</p></div>
            <div className=' flex justify-between w-[400px] ml-14'>
              <div className='flex'>
              {btn.map((item, index)=>(
                <Botton btn={item}/>
              ))}
            </div>
            <div className='rounded-l-[20px] overflow-hidden w-fit mr-7 bg-clr mt-4'>
              <button></button>
            </div>
            </div>
          </div>
        </div>
        <div className="right w-1/2 h-full overflow-hidden">
          <Photos/>
        </div>
      </div>
    </>
  )
}

export default Home