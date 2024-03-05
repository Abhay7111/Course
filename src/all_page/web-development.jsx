import React from "react";

function Course_page({ Coursesdata }) {
  return (
    <>
      <div className=" relative sm:w-[31%] bg-clr2 px-2 pt-2 pb-2 rounded-xl overflow-hidden">
        <img src={Coursesdata.insrtructor.thumbnail} className="w-full rounded min-h-6" />
        <div className=" flex w-full justify-between py-2 px-2">
          <h2 className=" text-[1.2rem] text-zinc-700 font-medium tracking-wide">{Coursesdata.insrtructor.courses.title}</h2>
          <img src={Coursesdata.insrtructor.profile} className="w-10 h-10 rounded-full object-cover"/>
        </div>
        <div className="px-2"><p className="text-[0.8rem] text-zinc-700 leading-4 line-clamp-4">{Coursesdata.insrtructor.dec}</p></div>
        <div className="px-2">
          <p className="text-[0.8rem] flex flex-wrap gap-2 text-zinc-800 w-fit px-2 py-2 leading-none">
          <span className="text-zinc-800 cursor-pointer">{Coursesdata.insrtructor.courses.attributes._1}</span> 
          <span className="text-zinc-800 cursor-pointer">{Coursesdata.insrtructor.courses.attributes._2}</span>
          <span className="text-zinc-800 cursor-pointer">{Coursesdata.insrtructor.courses.attributes._3}</span>
          <span className="text-zinc-800 cursor-pointer">{Coursesdata.insrtructor.courses.attributes._4}</span>
          <span className="text-zinc-800 cursor-pointer">{Coursesdata.insrtructor.courses.attributes._5}</span>
          <span className="text-zinc-800 cursor-pointer">{Coursesdata.insrtructor.courses.attributes._6}</span>
          <span className="text-zinc-800 cursor-pointer">{Coursesdata.insrtructor.courses.attributes._7}</span>
          <span className="cursor-pointer hover:">{Coursesdata.insrtructor.links.icon.instagram}</span>
          <span className="cursor-pointer hover:">{Coursesdata.insrtructor.links.icon.youtube}</span>
          <span className="cursor-pointer hover:">{Coursesdata.insrtructor.links.icon.facebook}</span>
          <span className="cursor-pointer hover:">{Coursesdata.insrtructor.links.icon.linkedin}</span>
          </p>
          <div className="w-full flex mt-2 px-2 justify-between items-center h-10 bg-green-700 rounded-lg">
            <p className=" text-[1.1rem]">Price</p>
            <h1 className=" text-[2rem] font-semibold">₹{Coursesdata.insrtructor.price}</h1>
          </div>
        </div>
        <div className="absolute bg-clr px-3 top-2 left-2 rounded-sm z-50">{Coursesdata.insrtructor.courses.teaching_type}</div>
        <div className="absolute bg-clr px-3 top-2 right-2 rounded-sm z-50">{Coursesdata.insrtructor.overview}</div>
      </div>
    </>
  );
}

export default Course_page;
